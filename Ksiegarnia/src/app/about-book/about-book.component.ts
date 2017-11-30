import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.css']
})
export class AboutBookComponent implements OnChanges {

  @Input() ident;

  @Output() basketChanged = new EventEmitter();

  review = '';
  grade = 1;
  graded = false;
  howMuch = 1;
  howMuchOld = 0;
  logged = false;
  url = 'book?id=';
  book = {};
  user = 1; // anonymous
  urlReview = 'review/';
  urlGrade = 'grade/';
  productsObject = JSON.parse(localStorage.getItem('ProductsInBasket'));
  deletedBook = 0;

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
      if (idGrade && this.logged === false) {
        this.grade = idGrade.grade;
        this.graded = true;
      } else {
        // funkcja do pobierania oceny zalogowanego użytkownika
        // jeśli jest ocena w bazie to ją ustaw oraz graded=true a jeśli nie nic nie rób
      }
    }
  }

  saveReview() {
    if (this.review.trim() === '') {
      alert('Nie możesz dodać pustej recenzji!');
    } else {
      const toSend = {ks: this.ident, kto: this.user, text: this.review};
      const res = this.infoService.sendData(this.urlReview, toSend);
      if (res === true) {
        this.getBooks();
        alert('Dziękujemy za dodanie recenzji!');
      } else {
        alert('Coś poszło nie tak. Spróbuj ponownie później.');
      }
      this.getBooks();
    }
  }

  getBooks() {
    this.book = {};
    this.book = this.infoService.getBooks(this.url + this.ident);
  }

  saveGrade() {
    const toSend = {ks: this.ident, kto: this.user, ocena: this.grade};
    const res = this.infoService.sendData(this.urlGrade, toSend);
    if (res === true) {
      this.getBooks();
      alert('Dziękujemy za ocenę!');
      const ob = {id: this.ident, grade: this.grade};
      localStorage.setItem('WatchedBook' + `${this.ident}`, JSON.stringify(ob));
      this.graded = true;
    } else {
      alert('Coś poszło nie tak. Spróbuj ponownie później.');
    }
    this.getBooks();
  }

  addToBasket() {
    const x = localStorage.getItem('ProductsInBasket');
    if (x !== null) {
      const y = JSON.parse(x);
      if (y[`${this.ident}`] != null) {
        this.howMuchOld = y[`${this.ident}`].howMany;
      }
    }
    let howMuchUpdate = this.howMuch - this.howMuchOld;
    if (this.user === 1) {
      if (this.howMuch != 0) {
        this.deletedBook = 0;
        this.productsObject[`${this.ident}`] = {
          id: this.ident,
          howMany: this.howMuch,
          price: (this.howMuch * this.book['price']).toFixed(2)
        };
      } else {
        if (`${this.ident}` in this.productsObject) {
          delete this.productsObject[`${this.ident}`];
        }
        if (this.deletedBook > 1) {
          howMuchUpdate = 0;
        }
        this.howMuch = 0;
        this.howMuchOld = 0;
      }
      this.deletedBook += 1;
      localStorage.setItem('ProductsInBasket', JSON.stringify(this.productsObject));
      this.basketChanged.emit(howMuchUpdate * this.book['price']);
    }
    // gdy anonymous - localStorage
    // gdy zalogowany - wyślij na serwer i usuń z localStorage*/
  }

}
