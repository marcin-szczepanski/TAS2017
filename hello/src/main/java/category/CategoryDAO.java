package category;

import java.util.ArrayList;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;



public class CategoryDAO {
   private DataSource dataSource;
   private JdbcTemplate jdbcTemplateObject;
   
   public void setDataSource(DataSource dataSource) {
      this.dataSource = dataSource;
      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
   }

   public ArrayList<Category> listCategory() {
      String SQL = "select * from Kategoria";
      ArrayList <Category> category = (ArrayList<Category>) jdbcTemplateObject.query(SQL, new CategoryMapper());
      return category;
   }
}