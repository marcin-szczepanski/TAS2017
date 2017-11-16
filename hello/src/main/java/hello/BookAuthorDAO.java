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
      String SQL = "Select * from TOP6";
      ArrayList <BookAuthor> top6 = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
      return top6;
   }
   
   public ArrayList<BookAuthor> listByCategory(String category) {
	      String SQL = "Select DISTINCT * from ALLBOOKS WHERE Kategoria ='"+ category+"'";
	      ArrayList <BookAuthor> list = (ArrayList<BookAuthor>) jdbcTemplateObject.query(SQL, new BookAuthorMapper());
	      return list;
	   }
}
