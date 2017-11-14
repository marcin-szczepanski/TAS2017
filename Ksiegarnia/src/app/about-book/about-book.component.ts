import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.css']
})
export class AboutBookComponent implements OnChanges {

  @Input() ident;

  review = '';
  grade = 1;
  graded = false;
  howMuch = 1;

  book = {
    title: "Tytuł książki",
    author: "Jan Kowalski",
    publishing: "Wydawnictwo",
    genre: "powieść obyczajowa",
    category: "literatura piękna",
    year: "2009",
    grade: "7",
    pages: "250",
    cover: "miękka",
    isbn: "Kod ISBN",
    price: "24.99 zł",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget egestas turpis. Proin et neque gravida, vehicula urna vitae, tempus elit. Suspendisse potenti. Etiam fermentum dignissim sapien. Vivamus placerat sodales urna vel fringilla. Sed in pulvinar augue. Morbi facilisis elementum magna, et euismod libero auctor quis. Suspendisse vel feugiat ipsum. Quisque ultricies turpis in sollicitudin congue. Quisque laoreet, mi et posuere dictum, lectus sapien dapibus nibh, vitae pulvinar risus mi ut tortor. Donec ut mi auctor, rutrum nulla id, tempus diam. Sed ultrices risus sapien. Phasellus dui tellus, imperdiet eu facilisis ac, euismod vel dolor. Etiam suscipit suscipit tincidunt. Sed eu volutpat metus. Proin lacinia, diam nec lacinia scelerisque, justo justo tempus turpis, ac ultrices diam massa id erat. Vivamus sed condimentum felis, nec egestas ipsum. Integer molestie ipsum ac risus pulvinar bibendum. Aliquam suscipit aliquet mi, ac sodales erat placerat sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nisi nulla, tincidunt eget finibus et, finibus quis sem. Integer in odio a lacus interdum luctus. Pellentesque vehicula mattis posuere. Quisque vel pretium magna. Morbi quis odio sit amet tortor mollis fermentum at sit amet leo.",
    reviews: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget egestas turpis. Proin et neque gravida, vehicula urna vitae, tempus elit. Suspendisse potenti. Etiam fermentum dignissim sapien. Vivamus placerat sodales urna vel fringilla. Sed in pulvinar augue. Morbi facilisis elementum magna, et euismod libero auctor quis. Suspendisse vel feugiat ipsum. Quisque ultricies turpis in sollicitudin congue. Quisque laoreet, mi et posuere dictum, lectus sapien dapibus nibh, vitae pulvinar risus mi ut tortor. Donec ut mi auctor, rutrum nulla id, tempus diam. Sed ultrices risus sapien. Phasellus dui tellus, imperdiet eu facilisis ac, euismod vel dolor. Etiam suscipit suscipit tincidunt. Sed eu volutpat metus. Proin lacinia, diam nec lacinia scelerisque, justo justo tempus turpis, ac ultrices diam massa id erat. Vivamus sed condimentum felis, nec egestas ipsum. Integer molestie ipsum ac risus pulvinar bibendum. Aliquam suscipit aliquet mi, ac sodales erat placerat sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nisi nulla, tincidunt eget finibus et, finibus quis sem. Integer in odio a lacus interdum luctus. Pellentesque vehicula mattis posuere. Quisque vel pretium magna. Morbi quis odio sit amet tortor mollis fermentum at sit amet leo.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget egestas turpis. Proin et neque gravida, vehicula urna vitae, tempus elit. Suspendisse potenti. Etiam fermentum dignissim sapien. Vivamus placerat sodales urna vel fringilla. Sed in pulvinar augue. Morbi facilisis elementum magna, et euismod libero auctor quis. Suspendisse vel feugiat ipsum. Quisque ultricies turpis in sollicitudin congue. Quisque laoreet, mi et posuere dictum, lectus sapien dapibus nibh, vitae pulvinar risus mi ut tortor. Donec ut mi auctor, rutrum nulla id, tempus diam. Sed ultrices risus sapien. Phasellus dui tellus, imperdiet eu facilisis ac, euismod vel dolor. Etiam suscipit suscipit tincidunt. Sed eu volutpat metus. Proin lacinia, diam nec lacinia scelerisque, justo justo tempus turpis, ac ultrices diam massa id erat. Vivamus sed condimentum felis, nec egestas ipsum. Integer molestie ipsum ac risus pulvinar bibendum. Aliquam suscipit aliquet mi, ac sodales erat placerat sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nisi nulla, tincidunt eget finibus et, finibus quis sem. Integer in odio a lacus interdum luctus. Pellentesque vehicula mattis posuere. Quisque vel pretium magna. Morbi quis odio sit amet tortor mollis fermentum at sit amet leo."  
    ]
  };

  constructor() { }
  
  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const idChanges = changes['ident'];
    if (idChanges) {
      let idGrade = JSON.parse(localStorage.getItem('WatchedBook' + `${this.ident}`));
      if (idGrade) {
        this.grade = idGrade.grade;
        this.graded = true;
      }
      else {
        // funkcja do pobierania oceny zalogowanego użytkownika
        // jeśli jest ocena w bazie to ją ustaw oraz graded=true a jeśli nie nic nie rób
      }
    }
  }

  saveReview() {
    if (this.review.trim() == '') {
      alert('Nie możesz dodać pustej recenzji!');
    }
    else {
      alert('Dziękujemy za dodanie recenzji!');
      console.log(this.review);
    }
  }

  saveGrade() {
    alert('Dziękujemy za ocenę!');
    localStorage.setItem('WatchedBook' + `${this.ident}`, JSON.stringify({ id: this.ident, grade: this.grade }));
    this.graded = true;
    console.log(this.grade);
  }

  addToBasket() {
    console.log(this.ident);
    console.log(this.howMuch);
  }

}
