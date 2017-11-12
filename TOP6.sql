CREATE OR ALTER VIEW TOP6(Id,Nazwa,Imie_autora,Nazwisko_autora,Ocena,Kategoria,Cena)
as
SELECT TOP 6 k.id,k.Nazwa,a.Imie,a.Nazwisko,k.Ocena,t.Kat,k.Cena
FROM Ksiazka k
	JOIN Kategoria t ON k.Kategoria = t.id
	JOIN Autor a ON k.Autor = a.id
ORDER BY k.ocena DESC

Select * from TOP6
