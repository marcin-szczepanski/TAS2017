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

	public String addBasket(String id, String kto, String ilosc) {
		String SQLch ="SELECT DISTINCT * FROM BASKET WHERE id_ks='"+id+"' AND id_kto='"+kto+"' AND STATUS=1";
		try {
			Basket b = (Basket)jdbcTemplateObject.queryForObject(SQLch, new BasketMapper());
			String SQL = "MODIFYBASKET "+id+","+kto+","+ilosc+"";
			jdbcTemplateObject.update(SQL);
			return "Ksiazka istnije -Zmieniłem ilosc";
			}
		catch(Exception handlerException) {
			String SQL = "AddIntoBasket "+id+","+kto+","+ilosc+"";
			jdbcTemplateObject.update(SQL);
			return "Dodano";
		}
	}
		

		
	public ArrayList<Basket> showBasket(String kto,String status){
		String SQL ="SELECT DISTINCT * FROM BASKET WHERE id_kto="+kto+" AND status = "+status+"";
		ArrayList <Basket> b = (ArrayList<Basket>) jdbcTemplateObject.query(SQL, new BasketMapper());
		return b;
	}
	
	public String buyBasket(String kto){
		String SQL ="PurchaseBasket "+kto+"";
		jdbcTemplateObject.update(SQL);
		return "Zakupiono";
	}
	
	public Boolean exist(String id_ks, String id_kto) {
		String SQL =String.format("SELECT DISTINCT * FROM BASKET WHERE id_ks='%s' AND id_kto='%s' AND STATUS=1", id_ks, id_kto);
		try {
			Basket b = (Basket)jdbcTemplateObject.queryForObject(SQL, new BasketMapper());
			return true;
		}
		catch(Exception handlerException) {
			return false;
		}
	}
	public Double sum(String id_kto) {
		String SQL =String.format(" SELECT SUM(Cena) FROM BASKET WHERE id_kto='%s' AND STATUS=1", id_kto);
		Double b = jdbcTemplateObject.queryForObject(SQL,Double.class);
		if (b==null) b= 0.0;
		return b;
	}
}
