import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount() {
    return this.http.get('http://demo4613730.mockable.io/test')
                .toPromise()
                .then(res => { return <any[]> res; });
  }
}
