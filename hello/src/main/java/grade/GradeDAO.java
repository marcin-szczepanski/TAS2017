package grade;

import java.util.ArrayList;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;



public class GradeDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
	   this.dataSource = dataSource;
	   this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}
	public String createGrade(String ks, String kto, String ocena) {
	    String SQL = "NewGrade "+ks+","+kto+",'"+ocena+"'";
	    jdbcTemplateObject.update(SQL);
	    return "Utworzono";
	 }
	
	public ArrayList<GradeView> getGrade(String ks, String kto) {
		String SQL = "SELECT Ocena FROM GRADES WHERE id_ks="+ks+" and id_kto="+kto+"";
		ArrayList<GradeView> grade = (ArrayList<GradeView>) jdbcTemplateObject.query(SQL, new GradeViewMapper());
		return grade; 
	}
}
