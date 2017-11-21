package book;

import java.util.ArrayList;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;

import javax.sql.DataSource;

public class BookDAO {
   private DataSource dataSource;
   private JdbcTemplate jdbcTemplateObject;
   
   public void setDataSource(DataSource dataSource) {
      this.dataSource = dataSource;
      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
   }
   
   public Book getBook(String id) {
	      String SQL = "select * from FULLINFO where id='"+ id+"'";
	      Book book = ((ArrayList<Book>) jdbcTemplateObject.query(SQL, new BookMapper())).get(0);
	      String SQL2 = "SELECT p.login, tekst\r\n" + 
	      		"FROM Recenzje AS e\r\n" + 
	      		"    INNER JOIN Uzytkownik AS p\r\n" + 
	      		"    ON e.id_kto = p.id WHERE e.id_ks='"+id+"'";
	      ArrayList<SimpleReview> review = (ArrayList<SimpleReview>) jdbcTemplateObject.query(SQL2,  new SimpleReviewMapper());
	      book.setRecenzje(review);
	      String SQL3 = "select opis from Ksiazka where id="+id;
	      String desc = (String) jdbcTemplateObject.queryForObject(SQL3, String.class);
	      book.setOpis(desc);
	      return book;
	   }
}
