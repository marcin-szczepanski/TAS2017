import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MyProfileServiceService {

  constructor(private http: Http) { }

  public showMyProfile() {
    const url = 'http://localhost:8080/profile?id=' + sessionStorage.getItem('id');
    console.log(url);
    return this.http.get(url);
  }

}
