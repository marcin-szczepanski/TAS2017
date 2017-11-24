package update;

import java.util.ArrayList;
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
		String SQL = "UPDATE Uzytkownik SET "+what+"='"+how+"' WHERE id="+who+"";
		Update user = ((ArrayList<Update>) jdbcTemplateObject.query(SQL, new UpdateMapper())).get(0);
		return "Zaktualizowano";
	}
}
