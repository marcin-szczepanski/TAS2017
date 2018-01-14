

SELECT DISTINCT TOP 6  b.*,AVG(o.ocena)
FROM ALLBOOKS b JOIN Oceny o ON b.id = o.id_ks
group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena
ORDER BY AVG(o.ocena) DESC