package hello;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;


public class BookAuthorMapper implements RowMapper<BookAuthor>{
	   public BookAuthor mapRow(ResultSet rs, int rowNum) throws SQLException {
		      BookAuthor t = new BookAuthor(rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6),rs.getString(7));
		      return t;
		   }
}
