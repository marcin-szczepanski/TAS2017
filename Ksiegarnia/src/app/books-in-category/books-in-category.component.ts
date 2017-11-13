import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-books-in-category',
  templateUrl: './books-in-category.component.html',
  styleUrls: ['./books-in-category.component.css'],
  providers: [
    SearchService
  ]
})
export class BooksInCategoryComponent implements OnChanges  {
  
  @Input() category : string;

  books = {};
  test = {};

  constructor(private searchService:SearchService) { 
    
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    const categoryChanges = changes['category'];
    if (categoryChanges) {
      console.log(this.searchService.works());
      this.books = this.searchService.getData(this.category);
     // this.test = this.searchService.search();
     // console.log(this.test);
    }
  }



}
