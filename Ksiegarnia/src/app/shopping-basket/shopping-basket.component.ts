import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  url = 'http://localhost:8080/';
  zamowienie = [];
  suma = 0;
  doZaplaty = 0;
  constructor(private infoService: InfoService) { }

  deleteFromBasket(e) {
    this.infoService.deleteFromBasket(e.target.id).subscribe(
      data => {
        this.ngOnInit();
      }
    );


  }

  ngOnInit() {
    if (sessionStorage.getItem('id') !== null) {
      this.infoService.getBasketItems().subscribe(data => {
        this.zamowienie = data.json();
      });
      this.infoService.getBasketSum().subscribe(data => {
        this.suma = data.json();
        localStorage.setItem('basket', this.suma.toString());
      });
    }
    else {
    }
  }
}

