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
	      String SQL = "select * from Ksiazka where id='"+ id+"'";
	      Book book = (Book) jdbcTemplateObject.query(SQL, new BookMapper());
	      return book;
	   }

}
