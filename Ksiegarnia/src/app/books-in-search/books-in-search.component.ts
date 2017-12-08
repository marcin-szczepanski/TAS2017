import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-books-in-search',
  templateUrl: './books-in-search.component.html',
  styleUrls: ['./books-in-search.component.css'],
  providers: [
    SearchService
  ]
})
export class BooksInSearchComponent implements OnChanges {
  
  @Input() query;

  @Output() modeChangedS = new EventEmitter();
  @Output() bookIdChangedS = new EventEmitter();

  modeCategory = 0;
  books = [];
  answer = {};
  bookId = undefined;
  url = 'books/';

  constructor(private searchService: SearchService) {
    this.books = [];
    this.getBooks(this.query);
  }

  changeMode($event) {
    this.modeChangedS.emit(5);
  }

  changeBookId($event) {
    this.bookIdChangedS.emit(this.bookId);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.books = [];
    this.getBooks(this.query);
    const queryChanges = changes['query'];
    if (queryChanges) {
      this.getBooks(this.query);
    }
  }

  getBooks(query) {
    this.books = [];
    if (this.query != undefined) {
      if ((this.query != 'search?') && (this.query != 'keyWord?')) {
        this.books = this.searchService.getBooks(this.url + query);
      }
    }
  }

}
