import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  @Output() modeChanged = new EventEmitter();
  @Output() bookIdChanged = new EventEmitter();

  modeNewest = 0;
  books = [];
  answer = {};
  bookId = undefined;
  url = 'top6';

  constructor(private searchService: SearchService) {
    if (this.books.length === 0) {
      this.getBooks();
    }
  }

  ngOnInit() {
  }

  changeMode($event) {
    this.modeChanged.emit(5);
  }

  changeBookId($event) {
    this.bookIdChanged.emit(this.bookId);
  }

  getBooks() {
    this.books = this.searchService.getBooks(this.url);
  }

  /*getBooks() {
    const url = 'http://localhost:8080/top6';
    const data = this.searchService.getService(url)
    .then(answer => this.addBooks(answer));
  }

  addBooks(answer) {
    for (let i = 0; i < answer.length; i++) {
      const book = {};
      book['id'] = answer[i].id; 
      book['title'] = answer[i].nazwa;
      book['author'] = answer[i].imie + ' ' + answer[i].nazwisko;
      book['price'] = answer[i].cena;
      this.books.push(book);
    }
  }*/
}
