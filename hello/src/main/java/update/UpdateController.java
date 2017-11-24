package update;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.jdbc.core.JdbcTemplate;

@RestController
public class UpdateController {
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String updateDatabase(@RequestBody Update update) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		UpdateDAO u = (UpdateDAO)context.getBean("UpdateDAO");
		return u.updateDatabase(update.what, update.how, update.who);
	}
	

}
