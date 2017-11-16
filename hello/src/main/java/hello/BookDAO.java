package hello;

import java.util.ArrayList;
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
	      String SQL = "select * from FULLINFO where id='"+ id+"'";
	      Book book = ((ArrayList<Book>) jdbcTemplateObject.query(SQL, new BookMapper())).get(0);
	      String SQL2 = "select tekst from Recenzje where id_ks='"+id+"'";
	      ArrayList<String> review = (ArrayList<String>) jdbcTemplateObject.queryForList(SQL2, String.class);
	      book.setRecenzje(review);
	      String SQL3 = "select opis from Ksiazka where id="+id;
	      String desc = (String) jdbcTemplateObject.queryForObject(SQL3, String.class);
	      book.setOpis(desc);
	      return book;
	   }
}
