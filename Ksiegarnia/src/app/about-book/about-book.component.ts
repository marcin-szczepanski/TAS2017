import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.css']
})
export class AboutBookComponent implements OnChanges {

  @Input() ident;
  @Input() user;
  @Input() logged;
  @Output() orderSum = new EventEmitter();
  review = '';
  grade = 1;
  graded = false;
  howMuch = 1;
  howMuchOld = 0;
  book = {};
  productsObject = JSON.parse(localStorage.getItem('ProductsInBasket'));
  deletedBook = 0;
  sum = 0;
  errorTooManyBooks = 0;

  constructor(private infoService: InfoService) {
    if (this.productsObject === null) {
      this.productsObject = {};
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const idChanges = changes['ident'];
    if (idChanges) {
      this.book = {};
      if (idChanges) {
        this.getBooks();
      }
      const idGrade = JSON.parse(localStorage.getItem('WatchedBook' + `${this.ident}`));
      if (this.logged == 'true') {
        this.getGrade();
      } else {
        if (idGrade) {
          this.grade = idGrade.grade;
          this.graded = true;
        }
      }
    }
  }

  getBooks() {
    if (this.logged == 'true') {
      this.getGrade();
    }
    const url = 'book?id=';
    this.book = {};
    this.book = this.infoService.getBooks(url + this.ident);
  }

  saveReview() {
    if (this.review.trim() === '') {
      alert('Nie możesz dodać pustej recenzji!');
    } else {
      const url = 'review/';
      const toSend = { ks: this.ident, kto: this.user, text: this.review };
      const res = this.infoService.sendData(url, toSend);
      if (res === true) {
        this.getBooks();
        alert('Dziękujemy za dodanie recenzji!');
      } else {
        alert('Coś poszło nie tak. Spróbuj ponownie później.');
      }
      this.getBooks();
    }
  }

  getGrade() {
    this.graded = true;
    const url = 'grade/view' + '?id_ks=' + this.ident + '&id_kto=' + this.user;
    let ocena = this.infoService.getGrade(url).then(answer => {
      if (answer[0] != undefined) {
        this.grade = answer[0].grade;
      } else {
        answer = [{grade: '0'}];
      }
      if(answer[0].grade != '0') {
        this.graded = true;
      } else {
        this.graded = false;
      }
    });
  }

  saveGrade(value) {
    this.grade = value.grade;
    const url = 'grade/';
    const toSend = { ks: this.ident, kto: this.user, ocena: this.grade };
    const res = this.infoService.sendData(url, toSend);
    if (res === true) {
      this.getBooks();
      alert('Dziękujemy za ocenę!');
      const ob = { id: this.ident, grade: this.grade };
      localStorage.setItem('WatchedBook' + `${this.ident}`, JSON.stringify(ob));
      this.graded = true;
    } else {
      alert('Coś poszło nie tak. Spróbuj ponownie później.');
    }
    this.getBooks();
  }

  // basket start
  addToBasket(value: any, id, price) {
    if (sessionStorage.getItem('id') !== null && sessionStorage.getItem('id') !== undefined) {
      this.addToBasketLogged(value.numberOfCopies, id);
      const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data => {
        this.sum = data.json();
        localStorage.setItem('Basket', this.sum.toString());
        this.orderSum.emit(this.sum);
      });
    } else {
      this.addToBasketAnonymous(value.numberOfCopies, id, price);
    }
  }

  addToBasketLogged(numberOfCopies, id) {
    const addToBasketService = this.infoService.addToBasket(id, numberOfCopies).subscribe(
      data => {
        if (data.json() === true) {
          const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data2 => {
            this.sum = data2.json();
            localStorage.setItem('Basket', this.sum.toString());
            this.orderSum.emit(this.sum);
            this.errorTooManyBooks = 0;
          });
        } else {
          this.errorTooManyBooks = 1;
        }
      }
    );
  }

  addToBasketAnonymous(numberOfCopies, id, price) {
    // dodawanie do koszyka
    let basketAnonimous = [];
    let exist = 0;
    let indexOfExist = null;
    if (localStorage.getItem('ProductsInBasket')) {
      basketAnonimous = JSON.parse(localStorage.getItem('ProductsInBasket'));
    };
    basketAnonimous.forEach((i, index) => {
      if (i.id === id) {
        exist = 1;
        indexOfExist = index;
      }
    });
    if (exist !== 1) {
      basketAnonimous.push({ id: id, num: numberOfCopies });
    } else {
      basketAnonimous[indexOfExist].num += numberOfCopies;
    }
    localStorage.setItem('ProductsInBasket', JSON.stringify(basketAnonimous));
    // sumowanie wartosci zamowienia
    if (localStorage.getItem('Basket') !== undefined && localStorage.getItem('Basket') !== null) {
      let sumAnonymous = JSON.parse(localStorage.getItem('Basket'));
      sumAnonymous += (parseFloat(price) * parseFloat(numberOfCopies));
      this.orderSum.emit(sumAnonymous);
      localStorage.setItem('Basket', sumAnonymous.toFixed(2));
    } else {
      localStorage.setItem('Basket', JSON.stringify(0));
      let sumAnonymous = JSON.parse(localStorage.getItem('Basket'));
      sumAnonymous += (price * numberOfCopies);
      this.orderSum.emit(sumAnonymous);
      localStorage.setItem('Basket', sumAnonymous);
    }
    exist = 0;
  }
}
