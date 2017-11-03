import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

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
    }
  ];

}
