import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnChanges {
  @Input() user;
  @Output() userUpdated = new EventEmitter();

  login = '';
  email = '';
  imie = '';
  nazwisko = '';
  telefon = '';
  ulica = '';
  miasto = '';
  kodPocztowy = '';
  admin = '';
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
  statusEdytujAdmin = false;
  statusZmian = false;
  constructor(private http: Http) { }

  ngOnChanges() {
    this.ngOnInit();
  }

  ngOnInit() {
    const url = 'http://localhost:8080/profile?id=' + this.user;
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
      if (this.results[0].status === '1') {
        this.admin = 'admin';
      } else {
        this.admin = 'user';
      }
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
    const body = { what: 'login', how: value.login, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujLogin = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'haslo', how: value.haslo, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujHaslo = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'email', how: value.email, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujEmail = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'imie', how: value.imie, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujImie = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'nazwisko', how: value.nazwisko, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujNazwisko = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'telefon', how: value.telefon, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujTelefon = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'adres', how: value.ulica, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujUlice = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'miasto', how: value.miasto, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujMiasto = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
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
    const body = { what: 'kod', how: value.kod, who: this.user };
    this.http.post(url, body).subscribe(data => { },
      error => { },
      () => {
        this.statusEdytujKod = false;
        this.ngOnInit();
        this.statusZmian = true;
        this.userUpdated.emit(true);
      }
    );
  }

  wlaczEdytujAdmin() {
    this.statusEdytujAdmin = !this.statusEdytujAdmin;
    this.statusZmian = false;
  }
  wylaczEdytujAdmin() {
    this.statusEdytujAdmin = !this.statusEdytujAdmin;
    this.statusZmian = false;
  }
  edytujAdmin(value: any) {
    if (value.admin === 'Admin' || value.admin === 'admin') {
      const url = 'http://localhost:8080/update';
      const body = { what: 'status', how: 1, who: this.user };
      this.http.post(url, body).subscribe(data => { },
        error => { },
        () => {
          this.statusEdytujAdmin = false;
          this.ngOnInit();
          this.statusZmian = true;
          this.userUpdated.emit(true);
        }
      );
    } else {
      const url = 'http://localhost:8080/update';
      const body = { what: 'status', how: 0, who: this.user };
      this.http.post(url, body).subscribe(data => { },
        error => { console.log(error); },
        () => {
          this.statusEdytujAdmin = false;
          this.ngOnInit();
          this.statusZmian = true;
          this.userUpdated.emit(true);
        }
      );
    }

  }



}
