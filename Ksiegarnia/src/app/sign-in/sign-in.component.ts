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
  @Output() orderSum = new EventEmitter();
  @Output() loginStatus = new EventEmitter();

  results;
  results2;
  sum = 0;
  constructor(private infoService: InfoService) { }

  onSubmit(value: any) {
    const signIn = this.infoService.signIn({ login: value.login, password: value.haslo }).subscribe(data => {
      this.results2 = data;
      if (this.results2._body === 'Złe dane użytkownika') {
        sessionStorage.removeItem('id');
        this.nieudaneLogowanie = true;
      } else {
        this.results = data.json();
        sessionStorage.setItem('id', this.results);
        this.nieudaneLogowanie = false;
        this.udaneLogowanie = true;
        if (localStorage.getItem('ProductsInBasket') !== undefined && localStorage.getItem('ProductsInBasket') !== null) {
          const orderTMP = JSON.parse(localStorage.getItem('ProductsInBasket'));
          orderTMP.forEach(item => {
            const addToBasket = this.infoService.addToBasket(item.id, item.num).subscribe();
          });
        }
        const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data2 => {
          this.sum = data2.json();
          localStorage.setItem('Basket', this.sum.toString());
          this.orderSum.emit(this.sum);
        });
        this.loginStatus.emit(1);
        this.ngOnInit();
        setTimeout(function () { location.reload(); }, 3000);
      }
    },
      error => {
        sessionStorage.removeItem('id');
        this.nieudaneLogowanie = true;
        this.ngOnInit();
      },
      () => { }
    );
  }
  ngOnInit() {
  }

}
