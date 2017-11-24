package review;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

public class ReviewDAO {  
private DataSource dataSource;
private JdbcTemplate jdbcTemplateObject;

public void setDataSource(DataSource dataSource) {
   this.dataSource = dataSource;
   this.jdbcTemplateObject = new JdbcTemplate(dataSource);
}
public String createReview(String ks, String kto, String text) {
    String SQL = "NewRec "+ks+","+kto+",'"+text+"'";
    jdbcTemplateObject.update(SQL);
    return "Utworzono";
 }

}
