package session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SessionController {
	
	private SessionDAO dao;

	@Autowired
	public void setDAO(SessionDAO dao) {
		this.dao = dao;
	}

	@RequestMapping(value = "/session", method = RequestMethod.POST)
	public String  createSession(@RequestBody User user) {
	        return dao.createSession(user.login,user.password);
		}}