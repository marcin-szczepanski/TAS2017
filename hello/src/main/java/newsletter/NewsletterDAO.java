package newsletter;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

public class NewsletterDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
	   this.dataSource = dataSource;
	   this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public String newLetter(String mail) {
	    String SQL = "EXEC NEWS '"+mail+"'";
	    jdbcTemplateObject.update(SQL);
	    return "Utworzono";
	}
}
