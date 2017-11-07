import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  books = null;
  books2 = null;
  booksPrice = null;

  mode = 0;

  constructor(private http: Http) {

  }


search(query, callback) {
  let url = "http://localhost:8080/author";
  this.http.get(url).subscribe((response: Response)=>{
    let data = response.json();
    let books = data;
    this.books = data;
    callback(books);
  })
}

getBooks(callback) {
  let query = "Query...";
  this.search(query, callback);
  console.log(this.books);  
}

}
