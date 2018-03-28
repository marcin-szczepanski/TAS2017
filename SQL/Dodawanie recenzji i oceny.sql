CREATE or ALTER PROCEDURE NewRec
	@id_ks int,
	@id_kto int,
	@tekst text
AS
BEGIN
	declare @id int
	set @id = (SELECT max(id)+1 FROM Recenzje)
	INSERT INTO Recenzje VALUES (@id,@id_ks,@id_kto,@tekst)
END

NewRec 3,3,'Bardzo dobra ksi¹¿ka, polecam i podrawiam Piotr Fr¹czewski'

CREATE or ALTER PROCEDURE NewGrade
	@id_ks int,
	@id_kto int,
	@ocena int
AS
BEGIN
	declare @id int
	set @id = (SELECT max(id)+1 FROM Oceny)
	INSERT INTO Oceny VALUES (@id,@id_ks,@id_kto,@ocena)
END

NewGrade 3,3,7


--WYŒWIETLENIE OPISU KSI¥¯KI
SELECT Opis FROM Ksiazka WHERE id=1

--TU TWORZY SIÊ WIDOK WSZYSTKICH RECENZJI

CREATE OR ALTER VIEW REC(id,id_ks,id_kto,Recenzja)
as
SELECT r.id,k.id,r.id_kto,r.tekst
FROM Recenzje r JOIN Ksiazka k on r.id_ks = k.id

--TU TWORZY SIÊ WIDOK WSZYSTKICH OCEN
CREATE OR ALTER VIEW GRADES(id,id_ks,id_kto,Ocena)
as
SELECT o.id,k.id,o.id_kto,o.ocena
FROM Oceny o JOIN Ksiazka k on o.id_ks = k.id

--WYŒWIETLANIE RECENZJI, OCEN DLA DANEJ KSI¥¯KI
SELECT DISTINCT  * FROM  ALLBOOKS  WHERE id=1
SELECT Recenzja FROM REC WHERE id_ks = 1

SELECT TOP 6 AVG(ocena) as OcenaŒrednia
FROM Oceny
WHERE id_ks=1
GROUP BY id_ks
ORDER BY id_ks DESC
