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

  constructor(private http: Http) {}

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
    this.http.post(this.mainUrl + url, body)
      .subscribe(data => this.sendResponse(data));
    return this.res;
  }

  sendResponse(data) {
    if (data.status == 200) {
      this.res = true;
    } else {
      this.res = false;
    }
  }

  getSuma(addr) {
    const url = this.mainUrl + addr;
    this.http.get(url)
      .subscribe(data => this.setSuma(data.json()));
    console.log(this.suma); // problem z asynchronicznością
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
    console.log(this.exist) // problem z asynchronicznością
    return this.exist;
  }

  setExists(data) {
    this.exist = data;
  }

}
