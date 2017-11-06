package hello;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;


public class CategoryMapper implements RowMapper<Category>{
	   public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
		      Category c = new Category(rs.getInt(1), rs.getString(2));
		      return c;
		   }
}
