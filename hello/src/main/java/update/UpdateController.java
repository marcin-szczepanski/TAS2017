package update;

import org.springframework.web.bind.annotation.RestController;

import basket.Basket;
import basket.BasketDAO;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.jdbc.core.JdbcTemplate;

@CrossOrigin
@RestController
public class UpdateController {
	

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String updateDatabase(@RequestBody Update update) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		UpdateDAO u = (UpdateDAO)context.getBean("UpdateDAO");
		return u.updateDatabase(update.what, update.how, update.who);
	}
	

	@RequestMapping(value = "/updatebasket", method = RequestMethod.POST)
	public boolean updateBasket(@RequestBody Update update) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		UpdateDAO u = (UpdateDAO)context.getBean("UpdateDAO");
		return u.updateBasket(update.what, update.how, update.who);
	}
	

	@RequestMapping(value = "/deletebasket", method = RequestMethod.POST)
	public String deleteBasket(@RequestBody Delete update) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		UpdateDAO u = (UpdateDAO)context.getBean("UpdateDAO");
		return u.deleteBasket(update.what, update.who);
	}
	

	@RequestMapping(value = "/addbasket",method = RequestMethod.POST)
	public boolean  addBasket(@RequestBody Update basket) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        BasketDAO r = (BasketDAO)context.getBean("BasketDAO");
	        return r.addBasket(basket.what, basket.who, basket.how);
		}
}
