CREATE OR ALTER PROCEDURE NewBook
	@Nazwa varchar(20),
	@ImieA varchar(20),
	@NazwiskoA varchar(20),
	@Wydawnictwo varchar(20),
	@Gatunek varchar(20),
	@Kategoria varchar(20),
	@Rok_wyd datetime,
	@Ocena int,
	@Strony int,
	@ISBN varchar(30),
	@Cena money,
	@Ilosc int
AS
BEGIN
	declare @id int
	set @id = (SELECT max(id)+1 FROM Ksiazka)
	declare @idwyd int
	declare @idgat int
	declare @idkat int
	declare @idaut int

	IF not exists (SELECT * FROM Autor WHERE Nazwisko = @NazwiskoA)
		BEGIN
			INSERT INTO Autor VALUES ((SELECT max(id)+1 FROM Autor),@ImieA,@NAzwiskoA)
		END
	IF not exists (SELECT * FROM Wydawnictwo WHERE Nazwa = @Wydawnictwo)
		BEGIN
			INSERT INTO Wydawnictwo VALUES ((SELECT max(id)+1 FROM Wydawnictwo),@Wydawnictwo)
		END
	IF not exists (SELECT * FROM Gatunek WHERE Nazwa = @gatunek)
		BEGIN
			INSERT INTO Gatunek VALUES ((SELECT max(id)+1 FROM Gatunek),@gatunek)
		END
	IF not exists (SELECT * FROM Kategoria WHERE Kat = @Kategoria)
		BEGIN
			INSERT INTO Kategoria VALUES ((SELECT max(id)+1 FROM Kategoria),@Kategoria)
		END

	set @idwyd = (SELECT id FROM Wydawnictwo WHERE Nazwa = @wydawnictwo)
	set @idgat = (SELECT id FROM Gatunek WHERE Nazwa = @Gatunek)
	set @idkat = (SELECT id FROM Kategoria WHERE Kat = @Kategoria)
	set @idaut = (SELECT id FROM Autor WHERE Nazwisko = @NAzwiskoA)

	IF not exists (SELECT * FROM Ksiazka WHERE Nazwa = @nazwa)
	INSERT INTO Ksiazka(id,Nazwa,Autor,Wydawnictwo,Gatunek,Kategoria,Rok_wyd,Ocena,Strony,ISBN,Cena,Ilosc) VALUES (@id,@Nazwa,@idaut,@idwyd,@idgat,@idkat,@Rok_wyd,@Ocena,@Strony,@ISBN,@Cena,@Ilosc)
	else raiserror('JU¯ ISTNIEJE',11,1)
END

exec NewBook 'Pogromca grzeszników','Grzegorz','Kalinowski','Muza','horror','Lektury','2017-11-06',6,560,'9788328707603',25.19,100
exec NewBook 'Coœ francuskiego','David','Gaboriaud','Pascal','kucharska','Poradniki','2017-11-06',8,256,'9788381031080',37.53,100
exec NewBook 'Smakoterapia','Iwona','Zasuwa','Edipresse Ksi¹¿ki','kucharska','Poradniki','2017-11-06',9,352,'9788381170604',26.57,100
exec NewBook 'Na krawêdzi wszystkiego','Jeff','Giles','IUVI','sensacja','Literatura piêkna','2017-11-06',5,384,'9788379660384',21.99,100
exec NewBook 'Swing Time','Zadie','Smith','Znak','romans','Literatura piêkna','2017-11-06',2,480,'9788324050130',31.79,100