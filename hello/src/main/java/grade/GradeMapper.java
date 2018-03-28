package grade;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GradeMapper {
	public Grade mapRow(ResultSet rs, int rowNum) throws SQLException {
	      Grade g = new Grade(rs.getString(1), rs.getString(2),rs.getString(3));
	      return g;
	   }
}
