import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  login = '';
  email = '';
  imie = '';
  nazwisko = '';
  telefon = '';
  ulica = '';
  miasto = '';
  kodPocztowy = '';
  results;
  constructor(private http: Http) { }

  ngOnInit() {
    const url = 'http://localhost:8080/profile?id=' + sessionStorage.getItem('id');
    this.http.get(url).subscribe(data => {
      this.results = data.json();
      this.login = this.results[0].login;
      this.email = this.results[0].email;
      this.imie = this.results[0].imie;
      this.nazwisko = this.results[0].nazwisko;
      this.telefon = this.results[0].telefon;
      this.ulica = this.results[0].adres;
      this.miasto = this.results[0].miasto;
      this.kodPocztowy = this.results[0].kod;
    });
  }
}
