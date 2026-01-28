import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService, ManagedAccount } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginSuccess = output<{ name: string; type: string; }>();

  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);

  errorMessage = signal<string | null>(null);
  isLoading = signal(false);

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loginAccounts = computed(() => [
      ...this.accountService.stationAccounts(),
      ...this.accountService.chqAccounts(),
      ...this.accountService.cpsmuAccounts(),
  ]);

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage.set('Please fill in all required fields correctly.');
      return;
    }
    
    this.isLoading.set(true);
    this.errorMessage.set(null);

    setTimeout(() => {
      const { username, password } = this.loginForm.value;
      const superAdminPassword = 'Josepidal99';
      const passwordHint = '(Hint: use "Josepidal99" for admin)';

      // Super Admin Check
      if (password === superAdminPassword) {
        this.loginSuccess.emit({ name: 'Super Admin', type: 'Super Admin' });
        this.loginForm.reset({ username: '', password: '' });
        this.isLoading.set(false);
        return;
      }
      
      // Other User Accounts Check
      const userAccount = this.loginAccounts().find(
        (acc) => acc.username === username && acc.password === password
      );

      if (userAccount && userAccount.type) {
        this.loginSuccess.emit({ name: userAccount.name, type: userAccount.type });
        this.loginForm.reset({ username: '', password: '' });
      } else {
        this.errorMessage.set(`Invalid username or password. ${passwordHint}`);
      }

      this.isLoading.set(false);
    }, 1500);
  }
}
