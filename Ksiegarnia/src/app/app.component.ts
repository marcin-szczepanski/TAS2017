import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  books = null;

  mode = 0;

  answer = {};

  constructor(private http: Http) {
  
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

search(query) {
  let url = "http://localhost:8080/author";
  let data = this.getService(url)
  .then(answer => console.log(this.answer));
  return this.answer;
}

getBooks() {
  let query = "Query...";
  this.books = this.search(query);
  console.log(this.books)
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
