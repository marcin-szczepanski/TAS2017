package bookauthor;

import java.util.ArrayList;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;

public class BookAuthorDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
		this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public ArrayList<BookAuthor> listTOP6() {
		String SQL = "SELECT DISTINCT TOP 6  b.*,AVG(o.ocena)\n" + "FROM ALLBOOKS b JOIN Oceny o ON b.id = o.id_ks\n"
				+ "group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena\n"
				+ "ORDER BY AVG(o.ocena) DESC";
		ArrayList<BookAuthor> top6 = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
		return top6;
	}

	public ArrayList<BookAuthor> listByCategory(String category) {
		String SQL = String.format("SELECT DISTINCT b.*,AVG(o.ocena)as Ocena\n"
				+ "FROM ALLBOOKS b LEFT JOIN Oceny o ON b.id = o.id_ks WHERE b.Kategoria='%s'\n"
				+ "group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena \n" + "ORDER BY b.Id ",
				category);
		ArrayList<BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
		return list;
	}

	public ArrayList<BookAuthor> advancedSearch(String title, String author, String category, String publisher,
			String year, String pagesMin, String pagesMax) {
		String SQL = "SELECT DISTINCT Id, Nazwa, Imie_autora, Nazwisko_autora,kategoria, Cena, Ocena from FULLINFO";
		String details = "";
		if (title != null && !title.trim().isEmpty()) {
			details = String.format("%sNazwa='%s' ", details, title);
		}
		if (author != null && !author.trim().isEmpty()) {
			details = String.format("%sNazwisko_autora='%s' ", details, author);
		}
		if (category != null && !category.trim().isEmpty()) {
			details = String.format("%sKategoria='%s' ", details, category);
		}
		if (publisher != null && !publisher.trim().isEmpty()) {
			details = String.format("%sWydawnictwo='%s' ", details, publisher);
		}
		if (year != null && !year.trim().isEmpty()) {
			details = String.format("%sRok_wyd='%s' ", details, year);
		}
		if (pagesMin != null && !pagesMin.trim().isEmpty()) {
			details = String.format("%sStrony>'%s' ", details, pagesMin);
		}
		if (pagesMax != null && !pagesMax.trim().isEmpty()) {
			details = String.format("%sStrony<'%s' ", details, pagesMax);
		}
		if (!details.trim().isEmpty()) {
			details = details.replaceAll("('[^']+') (\\S+[=<>])", "$1 AND $2");
			details = String.format(" WHERE %s", details);
			SQL = SQL + details;
		}
		//System.out.println(SQL);
		ArrayList<BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
		return list;
	}

	public ArrayList<BookAuthor> searchByKeyWord(String query, String category) {
		// sql
		return null;
	}
}
