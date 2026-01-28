import { ChangeDetectionStrategy, Component, computed, inject, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PI_DATA, PerformanceIndicator, MonthlyAccomplishments, Activity } from './tactical-dashboard.data';
import { User } from '../../app.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DashboardDataService } from '../../services/dashboard-data.service';

@Component({
  selector: 'app-tactical-dashboard',
  standalone: true,
  templateUrl: 'tactical-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
})
export class TacticalDashboardComponent {
  user = input.required<User>();
  sessionUser = input.required<User>();
  isReadOnly = input<boolean>(false);
  
  private dataService = inject(DashboardDataService);
  private fb: FormBuilder = inject(FormBuilder);

  isConsolidatedView = computed(() => {
    const sessionUserType = this.sessionUser().type;
    return (sessionUserType === 'Super Admin' || sessionUserType === 'CPSMU Account') && this.user().type !== 'Station Account';
  });

  canCreateActivity = computed(() => {
    if (this.isReadOnly()) {
      return false;
    }
    return this.sessionUser().type === 'Super Admin';
  });

  canManage = computed(() => {
    if (this.isReadOnly() || this.isConsolidatedView()) {
      return false;
    }
    const userType = this.user().type;
    return userType === 'Station Account';
  });

  canManageFiles = computed(() => {
    if (this.isReadOnly() || this.isConsolidatedView()) {
      return false;
    }
    const userType = this.user().type;
    return userType === 'Station Account';
  });

  performanceIndicators = signal<PerformanceIndicator[]>([]);
  activeTab = signal(1);

  editingActivity = signal<Activity | null>(null);
  activityForm: FormGroup;

  // File Modal State
  isFileModalOpen = signal(false);
  selectedFileContext = signal<{ activity: Activity; month: string } | null>(null);
  uploadedFiles = signal<Record<string, { name: string; dataUrl: string }[]>>({});

  activePIData = computed(() => {
    return this.performanceIndicators().find(pi => pi.id === this.activeTab());
  });
  
  currentFiles = computed(() => {
      const context = this.selectedFileContext();
      if (!context || !context.activity.id) return [];
      const key = `${context.activity.id}-${context.month}`;
      return this.uploadedFiles()[key] || [];
  });

  tableHeaders = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total'];

