import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export interface User {
  name: string;
  type: string;
  username: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LoginComponent, DashboardComponent]
})
export class AppComponent {
  currentUser = signal<User | null>(null);

  handleLogin(user: User): void {
    this.currentUser.set(user);
  }

  handleLogout(): void {
    this.currentUser.set(null);
  }
}