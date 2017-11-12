import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SearchService {

  books = [
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
    {
      title: "title",
      author: "author",
      price: "24.99 zł"
    },
  ];

  answer = {};

  constructor(private http: Http) { }

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

  search(query="") {
    let url = "http://localhost:8080/author";
    let data = this.getService(url)
    .then(answer => console.log(this.answer));
    return this.answer;
  }

  works() {
    return "works!";
  }

  getData(c = "", y = "", pa = "", a = "", t = "", pu = "") {
    console.log(c+y+pa+a+t+pu);
    return this.books;
  }

}
