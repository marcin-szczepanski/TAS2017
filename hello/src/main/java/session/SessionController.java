package session;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

@CrossOrigin
@RestController
public class SessionController {
	

	@RequestMapping(value = "/session", method = RequestMethod.POST)
	public String  createSession(@RequestBody User user) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        SessionDAO r = (SessionDAO)context.getBean("SessionDAO");
	        return r.createSession(user.login,user.password);
		}}