import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.css']
})
export class AboutBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  book = {
    title: "title",
    author: "author",
    price: "24.99 zł"
  };

}
