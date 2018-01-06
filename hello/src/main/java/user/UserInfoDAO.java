package user;

import java.util.ArrayList;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserInfoDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
		this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public ArrayList<UserInfo> showUserInfo(String id) {
		String SQL = "SELECT * FROM Uzytkownik WHERE id=" + id + "";
		ArrayList<UserInfo> useri = (ArrayList<UserInfo>) jdbcTemplateObject.query(SQL, new UserInfoMapper());
		return useri;
	}

	public String createUser(String login, String haslo, String email, String imie, String nazwisko, String telefon,
			String adres, String miasto, String kod) {
		String SQL = "AddUser '" + login + "', '" + haslo + "','" + email + "','" + imie + "','" + nazwisko + "','"
				+ telefon + "','" + adres + "','" + miasto + "','" + kod + "'";
		jdbcTemplateObject.update(SQL);
		return "Utworzono";
	}

	public Boolean isAdmin(String id) {
		String SQL = "SELECT * FROM Uzytkownik where id=" + id + " and status=1";
		ArrayList<UserInfo> list = (ArrayList<UserInfo>) jdbcTemplateObject.query(SQL, new UserInfoMapper());
		if (!list.isEmpty())
			return true;
		return false;
	}

	public Boolean deleteUser(String id) {
		String SQL = "Delete FROM Uzytkownik where id=" + id;
		try {
			jdbcTemplateObject.update(SQL);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}