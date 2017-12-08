import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  @Output() queryChanged = new EventEmitter();
  @Output() modeChangedA = new EventEmitter();

  query = 'search?';

  constructor() {
    this.query = 'search?';
  }

  onSubmit(value: any) {
    this.setQuery(value);
  }

  setQuery(value) {
    if (value.title !== '') {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'title=' + value.title.trim().replace(' ', '+');
    }
    if (value.author_first !== '') {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'author_first=' + value.author_first.trim().replace(' ', '+');
    }
    if (value.author_last !== '') {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'author_last=' + value.author_last.trim().replace(' ', '+');
    }
    if (value.category !== '') {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'category=' + value.category.trim().replace(' ', '+');
    }
    if (value.publisher !== '') {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'publisher=' + value.publisher.trim().replace(' ', '+');
    }
    if (value.year !== '') {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'year=' + value.year.trim().replace(' ', '+');
    }
    if (value.pagesMin != 0) {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'pagesMin=' + value.pagesMin.toString().trim().replace(' ', '+');
    }
    if (value.pagesMax != 0) {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'pagesMax=' + value.pagesMax.toString().trim().replace(' ', '+');
    }
    /*if (value.isbn !== '') {
      if (this.query !== 'search?') {
        this.query += '&';
      }
      this.query += 'isbn=' + value.isbn.trim().replace(' ', '+');
    }*/
    this.changeQuery();
    this.changeMode();
  }

  ngOnInit() {
    this.query = 'search?';
  }

  changeQuery() {
    this.queryChanged.emit(this.query);
  }

  changeMode() {
    this.modeChangedA.emit(3);
  }

}
