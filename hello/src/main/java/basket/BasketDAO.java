package basket;

import java.util.ArrayList;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;


public class BasketDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
	   this.dataSource = dataSource;
	   this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public String addBasket(String ks, String kto) {
	    String SQL = "AddIntoBasket "+kto+","+ks+"";
	    jdbcTemplateObject.update(SQL);
	    return "Dodano";
	 }
		
	public ArrayList<Basket> showBasket(String kto,String status){
		String SQL ="SELECT DISTINCT * FROM BASKET WHERE id_kto="+kto+" AND status = "+status+"";
		ArrayList <Basket> b = (ArrayList<Basket>) jdbcTemplateObject.query(SQL, new BasketMapper());
		return b;
	}
	
}
