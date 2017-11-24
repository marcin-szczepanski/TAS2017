import { Component, OnInit } from '@angular/core';
import { SignInServiceService } from './sign-in-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginStatus = true;
  urlSignIn = 'session/';
  rerender = false;
  constructor(private SignInServiceService: SignInServiceService) { }

  onSubmit(value: any) {
    const toSend = { login: value.login, password: value.haslo };
    const responseStatus = this.SignInServiceService.signIn(this.urlSignIn, toSend);
    if (responseStatus) {
      this.loginStatus = true;
      localStorage.setItem('name', JSON.stringify(value.login));
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit() {
  }

}
