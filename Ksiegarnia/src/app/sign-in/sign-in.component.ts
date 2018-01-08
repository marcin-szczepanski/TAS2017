import { window } from 'rxjs/operator/window';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  nieudaneLogowanie = false;
  udaneLogowanie = false;
  errorAddToBasket = false;
  @Output() orderSum = new EventEmitter();
  @Output() loginStatus = new EventEmitter();
  @Output() modeLogged = new EventEmitter();
  @Output() signInWithError = new EventEmitter();
  @Output() isAdmin = new EventEmitter();
  results;
  results2;
  sum = 0;
  orderLen = 0;
  constructor(private infoService: InfoService) { }

  onSubmit(value: any) {
    this.orderLen = 0;
    const signIn = this.infoService.signIn({ login: value.login, password: value.haslo }).subscribe(data => {
      this.results2 = data;
      if (this.results2._body === 'Złe dane użytkownika') {
        sessionStorage.removeItem('id');
        this.nieudaneLogowanie = true;
      } else {
        this.results = data.json();
        sessionStorage.setItem('id', this.results);
        const isAdminSubscribe = this.infoService.isAdmin(this.results).subscribe(
          d => {
            const responseAdmin = d.json()
            this.isAdmin.emit(responseAdmin);
            // console.log(d.json());
          }
        );
        this.nieudaneLogowanie = false;
        this.udaneLogowanie = true;
        if (localStorage.getItem('ProductsInBasket') !== undefined && localStorage.getItem('ProductsInBasket') !== null) {
          const orderTMP = JSON.parse(localStorage.getItem('ProductsInBasket'));
          const orderTMPLen = orderTMP.length;
          orderTMP.forEach((item) => {
            const addToBasket = this.infoService.addToBasket(item.id, item.num).subscribe(
              d => {
                // console.log(d.json(), item);
                if (!d.json()) {
                  this.errorAddToBasket = true;
                }
                const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data2 => {
                  this.sum = data2.json();
                  localStorage.setItem('Basket', this.sum.toString());
                  this.orderSum.emit(this.sum);
                },
                  error => { },
                  () => {
                  });
                this.orderLen++;
                // console.log(this.orderLen, orderTMPLen, item);
                if (this.orderLen === orderTMPLen) {
                  localStorage.removeItem('ProductsInBasket');
                  if (this.errorAddToBasket) {
                    this.signInWithError.emit();
                    this.loginStatus.emit(1);
                  } else {
                    this.loginStatus.emit(1);
                    this.modeLogged.emit(0);
                  }
                }
              },
              error => { },
              () => {
              });
          });
        } else {
          this.loginStatus.emit(1);
          this.modeLogged.emit(0);
        }
      }
    },
      error => {
        sessionStorage.removeItem('id');
        this.nieudaneLogowanie = true;
        this.ngOnInit();
      },
      () => {
      }
    );
  }
  ngOnInit() {
  }

}
