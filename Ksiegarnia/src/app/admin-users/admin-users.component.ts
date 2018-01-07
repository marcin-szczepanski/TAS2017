import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  allBooks = [];
  listLength = false;
  addUserForm = false;
  invalidRegister = false;
  editUserComponentVisibility = false;
  editUserId = undefined;

  pokaz() {
    this.infoService.showAllUsers().subscribe(
      d => {
        this.allBooks = d.json();
        if (this.allBooks.length > 0) {
          this.listLength = true;
        }
      }
    );
  }

  ukryj() {
    this.allBooks = [];
    this.listLength = false;
  }

  ukryjDodawanie() {
    this.addUserForm = false;
  }

  usun(id) {
    this.infoService.removeUser(id).subscribe(
      d => {
        this.pokaz();
      }
    );
  }

  add() {
    this.addUserForm = true;
  }

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
    }).subscribe(
      data => {
        this.pokaz();
        this.invalidRegister = false;
      },
      error => {
        this.invalidRegister = true;
        this.ngOnInit();
      },
      () => { }
      );
  }

  edit(id){
    this.editUserId = id;
    this.editUserComponentVisibility = true;
  }

  ukryjEdytowanie(){
    this.editUserComponentVisibility = false;
  }

  handleUserUpdated(){
    this.pokaz();
  }

  ngOnInit() {
  }

}
