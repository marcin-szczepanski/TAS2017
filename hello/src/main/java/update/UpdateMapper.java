package update;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;


public class UpdateMapper implements RowMapper<Update> {
	public Update mapRow(ResultSet rs, int rowNum) throws SQLException{
		Update u = new Update(rs.getString(1), rs.getString(2),rs.getString(3));
		return u;
	}

}
