import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SignInServiceService {
  responseStatus = true;

  constructor(private http: Http) { }

  signIn(url, body) {
    var promise = new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/session/', body)
      .subscribe(data => {this.sendResponse(data)});
      let value = 'success';
      resolve(value);

      // when an error occurred, reject
      reject(new Error('Something happened!'));
    });
    
    return this.responseStatus;
  }

  sendResponse(data) {
    console.log(data._body);
    if (data._body === 'Złe dane użytkownika') {
      this.responseStatus = false;
      sessionStorage.removeItem('id');
    } else {
      sessionStorage.setItem('id', JSON.stringify(data._body));
      sessionStorage.setItem('login', JSON.stringify(data.login));
      this.responseStatus = true;
    }
  }
}
