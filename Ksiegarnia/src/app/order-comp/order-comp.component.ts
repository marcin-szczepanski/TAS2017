import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-order-comp',
  templateUrl: './order-comp.component.html',
  styleUrls: ['./order-comp.component.css']
})
export class OrderCompComponent implements OnInit {
  imie;
  nazwisko;
  ulica;
  miasto;
  kodPocztowy;
  zamowienie;
  sum;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getUserInfoFromService();
    this.getOrderFromService();
  }

  getUserInfoFromService(){
    const getUserInfo = this.infoService.getUserInfo().subscribe(data => {
      const results = data.json();
      this.imie = results[0].imie;
      this.nazwisko = results[0].nazwisko;
      this.ulica = results[0].adres;
      this.miasto = results[0].miasto;
      this.kodPocztowy = results[0].kod;
    });
  }

  getOrderFromService(){
    const getBasketItems = this.infoService.getBasketItemsLogged().subscribe(data => {
      this.zamowienie = data.json();
    });
    const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data => {
      this.sum = data.json();
      localStorage.setItem('basket', this.sum.toString());
    });
  }

}
