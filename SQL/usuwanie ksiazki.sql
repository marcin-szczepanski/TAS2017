CREATE OR ALTER PROCEDURE DELETEBOOK
	@id int
AS
BEGIN
delete from Oceny where id_ks=@id
delete from koszyk where id_ks=@id
delete from recenzje where id_ks=@id
delete from Ksiazka where id=@id
END

exec DELETEBOOK 2
