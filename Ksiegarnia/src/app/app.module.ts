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
import { NewestComponent } from './newest/newest.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderCompComponent } from './order-comp/order-comp.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';

import { SearchService } from './search.service';
import { InfoService } from './info.service';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedSearchComponent,
    AboutBookComponent,
    BooksInCategoryComponent,
    BooksInSearchComponent,
    StaticPagesComponent,
    NewestComponent,
    SignUpComponent,
    SignInComponent,
    MyProfileComponent,
    OrderCompComponent,
    ShoppingBasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SearchService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
