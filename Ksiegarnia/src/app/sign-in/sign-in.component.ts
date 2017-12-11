import { window } from 'rxjs/operator/window';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  nieudaneLogowanie = false;
  udaneLogowanie = false;
  @Output() orderSum = new EventEmitter();
  @Output() loginStatus = new EventEmitter();

  results;
  results2;
  sum = 0;
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
          sessionStorage.setItem('id', this.results);
          this.nieudaneLogowanie = false;
          this.udaneLogowanie = true;
          const getBasketSum = this.http.get('http://localhost:8080/basket/sum?id_kto=' + sessionStorage.getItem('id')).subscribe(data2 => {
            this.sum = data2.json();
            localStorage.setItem('Basket', this.sum.toString());
            this.orderSum.emit(this.sum);
          });
          this.loginStatus.emit(1);
          this.ngOnInit();
          setTimeout(function () { location.reload() }, 2000);
        }
      },
      error => {
        sessionStorage.removeItem('id');
        this.nieudaneLogowanie = true;
        this.ngOnInit();
      },
      () => { this.ngOnInit() }
    )
  }
  ngOnInit() {
  }

}
