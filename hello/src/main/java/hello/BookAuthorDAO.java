package hello;

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
      String SQL = "SELECT DISTINCT TOP 6  b.*,AVG(o.ocena)\n" + 
      		"FROM ALLBOOKS b JOIN Oceny o ON b.id = o.id_ks\n" + 
      		"group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena\n" + 
      		"ORDER BY AVG(o.ocena) DESC";
      ArrayList <BookAuthor> top6 = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
      return top6;
   }
   
   public ArrayList<BookAuthor> listByCategory(String category) {
	      String SQL = String.format("SELECT DISTINCT b.*,AVG(o.ocena)as Ocena\n" + 
	      		"FROM ALLBOOKS b LEFT JOIN Oceny o ON b.id = o.id_ks WHERE b.Kategoria='%s'\n" + 
	      		"group by b.id,b.Imie_autora,b.Nazwisko_autora,b.Kategoria,b.Nazwa,b.Cena \n" + 
	      		"ORDER BY b.Id ",category);
	      ArrayList <BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
	      return list;
	   }
}
