package session;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class UserMapper implements RowMapper<User>{
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
	      User r = new User(rs.getString(1), rs.getString(2),rs.getString(3),rs.getString(4));
	      return r;
	   }
		
	}
