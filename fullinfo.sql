CREATE OR ALTER VIEW FULLINFO(Id,Nazwa,Imie_autora,Nazwisko_autora,Wydawnictwo,Gatunek,Kategoria,Rok_wyd,Strony,ISBN,Cena,Ocena)
as
SELECT k.id,k.nazwa,a.Imie,a.Nazwisko,w.nazwa,g.nazwa,t.kat,k.rok_wyd,k.strony,k.isbn,k.cena,AVG(o.ocena)
FROM Ksiazka k
	JOIN Kategoria t ON k.Kategoria = t.id
	JOIN Autor a ON k.Autor = a.id
	JOIN Wydawnictwo w ON k.Wydawnictwo = w.id
	JOIN Gatunek g ON k.Gatunek = g.id
	LEFT JOIN Oceny o ON k.id = o.id_ks
	group by  k.id,k.nazwa,a.Imie,a.Nazwisko,w.nazwa,g.nazwa,t.kat,k.rok_wyd,k.strony,k.isbn,k.cena

	select * from FULLINFO
