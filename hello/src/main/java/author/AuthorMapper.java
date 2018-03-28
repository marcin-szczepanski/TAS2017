package author;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;


public class AuthorMapper implements RowMapper<Author>{
	   public Author mapRow(ResultSet rs, int rowNum) throws SQLException {
		      Author a = new Author(rs.getInt(1), rs.getString(2),rs.getString(3));
		      return a;
		   }
}
