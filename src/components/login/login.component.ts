import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { User } from '../../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginSuccess = output<User>();

  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);

  errorMessage = signal<string | null>(null);
  isLoading = signal(false);

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  loginAccounts = computed(() => [
      ...this.accountService.stationAccounts(),
      ...this.accountService.chqAccounts(),
      ...this.accountService.cpsmuAccounts(),
  ]);
  
  private resetFormState(): void {
    this.loginForm.reset({ username: '', password: '' });
    this.isLoading.set(false);
    this.errorMessage.set(null);
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.invalid) {
      this.errorMessage.set('Please fill in all required fields correctly.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    // Short delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, 500));

    const { username, password } = this.loginForm.value;
    const superAdminPassword = 'Josepidal99';

    let foundUser: User | undefined;

    // Check for Super Admin
    if (password === superAdminPassword && username === 'barvickrunch@gmail.com') {
      foundUser = { name: 'Super Admin', type: 'Super Admin', username: 'superadmin' };
    } else {
      // Check other user accounts
      const userAccount = this.loginAccounts().find(
        (acc) => acc.username === username && acc.password === password
      );
      if (userAccount && userAccount.type) {
        foundUser = { name: userAccount.name, type: userAccount.type, username: userAccount.username };
      }
    }
    
    if (foundUser) {
      this.loginSuccess.emit(foundUser);
      this.resetFormState();
    } else {
      this.errorMessage.set('Invalid username or password.');
      this.isLoading.set(false);
    }
  }
}