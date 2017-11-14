import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = {};
  category = "";
  query = "";
  email = "";
  mode = 0;
  idBook = -1;
  categorySearch = "";
  answer = {};

  constructor(private http: Http) {
  
  }

  setMode(data) {
    this.mode = data;
  }

  setIdBook(data) {
    this.idBook = data;
  }

  getService(url: string): Promise<any> {
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
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  saveEmail() {
    if (this.validateEmail(this.email)) {
      console.log(this.email);
      alert("Dziękujemy za zapisanie się do newslettera!");
    }
    else {
      alert("Podaj poprawny adres email!");
    }
  }


  /*search(callback) {
    let url = "http://localhost:8080/author";
    this.http.get(url).subscribe((response: Response)=>{
      let data = response.json();
      let books = data;
      this.books = books;
      callback(books);
    })
  }

  getBooks(callback = (books) => {this.books = books;}) {
    this.search(callback);
    return this.books;
  }

  showBooks() {
    console.log(this.getBooks());
  }
  */

}
