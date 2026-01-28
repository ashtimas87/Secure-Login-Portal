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
      const name = stationNumber === 11 ? 'CMFC' : `Police Station ${stationNumber}`;
      const usernameBase = stationNumber === 11 ? 'cmfc' : `station${stationNumber}`;
      return {
        id: Date.now() + i,
        name: name,
        username: `${usernameBase}@gmail.com`,
        password: usernameBase,
        type: 'Station Account'
      };
    }));

    const chqNames = [
      'CHQ CARMU',
      'CHQ CIU',
      'CHQ COU',
      'CHQ Logistics',
      'CHQ CCADU',
      'CHQ CIDMU',
      'CHQ WCPD',
      'CHQ TPU'
    ];

    this.chqAccounts.set(chqNames.map((name, i) => {
      const usernameBase = name.toLowerCase().replace(/ /g, '');
      return {
        id: Date.now() + 11 + i,
        name: name,
        username: `${usernameBase}@gmail.com`,
        password: usernameBase,
        type: 'CHQ Account'
      };
    }));

    this.cpsmuAccounts.set([
      { id: Date.now() + 20, name: 'COCPO CPSMU', username: 'cocpocpsmu@gmail.com', password: 'cocpocpsmu', type: 'CPSMU Account' },
      { id: Date.now() + 21, name: 'CPSMU Admin 2', username: 'cpsmu_admin2@gmail.com', password: 'cpsmu_password2', type: 'CPSMU Account' }
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