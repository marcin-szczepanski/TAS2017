package hello;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;


public class TOP6Mapper implements RowMapper<TOP6>{
	   public TOP6 mapRow(ResultSet rs, int rowNum) throws SQLException {
		      TOP6 t = new TOP6(rs.getString(1), rs.getString(2),rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6));
		      return t;
		   }
}
