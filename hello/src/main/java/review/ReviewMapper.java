package review;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ReviewMapper {
	public Review mapRow(ResultSet rs, int rowNum) throws SQLException {
	      Review r = new Review(rs.getString(1), rs.getString(2),rs.getString(3));
	      return r;
	   }
}
