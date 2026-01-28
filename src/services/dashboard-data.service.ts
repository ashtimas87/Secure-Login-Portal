import { Injectable, signal, inject, computed } from '@angular/core';
import { AccountService } from './account.service';
import { PI_DATA as OPERATIONAL_PI_DATA, PerformanceIndicator, MonthlyAccomplishments } from '../components/operational-dashboard/operational-dashboard.data';
import { PI_DATA as TACTICAL_PI_DATA } from '../components/tactical-dashboard/tactical-dashboard.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  private accountService = inject(AccountService);
  
  private allUsersData = signal<Map<string, PerformanceIndicator[]>>(new Map());

  private stationAndChqUsers = computed(() => [
    ...this.accountService.stationAccounts(),
    ...this.accountService.chqAccounts()
  ]);

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    const dataMap = new Map<string, PerformanceIndicator[]>();

    const operationalDataTemplate = JSON.parse(JSON.stringify(OPERATIONAL_PI_DATA)).map((pi: PerformanceIndicator) => {
      pi.activities.forEach(activity => {
        (Object.keys(activity.accomplishments) as Array<keyof MonthlyAccomplishments>).forEach(key => {
          if (key !== 'Total') {
            const templateValue = (activity.accomplishments as any)[key];
            // Only clear numeric-like values, preserve static strings like percentages
            if (typeof templateValue !== 'string' || !isNaN(Number(templateValue))) {
               (activity.accomplishments as any)[key] = '';
            }
          }
        });
      });
      return pi;
    });

    const tacticalDataTemplate = JSON.parse(JSON.stringify(TACTICAL_PI_DATA)).map((pi: PerformanceIndicator) => {
      pi.activities.forEach(activity => {
        (Object.keys(activity.accomplishments) as Array<keyof MonthlyAccomplishments>).forEach(key => {
          if (key !== 'Total') {
            (activity.accomplishments as any)[key] = 0;
          }
        });
      });
      return pi;
    });

    this.stationAndChqUsers().forEach(user => {
      if (user.username) {
        if (user.type === 'Station Account') {
            dataMap.set(user.username, JSON.parse(JSON.stringify(tacticalDataTemplate)));
        } else if (user.type === 'CHQ Account') {
            dataMap.set(user.username, JSON.parse(JSON.stringify(operationalDataTemplate)));
        }
      }
    });
    this.allUsersData.set(dataMap);
  }

  getDataForUser(username: string): PerformanceIndicator[] | undefined {
    const userData = this.allUsersData().get(username);
    return userData ? JSON.parse(JSON.stringify(userData)) : undefined;
  }

  updateDataForUser(username: string, data: PerformanceIndicator[]): void {
    this.allUsersData.update(currentMap => {
      const newMap = new Map(currentMap);
      newMap.set(username, JSON.parse(JSON.stringify(data)));
      return newMap;
    });
  }

  getConsolidatedData(): PerformanceIndicator[] {
    const dataToConsolidate: PerformanceIndicator[][] = [];
    const chqUsernames = new Set(this.accountService.chqAccounts().map(u => u.username));
    const stationUsernames = new Set(this.accountService.stationAccounts().map(u => u.username));

    // Get all data for CHQ and Station users
    for (const [username, data] of this.allUsersData().entries()) {
        if (chqUsernames.has(username) || stationUsernames.has(username)) {
            dataToConsolidate.push(data as PerformanceIndicator[]);
        }
    }

    // Start with a fresh template from the base data
    const consolidatedData: PerformanceIndicator[] = JSON.parse(JSON.stringify(OPERATIONAL_PI_DATA));

    // Initialize only numeric-like fields to 0, preserving string-based values like '100%'
    consolidatedData.forEach(pi => {
      pi.activities.forEach(activity => {
        Object.keys(activity.accomplishments).forEach(key => {
          const monthKey = key as keyof MonthlyAccomplishments;
          if (monthKey !== 'Total') {
            const templateValue = (activity.accomplishments as any)[monthKey];
            if (typeof templateValue !== 'string' || !isNaN(Number(templateValue))) {
              (activity.accomplishments as any)[monthKey] = 0;
            }
          }
        });
      });
    });

    // Aggregate data from all CHQ and Station users
    for (const userData of dataToConsolidate) {
      if (Array.isArray(userData)) {
        for (const userPi of userData) {
          const consolidatedPi = consolidatedData.find(p => p.id === userPi.id);
          if (consolidatedPi) {
            for (const userActivity of userPi.activities) {
              const consolidatedActivity = consolidatedPi.activities.find(a => a.name === userActivity.name && a.indicator === userActivity.indicator);
              if (consolidatedActivity) {
                for (const month of Object.keys(userActivity.accomplishments) as (keyof Omit<MonthlyAccomplishments, 'Total'>)[]) {
                    const monthKey = month as keyof MonthlyAccomplishments;
                    if (monthKey === 'Total') continue;

                    const userValue = userActivity.accomplishments[monthKey];
                    const currentValue = consolidatedActivity.accomplishments[monthKey];
                    
                    // Only aggregate if the consolidated field is a number and the user value is numeric.
                    if (typeof currentValue === 'number' && !isNaN(Number(userValue))) {
                      (consolidatedActivity.accomplishments as any)[monthKey] += Number(userValue);
                    }
                }
              }
            }
          }
        }
      }
    }

    // Return data without totals; the component will calculate them via processPiData.
    return consolidatedData;
  }

  getConsolidatedTacticalData(): PerformanceIndicator[] {
    const dataToConsolidate: PerformanceIndicator[][] = [];
    const stationUsernames = new Set(this.accountService.stationAccounts().map(u => u.username));

    // Get all data for Station users
    for (const [username, data] of this.allUsersData().entries()) {
        if (stationUsernames.has(username)) {
            dataToConsolidate.push(data as PerformanceIndicator[]);
        }
    }

    // Start with a fresh template from the base data
    const consolidatedData: PerformanceIndicator[] = JSON.parse(JSON.stringify(TACTICAL_PI_DATA));

    // Initialize numeric fields to 0
    consolidatedData.forEach(pi => {
      pi.activities.forEach(activity => {
        Object.keys(activity.accomplishments).forEach(key => {
          const monthKey = key as keyof MonthlyAccomplishments;
          if (monthKey !== 'Total') {
            (activity.accomplishments as any)[monthKey] = 0;
          }
        });
      });
    });

    // Aggregate data from all Station users
    for (const userData of dataToConsolidate) {
      if (Array.isArray(userData)) {
        for (const userPi of userData) {
          const consolidatedPi = consolidatedData.find(p => p.id === userPi.id);
          if (consolidatedPi) {
            for (const userActivity of userPi.activities) {
              const consolidatedActivity = consolidatedPi.activities.find(a => a.name === userActivity.name && a.indicator === userActivity.indicator);
              if (consolidatedActivity) {
                for (const month of Object.keys(userActivity.accomplishments) as (keyof Omit<MonthlyAccomplishments, 'Total'>)[]) {
                    const monthKey = month as keyof MonthlyAccomplishments;
                    if (monthKey === 'Total') continue;

                    const userValue = userActivity.accomplishments[monthKey];
                    const currentValue = consolidatedActivity.accomplishments[monthKey];
                    
                    if (typeof currentValue === 'number' && !isNaN(Number(userValue))) {
                      (consolidatedActivity.accomplishments as any)[monthKey] += Number(userValue);
                    }
                }
              }
            }
          }
        }
      }
    }
    
    return consolidatedData;
  }
}