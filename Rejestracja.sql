--DODAWANIE U¯YTKOWNIKA (STATUS = 0 ZWYK£Y USER DOMYŒLNIE USTAWIONY, STATUS = 1 ADMIN)
CREATE OR ALTER PROCEDURE AddUser
	@login varchar(20),
	@haslo varchar(20),
	@email varchar(30),
	@imie varchar(20),
	@nazwisko varchar(20),
	@telefon varchar(9),
	@adres varchar(50),
	@miasto varchar(20),
	@kod varchar(6)
AS
BEGIN
 	declare @id int
	declare @status int
	set @id = (SELECT max(id)+1 FROM Uzytkownik)
	set @status = 0
	INSERT INTO Uzytkownik VALUES(@id,@login,@haslo,@email,@imie,@nazwisko,@telefon,@adres,@miasto,@kod,@status)
END

AddUser 'Noob2017','qwerty123','noob2017@email.com','Gal','Galowy','666666666','Kwiacista 200','Poznan','60-666'

--WYSWIETLENIE DANYCH POTRZEBNYCH DO LOGOWANIA
SELECT id,login,haslo FROM Uzytkownik WHERE login='wpisany login' AND haslo='wpisane haslo'

--WYŚWIETLENIE WSZYSTKICH DANYCH O UŻYTKOWNIKU
SELECT * FROM Uzytkownik WHERE id=???




--UPDATE INFORMACJI W TABELI UŻYTKOWNIK
UPDATE Uzytkownik SET 'gdzie'='nowa wartość' WHERE id='id użytkownika'

--PRZYKŁAD UŻYCIA
UPDATE Uzytkownik SET login='UPDATED' WHERE id=3

--SPRAWDZENIE WYNIKU
SELECT * FROM Uzytkownik
