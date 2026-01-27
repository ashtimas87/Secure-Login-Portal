import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PI_DATA, PerformanceIndicator, MonthlyAccomplishments, Activity } from './operational-dashboard.data';
import { User } from '../../app.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-operational-dashboard',
  templateUrl: './operational-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
})
export class OperationalDashboardComponent {
  user = input.required<User>();
  isSuperAdmin = computed(() => this.user().type === 'Super Admin');

  performanceIndicators = signal<PerformanceIndicator[]>([]);
  activeTab = signal(1);

  editingTitle = signal(false);
  editingActivity = signal<Activity | null>(null);
  activityForm: FormGroup;
  // FIX: Explicitly type FormBuilder as it was not being correctly inferred.
  private fb: FormBuilder = inject(FormBuilder);

  activePIData = computed(() => {
    return this.performanceIndicators().find(pi => pi.id === this.activeTab());
  });

  tableHeaders = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total'];

  constructor() {
    const initialData = this.addUniqueIdsToActivities(PI_DATA);
    this.performanceIndicators.set(this.processPiData(initialData));

    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      indicator: ['', Validators.required],
      accomplishments: this.fb.group({
        Jan: ['', Validators.required], Feb: ['', Validators.required], Mar: ['', Validators.required],
        Apr: ['', Validators.required], May: ['', Validators.required], Jun: ['', Validators.required],
        Jul: ['', Validators.required], Aug: ['', Validators.required], Sep: ['', Validators.required],
        Oct: ['', Validators.required], Nov: ['', Validators.required], Dec: ['', Validators.required]
      })
    });
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
          // FIX: Explicitly type the accumulator in reduce to prevent type inference errors.
          total = values.reduce((sum: number, current) => sum + Number(current), 0);
        } else {
          total = values.length > 0 ? values[0] as string : ''; 
        }
        
        return {
          ...activity,
          accomplishments: { ...accomplishments, Total: total }
        };
      });

      let piTotal: MonthlyAccomplishments | undefined = undefined;
      
      if (pi.id === 18 || pi.id === 20) {
          piTotal = { Jan: '100%', Feb: '100%', Mar: '100%', Apr: '100%', May: '100%', Jun: '100%', Jul: '100%', Aug: '100%', Sep: '100%', Oct: '100%', Nov: '100%', Dec: '100%', Total: '100%'};
      } else {
          const monthlyTotals: Record<keyof Omit<MonthlyAccomplishments, 'Total'>, number> = { Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0 };
          
          for (const activity of activitiesWithTotals) {
              for (const month of this.tableHeaders.slice(0, 12) as (keyof typeof monthlyTotals)[]) {
                  const value = activity.accomplishments[month];
                  if (typeof value === 'number' || !isNaN(Number(value))) {
                      monthlyTotals[month] += Number(value);
                  }
              }
          }

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
    this.editingTitle.set(false);
  }

  // --- CRUD Methods ---
  saveTitle(newTitle: string): void {
    if (!newTitle.trim()) return;
    this.performanceIndicators.update(pis => {
      return pis.map(pi => {
        if (pi.id === this.activeTab()) {
          return { ...pi, title: newTitle.trim() };
        }
        return pi;
      });
    });
    this.editingTitle.set(false);
  }

  startEdit(activity: Activity): void {
    this.editingActivity.set(activity);
    this.activityForm.patchValue(activity);
  }

  cancelEdit(): void {
    this.editingActivity.set(null);
    this.activityForm.reset();
  }

  saveEdit(): void {
    if (this.activityForm.invalid || !this.editingActivity()) return;

    const updatedActivityData = this.activityForm.getRawValue();
    const originalActivityId = this.editingActivity()!.id;

    this.performanceIndicators.update(currentPIs => {
      const pisCopy = JSON.parse(JSON.stringify(currentPIs)); 
      const piToUpdate = pisCopy.find((p: PerformanceIndicator) => p.id === this.activeTab());
      
      if (piToUpdate) {
        const activityIndex = piToUpdate.activities.findIndex((a: Activity) => a.id === originalActivityId);
        if (activityIndex > -1) {
          const originalActivity = piToUpdate.activities[activityIndex];
          piToUpdate.activities[activityIndex] = { ...originalActivity, ...updatedActivityData };
        }
      }
      return this.processPiData(pisCopy);
    });

    this.cancelEdit();
  }

  deleteActivity(activityToDelete: Activity): void {
    if (!confirm(`Are you sure you want to delete the activity "${activityToDelete.name}"?`)) return;

    this.performanceIndicators.update(currentPIs => {
       const pisCopy = JSON.parse(JSON.stringify(currentPIs));
       const piToUpdate = pisCopy.find((p: PerformanceIndicator) => p.id === this.activeTab());
       
       if (piToUpdate) {
         piToUpdate.activities = piToUpdate.activities.filter((act: Activity) => act.id !== activityToDelete.id);
       }
       return this.processPiData(pisCopy);
    });
  }
}
