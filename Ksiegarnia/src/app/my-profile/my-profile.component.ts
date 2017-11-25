import { Component, OnInit } from '@angular/core';
import { MyProfileServiceService } from './my-profile-service.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
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
  // loadUserInfo() {
  //   const subscription = this.MyProfileServiceService.showMyProfile().subscribe(
  //     function (response) {
  //       this.results = response.json();
  //       load(this.results);
  //     },
  //     function (error) { },
  //     function () {
  //       this.login = this.results[0].id;
  //       console.log(this);
  //     }

  //   );
  //   function load(results) {
  //     console.log(results[0].id);

  //   }
  // }
  constructor(private http: Http) { }



  ngOnInit() {
    const url = 'http://localhost:8080/profile?id=' + sessionStorage.getItem('id');
    console.log(url);
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
    ;
  }


}
