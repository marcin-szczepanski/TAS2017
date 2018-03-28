package grade;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


public class GradeViewMapper implements RowMapper<GradeView>{
	public GradeView mapRow(ResultSet rs, int rowNum) throws SQLException {
	      GradeView g = new GradeView(rs.getString(1));
	      return g;
	   }
}

