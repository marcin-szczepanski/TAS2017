--KOSZYK, GDY ELEMENTY W KOSZYKU NIE ZOSTA£Y ZATWIERDZONE PRZEZ "KUPUJ" STATUS=1, GDY JU¯ S¥ ZAKUPIONE STATUS=0
CREATE OR ALTER PROCEDURE AddIntoBasket
	@id_ks int,
	@id_kto int
AS
BEGIN
	declare @id int
	declare @status int
	set @id = (SELECT max(id)+1 FROM Koszyk)
	set @status =1
 INSERT INTO Koszyk VALUES (@id,@id_ks,@id_kto,@status)
END

AddIntoBasket 3,3

CREATE OR ALTER PROCEDURE PurchaseBasket
	@id_b int
AS
BEGIN
 declare @ilosc int
 set @ilosc = (SELECT Ilosc FROM Ksiazka WHERE id=@id_b)
 UPDATE Koszyk SET status = 0	WHERE id = @id_b
 UPDATE Ksiazka SET ILosc = @ilosc WHERE id = @id_b
END
 
PurchaseBasket 3

--WYŒWIETLANIE AKTUALNEGO KOSZYKA PRZED ZATWIERDZENIEM KUPNA(ABY ZOBACZYC HISTORIE ZMIENIC STATUS NA 0)
CREATE OR ALTER VIEW BASKET(id_ks,id_kto,Nazwa,Imie_autora,Nazwisko_autora,Kategoria,Cena,Status)
AS
SELECT b.id_ks,b.id_kto,k.Nazwa,a.Imie,a.NAzwisko,t.Kat,k.Cena,b.status
FROM Ksiazka k
	JOIN Koszyk b ON b.id_ks = k.id
	JOIN Kategoria t ON k.Kategoria = t.id
	JOIN Autor a ON k.Autor = a.id
	JOIN Recenzje r ON k.id = r.id_ks

SELECT DISTINCT * FROM BASKET WHERE id_kto=3 AND status = 1
