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
      this.infoService.sendData(this.urlReview, toSend);
      this.getBooks();
      alert('Dziękujemy za dodanie recenzji!');
    }
  }

  getBooks() {
    this.book = {};
    this.book = this.infoService.getBooks(this.url + this.ident);
  }

  saveGrade() {
    const toSend = '?ks=' + this.ident + '&kto=' + this.user + '&ocena=' + this.grade;
    this.infoService.sendData(this.urlGrade, toSend);
    this.getBooks();
    alert('Dziękujemy za ocenę!');
    localStorage.setItem('WatchedBook' + `${this.ident}`, JSON.stringify({ id: this.ident, grade: this.grade }));
    this.graded = true;
  }

  addToBasket() {
    let howMuchUpdate = this.howMuch - this.howMuchOld;;
    if (this.user === 1) {
      localStorage.setItem('AddToBasket' + `${this.ident}`, JSON.stringify({ id: this.ident, howMany: this.howMuch, price: (this.howMuch * this.book['price']).toFixed(2)}));
      this.howMuchOld = this.howMuch;
      this.basketChanged.emit((howMuchUpdate * this.book['price']).toFixed(2));
    }
    // gdy anonymous - localStorage
    // gdy logged - wyślij na serwer i usuń z localStorage
  }

}
