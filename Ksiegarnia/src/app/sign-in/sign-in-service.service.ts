import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SignInServiceService {

  answer = {};
  book = {};
  mainUrl = 'http://localhost:8080/';
  res = true;

  constructor(private http: Http) { }

  signIn(url, body) {
    console.log(JSON.stringify(body));
    console.log(body);
    this.http.post('http://localhost:8080/session/', body)
    .subscribe(data => this.sendResponse(data));
    return this.res;
  }

  sendResponse(data) {
    console.log(data);
    console.log(data._body);
  }
}
