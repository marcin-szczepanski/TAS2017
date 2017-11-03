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

  books = [
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
  ];

}
