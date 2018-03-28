package book;

import java.util.ArrayList;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

public class BookDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
		this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public Book getBook(String id) {
		String SQL = "select f.*,k.Ilosc,k.opis from fullinfo f join Ksiazka k on f.id=k.id where f.id=" + id;
		Book book = ((ArrayList<Book>) jdbcTemplateObject.query(SQL, new BookMapper())).get(0);
		String SQL2 = "SELECT p.login, tekst\r\n" + "FROM Recenzje AS e\r\n" + "    INNER JOIN Uzytkownik AS p\r\n"
				+ "    ON e.id_kto = p.id WHERE e.id_ks='" + id + "'";
		ArrayList<SimpleReview> review = (ArrayList<SimpleReview>) jdbcTemplateObject.query(SQL2,
				new SimpleReviewMapper());
		book.setRecenzje(review);
		return book;
	}

	public Boolean deleteBook(String id) {
		String SQL = "exec DELETEBOOK " + id;
		try {
			jdbcTemplateObject.update(SQL);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public Boolean addBook(Book b) {
		String SQL = String.format("exec NewBook '%s','%s','%s','%s','%s','%s','%s',%s,'%s',%s,'%s',%s,'%s'", b.nazwa,
				b.imie, b.nazwisko, b.wydawnictwo, b.gatunek, b.kategoria, b.rok_wyd, b.strony, b.isbn, b.cena, b.opis,
				b.ilosc,b.okladka);
		System.out.println(SQL);
		try {
			jdbcTemplateObject.update(SQL);
			return true;
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
	}

	public Boolean editBook(Book b) {
		String SQL = String.format("exec MODIFYBOOK	%s,'%s','%s','%s','%s','%s','%s','%s',%s,'%s','%s',%s,%s,'%s'", b.id,
				b.nazwa, b.imie, b.nazwisko, b.wydawnictwo, b.gatunek, b.kategoria, b.rok_wyd, b.strony, b.isbn, b.opis,
				b.cena, b.ilosc, b.okladka);
		try {
			jdbcTemplateObject.update(SQL);
			return true;
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
	}
}
