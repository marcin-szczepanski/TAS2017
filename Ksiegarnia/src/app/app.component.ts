import { Component, OnInit } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logged = false;
  user = 1;
  mode = 0;
  basket = parseFloat('0');
  idBook = -1;
  books = {};
  answer = {};
  category = '';
  query = '';
  email = '';
  categorySearch = '';
  id;

  constructor(private infoService: InfoService) { }

  userLogged() {
    let x = sessionStorage.getItem('id');
    if (x !== null) {
      this.user = JSON.parse(x);
      this.logged = true;
    } else {
      this.user = 1;
      this.logged = false;
    }
  }

  setMode(data) {
    this.mode = data;
  }

  setIdBook(data) {
    this.idBook = data;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  saveEmail() {
    if (this.validateEmail(this.email)) {
      console.log(this.email);
      alert('Dziękujemy za zapisanie się do newslettera!');
    } else {
      alert('Podaj poprawny adres email!');
    }
  }

  logOff() {
    sessionStorage.clear();
    localStorage.clear();
    this.mode = 0;
    this.user = 1;
    this.logged = false;
    this.basket = parseFloat('0');
    localStorage.setItem('Basket', '0');
    window.location.reload();
  }

  handleOrderMode(mode) {
    this.mode = mode;
  }

  handleOrderSum(sum) {
    this.basket = parseFloat(sum.toFixed(2));
  }

  handleLoginStatus(loginStatus) {
    this.logged = loginStatus;
  }

  ngOnInit() {
    this.userLogged();
    this.id = sessionStorage.getItem('id');
    if (this.logged) {
      const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data => {
        this.basket = data.json();
        localStorage.setItem('Basket', this.basket.toString());
      });
    } else {
      if (localStorage.getItem('Basket') !== undefined && localStorage.getItem('Basket') !== null) {
        this.basket = parseFloat(JSON.parse(localStorage.getItem('Basket')).toFixed());
      } else {
        this.basket = parseFloat('0');
      }
    }
  }
}
