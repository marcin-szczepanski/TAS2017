import { window } from 'rxjs/operator/window';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  nieudaneLogowanie = false;
  udaneLogowanie = false;

  results;
  results2;
  constructor(private http: Http) { }

  onSubmit(value: any) {
    this.http.post('http://localhost:8080/session/', { login: value.login, password: value.haslo }).subscribe(
      data => {
        this.results2 = data;
        if (this.results2._body === 'Złe dane użytkownika') {
          sessionStorage.removeItem('id');
          this.nieudaneLogowanie = true;
        } else {
          this.results = data.json();
          sessionStorage.setItem('loginStatus', '1');
          sessionStorage.setItem('id', this.results);
          this.nieudaneLogowanie = false;
          this.udaneLogowanie = true;
          this.ngOnInit();
          setTimeout(function () { location.reload() }, 2000);
        }
      },
      error => {
        sessionStorage.removeItem('id');
        this.nieudaneLogowanie = true;
        this.ngOnInit();
      },
      () => { this.ngOnInit()}
    )
  }
  ngOnInit() {
  }

}
