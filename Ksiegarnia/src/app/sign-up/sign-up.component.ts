import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerStatus = false;
  invalidRegister = false;
  constructor(private http: Http) { }

  onSubmit(value: any) {
    this.http.post('http://localhost:8080/register/', {
      login: value.login,
      haslo: value.haslo,
      email: value.email,
      imie: value.imie,
      nazwisko: value.nazwisko,
      telefon: value.telefon,
      adres: value.ulica,
      miasto: value.miasto,
      kod: value.kodPocztowy
    }).subscribe(data => {
      this.registerStatus = true;
      this.invalidRegister = false;
      this.ngOnInit();
    },
      error=>{
        this.invalidRegister = true;
        this.ngOnInit();
      },
      ()=>{}
    );
  }

  ngOnInit() {
  }

}
