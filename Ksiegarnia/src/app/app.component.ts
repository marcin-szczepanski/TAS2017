import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = {};
  category = '';
  query = '';
  email = '';
  mode = 0;
  idBook = -1;
  categorySearch = '';
  answer = {};

  constructor() {}

  setMode(data) {
    this.mode = data;
  }

  setIdBook(data) {
    this.idBook = data;
  }

  /*getService(url: string): Promise<any> {
    return this.http
        .get(url)
        .toPromise()
        .then(res => this.extractData(res));
  }

  private extractData(res: Response) {
    this.answer = res.json();;
    return res.json() || {};
  }

  search(category, query) {
    let url = "http://localhost:8080/author";
    let data = this.getService(url)
    .then(answer => console.log(this.answer));
    return this.answer;
  }

  getBooks() {
    this.books = this.search(this.category, this.query);
    console.log(this.books);
    console.log(this.category + " " + this.query);
  }*/

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  saveEmail() {
    if (this.validateEmail(this.email)) {
      console.log(this.email);
      alert('Dziękujemy za zapisanie się do newslettera!');
    }
    else {
      alert('Podaj poprawny adres email!');
    }
  }

}
