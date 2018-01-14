CREATE TABLE Okladki(
id int not null primary key,
id_ks int references Ksiazka(id),
odkladka text);


insert into Okladki values(1,5,'http://ecsmedia.pl/c/smakoterapia-w-iext50788129.jpg')



SELECT * FROM Okladki
