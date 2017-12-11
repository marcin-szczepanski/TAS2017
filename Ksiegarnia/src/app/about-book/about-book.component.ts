import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.css']
})
export class AboutBookComponent implements OnChanges {

  @Input() ident;
  @Input() user;
  @Input() logged;
  @Output() orderSum = new EventEmitter();
  review = '';
  grade = 1;
  graded = false;
  howMuch = 1;
  howMuchOld = 0;
  book = {};
  productsObject = JSON.parse(localStorage.getItem('ProductsInBasket'));
  deletedBook = 0;
  sum = 0;
  errorTooManyBooks = 0;


  constructor(private infoService: InfoService) {
    if (this.productsObject === null) {
      this.productsObject = {};
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const idChanges = changes['ident'];
    if (idChanges) {
      this.book = {};
      if (idChanges) {
        this.getBooks();
      }
      const idGrade = JSON.parse(localStorage.getItem('WatchedBook' + `${this.ident}`));
      if (idGrade) {
        if (this.logged === false) {
          this.grade = idGrade.grade;
          this.graded = true;
        } else {
          // na razie nie ma obsługi pobrania oceny zalogowanego użytkownika
          this.grade = idGrade.grade;
          this.graded = true;
          // funkcja do pobierania oceny zalogowanego użytkownika
          // jeśli jest ocena w bazie to ją ustaw oraz graded=true a jeśli nie nic nie rób
        }
      }
    }
  }

  getBooks() {
    const url = 'book?id=';
    this.book = {};
    this.book = this.infoService.getBooks(url + this.ident);
  }

  saveReview() {
    if (this.review.trim() === '') {
      alert('Nie możesz dodać pustej recenzji!');
    } else {
      const url = 'review/';
      const toSend = { ks: this.ident, kto: this.user, text: this.review };
      this.infoService.sendData(url, toSend)
        .subscribe(data => this.getBooks());
    }
  }

  saveGrade() {
    const url = 'grade/';
    const toSend = { ks: this.ident, kto: this.user, ocena: this.grade };
    this.infoService.sendData(url, toSend)
      .subscribe(
      data => {
        this.getBooks();
        alert('Dziękujemy za ocenę!');
        const ob = { id: this.ident, grade: this.grade };
        localStorage.setItem('WatchedBook' + `${this.ident}`, JSON.stringify(ob));
        this.graded = true;
        this.getBooks();
      }
      );

  }
  // basket start
  addToBasket(value: any, id) {
    if (sessionStorage.getItem('id') !== null && sessionStorage.getItem('id') !== undefined) {
      this.addToBasketLogged(value.numberOfCopies, id);
      const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data => {
        this.sum = data.json();
        localStorage.setItem('basket', this.sum.toString());
        this.orderSum.emit(this.sum);
      });
    } else {
      this.addToBasketAnonymous(value.numberOfCopies, id);
    }
  }

  addToBasketLogged(numberOfCopies, id) {
    const addToBasketService = this.infoService.addToBasket(id, numberOfCopies).subscribe(
      data => {
        console.log(data.json());
        if (data.json() === true) {
          const getBasketSum = this.infoService.getBasketSumLogged().subscribe(data2 => {
            this.sum = data2.json();
            localStorage.setItem('basket', this.sum.toString());
            this.orderSum.emit(this.sum);
            this.errorTooManyBooks = 0;
          });
        } else {
          this.errorTooManyBooks = 1;
        }
      }
    );
  }

  addToBasketAnonymous(numberOfCopies, id) {
    let basketAnonimous = [];
    let exist = 0;
    let indexOfExist = null;
    if (localStorage.getItem('ProductsInBasket')) {
      basketAnonimous = JSON.parse(localStorage.getItem('ProductsInBasket'));
    };
    basketAnonimous.forEach((i, index) => {
      if (i.id === id) {
        exist = 1;
        indexOfExist = index;
        console.log(indexOfExist);
      }
    });
    if (exist !== 1) {
      basketAnonimous.push({ id: id, num: numberOfCopies });
    } else {
      basketAnonimous[indexOfExist].num += numberOfCopies;
    }
    localStorage.setItem('ProductsInBasket', JSON.stringify(basketAnonimous));
    console.log(basketAnonimous);
  }

  basketSumAnonymous() {
  }
  // Metody koszyka
  // Basket() {
  //   const x = localStorage.getItem('ProductsInBasket');
  //   if (x !== null) {
  //     const y = JSON.parse(x);
  //     if (y[`${this.ident}`] != null) {
  //       this.howMuchOld = y[`${this.ident}`].howMany;
  //     }
  //   }
  //   if (this.user == 1) { // obsługa koszyka użytkownika niezalogowanego
  //     this.basketAnonymous();
  //   } else { // użytkownik zalogowany
  //     this.basketLogged();
  //   }
  // }

  // basketAnonymous() {
  //   let howMuchUpdate = this.howMuch - this.howMuchOld;
  //   if (this.howMuch != 0) {
  //     this.deletedBook = 0;
  //     this.productsObject[`${this.ident}`] = {
  //       id: this.ident,
  //       howMany: this.howMuch,
  //       price: (this.howMuch * this.book['price']).toFixed(2)
  //     };
  //   } else {
  //     if (`${this.ident}` in this.productsObject) {
  //       delete this.productsObject[`${this.ident}`];
  //     }
  //     if (this.deletedBook > 1) {
  //       howMuchUpdate = 0;
  //     }
  //     this.howMuch = 0;
  //     this.howMuchOld = 0;
  //   }
  //   this.deletedBook += 1;
  //   localStorage.setItem('ProductsInBasket', JSON.stringify(this.productsObject));
  //   this.basketChanged.emit(howMuchUpdate * this.book['price']);
  // }

  // basketLogged() {
  //   this.isInBasket();
  //   if (this.isInBskt) {
  //     if (this.howMuch == 0) {
  //       const data = { what: this.ident, who: this.user };
  //       this.deleteFromBasket(data);
  //     } else {
  //       const data = { what: this.ident, how: this.howMuch, who: this.user };
  //       this.updateInBasket(data);
  //     }
  //   } else {
  //     const data = { what: this.ident, how: this.howMuch, who: this.user };
  //     this.addToBasket(data);
  //   }
  // }

  // // Metody obsługujące koszyk użytkownika zalogowanego
  // addToBasket(toSend) {
  //   const url = '/addbasket';
  //   this.infoService.sendData(url, toSend)
  //     .subscribe(data => {
  //       this.sumaKoszyka();
  //     })
  // }

  // deleteFromBasket(toSend) {
  //   const url = '/deletebasket';
  //   this.infoService.sendData(url, toSend)
  //     .subscribe(data => {
  //       this.sumaKoszyka();
  //     })
  // }

  // updateInBasket(toSend) {
  //   const url = '/updatebasket';
  //   const res = this.infoService.sendData(url, toSend);
  //   this.infoService.sendData(url, toSend)
  //     .subscribe(data => {
  //       this.sumaKoszyka();
  //     })
  // }

  // isInBasket() {
  //   this.isInBskt = false;
  //   const url = 'basket/exist?id_kto=' + this.user + '&id_ks=' + this.ident;
  //   this.isInBskt = this.infoService.ifExists(url);
  // }

  // sumaKoszyka() {
  //   const url = '/basket/sum?id_kto=' + this.user;
  //   this.basketChanged.emit(this.infoService.getSuma(url));
  // }

}
