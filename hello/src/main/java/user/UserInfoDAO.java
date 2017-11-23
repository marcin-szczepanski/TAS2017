package user;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

import bookauthor.BookAuthor;
import bookauthor.BookAuthorMapper;

public class UserInfoDAO {  
private DataSource dataSource;
private JdbcTemplate jdbcTemplateObject;

public void setDataSource(DataSource dataSource) {
   this.dataSource = dataSource;
   this.jdbcTemplateObject = new JdbcTemplate(dataSource);
}

public ArrayList<UserInfo> showUserInfo(String id) {
    String SQL = String.format("SELECT * FROM Uzytkownik WHERE id="+id+"");
    ArrayList <UserInfo> list = (ArrayList<UserInfo>) jdbcTemplateObject.query(SQL, new UserInfoMapper());
    return list;
 }

}