import { Injectable, signal } from '@angular/core';

export interface ManagedAccount {
  id: number;
  name: string;
  username: string;
  password?: string;
  type?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  stationAccounts = signal<ManagedAccount[]>([]);
  chqAccounts = signal<ManagedAccount[]>([]);
  cpsmuAccounts = signal<ManagedAccount[]>([]);

  constructor() {
    this.initializeAccounts();
  }

  private initializeAccounts(): void {
    // Initialize with dummy data
    this.stationAccounts.set(Array.from({ length: 11 }, (_, i) => {
      const stationNumber = i + 1;
      return {
        id: Date.now() + i,
        name: stationNumber === 11 ? 'cmfc' : `Station ${stationNumber}`,
        username: `station_user_${stationNumber}`,
        password: `station_pass_${stationNumber}`,
        type: 'Station Account'
      };
    }));
    this.chqAccounts.set(Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + 11 + i,
      name: `CHQ Account ${i + 1}`,
      username: `chq_user_${i+1}`,
      password: `chq_pass_${i+1}`,
      type: 'CHQ Account'
    })));
    this.cpsmuAccounts.set([
      { id: Date.now() + 20, name: 'CPSMU Admin 1', username: 'cpsmu_admin1', password: 'cpsmu_password1', type: 'CPSMU Account' },
      { id: Date.now() + 21, name: 'CPSMU Admin 2', username: 'cpsmu_admin2', password: 'cpsmu_password2', type: 'CPSMU Account' }
    ]);
  }

  private getAccountListSignal(type: 'station' | 'chq' | 'cpsmu') {
    switch (type) {
      case 'station': return this.stationAccounts;
      case 'chq': return this.chqAccounts;
      case 'cpsmu': return this.cpsmuAccounts;
    }
  }

  addAccount(type: 'station' | 'chq' | 'cpsmu', accountData: Omit<ManagedAccount, 'id'>): void {
    const newAccount: ManagedAccount = {
      ...accountData,
      id: Date.now(),
    };
    const accountList = this.getAccountListSignal(type);
    accountList.update(accounts => [...accounts, newAccount]);
  }

  updateAccount(type: 'station' | 'chq' | 'cpsmu', updatedAccount: ManagedAccount): void {
    const accountList = this.getAccountListSignal(type);
    accountList.update(accounts => 
      accounts.map(acc => acc.id === updatedAccount.id ? updatedAccount : acc)
    );
  }

  deleteAccount(type: 'station' | 'chq' | 'cpsmu', accountId: number): void {
    const accountList = this.getAccountListSignal(type);
    accountList.update(accounts => accounts.filter(acc => acc.id !== accountId));
  }
}
