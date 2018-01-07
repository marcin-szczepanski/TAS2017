import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class InfoService {

  answer = {};
  book = {};
  suma = 0;
  mainUrl = 'http://localhost:8080/';
  res = true;
  exist = false;
  books = [];

  constructor(private http: Http) { }

  getService(url: string): Promise<any> {
    return this.http
      .get(url)
      .toPromise()
      .then(res => this.extractData(res));
  }

  private extractData(res: Response) {
    this.answer = res.json();
    return res.json() || {};
  }

  getBooks(addr) {
    this.book = {};
    const url = this.mainUrl + addr;
    const data = this.getService(url)
      .then(answer => {
        if (answer.ocena === null) {
          answer.ocena = 0;
        }
        this.addBooks(answer);
      });
    return this.book;
  }

  addBooks(answer) {
    this.book['id'] = answer.id;
    this.book['tytul'] = answer.nazwa;
    this.book['imie'] = answer.imie;
    this.book['nazwisko'] = answer.nazwisko;
    this.book['price'] = answer.cena.slice(0, answer.cena.lastIndexOf('00'));
    this.book['wydawnictwo'] = answer.wydawnictwo;
    this.book['gatunek'] = answer.gatunek;
    this.book['kategoria'] = answer.kategoria;
    this.book['rok_wyd'] = answer.rok_wyd.slice(0, 4);
    this.book['grade'] = answer.ocena;
    this.book['strony'] = answer.strony;
    this.book['cover'] = 'miękka';
    this.book['isbn'] = answer.isbn;
    this.book['opis'] = answer.opis;
    this.book['reviews'] = answer.recenzje;
    this.book['ilosc'] = answer.ilosc;
  }

  sendData(url, body) {
    this.http.post(this.mainUrl + url, body)
      .subscribe(data => this.sendResponse(data));
    return this.res;
  }

  deleteFromBasketLogged(id) {
    return this.http.post(this.mainUrl + 'deletebasket', { what: id, who: sessionStorage.getItem('id') })
  }

  getBasketItemsLogged() {
    return this.http.get(this.mainUrl + 'basket?kto=' + sessionStorage.getItem('id') + '&status=1');
  }

  getBasketSumLogged() {
    return this.http.get(this.mainUrl + 'basket/sum?id_kto=' + sessionStorage.getItem('id'));
  }

  editBasketItemLogged(id, value) {
    return this.http.post(this.mainUrl + 'updatebasket', { what: id, who: sessionStorage.getItem('id'), how: value });
  }

  getBookInfo(id) {
    return this.http.get(this.mainUrl + 'book?id=' + id);
  }

  getUserInfo() {
    return this.http.get(this.mainUrl + 'profile?id=' + sessionStorage.getItem('id'));
  }

  addToBasket(id, value) {
    return this.http.post(this.mainUrl + 'addbasket', { what: id, who: sessionStorage.getItem('id'), how: value });
  }

  finalizeOrder() {
    return this.http.get(this.mainUrl + 'buy?kto=' + sessionStorage.getItem('id'));
  }

  signIn(body) {
    return this.http.post(this.mainUrl + 'session/', body);
  }
  // Panel admina

  getAllBooks(addr) {
    this.books = [];
    const url = this.mainUrl + addr;
    const data = this.getService(url)
      .then(answer => {
        this.addAllBooks(answer);
      });
    return this.books;
  }

  addAllBooks(answer) {
    for (let book of answer) {
      const b = {};
      b['id'] = book.id;
      b['nazwa'] = book.nazwa;
      b['imie'] = book.imie;
      b['nazwisko'] = book.nazwisko;
      this.books.push(b);
    }
  }

  sendResponse(data) {
    if (data.status === 200) {
      this.res = true;
    } else {
      this.res = false;
    }
  }

  remove(id) {
    const url = this.mainUrl + 'book/delete?id=' + id;
    this.http.get(url)
      .subscribe(data => this.sendResponse(data));
  }

  edit(body) {
    const url = 'book/edit';
    const isOk = this.sendData(url, body);
    return isOk;
  }

  add(body) {
    const url = 'book/add';
    const isOk = this.sendData(url, body);
    return isOk;
  }

  isAdmin(id) {
    return this.http.get(this.mainUrl + '/user/privilages?id=' + id);
  }

  showAllUsers() {
    return this.http.get(this.mainUrl + '/users');
  }

  removeUser(id) {
    return this.http.get(this.mainUrl + '/user/delete?id=' + id);
  }

  onSubmit(value: any) {
    this.http.post(this.mainUrl + '/register', {
      login: value.login,
      haslo: value.haslo,
      email: value.email,
      imie: value.imie,
      nazwisko: value.nazwisko,
      telefon: value.telefon,
      adres: value.ulica,
      miasto: value.miasto,
      kod: value.kodPocztowy
    }).subscribe();
  }

  addUser(body) {
    return this.http.post(this.mainUrl + '/register/', body);
  }

  getProfile(id) {
    return this.http.get(this.mainUrl + '/profile?id=' + id);
  }

  update(body){
    return this.http.post(this.mainUrl + '/update' , body);
  }
}
