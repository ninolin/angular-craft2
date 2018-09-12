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
  dialogTitle: string;
  dialogRButton: string;
  dialogLButton: string;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccount().then(accounts => this.accounts = accounts);
    this.cols = [
        { field: 'name', header: '帳號' },
        { field: 'amount', header: '餘額' },
        { field: 'uint', header: '單位' }
    ];
  }

  showDialogToAdd() {
    this.newAccount = true;
    this.account = {};
    this.displayDialog = true;
    this.dialogTitle = "新增帳號";
    this.dialogRButton = "新增";
    this.dialogLButton = "取消";
  }

  save() {
    let accounts = [...this.accounts];
    if (this.newAccount){
      this.accountService.addAccount(this.account)
        .then(v => {
          accounts.push(this.account);
          this.accounts = accounts;
          this.account = null;
          this.displayDialog = false;
        });
    } else {
      this.accountService.updateAccount(this.account)
        .then(v => {
          accounts[this.accounts.indexOf(this.selectedAccount)] = this.account;
          this.accounts = accounts;
          this.account = null;
          this.displayDialog = false;
        });
    }
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
      this.dialogTitle = "修改帳號";
      this.dialogRButton = "修改";
      this.dialogLButton = "刪除";
  }

  cloneCar(c: any): any {
      let car = {};
      for (let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }
}
