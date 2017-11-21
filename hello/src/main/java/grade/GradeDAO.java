package grade;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

public class GradeDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
	   this.dataSource = dataSource;
	   this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}
	public void createGrade(String ks, String kto, String ocena) {
	    String SQL = "NewGrade "+ks+","+kto+",'"+ocena+"'";
	    jdbcTemplateObject.update(SQL);
	    
	 }
}
