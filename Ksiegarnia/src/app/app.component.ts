import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = {};
  category = '';
  query = '';
  email = '';
  mode = 0;
  idBook = -1;
  categorySearch = '';
  answer = {};
  basket = 0;

  constructor() {
    const oldbasket = localStorage.getItem('Basket');
    if (oldbasket !== null) {
      const oldBasketData = JSON.parse(oldbasket);
      this.basket = oldBasketData.price;
    }
    localStorage.setItem('Basket', JSON.stringify({price: this.basket}));
  }

  setMode(data) {
    this.mode = data;
  }

  setIdBook(data) {
    this.idBook = data;
  }

  setBasket(data) {
    this.basket += parseFloat(data);
    const oldBasketData = localStorage.getItem('Basket');
    localStorage.setItem('Basket', JSON.stringify({price: this.basket}));
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

}
