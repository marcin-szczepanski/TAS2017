import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  zamowienie = [
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
    {
      title: 'title',
      author: 'author',
      price: 24.99
    },
  ];

  doZaplaty = 0;
  constructor() { }
  ngOnInit() {
  }
}
