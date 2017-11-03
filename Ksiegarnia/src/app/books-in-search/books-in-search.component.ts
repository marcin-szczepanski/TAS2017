import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-in-search',
  templateUrl: './books-in-search.component.html',
  styleUrls: ['./books-in-search.component.css']
})
export class BooksInSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
