import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SignInServiceService {
  responseStatus = true;

  constructor(private http: Http) { }

  signIn(url, body) {
    localStorage.setItem('login', JSON.stringify(body.login));
    this.http.post('http://localhost:8080/session/', body)
      .subscribe(data => this.sendResponse(data));
    console.log('2', this.responseStatus);
    return this.responseStatus;
  }

  sendResponse(data) {
    console.log('1', data._body);
    if (data._body === 'Złe dane użytkownika') {
      this.responseStatus = false;
      localStorage.removeItem('name');
    } else {
      localStorage.setItem('name', JSON.stringify(data._body));
      this.responseStatus = true;
    }
  }
}
