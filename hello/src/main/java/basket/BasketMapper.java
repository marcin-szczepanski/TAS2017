package basket;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;



public class BasketMapper implements RowMapper<Basket>{
	public Basket mapRow(ResultSet rs, int rowNum) throws SQLException {
	      Basket b = new Basket(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4),rs.getString(5), rs.getString(6),rs.getString(7), rs.getString(8), rs.getString(9));
	      return b;
	   }
}