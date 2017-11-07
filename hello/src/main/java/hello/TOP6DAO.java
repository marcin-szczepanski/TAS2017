package hello;

import java.util.ArrayList;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;



public class TOP6DAO {
   private DataSource dataSource;
   private JdbcTemplate jdbcTemplateObject;
   
   public void setDataSource(DataSource dataSource) {
      this.dataSource = dataSource;
      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
   }

   public ArrayList<TOP6> listTOP6() {
      String SQL = "Select * from TOP6";
      ArrayList <TOP6> top6 = (ArrayList<TOP6>) jdbcTemplateObject.query(SQL, new TOP6Mapper());
      return top6;
   }
}
