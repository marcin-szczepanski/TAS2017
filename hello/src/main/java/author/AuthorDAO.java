package author;

import java.util.ArrayList;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;



public class AuthorDAO {
   private DataSource dataSource;
   private JdbcTemplate jdbcTemplateObject;
   
   public void setDataSource(DataSource dataSource) {
      this.dataSource = dataSource;
      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
   }

   public ArrayList<Author> listAuthors() {
      String SQL = "select * from Autor";
      ArrayList <Author> authors = (ArrayList<Author>) jdbcTemplateObject.query(SQL, new AuthorMapper());
      return authors;
   }
}
