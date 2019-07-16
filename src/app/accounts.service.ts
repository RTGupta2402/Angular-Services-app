import { LoggingService } from './logging.service';

import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountService {
    account = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated = new EventEmitter<string>();
      
      constructor(private logService: LoggingService) {}

      addAccount(name: string, status: string) {
        this.account.push({name: name, status: status});
        this.logService.logStatusChanged(status);
      }

      updateStatus(id: number, status: string) {
        this.account[id].status = status;
        this.logService.logStatusChanged(status);
      }
}