import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-in-search',
  templateUrl: './books-in-search.component.html',
  styleUrls: ['./books-in-search.component.css']
})
export class BooksInSearchComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit() {
  }

}
