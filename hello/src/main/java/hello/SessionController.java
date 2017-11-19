package hello;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

@RestController
public class SessionController {
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/session", method = RequestMethod.POST)
	public String  review(@RequestParam(value = "login")String login,@RequestParam(value = "password")String password) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        SessionDAO r = (SessionDAO)context.getBean("SessionDAO");
	        return r.createSession(login,password);
		}}