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

import bookauthor.BookAuthor;
import bookauthor.BookAuthorDAO;

import org.springframework.jdbc.core.JdbcTemplate;

@RestController
public class UserInfoController {
	

	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/profile")
	public ArrayList<UserInfo> showUserInfo(@RequestParam(value = "id")String id) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        UserInfoDAO t = (UserInfoDAO)context.getBean("UserInfoDAO");
        
        ArrayList<UserInfo> list = t.showUserInfo(id);
		return list;
	}
}