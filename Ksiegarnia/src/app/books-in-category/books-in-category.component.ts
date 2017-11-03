import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-in-category',
  templateUrl: './books-in-category.component.html',
  styleUrls: ['./books-in-category.component.css']
})
export class BooksInCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
