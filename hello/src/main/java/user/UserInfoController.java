package user;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserInfoController {
	

	@RequestMapping("/profile")
	public ArrayList<UserInfo> showUserInfo(@RequestParam(value = "id")String id) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
        UserInfoDAO u = (UserInfoDAO)context.getBean("UserInfoDAO");
        ArrayList<UserInfo> useri = u.showUserInfo(id);
		return useri;
	}
	

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String  createUser(@RequestBody UserInfo user) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        UserInfoDAO r = (UserInfoDAO)context.getBean("UserInfoDAO");
	        return r.createUser(user.login, user.haslo, user.email, user.imie, user.nazwisko, user.telefon, user.adres, user.miasto, user.kod);
		}
	
	@RequestMapping("/users")
	public ArrayList<UserInfo> getUsers() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
        UserInfoDAO u = (UserInfoDAO)context.getBean("UserInfoDAO");
        ArrayList<UserInfo> users = u.getUsers();
		return users;
	}
	
	@RequestMapping(value = "/user/privilages")
	public Boolean  isAdmin(@RequestParam(value = "id")String id) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        UserInfoDAO r = (UserInfoDAO)context.getBean("UserInfoDAO");
	        return r.isAdmin(id);
		}
	
	@RequestMapping(value = "/user/delete")
	public Boolean  deleteUser(@RequestParam(value = "id")String id) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        UserInfoDAO r = (UserInfoDAO)context.getBean("UserInfoDAO");
	        return r.deleteUser(id);
		}
	
}