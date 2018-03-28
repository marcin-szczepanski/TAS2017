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
  statusEdytujLogin = false;
  statusEdytujHaslo = false;
  statusEdytujEmail = false;
  statusEdytujImie = false;
  statusEdytujNazwisko = false;
  statusEdytujTelefon = false;
  statusEdytujUlice = false;
  statusEdytujMiasto = false;
  statusEdytujKod = false;
  statusZmian = false;
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

  wlaczEdytujLogin() {
    this.statusEdytujLogin = !this.statusEdytujLogin;
    this.statusZmian = false;
  }
  wylaczEdytujLogin() {
    this.statusEdytujLogin = !this.statusEdytujLogin;
    this.statusZmian = false;
  }
  edytujLogin(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'login', how: value.login, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujLogin = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujHaslo() {
    this.statusEdytujHaslo = !this.statusEdytujHaslo;
    this.statusZmian = false;
  }
  wylaczEdytujHaslo() {
    this.statusEdytujHaslo = !this.statusEdytujHaslo;
    this.statusZmian = false;
  }
  edytujHaslo(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'haslo', how: value.haslo, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujHaslo = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujEmail() {
    this.statusEdytujEmail = !this.statusEdytujEmail;
    this.statusZmian = false;
  }
  wylaczEdytujEmail() {
    this.statusEdytujEmail = !this.statusEdytujEmail;
    this.statusZmian = false;
  }
  edytujEmail(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'email', how: value.email, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujEmail = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujImie() {
    this.statusEdytujImie = !this.statusEdytujImie;
    this.statusZmian = false;
  }
  wylaczEdytujImie() {
    this.statusEdytujImie = !this.statusEdytujImie;
    this.statusZmian = false;
  }
  edytujImie(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'imie', how: value.imie, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujImie = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujNazwisko() {
    this.statusEdytujNazwisko = !this.statusEdytujNazwisko;
    this.statusZmian = false;
  }
  wylaczEdytujNazwisko() {
    this.statusEdytujNazwisko = !this.statusEdytujNazwisko;
    this.statusZmian = false;
  }
  edytujNazwisko(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'nazwisko', how: value.nazwisko, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujNazwisko = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujTelefon() {
    this.statusEdytujTelefon = !this.statusEdytujTelefon;
    this.statusZmian = false;
  }
  wylaczEdytujTelefon() {
    this.statusEdytujTelefon = !this.statusEdytujTelefon;
    this.statusZmian = false;
  }
  edytujTelefon(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'telefon', how: value.telefon, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujTelefon = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujUlice() {
    this.statusEdytujUlice = !this.statusEdytujUlice;
    this.statusZmian = false;
  }
  wylaczEdytujUlice() {
    this.statusEdytujUlice = !this.statusEdytujUlice;
    this.statusZmian = false;
  }
  
  edytujUlice(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'adres', how: value.ulica, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujUlice = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujMiasto() {
    this.statusEdytujMiasto = !this.statusEdytujMiasto;
    this.statusZmian = false;
  }
  wylaczEdytujMiasto() {
    this.statusEdytujMiasto = !this.statusEdytujMiasto;
    this.statusZmian = false;
  }
  edytujMiasto(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'miasto', how: value.miasto, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujMiasto = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }

  wlaczEdytujKod() {
    this.statusEdytujKod = !this.statusEdytujKod;
    this.statusZmian = false;
  }
  wylaczEdytujKod() {
    this.statusEdytujKod = !this.statusEdytujKod;
    this.statusZmian = false;
  }
  edytujKod(value: any) {
    const url = 'http://localhost:8080/update';
    const body = { what: 'kod', how: value.kod, who: sessionStorage.getItem('id').toString() };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujKod = false;
        this.ngOnInit();
        this.statusZmian = true;
      }
    );
  }


}