  constructor() {
    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      indicator: ['', Validators.required],
      accomplishments: this.fb.group({
        Jan: [0], Feb: [0], Mar: [0],
        Apr: [0], May: [0], Jun: [0],
        Jul: [0], Aug: [0], Sep: [0],
        Oct: [0], Nov: [0], Dec: [0]
      })
    });

    effect(() => {
      this.loadDataForUser();
    });
  }
  
  loadDataForUser(): void {
    const currentUser = this.user();
    let data: PerformanceIndicator[] | undefined;

    if (this.isConsolidatedView()) {
      data = this.dataService.getConsolidatedTacticalData();
    } else {
      data = this.dataService.getDataForUser(currentUser.username);
    }
    
    if (!data) {
      data = JSON.parse(JSON.stringify(PI_DATA));
    }
    
    const initialData = this.addUniqueIdsToActivities(data);
    this.performanceIndicators.set(this.processPiData(initialData));
  }

  private addUniqueIdsToActivities(data: PerformanceIndicator[]): PerformanceIndicator[] {
    return data.map(pi => ({
      ...pi,
      activities: pi.activities.map((activity, index) => ({
        ...activity,
        id: pi.id * 1000 + index,
      })),
    }));
  }

  private processPiData(data: PerformanceIndicator[]): PerformanceIndicator[] {
    return data.map(pi => {
      const activitiesWithTotals = pi.activities.map(activity => {
        const accomplishments = activity.accomplishments;
        const values = this.tableHeaders.slice(0, 12).map(month => accomplishments[month as keyof Omit<MonthlyAccomplishments, 'Total'>]);
        let total: string | number;

        if (values.every(v => !isNaN(Number(v)))) {
          total = values.reduce((sum: number, current) => sum + Number(current), 0);
        } else {
          total = 'N/A'; 
        }
        
        return {
          ...activity,
          accomplishments: { ...accomplishments, Total: total }
        };
      });

      let piTotal: MonthlyAccomplishments | undefined = undefined;
      
      const monthlyTotals: Record<keyof Omit<MonthlyAccomplishments, 'Total'>, number> = { Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0 };
      let hasNonNumeric = false;
      
      for (const activity of activitiesWithTotals) {
          for (const month of this.tableHeaders.slice(0, 12) as (keyof typeof monthlyTotals)[]) {
              const value = activity.accomplishments[month];
              if (typeof value === 'number' || !isNaN(Number(value))) {
                  monthlyTotals[month] += Number(value);
              } else {
                  hasNonNumeric = true;
              }
          }
      }

      if (hasNonNumeric) {
          const totalsWithMixedTypes: any = {};
          this.tableHeaders.slice(0,12).forEach(m => {
              totalsWithMixedTypes[m] = 'N/A';
          });
          totalsWithMixedTypes['Total'] = 'N/A';
          piTotal = totalsWithMixedTypes;
      } else {
          const grandTotal = Object.values(monthlyTotals).reduce((sum, monthTotal) => sum + monthTotal, 0);
          piTotal = { ...monthlyTotals, Total: grandTotal };
      }


      return {
        ...pi,
        activities: activitiesWithTotals,
        total: piTotal
      };
    });
  }

  selectTab(piNumber: number): void {
    this.activeTab.set(piNumber);
    this.cancelEdit();
  }

  // --- CRUD Methods ---
  startCreate(): void {
    if (!this.canCreateActivity()) return;
    if (this.editingActivity()) {
      this.cancelEdit();
    }

    const newActivity: Activity = {
      id: Date.now(), // Temporary ID
      name: '',
      indicator: '',
      accomplishments: { Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0 }
    };

    this.performanceIndicators.update(currentPIs => {
      const pisCopy = JSON.parse(JSON.stringify(currentPIs));
      const piToUpdate = pisCopy.find((p: PerformanceIndicator) => p.id === this.activeTab());
      if (piToUpdate) {
        piToUpdate.activities.push(newActivity);
      }
      return pisCopy;
    });

    this.editingActivity.set(newActivity);
    this.activityForm.reset({
      name: '',
      indicator: '',
      accomplishments: { Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0 }
    });
    this.activityForm.enable();
  }

  startEdit(activity: Activity): void {
    if (!this.canManage()) return;
    if (this.editingActivity()) {
      this.cancelEdit();
    }
    this.editingActivity.set(activity);
    this.activityForm.patchValue(activity);
    this.activityForm.enable();
  }

  cancelEdit(): void {
    const activityBeingEdited = this.editingActivity();
    if (activityBeingEdited && activityBeingEdited.id > 100000) { 
      this.performanceIndicators.update(currentPIs => {
        const pisCopy = JSON.parse(JSON.stringify(currentPIs));
        const piToUpdate = pisCopy.find((p: PerformanceIndicator) => p.id === this.activeTab());
        if (piToUpdate) {
          piToUpdate.activities = piToUpdate.activities.filter((a: Activity) => a.id !== activityBeingEdited.id);
        }
        return pisCopy;
      });
    }
    this.editingActivity.set(null);
    this.activityForm.reset();
  }

  saveEdit(): void {
    if (this.activityForm.invalid || !this.editingActivity() || !this.canManage()) return;

    const updatedActivityData = this.activityForm.getRawValue();
    const originalActivityId = this.editingActivity()!.id;

    this.performanceIndicators.update(currentPIs => {
      const pisCopy = JSON.parse(JSON.stringify(currentPIs)); 
      const piToUpdate = pisCopy.find((p: PerformanceIndicator) => p.id === this.activeTab());
      
      if (piToUpdate) {
        const activityIndex = piToUpdate.activities.findIndex((a: Activity) => a.id === originalActivityId);
        if (activityIndex > -1) {
          const originalActivity = piToUpdate.activities[activityIndex];
          const finalId = originalActivity.id > 100000 ? (piToUpdate.id * 1000 + piToUpdate.activities.length) : originalActivity.id; 
          piToUpdate.activities[activityIndex] = { ...originalActivity, ...updatedActivityData, id: finalId };
        }
      }
      const processedData = this.processPiData(pisCopy);
      if (this.canManage()) {
        this.dataService.updateDataForUser(this.user().username, processedData);
      }
      return processedData;
    });

    this.cancelEdit();
  }

  deleteActivity(activityToDelete: Activity): void {
    if (!this.canManage() || !confirm(`Are you sure you want to delete the activity "${activityToDelete.name}"?`)) return;

    this.performanceIndicators.update(currentPIs => {
       const pisCopy = JSON.parse(JSON.stringify(currentPIs));
       const piToUpdate = pisCopy.find((p: PerformanceIndicator) => p.id === this.activeTab());
       
       if (piToUpdate) {
         piToUpdate.activities = piToUpdate.activities.filter((act: Activity) => act.id !== activityToDelete.id);
       }
       const processedData = this.processPiData(pisCopy);
       if (this.canManage()) {
        this.dataService.updateDataForUser(this.user().username, processedData);
       }
       return processedData;
    });
  }

  // --- File Management Methods ---
  openFileUploadModal(activity: Activity, month: string): void {
    this.selectedFileContext.set({ activity, month });
    this.isFileModalOpen.set(true);
  }

  closeFileModal(): void {
    this.isFileModalOpen.set(false);
    this.selectedFileContext.set(null);
  }

  handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const files = Array.from(input.files);
    const context = this.selectedFileContext();
    if (!context || !context.activity.id) {
      return;
    }

    const key = `${context.activity.id}-${context.month}`;

    const filesToAdd: { name: string, dataUrl: string }[] = [];
    let filesProcessed = 0;

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        filesToAdd.push({ name: file.name, dataUrl: reader.result as string });
        filesProcessed++;

        if (filesProcessed === files.length) {
          // All files are read, now update the signal once.
          let newFileCount = 0;
          this.uploadedFiles.update(currentFiles => {
            const newFiles = { ...currentFiles };
            const existing = newFiles[key] || [];
            
            // Filter out duplicates
            const uniqueNewFiles = filesToAdd.filter(newFile => !existing.some(f => f.name === newFile.name));

            if(uniqueNewFiles.length > 0) {
                newFiles[key] = [...existing, ...uniqueNewFiles];
            }
            
            newFileCount = newFiles[key]?.length || 0;
            return newFiles;
          });
          this.updateAccomplishmentWithFileCount(context.activity, context.month, newFileCount);
        }
      };
      reader.readAsDataURL(file);
    }
    
    input.value = '';
  }

  deleteFile(fileNameToDelete: string): void {
    const context = this.selectedFileContext();
    if (!context || !context.activity.id) {
      return;
    }
    if (!confirm(`Are you sure you want to delete the file "${fileNameToDelete}"?`)) {
      return;
    }

    const key = `${context.activity.id}-${context.month}`;
    
    let newFileCount = 0;
    this.uploadedFiles.update(currentFiles => {
      const newFiles = { ...currentFiles };
      if (newFiles[key]) {
        newFiles[key] = newFiles[key].filter(f => f.name !== fileNameToDelete);
        newFileCount = newFiles[key].length;
      }
      return newFiles;
    });

    this.updateAccomplishmentWithFileCount(context.activity, context.month, newFileCount);
  }
  
  private updateAccomplishmentWithFileCount(activityToUpdate: Activity, month: string, count: number): void {
    if (!this.canManageFiles() || !activityToUpdate.id) return;

    this.performanceIndicators.update(currentPIs => {
      const pisCopy = JSON.parse(JSON.stringify(currentPIs));
      
      for (const pi of pisCopy) {
        const activityIndex = pi.activities.findIndex((a: Activity) => a.id === activityToUpdate.id);
        if (activityIndex > -1) {
          const monthKey = month as keyof MonthlyAccomplishments;
          (pi.activities[activityIndex].accomplishments as any)[monthKey] = count;
          break; 
        }
      }

      const processedData = this.processPiData(pisCopy);
      this.dataService.updateDataForUser(this.user().username, processedData);
      return processedData;
    });

    if (this.editingActivity()?.id === activityToUpdate.id) {
      this.activityForm.get('accomplishments')?.get(month)?.setValue(count, { emitEvent: false });
    }
  }
}