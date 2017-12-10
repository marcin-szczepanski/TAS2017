--DODAJCIE NOWĄ KOLUMNĘ DO KOSZYKA
alter table Koszyk add ile int


--KOSZYK, GDY ELEMENTY W KOSZYKU NIE ZOSTA£Y ZATWIERDZONE PRZEZ "KUPUJ" STATUS=1, GDY JU¯ S¥ ZAKUPIONE STATUS=0
CREATE OR ALTER PROCEDURE AddIntoBasket
	@id_ks int,
	@id_kto int,
	@ilosc int
AS
BEGIN
IF NOT EXISTS (SELECT DISTINCT * FROM BASKET WHERE id_ks=@id_ks AND id_kto=@id_kto AND STATUS =1)
BEGIN
IF @ilosc <= (SELECT ilosc FROM Ksiazka WHERE id = @id_ks)
	BEGIN
		declare @id int
		declare @status int
		set @id = (SELECT max(id)+1 FROM Koszyk)
		set @status =1
 	INSERT INTO Koszyk VALUES (@id,@id_ks,@id_kto,@status,@ilosc)
	UPDATE Ksiazka SET Ilosc=Ilosc-@ilosc WHERE id=@id_ks
	END
	ELSE PRINT 'NIE MA TYLU KSIAZEK W MAGAZYNIE'
END
ELSE PRINT 'KSIAZKA JUZ JEST'
END

AddIntoBasket 5,3,3

CREATE OR ALTER PROCEDURE PurchaseBasket
	@id_kto int
AS
BEGIN
 UPDATE Koszyk SET status = 0	WHERE id_kto = @id_kto
END
 
PurchaseBasket 3


--WYŒWIETLANIE AKTUALNEGO KOSZYKA PRZED ZATWIERDZENIEM KUPNA(ABY ZOBACZYC HISTORIE ZMIENIC STATUS NA 0)

CREATE OR ALTER VIEW BASKET(id_kto,id_ks,Kto,Nazwa,Imie_aut,Nazw_aut,Ilosc,Cena,status)
AS
SELECT u.id,k.id,u.login,k.Nazwa,a.Imie,a.Nazwisko,b.ile,(b.ile*k.Cena),b.status
FROM Uzytkownik u 
 JOIN Koszyk b ON b.id_kto=u.id
 JOIN Ksiazka k ON k.id=b.id_ks
 JOIN Autor a ON k.Autor = a.id

 SELECT DISTINCT * FROM BASKET WHERE id=3 AND STATUS = 0

--ZMIANA ILOSCI KSIAZEK W KOSZYKU
 CREATE OR ALTER PROCEDURE MODIFYBASKET
 @id_kto int,
 @id_ks int,
 @ilosc int
 AS
 BEGIN
 declare @stanb int
 set @stanb = (SELECT ile FROM Koszyk WHERE id_ks=@id_ks AND id_kto=@id_kto AND STATUS=1)
 IF @ilosc <= (SELECT ilosc FROM Ksiazka WHERE id = @id_ks)
 BEGIN
 	IF @ilosc >= @stanb
	BEGIN
		UPDATE Koszyk SET ile=@ilosc WHERE id_ks=@id_ks AND id_kto=@id_kto AND STATUS=1
		UPDATE Ksiazka SET Ilosc=Ilosc-(@ilosc-@stanb) WHERE id=@id_ks
	END
	ELSE
	BEGIN
		UPDATE Koszyk SET ile=@ilosc WHERE id_ks=@id_ks AND id_kto=@id_kto AND STATUS=1
		UPDATE Ksiazka SET Ilosc=Ilosc-(@ilosc-@stanb) WHERE id=@id_ks	
	END
 END
 ELSE PRINT 'NIE MA TYLU KSIAZEK W MAGAZYNIE'
 END

 MODIFYBASKET kto,ksiazka,ile_zmienia

--USUWANIE KSIAZKI Z KOSZYKA
CREATE OR ALTER PROCEDURE DELETEFROMBASKET
@id_kto int,
@id_ks int
AS
BEGIN
DECLARE @ilosc int
SET @ilosc =(SELECT ile FROM Koszyk WHERE id_ks=@id_ks AND id_kto=@id_kto AND STATUS=1)
UPDATE Ksiazka SET Ilosc=Ilosc+@ilosc WHERE id=@id_ks
DELETE FROM Koszyk WHERE id_ks=@id_ks AND id_kto=@id_kto AND STATUS=1
END

DELETEFROMBASKET kto,ksiazka

 --SPRAWDZANIE CZY KSIĄŻKA JEST W KOSZYKU
 SELECT DISTINCT * FROM BASKET WHERE id_ks='podaj ksiazke' AND id_kto='czyj koszyk' AND STATUS =1
--WYŚWIETLENIE SUMY KWOTY W KOSZYKU
 SELECT SUM(Cena) FROM BASKET WHERE id_kto='kto' AND STATUS=1
