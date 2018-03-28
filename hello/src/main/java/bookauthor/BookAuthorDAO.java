package bookauthor;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;
import static java.util.Comparator.comparing;

public class BookAuthorDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
		this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public ArrayList<BookAuthor> listTOP6() {
		String SQL = "SELECT DISTINCT TOP 6  b.*,AVG(o.ocena) as Ocena\n" + 
				"FROM ALLBOOKS b JOIN Oceny o ON b.id = o.id_ks\n" + 
				"group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena,b.Okladka\n" + 
				"ORDER BY AVG(o.ocena) DESC";
		ArrayList<BookAuthor> top6 = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
		return top6;
	}

	public ArrayList<BookAuthor> listByCategory(String category) {
		
		String SQL = String.format("SELECT DISTINCT b.*,AVG(o.ocena)as Ocena\n"
				+ "FROM ALLBOOKS b LEFT JOIN Oceny o ON b.id = o.id_ks WHERE b.Kategoria='%s'\n"
				+ "group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena, b.Okladka \n" + "ORDER BY b.Id ",
				category);
		ArrayList<BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
		return list;
	}

	public ArrayList<BookAuthor> advancedSearch(String title, String authorFirstName, String authorLastName,
			String category, String publisher, String year, String pagesMin, String pagesMax, String isbn) {
		String SQL = "SELECT DISTINCT Id, Nazwa, Imie_autora, Nazwisko_autora,kategoria, Cena, Okladka, Ocena from FULLINFO";
		String details = "";
		ArrayList<Object> parameters = new ArrayList<Object>();
		if (title != null && !title.trim().isEmpty()) {
			details = String.format("%sNazwa=? ", details);
			parameters.add(title);
		}
		if (authorFirstName != null && !authorFirstName.trim().isEmpty()) {
			details = String.format("%sImie_autora=? ", details);
			parameters.add(authorFirstName);
		}
		if (authorLastName != null && !authorLastName.trim().isEmpty()) {
			details = String.format("%sNazwisko_autora=? ", details);
			parameters.add(authorLastName);
		}
		if (category != null && !category.trim().isEmpty()) {
			details = String.format("%sKategoria=? ", details);
			parameters.add(category);
		}
		if (publisher != null && !publisher.trim().isEmpty()) {
			details = String.format("%sWydawnictwo=? ", details);
			parameters.add(publisher);
		}
		if (year != null && !year.trim().isEmpty()) {
			details = String.format("%sYEAR(Rok_wyd)=? ", details);
			parameters.add(year);
		}
		if (pagesMin != null && !pagesMin.trim().isEmpty()) {
			details = String.format("%sStrony>? ", details);
			parameters.add(pagesMin);
		}
		if (pagesMax != null && !pagesMax.trim().isEmpty()) {
			details = String.format("%sStrony<? ", details);
			parameters.add(pagesMax);
		}
		if (isbn != null && !isbn.trim().isEmpty()) {
			details = String.format("%sisbn=? ", details);
			parameters.add(isbn);
		}
		if (!details.trim().isEmpty()) {
			details = details.replaceAll("(\\?) (\\S+[=<>])", "$1 AND $2");
			details = String.format(" WHERE %s", details);
			SQL = SQL + details;
		}
		ArrayList<BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper(),parameters.toArray());
		return list;
	}

	public ArrayList<BookAuthor> searchByKeyWord(String query, String category) {
		String SQL = "SELECT f.id, f.Nazwa, f.Imie_autora, f. Nazwisko_autora, f.kategoria, f.cena, f.okladka, f.ocena, f.gatunek, f.isbn, k.Opis from FullINFO f JOIN Ksiazka k on f.id=k.id";
		if (category != null && !category.trim().isEmpty()) {
			SQL = String.format("%s WHERE f.kategoria='%s' ", SQL, category);
		}
		ArrayList<BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new KeyWordMapper(query));
		ArrayList<BookAuthor> books = new ArrayList<BookAuthor>();
		for (BookAuthor x : list) {
			if (x != null)
				books.add(x);
		}
		Collections.sort(books, comparing(BookAuthor::getAccuracy));
		Collections.reverse(books);
		return books;
	}

	public ArrayList<BookAuthor> getAllBooks() {
		String SQL = String.format("SELECT DISTINCT b.*,AVG(o.ocena)as Ocena\n"
				+ "FROM ALLBOOKS b LEFT JOIN Oceny o ON b.id = o.id_ks "
				+ "group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena,b.okladka \n" + "ORDER BY b.Id ");
		ArrayList<BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
		return list;
	}
}
