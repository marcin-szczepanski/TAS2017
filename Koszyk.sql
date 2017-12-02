--KOSZYK, GDY ELEMENTY W KOSZYKU NIE ZOSTA£Y ZATWIERDZONE PRZEZ "KUPUJ" STATUS=1, GDY JU¯ S¥ ZAKUPIONE STATUS=0
CREATE OR ALTER PROCEDURE AddIntoBasket
	@id_ks int,
	@id_kto int,
	@ilosc int
AS
BEGIN
	declare @id int
	declare @status int
	set @id = (SELECT max(id)+1 FROM Koszyk)
	set @status =1
 INSERT INTO Koszyk VALUES (@id,@id_ks,@ilosc,@id_kto,@status)
 UPDATE Ksiazka SET Ilosc=Ilosc-@ilosc WHERE id=@id_ks
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

CREATE OR ALTER VIEW BASKET(id,Kto,Nazwa,Imie_aut,Nazw_aut,Ilosc,Cena,status)
AS
SELECT u.id,u.login,k.Nazwa,a.Imie,a.Nazwisko,b.ile,(b.ile*k.Cena),b.status
FROM Uzytkownik u 
 JOIN Koszyk b ON b.id_kto=u.id
 JOIN Ksiazka k ON k.id=b.id_ks
 JOIN Autor a ON k.Autor = a.id

 SELECT DISTINCT * FROM BASKET WHERE id=3 AND STATUS = 0

