CREATE OR ALTER PROCEDURE NewBook
	@Nazwa varchar(100),
	@ImieA varchar(20),
	@NazwiskoA varchar(20),
	@Wydawnictwo varchar(20),
	@Gatunek varchar(20),
	@Kategoria varchar(20),
	@Rok_wyd datetime,
	@Strony int,
	@ISBN varchar(30),
	@Cena money,
	@Opis text,
	@Ilosc int,
	@Okladka text
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
	INSERT INTO Ksiazka(id,Nazwa,Autor,Wydawnictwo,Gatunek,Kategoria,Rok_wyd,Strony,ISBN,Cena,Opis,Ilosc,Okladka) VALUES (@id,@Nazwa,@idaut,@idwyd,@idgat,@idkat,@Rok_wyd,@Strony,@ISBN,@Cena,@Opis,@Ilosc,@Okladka)
	else raiserror('JU¯ ISTNIEJE',11,1)
END



exec NewBook 'Pogromca grzeszników','Grzegorz','Kalinowski','Muza','horror','Lektury','2017-11-06',560,'9788328707603',25.19,'Przyk³adowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Coœ francuskiego','David','Gaboriaud','Pascal','kucharska','Poradniki','2017-11-06',256,'9788381031080',37.53,'Przyk³adowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Smakoterapia','Iwona','Zasuwa','Edipresse Ksi¹¿ki','kucharska','Poradniki','2017-11-06',352,'9788381170604',26.57,'Przyk³adowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Na krawêdzi wszystkiego','Jeff','Giles','IUVI','sensacja','Literatura piêkna','2017-11-06',384,'9788379660384',21.99,'Przyk³adowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Swing Time','Zadie','Smith','Znak','romans','Literatura piêkna','2017-11-06',480,'9788324050130',31.79,'Przyk³adowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Fizyka dla szkol ponadgimnazjalnych','Maria','Fialkowska','ZamKor','podręcznik','Podreczniki','2010-11-06',375,'9788388830105',31.79,'Przykladowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Małe życie','Hanya','Yanagihara','WAB','powieść obyczajowa','Literatura piekna','2015-11-06',913,'9788328037342',39.99,'Przykladowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Dziewczyna z pociągu','Paula','Hawkings','Świat książki','thriller','Literatura piekna','2015-11-06',327,'9788380314511',35.99,'Przykladowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'Matematyka 1. Poznać zrozumieć. Klasa I liceum i technikum','Alina','Przychoda','WSiP','podręcznik','Podręczniki','2009-11-06',368,'9788302105517',34.79,'Przykladowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
exec NewBook 'HTML i CSS. Zaprojektuj i zbuduj witrynę WWW','Jon','Duckett','Helion','IT','Poradniki','2014-11-06',504,'9788324665204',40.99,'Przykladowy opis',100,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zygmunt_Vetulani_byVetulani2.jpg/240px-Zygmunt_Vetulani_byVetulani2.jpg'
