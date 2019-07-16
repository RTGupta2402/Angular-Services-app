import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private logService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' +status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // const logservice = new LoggingService();
    // logservice.logStatusChanged(accountStatus);
    // this.logService.logStatusChanged(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);

  }
}