package newsletter;

import java.sql.ResultSet;
import java.sql.SQLException;

public class NewsletterMapper {
	public Newsletter mapRow(ResultSet rs, int rowNum) throws SQLException{
		Newsletter n = new Newsletter(rs.getString(1));
		return n;
	}
}
