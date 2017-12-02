package basket;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasketController {
		
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/basket")
	public ArrayList<Basket>  showBasket(@RequestParam (value = "kto")String kto, @RequestParam(value="status")String status) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        BasketDAO r = (BasketDAO)context.getBean("BasketDAO");
	        ArrayList<Basket> list = r.showBasket(kto,status);
	        return list;
		}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/addbasket",method = RequestMethod.POST)
	public String  addBasket(@RequestBody Basket basket) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        BasketDAO r = (BasketDAO)context.getBean("BasketDAO");
	        return r.addBasket(basket.ks, basket.kto);
		}
}
