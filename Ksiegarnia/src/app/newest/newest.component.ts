import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  @Output() modeNewestChanged = new EventEmitter();
  @Output() bookIdChanged = new EventEmitter();

  modeNewest = 0;
  books = [];
  answer = {};
  bookId = undefined;

  constructor(private http: Http) { 
    this.getBooks();
  }

  ngOnInit() {
  }

  changeMode($event) {
    this.modeNewestChanged.emit(5);
  }

  changeBookId($event) {
    this.bookIdChanged.emit(this.bookId);
  }

  getBooks() {
    const url = "http://localhost:8080/top6";
    const data = this.getService(url)
    .then(answer => this.addBooks(answer));
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

  addBooks(answer) {
    for (let i = 0; i < answer.length; i++) {
      const book = {};
      book['id'] =answer[i].id; 
      book['title'] = answer[i].nazwa;
      book['author'] = answer[i].imie + ' ' + answer[i].nazwisko;
      book['price'] = answer[i].cena;
      this.books.push(book);
    }
  }
}
