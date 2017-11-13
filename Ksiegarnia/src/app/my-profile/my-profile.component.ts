import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  login = 'jakislogin123';
  email = 'jakisemail123@costam.pl';
  imie = 'jakiesimie';
  nazwisko = 'jakiesnazwisko';
  telefon = '997';
  ulica = 'jakasulica';
  miasto = 'jakiesmiesto';
  kodPocztowy = '12-123';
  constructor() { }

  ngOnInit() {
  }


}
