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

  constructor(private infoService: InfoService) {}

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
      const toSend = '?ks=' + this.ident + '&kto=' + this.user + '&text=' + this.review;
      const res = this.infoService.sendData(this.urlReview, toSend);
      if (res === true) {
        this.getBooks();
        alert('Dziękujemy za dodanie recenzji!');
      } else {
        alert('Coś poszło nie tak. Spróbuj ponownie później.');
      }
    }
  }

  getBooks() {
    this.book = {};
    this.book = this.infoService.getBooks(this.url + this.ident);
  }

  saveGrade() {
    const toSend = '?ks=' + this.ident + '&kto=' + this.user + '&ocena=' + this.grade;
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
    const x = localStorage.getItem('AddToBasket' + `${this.ident}`);
    if (x !== null) {
      const y = JSON.parse(x);
      this.howMuchOld = y.howMany;
    }
    const howMuchUpdate = this.howMuch - this.howMuchOld;
    if (this.user === 1) {
      const ob = {id: this.ident, howMany: this.howMuch, price: (this.howMuch * this.book['price']).toFixed(2)};
      localStorage.setItem('AddToBasket' + `${this.ident}`, JSON.stringify(ob));
      this.basketChanged.emit(howMuchUpdate * this.book['price']);
    }
    // gdy anonymous - localStorage
    // gdy zalogowany - wyślij na serwer i usuń z localStorage
  }

}
