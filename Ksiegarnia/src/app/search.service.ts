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
        .then(res => this.extractData(res))
        .catch((response: Response) => { this.errorHandler(response); })
  }

  errorHandler(response) {
    console.log(response.status)
  }

  private extractData(res: Response) {
    if (res.status == 200) {
      this.answer = res.json();
      return res.json() || {};
    }
    return {};
  }

  getBooks(addr) {
    const url = 'http://localhost:8080/' + addr;
    this.books = [];
    this.answer = {};
    if (addr == undefined) {
      return [];
    }
    const data = this.getService(url)
      .then(answer => this.addBooks(answer));
    return this.books;
  }

  addBooks(answer) {
    if (this.books.length !== 0) {
      this.books = [];
    }
    if (answer != undefined) {
      for (let i = 0; i < answer.length; i++) {
        const book = {};
        book['id'] = answer[i].id;
        book['title'] = answer[i].nazwa;
        book['author'] = answer[i].imie + ' ' + answer[i].nazwisko;
        book['price'] = answer[i].cena;
        book['grade'] = answer[i].ocena;
        if (answer.okladka == '') {
          book['okladka'] = '../assets/images/empty.png';
        } else {
          book['okladka'] = answer[i].okladka;
        }
        this.books.push(book);
      }
    }

  }

}
