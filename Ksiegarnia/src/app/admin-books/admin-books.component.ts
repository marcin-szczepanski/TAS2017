import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {

  mode = 0;
  id;
  editbook = {};
  addbook = {
    nazwa: "",
    imie: "",
    nazwisko: "",
    cena: "",
    wydawnictwo: "",
    gatunek: "",
    kategoria: "",
    rok_wyd: "",
    strony: "",
    isbn: "",
    opis: "",
    ilosc: ""
  };
  bookToSend = {
    id: "",
    nazwa: "",
    imie: "",
    nazwisko: "",
    cena: "",
    wydawnictwo: "",
    gatunek: "",
    kategoria: "",
    rok_wyd: "",
    strony: "",
    isbn: "",
    opis: "",
    ilosc: ""
  };
  books = [];

  constructor(private infoService: InfoService) { this.mode = 0; }

  ngOnInit() {
    this.mode = 0;
  }

  getBook() {
    const url = 'book?id=';
    this.editbook = {};
    this.editbook = this.infoService.getBooks(url + this.id);
  }

  getAllBooks() {
    const url = 'books';
    this.books = [];
    this.books = this.infoService.getAllBooks(url);
  }

  pokaz() {
    this.mode = 3;
    this.getAllBooks();
  }

  add() {
    this.mode = 1;
  }

  edit(value: any) {
    if (value.ident === undefined) {
      this.id = value.id;
    } else {
      this.id = value.ident;
    }
    this.mode = 2;
    if (this.id.length !== 0) {
      this.getBook();
    } else {
      alert('Podaj identyfikator książki!');
    }
    
  }

  delete(value: any) {
    this.id = value.id;
    this.mode = 0;
    if (value.id.length !== 0) {
      alert('Usunięto!');
      this.infoService.remove(this.id);
    } else {
      alert('Podaj identyfikator książki!');
    }

  }

  dodawanie(value:any) {
    this.addbook = {
      nazwa: "",
      imie: "",
      nazwisko: "",
      cena: "",
      wydawnictwo: "",
      gatunek: "",
      kategoria: "",
      rok_wyd: "",
      strony: "",
      isbn: "",
      opis: "",
      ilosc: ""
    };
    this.addbook['nazwa'] = value.nazwa;
    this.addbook['imie'] = value.imie;
    this.addbook['nazwisko'] = value.nazwisko;
    this.addbook['cena'] = value.cena.replace(',', '.');
    this.addbook['wydawnictwo'] = value.wydawnictwo;
    this.addbook['gatunek'] = value.gatunek;
    this.addbook['kategoria'] = value.kategoria;
    this.addbook['rok_wyd'] = value.rok_wyd.toString();
    this.addbook['strony'] = value.strony.toString();
    this.addbook['isbn'] = value.isbn;
    this.addbook['opis'] = value.opis;
    this.addbook['ilosc'] = value.ilosc.toString();
    const isOk = this.infoService.add(this.addbook);
    if (isOk === false) {
      alert('Coś poszło nie tak. Spróbuj ponownie później.');
    } else {
      alert('Dodano!');
    }
  }

  edytowanie(value:any) {
    this.bookToSend['id'] = this.id;
    this.bookToSend['nazwa'] = value.nazwa;
    this.bookToSend['imie'] = value.imie;
    this.bookToSend['nazwisko'] = value.nazwisko;
    this.bookToSend['cena'] = value.cena.replace(',', '.');
    this.bookToSend['wydawnictwo'] = value.wydawnictwo;
    this.bookToSend['gatunek'] = value.gatunek;
    this.bookToSend['kategoria'] = value.kategoria;
    this.bookToSend['rok_wyd'] = value.rok_wyd.toString();
    this.bookToSend['strony'] = value.strony.toString();
    this.bookToSend['isbn'] = value.isbn;
    this.bookToSend['opis'] = value.opis;
    this.bookToSend['ilosc'] = value.ilosc.toString();
    const isOk = this.infoService.edit(this.bookToSend);
    if (isOk === false) {
      alert('Coś poszło nie tak. Spróbuj ponownie później.');
    } else {
      alert('Edytowano!');
    }
  }

}
