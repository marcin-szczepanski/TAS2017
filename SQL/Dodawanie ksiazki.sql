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



exec NewBook 'Pogromca grzeszników','Grzegorz','Kalinowski','Muza','horror','Lektury','2017-11-06',560,'9788328707603',25.19,'Przykładowy opis',100,'https://muza.com.pl/2931/pogromca-grzesznikow.jpg'
exec NewBook 'Coś francuskiego','David','Gaboriaud','Pascal','kucharska','Poradniki','2017-11-06',256,'9788381031080',37.53,'Przykładowy opis',100,'http://pascal.pl/gfx/big/1507617918.3375.jpg'
exec NewBook 'Smakoterapia','Iwona','Zasuwa','Edipresse Książki','kucharska','Poradniki','2017-11-06',352,'9788381170604',26.57,'Przykładowy opis',100,'http://www.bogulandia.pl/pol_pl_Smakoterapia-kuchnia-roslinna-bez-glutenu-nabialu-i-cukru-4495_1.jpg'
exec NewBook 'Na krawędzi wszystkiego','Jeff','Giles','IUVI','sensacja','Literatura piękna','2017-11-06',384,'9788379660384',21.99,'Przykładowy opis',100,'http://iuvi.pl/wp-content/uploads/2017/08/cover_na-krawedzi_NOWOSC.png'
exec NewBook 'Swing Time','Zadie','Smith','Znak','romans','Literatura piękna','2017-11-06',480,'9788324050130',31.79,'Przykładowy opis',100,'https://img1.od-cdn.com/ImageType-400/0290-1/0BE/B93/84/%7B0BEB9384-5AA3-49C5-B903-C4F4F19BE1FD%7DImg400.jpg'
exec NewBook 'Małe życie','Hanya','Yanagihara','WAB','powieść obyczajowa','Literatura piękna','2015-11-06',913,'9788328037342',39.99,'Przykładowy opis',100,'https://www.swiatksiazki.pl/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/9/9/99906290140.jpg'
exec NewBook 'Dziewczyna z pociągu','Paula','Hawkings','Świat książki','thriller','Literatura piękna','2015-11-06',327,'9788380314511',35.99,'Przykładowy opis',100,'https://image.ceneo.pl/data/products/40178859/i-dziewczyna-z-pociagu-oprawa-miekka.jpg'
exec NewBook 'Matematyka 1. Poznać zrozumieć. Klasa I liceum i technikum','Alina','Przychoda','WSiP','podręcznik','Podręczniki','2009-11-06',368,'9788302105517',34.79,'Przykładowy opis',100,'http://ecsmedia.pl/c/poznac-zrozumiec-1-matematyka-podrecznik-zakres-podstawowy-liceum-technikum-b-iext35879566.jpg'
exec NewBook 'HTML i CSS. Zaprojektuj i zbuduj witrynę WWW','Jon','Duckett','Helion','IT','Poradniki','2014-11-06',504,'9788324665204',40.99,'Przykładowy opis',100,'https://static01.helion.com.pl/helion/okladki/326x466/htcsww.jpg'
exec NewBook 'Mali bohaterowie', 'Barbara', 'Gawryluk', 'Literatura', 'bajka dla dzieci', 'Literatura dziecięca', '2017-01-05', 64, '9788376725024', 15.99, 'Bajeczka dla dzieci', 100, 'https://webimage.pl/pics/771/5/d9788376725024.jpg'
exec NewBook 'Asteriks u Belgów Tom 24', 'Rene', 'Goscinny', 'Egmont', 'komiks', 'Komiksy', '2017-02-25', 48, '9788323761389', 13.50, 'Komiks o Asterixie i Obeliksie', 100, 'https://webimage.pl/pics/389/1/d628336.jpg'
exec NewBook 'Świat. Poema Naiwne', 'Czesław', 'Miłosz', 'Muchomor', 'poezja', 'Poezja', '2016-05-13', 72, '9788389774576', 17.99, 'Wiersze Czesława Miłosza', 100, 'https://webimage.pl/pics/576/4/d589824.jpg'
exec NewBook 'Mój pierwszy maraton', 'Tim', 'Rogers', 'BUK POWER', 'sport', 'Sport i turystyka', '2011-06-12', 214, '9788364131097', 5.29, 'Książka o przygotowaniach do maratonu', 100, 'https://webimage.pl/pics/977/1/d9788364131097.jpg'
