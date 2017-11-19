import { Component, OnInit } from '@angular/core';
import { SignInServiceService } from './sign-in-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  urlSignIn = 'session/';
  constructor(private SignInServiceService: SignInServiceService) { }

  onSubmit(value: any) {
    const toSend = { login: value.login, password: value.haslo };
    const res = this.SignInServiceService.signIn(this.urlSignIn, toSend);
  }

  ngOnInit() {
  }

}
