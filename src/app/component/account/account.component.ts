import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  title = 'angular-craft2';

  displayDialog: boolean;
  account: any;
  selectedAccount: any;
  newAccount: boolean;
  accounts: any[];
  cols: any[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccount().then(accounts => {this.accounts = accounts; console.log(this.accounts);});
    this.cols = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
  }

  showDialogToAdd() {
    this.newAccount = true;
    this.account = {};
    this.displayDialog = true;
  }

  save() {
    let accounts = [...this.accounts];
    if (this.newAccount)
      accounts.push(this.account);
    else
      accounts[this.accounts.indexOf(this.selectedAccount)] = this.account;

    this.accounts = accounts;
    this.account = null;
    this.displayDialog = false;
  }

  delete() {
      let index = this.accounts.indexOf(this.selectedAccount);
      this.accounts = this.accounts.filter((val, i) => i != index);
      this.account = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newAccount = false;
      this.account = this.cloneCar(event.data);
      this.displayDialog = true;
  }

  cloneCar(c: any): any {
      let car = {};
      for (let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }
}
