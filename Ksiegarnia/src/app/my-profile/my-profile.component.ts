import { Component, OnInit } from '@angular/core';
import { MyProfileServiceService } from './my-profile-service.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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
  results;
  loadUserInfo() {
    const subscription = this.MyProfileServiceService.showMyProfile().subscribe(
      function (response) {
        this.results = response.json();
        load(this.results);
      },
      function (error) { },
      function () {
        this.login = this.results[0].id;
        console.log(this);
      }

    );
    function load(results) {
      console.log(results[0].id);

    }
  }
  constructor(private MyProfileServiceService: MyProfileServiceService) {
    this.loadUserInfo();
  }



  ngOnInit() {

  }


}
