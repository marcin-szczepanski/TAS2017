package book;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class SimpleReviewMapper implements RowMapper<SimpleReview>{
	public SimpleReview mapRow(ResultSet rs, int rowNum) throws SQLException {
	      SimpleReview r = new SimpleReview(rs.getString(1), rs.getString(2));
	      return r;
	   }
		
	}
