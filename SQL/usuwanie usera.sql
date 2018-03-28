CREATE OR ALTER PROCEDURE DELETEUSER
	@id int
AS
BEGIN
delete from Koszyk where id_kto=@id
delete from recenzje where id_kto=@id
delete from oceny where id_kto=@id
delete from Uzytkownik where id=@id
END

exec DELETEBOOK 2
