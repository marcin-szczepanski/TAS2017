package update;

import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class UpdateDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
		this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public String updateDatabase(String what, String how, String who) {
		String SQL = "UPDATE Uzytkownik SET " + what + "='" + how + "' WHERE id=" + who + "";
		jdbcTemplateObject.update(SQL);
		return "Zaktualizowano";
	}

	public boolean updateBasket(String what, String how, String who) {
		String SQL = "MODIFYBASKET " + who + "," + what + "," + how + "";
		try {
			jdbcTemplateObject.update(SQL);
			return true;
		} catch (Exception a) {
			String b = a.getMessage();
			return false;
		}
	}

	public String deleteBasket(String what, String who) {
		String SQL = "DELETEFROMBASKET " + who + "," + what + "";
		jdbcTemplateObject.update(SQL);
		return "Usunieto";
	}
}
