package user;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserInfoController {

	private UserInfoDAO dao;

	@Autowired
	public void setDAO(UserInfoDAO dao) {
		this.dao = dao;
	}

	@RequestMapping("/profile")
	public ArrayList<UserInfo> showUserInfo(@RequestParam(value = "id") String id) {
		ArrayList<UserInfo> useri = dao.showUserInfo(id);
		return useri;
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String createUser(@RequestBody UserInfo user) {
		return dao.createUser(user.login, user.haslo, user.email, user.imie, user.nazwisko, user.telefon, user.adres,
				user.miasto, user.kod);
	}

	@RequestMapping("/users")
	public ArrayList<UserInfo> getUsers() {
		ArrayList<UserInfo> users = dao.getUsers();
		return users;
	}

	@RequestMapping(value = "/user/privilages")
	public Boolean isAdmin(@RequestParam(value = "id") String id) {
		return dao.isAdmin(id);
	}

	@RequestMapping(value = "/user/delete")
	public Boolean deleteUser(@RequestParam(value = "id") String id) {
		return dao.deleteUser(id);
	}

}