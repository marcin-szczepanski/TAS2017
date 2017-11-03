import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { AboutBookComponent } from './about-book/about-book.component';
import { BooksInCategoryComponent } from './books-in-category/books-in-category.component';
import { BooksInSearchComponent } from './books-in-search/books-in-search.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedSearchComponent,
    AboutBookComponent,
    BooksInCategoryComponent,
    BooksInSearchComponent,
    StaticPagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
