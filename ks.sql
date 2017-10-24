CREATE DATABASE Ksiegarnia

USE Ksiegarnia

--drop database Ksiegarnia

--USUWANIE TABEL
drop table Koszyk
drop table Transakcja
drop table StatusTransakcji
drop table Uzytkownik
drop table Egzemplarz
drop table Ksiazka
drop table Wydawnictwo
drop table Gatunek
drop table Autor
drop table Kategoria
drop table Newsletter
--TWORZENIE TABEL

create table Wydawnictwo(
id int not null primary key,
Nazwa varchar(20));

create table Gatunek(
id int not null primary key,
Nazwa varchar(20));

create table StatusTransakcji(
id int not null primary key,
Nazwa varchar(20));

create table Uzytkownik(
id int not null primary key,
login varchar(20),
haslo varchar(20),
email varchar(30),
Imie varchar(20),
Nazwisko varchar(20),
Telefon varchar(9),
Adres varchar(50),
Miasto varchar(20),
Kod varchar(6) CHECK (kod like '[0-9][0-9]-[0-9][0-9][0-9]'));

create table Autor(
id int not null primary key,
Imie varchar(20),
Nazwisko varchar(30));

create table Kategoria(
id int not null primary key,
Kat varchar(50));

create table Ksiazka(
id int not null primary key,
Nazwa varchar(20),
Autor int references Autor(id),
Wydawnictwo int references Wydawnictwo(id),
Gatunek int references Gatunek(id),
Kategoria int references Kategoria(id),
Rok_wyd datetime,
Ocena int,
Strony int,
ISBN varchar(30),
Cena money,
Ilosc int);

create table Egzemplarz(
id int not null primary key,
id_ksiazka int references Ksiazka(id));

create table Transakcja(
id int not null primary key,
Uzytkownik int references Uzytkownik(id),
StatusTransakcji int references StatusTransakcji(id),
data_zakupu datetime);

create table Koszyk(
Egzemplarz int references Egzemplarz(id),
Transakcja int references Transakcja(id));


create table Newsletter(
id int not null primary key,
mail varchar(40));

--INSERTY

insert into Uzytkownik values(1,'admin','admin','email@admin.pl','Jakub','Lenartowicz','666666666','Sobieskiego 100/100','Pozna�','60-688')
insert into Uzytkownik values(2,'admin2','admin2','email2@admin.pl','Jakub2','Lenartowicz2','222222222','Batorego 200/200','Pozna�','62-622')

insert into Wydawnictwo values(1,'Albatros')
insert into Wydawnictwo values(2,'Czwarta Strona')

insert into Gatunek values(1,'kryminal')
insert into Gatunek values(2,'thriller')
insert into Gatunek values(3,'sensacja')

insert into Kategoria values(1,'Lektury');
insert into Kategoria values(2,'Literatura pi�kna');
insert into Kategoria values(3,'Literatura faktu');
insert into Kategoria values(4,'Literatura dzieci�ca');

insert into Autor values(1,'Harlan','Coben')
insert into Autor values(2,'Remigiusz','Mr�z')

insert into StatusTransakcji values(1,'Zakonczono')
insert into StatusTransakcji values(2,'W trakcie')


insert into Ksiazka values(1,'Schronienie',1,1,1,3,'2017-09-27',7,564,9788379767120,17.65,3);
insert into Ksiazka values(2,'Oskar�enie',2,2,3,3,'2017-09-27',7,368,9788365781703,20.80,3);

insert into Egzemplarz values(111,1)
insert into Egzemplarz values(112,1)
insert into Egzemplarz values(113,1)
insert into Egzemplarz values(211,2)
insert into Egzemplarz values(212,2)
insert into Egzemplarz values(213,2)


insert into Transakcja values(0001,1,2,'2014-06-12');
insert into Transakcja values(0002,2,2,'2016-01-30');


insert into Koszyk values(111,0001)
insert into Koszyk values(112,0001)
insert into Koszyk values(211,0002)

insert into Newsletter values(1,'email@admin.pl')
insert into Newsletter values(2,'email2@admin.pl')

--SELECTY
SELECT * FROM Uzytkownik
SELECT * FROM Ksiazka
SELECT * FROM Wydawnictwo
SELECT * FROM Gatunek
SELECT * FROM Egzemplarz
SELECT * FROM Kategoria
SELECT * FROM Transakcja
SELECT * FROM Koszyk
SELECT * FROM StatusTransakcji
SELECT * FROM Autor
SELECT * FROM Newsletter
