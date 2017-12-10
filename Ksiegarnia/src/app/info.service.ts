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
    this.book['title'] = answer.nazwa;
    this.book['author'] = answer.imie + ' ' + answer.nazwisko;
    this.book['price'] = answer.cena.slice(0, answer.cena.lastIndexOf('00'));
    this.book['publishing'] = answer.wydawnictwo;
    this.book['genre'] = answer.gatunek;
    this.book['category'] = answer.kategoria;
    this.book['year'] = answer.rok_wyd.slice(0, 4);
    this.book['grade'] = answer.ocena;
    this.book['pages'] = answer.strony;
    this.book['cover'] = 'miękka';
    this.book['isbn'] = answer.isbn;
    this.book['description'] = answer.opis;
    this.book['reviews'] = answer.recenzje;
  }

  sendData(url, body) {
    return this.http.post(this.mainUrl + url, body);
  }


  getSuma(addr) {
    const url = this.mainUrl + addr;
    this.http.get(url)
      .subscribe(data => this.setSuma(data.json()));
    console.log(this.suma);
    return this.suma;
  }

  setSuma(answer) {
    this.suma = answer;
  }

  ifExists(addr) {
    this.exist = false;
    const url = this.mainUrl + addr;
    this.http.get(url)
      .subscribe(data => this.setExists(data.json()));
    console.log(this.exist)
    return this.exist;
  }

  setExists(data) {
    this.exist = data;
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
    const body = { what: id, how: value, who: sessionStorage.getItem('id') };
    console.log(body);
    return this.http.post(this.mainUrl + 'addbasket', body);
  }
}
