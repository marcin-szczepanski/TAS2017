import { Component, OnInit } from '@angular/core';
import { SignUpServiceService } from './sign-up-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  urlSignUp = 'session/';
  registerStatus = false;
  constructor(private SignUpServiceService: SignUpServiceService) { }

  onSubmit(value: any) {
    const toSend = {
      login: value.login,
      haslo: value.haslo,
      email: value.email,
      imie: value.imie,
      nazwisko: value.nazwisko,
      telefon: value.telefon,
      adres: value.ulica,
      miasto: value.miasto,
      kod: value.kodPocztowy
    };
    this.SignUpServiceService.signUp(this.urlSignUp, toSend);
    this.registerStatus = true;
  }

  ngOnInit() {
  }

}
