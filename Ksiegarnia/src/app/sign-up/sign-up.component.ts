import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerStatus = false;
  invalidRegister = false;
  constructor(private infoService: InfoService) { }

  onSubmit(value: any) {
    this.infoService.addUser({
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
    },
      error => {
        this.invalidRegister = true;
      },
      () => { }
      );
  }

  ngOnInit() {
  }

}
