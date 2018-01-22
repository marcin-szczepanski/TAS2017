-- PROSZÊ O UTWORZENIE WSZYSTKICH TABEL I PROCEDUR, DOPIERO WTEDY MO¯NA WYPE£NIAC TABELE DANYMI( NAJPIERW DANE Z INSERTÓW{te tutaj} POTEM DANE Z PROCEDUR )

CREATE DATABASE ks
drop database ks

USE ks

--drop database Ksiegarnia

--USUWANIE TABEL
--drop table Uzytkownik
--drop table Ksiazka
--drop table Wydawnictwo
--drop table Gatunek
--drop table Autor
--drop table Kategoria
--drop table Newsletter
--drop table Recenzje
--drop table Oceny
--drop table Koszyk
--TWORZENIE TABEL

create table Wydawnictwo(
id int not null primary key,
Nazwa varchar(20));

create table Gatunek(
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
Kod varchar(6) CHECK (kod like '[0-9][0-9]-[0-9][0-9][0-9]'),
status int);

create table Autor(
id int not null primary key,
Imie varchar(20),
Nazwisko varchar(30));

create table Kategoria(
id int not null primary key,
Kat varchar(50));

create table Ksiazka(
id int not null primary key,
Nazwa varchar(100),
Autor int references Autor(id),
Wydawnictwo int references Wydawnictwo(id),
Gatunek int references Gatunek(id),
Kategoria int references Kategoria(id),
Rok_wyd datetime,
Strony int,
ISBN varchar(30),
Cena money,
Opis text,
Ilosc int,
Okladka varchar(300));

create table Recenzje(
id int not null primary key,
id_ks int references Ksiazka(id),
id_kto int references Uzytkownik(id),
tekst text);

create table Oceny(
id int not null primary key,
id_ks int references Ksiazka(id),
id_kto int references Uzytkownik(id),
ocena int);

create table Newsletter(
id int not null primary key,
mail varchar(40));

create table Koszyk(
id int not null primary key,
id_ks int references Ksiazka(id),
id_kto int references Uzytkownik(id),
status int DEFAULT 1,
ile int
);

--INSERTY
insert into Uzytkownik values(1,'anonim','anonim','---','---','---','---','---','---','00-000',0)
insert into Uzytkownik values(2,'admin','admin','email@admin.pl','Jakub','Lenartowicz','666666666','Sobieskiego 100/100','Pozna?','60-688',1)
insert into Uzytkownik values(3,'admin2','admin2','email2@admin.pl','Jakub2','Lenartowicz2','222222222','Batorego 200/200','Pozna?','62-622',0)

insert into Wydawnictwo values(1,'Albatros')
insert into Wydawnictwo values(2,'Czwarta Strona')
insert into Wydawnictwo values(3,'Muza')

insert into Gatunek values(1,'kryminal')
insert into Gatunek values(2,'thriller')
insert into Gatunek values(3,'sensacja')

insert into Kategoria values(1,'Lektury');
insert into Kategoria values(2,'Literatura piêkna');
insert into Kategoria values(3,'Literatura faktu');
insert into Kategoria values(4,'Literatura dzieciêca');
insert into Kategoria values(5,'Podrêczniki');
insert into Kategoria values(6,'Encyklopedie i s³owniki');
insert into Kategoria values(7,'Komiksy');
insert into Kategoria values(8,'Poezja');
insert into Kategoria values(9,'Poradniki');
insert into Kategoria values(10,'Sport i turystyka');
insert into Kategoria values(11,'Pozosta³e');

insert into Autor values(1,'Harlan','Coben')
insert into Autor values(2,'Remigiusz','Mróz')

insert into Ksiazka values(1,'Schronienie',1,1,1,3,'2017-09-27',564,9788379767120,17.65,'Przyk³adowy opis',100,'http://s.lubimyczytac.pl/upload/books/211000/211004/581384-352x500.jpg');
insert into Ksiazka values(2,'Oskarżenie',2,2,3,3,'2017-09-27',368,9788365781703,20.80,'Przyk³adowy opis',100,'okladka url');

insert into Newsletter values(1,'email@admin.pl')
insert into Newsletter values(2,'email2@admin.pl')

insert into Recenzje values(1,1,1,'Bardzo dobra ksiazka 2/10')
insert into Recenzje values(2,1,1,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum')
insert into Recenzje values(5,1,1,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum')

insert into Recenzje values(3,2,2,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum')
insert into Recenzje values(4,2,3,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum')

insert into Oceny values(1,1,1,2)
insert into Oceny values(2,1,1,10)
insert into Oceny values(3,2,2,10)
insert into Oceny values(4,3,3,8)

insert into Koszyk values(1,1,2,0,0)
insert into Koszyk values(2,2,3,default,0)

--SELECTY
SELECT * FROM Uzytkownik
SELECT * FROM Ksiazka
SELECT * FROM Wydawnictwo
SELECT * FROM Gatunek
SELECT * FROM Kategoria
SELECT * FROM Autor
SELECT * FROM Newsletter
SELECT * FROM Recenzje
SELECT * FROM Oceny
SELECT * FROM Koszyk


--TU TWORZY SIÊ WIDOK WSZYSTKICH KSI¥¯EK

CREATE OR ALTER VIEW ALLBOOKS(Id,Nazwa,Imie_autora,Nazwisko_autora,Kategoria,Cena,Okladka)
as
SELECT k.id,k.Nazwa,a.Imie,a.Nazwisko,t.Kat,k.Cena,k.Okladka
FROM Ksiazka k
	JOIN Kategoria t ON k.Kategoria = t.id
	JOIN Autor a ON k.Autor = a.id
	LEFT JOIN Recenzje r ON k.id = r.id_ks


	SELECT * FROM ALLBOOKS
