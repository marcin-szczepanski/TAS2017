CREATE OR ALTER PROCEDURE NEWS
	@email varchar(50)
as
BEGIN
	declare @id int
	set @id = (SELECT max(id)+1 FROM Newsletter)
	IF not exists (SELECT * FROM Newsletter WHERE mail = @email)
		BEGIN
			INSERT INTO Newsletter VALUES (@id,@email)
		END
END

EXEC NEWS 'testowy@gmail.com'
