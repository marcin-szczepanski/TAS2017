CREATE OR ALTER PROCEDURE MODIFYBOOK
	@id int,
	@Nazwa varchar(100),
	@ImieA varchar(20),
	@NazwiskoA varchar(20),
	@Wydawnictwo varchar(20),
	@Gatunek varchar(20),
	@Kategoria varchar(20),
	@Rok_wyd datetime,
	@Strony int,
	@ISBN varchar(30),
	@Opis text,
	@Cena money
AS
BEGIN
	declare @idwyd int
	declare @idgat int
	declare @idkat int
	declare @idaut int

	IF not exists (SELECT * FROM Autor WHERE Imie = @ImieA AND Nazwisko = @NazwiskoA)
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
	set @idaut = (SELECT id FROM Autor WHERE Imie = @ImieA AND Nazwisko = @NAzwiskoA)

	UPDATE Ksiazka SET Nazwa=@Nazwa, Autor = @idaut, Wydawnictwo = @idwyd, Gatunek = @idgat , Kategoria = @idkat, Rok_wyd = @Rok_wyd, Strony = @Strony , ISBN = @ISBN, Opis = @Opis, Cena = @Cena
	WHERE id=@id
END

exec MODIFYBOOK	idksiazkidomofydikacji,'NazwaKsiazki','ImieAutora','NazwiskoAutora','Wydawnictwo','Gatunek','Kategoria','ROK',ile_stron,'ISBN','opis',cena(format 00.00)
