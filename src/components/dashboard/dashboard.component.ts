import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { User } from '../../app.component';
import { OperationalDashboardComponent } from '../operational-dashboard/operational-dashboard.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TacticalDashboardComponent } from '../tactical-dashboard/tactical-dashboard.component';

export interface ManagedAccount {
  id: number;
  name: string;
  username: string;
  password?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OperationalDashboardComponent, TacticalDashboardComponent, ReactiveFormsModule, CommonModule],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class DashboardComponent {
  user = input.required<User>();
  logout = output<void>();

  // State for the current view in the main panel
  currentView = signal<'welcome' | 'accountManagement' | 'operationalDashboard' | 'tacticalDashboard'>('welcome');
  deviceView = signal<'desktop' | 'tablet' | 'mobile'>('desktop');

  // State for accounts
  stationAccounts = signal<ManagedAccount[]>([]);
  chqAccounts = signal<ManagedAccount[]>([]);
  cpsmuAccounts = signal<ManagedAccount[]>([]);

  // Modal State
  isModalOpen = signal(false);
  modalMode = signal<'create' | 'view' | 'edit'>('create');
  currentAccountForEdit = signal<ManagedAccount | null>(null);
  currentAccountType = signal<'station' | 'chq' | 'cpsmu' | null>(null);

  // FIX: Explicitly type FormBuilder as it was not being correctly inferred.
  private fb: FormBuilder = inject(FormBuilder);
  accountForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: [''],
  });

  constructor() {
    // Set initial device view
    this.onResize();

    // Initialize with dummy data
    this.stationAccounts.set(Array.from({ length: 11 }, (_, i) => {
      const stationNumber = i + 1;
      return {
        id: Date.now() + i,
        name: stationNumber === 11 ? 'cmfc' : `Station ${stationNumber}`,
        username: `station_user_${stationNumber}`,
        password: `station_pass_${stationNumber}`
      };
    }));
    this.chqAccounts.set(Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + 11 + i,
      name: `CHQ Account ${i + 1}`,
      username: `chq_user_${i+1}`,
      password: `chq_pass_${i+1}`
    })));
    this.cpsmuAccounts.set([
      { id: Date.now() + 20, name: 'CPSMU Admin 1', username: 'cpsmu_admin1', password: 'cpsmu_password1' },
      { id: Date.now() + 21, name: 'CPSMU Admin 2', username: 'cpsmu_admin2', password: 'cpsmu_password2' }
    ]);
  }

  onResize(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.deviceView.set('mobile');
    } else if (width < 1024) {
      this.deviceView.set('tablet');
    } else {
      this.deviceView.set('desktop');
    }
  }

  onLogout(): void {
    this.logout.emit();
  }
  
  showWelcome(): void {
    this.currentView.set('welcome');
  }

  showAccountManagement(): void {
    this.currentView.set('accountManagement');
  }

  showOperationalDashboard(): void {
    this.currentView.set('operationalDashboard');
  }

  showTacticalDashboard(): void {
    this.currentView.set('tacticalDashboard');
  }

  // Modal methods
  openModal(mode: 'create' | 'view' | 'edit', type: 'station' | 'chq' | 'cpsmu', account?: ManagedAccount): void {
    this.modalMode.set(mode);
    this.currentAccountType.set(type);
    
    const passwordControl = this.accountForm.get('password');
    passwordControl?.clearValidators();

    if (mode === 'create') {
      this.accountForm.reset({ id: 0, name: 'Sample Account Name', username: 'station1', password: 'station1' });
      passwordControl?.setValidators([Validators.required, Validators.minLength(6)]);
    } else if (account) {
      this.currentAccountForEdit.set(account);
      this.accountForm.patchValue(account);
      if (mode === 'edit') {
        passwordControl?.setValidators([Validators.minLength(6)]);
        this.accountForm.get('password')?.setValue('');
      }
    }

    passwordControl?.updateValueAndValidity();
    
    if (mode === 'view') {
      this.accountForm.disable();
    } else {
      this.accountForm.enable();
    }
    this.isModalOpen.set(true);
  }

  switchToEditMode(): void {
    this.modalMode.set('edit');
    this.accountForm.enable();
    const passwordControl = this.accountForm.get('password');
    passwordControl?.setValidators([Validators.minLength(6)]);
    passwordControl?.setValue('');
    passwordControl?.updateValueAndValidity();
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.currentAccountForEdit.set(null);
    this.currentAccountType.set(null);
    this.accountForm.reset();
  }

  saveAccount(): void {
    if (this.accountForm.invalid) {
      return;
    }

    const formValue = this.accountForm.getRawValue();
    const type = this.currentAccountType();
    
    if (this.modalMode() === 'create') {
        const newAccount: ManagedAccount = {
            id: Date.now(),
            name: formValue.name!,
            username: formValue.username!,
            password: formValue.password!,
        };
        if (type === 'station') this.stationAccounts.update(accs => [...accs, newAccount]);
        if (type === 'chq') this.chqAccounts.update(accs => [...accs, newAccount]);
        if (type === 'cpsmu') this.cpsmuAccounts.update(accs => [...accs, newAccount]);
    } else { // edit mode
        const originalAccount = this.currentAccountForEdit();
        if (!originalAccount) return;

        const updatedAccount: ManagedAccount = {
            ...originalAccount,
            name: formValue.name!,
            username: formValue.username!,
            password: (formValue.password && formValue.password.trim() !== '') ? formValue.password : originalAccount.password,
        };
        
        if (type === 'station') {
            this.stationAccounts.update(accs => accs.map(a => a.id === updatedAccount.id ? updatedAccount : a));
        }
        if (type === 'chq') {
            this.chqAccounts.update(accs => accs.map(a => a.id === updatedAccount.id ? updatedAccount : a));
        }
        if (type === 'cpsmu') {
            this.cpsmuAccounts.update(accs => accs.map(a => a.id === updatedAccount.id ? updatedAccount : a));
        }
    }

    this.closeModal();
  }

  // --- Refactored CRUD Methods ---
  // Station CRUD
  createStationAccount(): void { this.openModal('create', 'station'); }
  viewStationAccount(account: ManagedAccount): void { this.openModal('view', 'station', account); }
  editStationAccount(account: ManagedAccount): void { this.openModal('edit', 'station', account); }
  deleteStationAccount(account: ManagedAccount): void {
    if (confirm(`Are you sure you want to delete "${account.name}" (@${account.username})?`)) {
      this.stationAccounts.update(accounts => accounts.filter(acc => acc.id !== account.id));
    }
  }

  // CHQ CRUD
  createChqAccount(): void { this.openModal('create', 'chq'); }
  viewChqAccount(account: ManagedAccount): void { this.openModal('view', 'chq', account); }
  editChqAccount(account: ManagedAccount): void { this.openModal('edit', 'chq', account); }
  deleteChqAccount(account: ManagedAccount): void {
    if (confirm(`Are you sure you want to delete "${account.name}" (@${account.username})?`)) {
      this.chqAccounts.update(accounts => accounts.filter(acc => acc.id !== account.id));
    }
  }

  // CPSMU CRUD
  createCpsmuAccount(): void { this.openModal('create', 'cpsmu'); }
  viewCpsmuAccount(account: ManagedAccount): void { this.openModal('view', 'cpsmu', account); }
  editCpsmuAccount(account: ManagedAccount): void { this.openModal('edit', 'cpsmu', account); }
  deleteCpsmuAccount(account: ManagedAccount): void {
    if (confirm(`Are you sure you want to delete "${account.name}" (@${account.username})?`)) {
      this.cpsmuAccounts.update(accounts => accounts.filter(acc => acc.id !== account.id));
    }
  }
}