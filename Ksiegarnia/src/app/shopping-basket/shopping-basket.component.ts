import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  @Output() orderMode = new EventEmitter();
  @Output() orderSum = new EventEmitter();
  @Output() modeChanged = new EventEmitter();
  @Output() bookIdChanged = new EventEmitter();
  @Input() logged;
  url = 'http://localhost:8080/';
  zamowienie = [];
  zamowienieDlugosc = 0;
  sum = 0;
  errorTooManyBooks = 0;
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getBasketContent();
  }

  deleteFromBasket(id_ks) {
    if (this.logged) {
      this.deleteFromBasketLogged(id_ks);
    } else {
      this.deleteFromBasketAnonymous(id_ks);
    }
  }

  editNumberOfCopies(value: any, id_ks) {
    if (this.logged) {
      this.editNumberOfCopiesLogged(value, id_ks);
    } else {
      this.editNumberOfCopiesAnonymous(value, id_ks);
    }

  }

  getBasketContent() {
    if (this.logged) {
      this.getBasketContentLogged();
    } else {
      this.getBasketContentAnonymous();
    }
  }

  goToOrder() {
    this.orderMode.emit(7);
  }

  changeMode($event) {
    this.modeChanged.emit(5);
  }

  changeBookId(id_ks) {
    this.bookIdChanged.emit(id_ks);
  }

  getBasketContentLogged() {
    const getBasketItems = this.infoService.getBasketItemsLogged().subscribe(data => {
      this.zamowienie = data.json();
      this.zamowienieDlugosc = this.zamowienie.length;
    });
    const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data => {
      this.sum = data.json();
      localStorage.setItem('Basket', this.sum.toString());
      this.orderSum.emit(this.sum);
    });
  }

  getBasketContentAnonymous() {
    if (localStorage.getItem('ProductsInBasket') !== null && localStorage.getItem('ProductsInBasket') !== undefined) {
      this.sum = 0;
      const orderTMP = JSON.parse(localStorage.getItem('ProductsInBasket'));
      this.zamowienieDlugosc = orderTMP.length;
      this.zamowienie = [];
      orderTMP.forEach(item => {
        const bookInfo = this.infoService.getBookInfo(item.id).subscribe(data => {
          const book = data.json();
          const cena = (item.num * book.cena).toFixed(2);
          this.sum += item.num * book.cena;
          this.sum = parseFloat(this.sum.toFixed(2));
          this.orderSum.emit(this.sum);
          localStorage.setItem('Basket', this.sum.toFixed(2));
          this.zamowienie.push({
            nazwa: book.nazwa, imie_autora: book.imie,
            nazwisko_autora: book.nazwisko, ilosc: item.num, cena: cena, id_ks: book.id
          });
        });
      });
    } else {
      this.zamowienieDlugosc = 0;
      this.zamowienie = undefined;
      this.sum = 0;
      this.orderSum.emit(this.sum);
    }
  }

  deleteFromBasketLogged(id_ks) {
    const deleteFromBasket = this.infoService.deleteFromBasketLogged(id_ks).subscribe(
      (data) => {
        this.getBasketContent();
      }
    );
  }

  deleteFromBasketAnonymous(id_ks) {
    let indexToDelete = null;
    const orderTMP = JSON.parse(localStorage.getItem('ProductsInBasket'));
    orderTMP.forEach((item, index) => {
      if (item.id === id_ks) {
        indexToDelete = index;
      }
    });
    this.zamowienieDlugosc -= 1;
    orderTMP.splice(indexToDelete, 1);
    if (orderTMP.length <= 0) {
      localStorage.removeItem('ProductsInBasket');
      localStorage.removeItem('Basket');
    } else {
      localStorage.setItem('ProductsInBasket', JSON.stringify(orderTMP));
    }
    this.getBasketContent();
  }

  editNumberOfCopiesLogged(value: any, id_ks) {
    const getBookInfo = this.infoService.getBookInfo(id_ks).subscribe(
      data => { }
    )
    if (value.numberOfCopies === 0) {
      this.deleteFromBasket(id_ks);
    } else {
      const editNumberOfCopiesSub = this.infoService.editBasketItemLogged(id_ks, value.numberOfCopies).subscribe(
        data => {
          if (data.json() === true) {
            this.getBasketContent();
            this.errorTooManyBooks = 0;
          } else {
            this.errorTooManyBooks = 1;
          }
        }
      );
    }
  }

  editNumberOfCopiesAnonymous(value: any, id_ks) {
    if (value.numberOfCopies === 0) {
      this.deleteFromBasketAnonymous(id_ks);
    } else {
      const orderTMP = JSON.parse(localStorage.getItem('ProductsInBasket'));
      orderTMP.forEach((item) => {
        if (item.id === id_ks) {
          item.num = value.numberOfCopies;
          localStorage.setItem('ProductsInBasket', JSON.stringify(orderTMP));
        }
      });
      this.getBasketContent();
    }
  }
}

