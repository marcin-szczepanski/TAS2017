import { Component, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  @Output() orderMode= new EventEmitter();
  @Output() orderSum = new EventEmitter();
  newMode = 7;
  url = 'http://localhost:8080/';
  zamowienie = [];
  sum = 0;
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
      data =>{}
    )
    if (value.numberOfCopies === 0) {
      this.deleteFromBasket(id_ks);
    } else {
      const editNumberOfCopiesSub = this.infoService.editBasketItemLogged(id_ks, value.numberOfCopies).subscribe(
        data => {
          this.getBasketContent();
        }
      );
    }
  }

  getBasketContent() {
    if (sessionStorage.getItem('id') !== null && sessionStorage.getItem('id') !== undefined) {
      const getBasketItems = this.infoService.getBasketItemsLogged().subscribe(data => {
        this.zamowienie = data.json();
      });
      const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data => {
        this.sum = data.json();
        localStorage.setItem('basket', this.sum.toString());
        this.orderSum.emit(this.sum);
      });
    } else {
    }
  }

  goToOrder(){
    this.orderMode.emit(this.newMode);
  }
}

