import { Component, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  @Output() orderMode = new EventEmitter();
  @Output() orderSum = new EventEmitter();
  @Output() modeChanged = new EventEmitter();
  @Output() bookIdChanged = new EventEmitter();
  url = 'http://localhost:8080/';
  zamowienie = [];
  zamowienieDlugosc = 0;
  sum = 0;
  errorTooManyBooks = 0;
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getBasketContent();
  }

  deleteFromBasket(id_ks) {
    const deleteFromBasket = this.infoService.deleteFromBasketLogged(id_ks).subscribe(
      (data) => {
        this.getBasketContent();
      }
    );
  }

  editNumberOfCopies(value: any, id_ks, ilosc) {
    const getBookInfo = this.infoService.getBookInfo(id_ks).subscribe(
      data => { }
    )
    if (value.numberOfCopies === 0) {
      this.deleteFromBasket(id_ks);
    } else {
      const editNumberOfCopiesSub = this.infoService.editBasketItemLogged(id_ks, value.numberOfCopies).subscribe(
        data => {
          if (data.json() === true) {
            this.getBasketContent();
            this.errorTooManyBooks = 0;
          } else {
            this.errorTooManyBooks = 1;
          }
        }
      );
    }
  }

  getBasketContent() {
    if (sessionStorage.getItem('id') !== null && sessionStorage.getItem('id') !== undefined) {
      const getBasketItems = this.infoService.getBasketItemsLogged().subscribe(data => {
        this.zamowienie = data.json();
        this.zamowienieDlugosc = this.zamowienie.length;
      });
      const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data => {
        this.sum = data.json();
        localStorage.setItem('basket', this.sum.toString());
        this.orderSum.emit(this.sum);
      });
    } else {
    }
  }

  goToOrder() {
    this.orderMode.emit(7);
  }

  changeMode($event) {
    this.modeChanged.emit(5);
  }

  changeBookId(id_ks) {
    this.bookIdChanged.emit(id_ks);
  }
}

