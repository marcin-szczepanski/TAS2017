import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SearchService {

  answer = {};
  books = [];

  constructor(private http: Http) {
    this.books = [];
  }

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
    const url = 'http://localhost:8080/' + addr;
    this.books = [];
    this.answer = {};
    const data = this.getService(url)
      .then(answer => this.addBooks(answer));
    return this.books;
  }

  addBooks(answer) {
    if (this.books.length !== 0) {
      this.books = [];
    }
    for (let i = 0; i < answer.length; i++) {
      const book = {};
      book['id'] = answer[i].id;
      book['title'] = answer[i].nazwa;
      book['author'] = answer[i].imie + ' ' + answer[i].nazwisko;
      book['price'] = answer[i].cena;
      book['grade'] = answer[i].ocena;
      this.books.push(book);
    }
  }

}
