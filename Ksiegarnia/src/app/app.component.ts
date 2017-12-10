import { Component, OnInit } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged = false;
  user = 1;
  mode = 0;
  basket = 0;
  idBook = -1;
  books = {};
  answer = {};
  category = '';
  query = '';
  email = '';
  categorySearch = '';
  id;

  constructor(private infoService: InfoService) {
    this.userLogged();
    const oldbasket = localStorage.getItem('Basket');
    if (oldbasket !== null) {
      const oldBasketData = JSON.parse(oldbasket);
      this.basket = oldBasketData.price;
      if (this.basket < 0) {
        this.basket = 0.00;
      }
    }
    localStorage.setItem('Basket', JSON.stringify({ price: this.basket }));
    this.id = sessionStorage.getItem('id');
  }

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

  // setBasket(data) {
  //   this.userLogged();
  //   if (this.logged === false) {
  //     this.basket += parseFloat(data);
  //   } else {
  //     this.basket = parseFloat(data);
  //   }
  //   if (this.basket < 0) {
  //     this.basket = 0.00;
  //   }
  //   const oldBasketData = localStorage.getItem('Basket');
  //   localStorage.setItem('Basket', JSON.stringify({ price: this.basket }));
  // }

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
    localStorage.setItem('Basket', JSON.stringify({ price: this.basket }));
    window.location.reload();
  }

  handleOrderMode(mode){
    this.mode = mode;
  }

  handleOrderSum(sum) {
    this.basket = sum;
  }
  // addToBasketMain(toSend) {
  //   const url = '/addbasket';
  //   this.infoService.sendData(url, toSend)
  //     .subscribe();
  //   this.infoService.getBasketSum().subscribe(data => {
  //     this.basket = data.json();
  //     localStorage.setItem('basket', this.basket.toString());
  //   });
  // }

  // updateInBasketmain(toSend) {
  //   const url = '/updatebasket';
  //   this.infoService.sendData(url, toSend)
  //     .subscribe();
  //   this.infoService.getBasketSum().subscribe(data => {
  //     this.basket = data.json();
  //     localStorage.setItem('basket', this.basket.toString());
  //     console.log(this.basket)
  //   });

  // }

  // addFromLocalStorage() {
  //   const x = localStorage.getItem('ProductsInBasket');
  //   if (x !== null) {
  //     const y = JSON.parse(x);
  //     for (let property in y) {
  //       if (y.hasOwnProperty(property)) {
  //         let data = { what: y[property].id, how: y[property].howMany, who: this.user }
  //         if (this.infoService.ifExists('basket/exist?id_kto=' + this.user + '&id_ks=' + y[property].id)) {
  //           this.updateInBasketmain(data);
  //         } else {
  //           this.addToBasketMain(data);
  //         }
  //       }
  //     }
  //     localStorage.removeItem('ProductsInBasket');
  //   }
  // }

}
