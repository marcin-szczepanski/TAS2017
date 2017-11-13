import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  category = "";
  year = "";
  pages = "";
  author = "";
  title = "";
  publishing = "";
  answer = {};
  books = null;

  constructor(private searchService:SearchService) { }

  ngOnInit() {
  }

  search(category, year, pages, author, title, publishing) {
    /* let url = "http://localhost:8080/author";
    let data = this.getService(url)
    .then(answer => console.log(this.answer));
    return this.answer; */
    console.log(this.searchService.works());
    this.searchService.getData(category, year, pages, author, title, publishing);
    return {};
  }

  listBooks() {
    this.books = this.search(this.category, this.year, this.pages, this.author, this.title, this.publishing);
    console.log(this.books);
    console.log(this.category + " " + this.year + " " +  this.pages + " " +  this.author + " " +  this.title + " " + this.publishing);
  }

}
