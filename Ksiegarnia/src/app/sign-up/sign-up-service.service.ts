import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SignUpServiceService {
  responseStatus = true;

  constructor(private http: Http) { }

  signUp(url, body) {
    this.http.post('http://localhost:8080/register/', body)
    .subscribe();
    console.log(body);
    return this.responseStatus;
  }
}
