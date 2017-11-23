package user;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class UserInfoMapper implements RowMapper<UserInfo>{
	public UserInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
	      UserInfo r = new UserInfo(rs.getString(1), rs.getString(2),rs.getString(3),rs.getString(4), rs.getString(5),rs.getString(6),rs.getString(7), rs.getString(8),rs.getString(9), rs.getString(10),rs.getString(11));
	      return r;
	   }
		
	}
