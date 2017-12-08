import { Component } from '@angular/core';
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
  querySearch = '';
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
    localStorage.setItem('Basket', JSON.stringify({price: this.basket}));
    this.id = sessionStorage.getItem('id');
  }

  onSubmit(value: any) {
    console.log(value.keywords);
    console.log(value.category);
    /* querySearch = 'keyWord?';
    if (value.category !== '') {
      if (this.querySearch !== 'keyWord?') {
        this.querySearch += '&';
      }
      this.querySearch += 'category=' + value.category.trim().replace(' ', '+');
    }
    if (value.keywords !== '') {
      if (this.querySearch !== 'keyWord?') {
        this.querySearch += '&';
      }
      this.querySearch += 'category=' + value.keywords.trim().replace(' ', '+');
    }*/
    this.mode = 3;
  }

  userLogged() {
    let x = sessionStorage.getItem('id');
    if (x !== null) {
      this.user = JSON.parse(x);
      this.logged = true;
      this.addFromLocalStorage();
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

  setQuery(data) {
    this.querySearch = data;
  }

  setBasket(data) {
    this.userLogged();
    if (this.logged === false) {
      this.basket += parseFloat(data);
    } else {
      this.basket = parseFloat(data);
    }
    if (this.basket < 0) {
      this.basket = 0.00;
    }
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

  logOff(){
    sessionStorage.clear();
    this.mode = 0;
    this.user = 1;
    this.logged = false;
    this.basket = parseFloat('0');
    localStorage.setItem('Basket', JSON.stringify({price: this.basket}));
    window.location.reload();
  }

  addToBasketMain(toSend) {
    const url = '/addbasket';
    const res = this.infoService.sendData(url, toSend);
    if (res === true) {
      this.basket = (this.infoService.getSuma('basket/sum?id_kto=' + this.user));
    } else {
      alert('Coś poszło nie tak. Spróbuj ponownie później.');
    }
  }

  updateInBasketmain(toSend) {
    const url = '/updatebasket';
    const res = this.infoService.sendData(url, toSend);
    if (res === true) {
      this.basket = (this.infoService.getSuma('basket/sum?id_kto=' + this.user));
    } else {
      alert('Coś poszło nie tak. Spróbuj ponownie później.');
    }
  }

  addFromLocalStorage() {
    const x = localStorage.getItem('ProductsInBasket');
    if (x !== null) {
      const y = JSON.parse(x);
      for (let property in y) {
        if (y.hasOwnProperty(property)) {
            let data = {what: y[property].id, how: y[property].howMany, who: this.user}
            if (this.infoService.ifExists('basket/exist?id_kto=' + this.user + '&id_ks=' + y[property].id)) {
              this.updateInBasketmain(data);
            } else {
              this.addToBasketMain(data);
            }
        }
      }
      localStorage.removeItem('ProductsInBasket');
    }
  }

}
