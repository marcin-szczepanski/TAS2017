import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-books-in-category',
  templateUrl: './books-in-category.component.html',
  styleUrls: ['./books-in-category.component.css'],
  providers: [
    SearchService
  ]
})
export class BooksInCategoryComponent implements OnChanges  {
  
  @Input() category: string;

  @Output() modeChanged = new EventEmitter();
  @Output() bookIdChanged = new EventEmitter();

  modeCategory = 0;
  books = [];
  answer = {};
  bookId = undefined;
  url = 'books?category=';

  constructor(private searchService: SearchService) {
    this.books = [];
    this.getBooks(this.category);
  }

  changeMode($event) {
    this.modeChanged.emit(5);
  }

  changeBookId($event) {
    this.bookIdChanged.emit(this.bookId);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.books = [];
    const categoryChanges = changes['category'];
    if (categoryChanges) {
      this.getBooks(this.category);
    }
  }

  getBooks(category) {
    this.books = [];
    this.books = this.searchService.getBooks(this.url + category);
  }



}
