package hello;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

public class SessionDAO {  
private DataSource dataSource;
private JdbcTemplate jdbcTemplateObject;

public void setDataSource(DataSource dataSource) {
   this.dataSource = dataSource;
   this.jdbcTemplateObject = new JdbcTemplate(dataSource);
}
public String createSession(String login, String password) {
    String SQL = "select login,haslo,imie,status from Uzytkownik where login='"+login+"'";
    User user = ((ArrayList<User>) jdbcTemplateObject.query(SQL, new UserMapper())).get(0);
    if(user.getPassword()==password) {
    	String SQL2="UPDATE Uzytkownik SET status='1' WHERE login='"+login+"'";
    	jdbcTemplateObject.update(SQL2);
    	return "Witaj, "+user.getName();
    }
    else {
    	return "Z³e dane u¿ytkownika";
    }
 }

}
