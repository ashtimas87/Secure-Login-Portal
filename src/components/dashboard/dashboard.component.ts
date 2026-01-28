import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { User } from '../../app.component';
import { OperationalDashboardComponent } from '../operational-dashboard/operational-dashboard.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TacticalDashboardComponent } from '../tactical-dashboard/tactical-dashboard.component';
import { AccountService, ManagedAccount } from '../../services/account.service';

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

  private accountService = inject(AccountService);
  private fb: FormBuilder = inject(FormBuilder);

  canManageAccounts = computed(() => this.user()?.type === 'Super Admin');

  canViewConsolidatedDashboards = computed(() => {
    const userType = this.user()?.type;
    return userType === 'Super Admin' || userType === 'CPSMU Account';
  });

  isDashboardView = computed(() => this.currentView() === 'operationalDashboard' || this.currentView() === 'tacticalDashboard');

  // State for the current view in the main panel
  currentView = signal<'welcome' | 'accountManagement' | 'operationalDashboard' | 'tacticalDashboard' | 'overview'>('welcome');
  deviceView = signal<'desktop' | 'tablet' | 'mobile'>('desktop');
  viewingUser = signal<User | null>(null);
  dashboardTitle = signal('Operational Dashboard 2025');

  // State for accounts from service
  stationAccounts = this.accountService.stationAccounts;
  chqAccounts = this.accountService.chqAccounts;
  cpsmuAccounts = this.accountService.cpsmuAccounts;

  // Modal State
  isModalOpen = signal(false);
  modalMode = signal<'create' | 'view' | 'edit'>('create');
  currentAccountForEdit = signal<ManagedAccount | null>(null);
  currentAccountType = signal<'station' | 'chq' | 'cpsmu' | null>(null);

  accountForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    username: ['', [Validators.required, Validators.email]],
    password: [''],
  });

  constructor() {
    this.onResize();
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
    this.viewingUser.set(null);
    this.currentView.set('welcome');
  }

  showAccountManagement(): void {
    if (this.canManageAccounts()) {
      this.viewingUser.set(null);
      this.currentView.set('accountManagement');
    }
  }

  showOperationalDashboard(): void {
    this.viewingUser.set(null);
    this.dashboardTitle.set('Operational Dashboard 2025');
    this.currentView.set('operationalDashboard');
  }
  
  showChqOperationalDashboard(): void {
    this.viewingUser.set(null);
    this.dashboardTitle.set('CHQ Operational Dashboard 2025');
    this.currentView.set('operationalDashboard');
  }

  showTacticalDashboard(): void {
    this.viewingUser.set(null);
    this.currentView.set('tacticalDashboard');
  }

  showOverview(): void {
    if (this.canViewConsolidatedDashboards()) {
      this.viewingUser.set(null);
      this.currentView.set('overview');
    }
  }

  viewUserDashboard(account: ManagedAccount): void {
    if (!this.canViewConsolidatedDashboards() && this.user().type !== 'Super Admin') return;
    if (!account.type) return;

    const userToView: User = {
      name: account.name,
      type: account.type,
      username: account.username,
    };
    this.viewingUser.set(userToView);
    
    if (account.type === 'Station Account') {
      this.currentView.set('tacticalDashboard');
    } else { // For CHQ accounts
      this.dashboardTitle.set('Operational Dashboard 2025');
      this.currentView.set('operationalDashboard');
    }
  }

  // Modal methods
  openModal(mode: 'create' | 'view' | 'edit', type: 'station' | 'chq' | 'cpsmu', account?: ManagedAccount): void {
    this.modalMode.set(mode);
    this.currentAccountType.set(type);
    
    const passwordControl = this.accountForm.get('password');
    passwordControl?.clearValidators();

    if (mode === 'create') {
      const typeName = type === 'station' ? 'Station' : type === 'chq' ? 'CHQ' : 'CPSMU';
      this.accountForm.reset({ id: 0, name: `New ${typeName} Account`, username: '', password: '' });
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
    if (this.accountForm.invalid || !this.canManageAccounts()) {
      return;
    }

    const formValue = this.accountForm.getRawValue();
    const type = this.currentAccountType();
    if (!type) return;

    const typeName = type === 'station' ? 'Station Account' : type === 'chq' ? 'CHQ Account' : 'CPSMU Account';

    if (this.modalMode() === 'create') {
        const newAccountData = {
            name: formValue.name!,
            username: formValue.username!,
            password: formValue.password!,
            type: typeName,
        };
        this.accountService.addAccount(type, newAccountData);
    } else { // edit mode
        const originalAccount = this.currentAccountForEdit();
        if (!originalAccount) return;

        const updatedAccount: ManagedAccount = {
            ...originalAccount,
            name: formValue.name!,
            username: formValue.username!,
            password: (formValue.password && formValue.password.trim() !== '') ? formValue.password : originalAccount.password,
        };
        
        this.accountService.updateAccount(type, updatedAccount);
    }

    this.closeModal();
  }
  
  deleteAccount(account: ManagedAccount, type: 'station' | 'chq' | 'cpsmu'): void {
    if (!this.canManageAccounts()) return;
    
    if (!confirm(`Are you sure you want to delete "${account.name}" (${account.username})?`)) {
      return;
    }
    this.accountService.deleteAccount(type, account.id);
  }
}