import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SignInServiceService {
  responseStatus = true;

  constructor(private http: Http) { }

  signIn(url, body) {
    this.http.post('http://localhost:8080/session/', body)
    .subscribe(data => { this.sendResponse(data)});
    return this.responseStatus;
  }

  sendResponse(data) {
    if (data._body === 'Złe dane użytkownika') {
      this.responseStatus = false;
      sessionStorage.removeItem('id');
    } else {
      sessionStorage.setItem('loginStatus', '1');
      sessionStorage.setItem('id', data._body);
      this.responseStatus = true;
      window.location.reload();
    }
  }
}
