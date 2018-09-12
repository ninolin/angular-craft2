import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = 'http://localhost:3000/category';
  constructor(private http: HttpClient) { }

  getAccount() {
    return this.http.get(this.baseUrl)
                .toPromise()
                .then(res => { return <any[]> res["data"]; });
  }

  addAccount(account: any) {
    return this.http.post(this.baseUrl, account)
                .toPromise();
  }

  updateAccount(postData: any) {
    return this.http.post(this.baseUrl, postData)
                .toPromise();
  }

  removeAccount() {

  }
}
