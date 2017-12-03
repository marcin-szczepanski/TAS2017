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
	@RequestMapping(value = "/buy")
	public String  buyBasket(@RequestParam (value = "kto")String kto) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        BasketDAO r = (BasketDAO)context.getBean("BasketDAO");
	        return r.buyBasket(kto);     
		}

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/basket/exist")
	public Boolean  exist(@RequestParam (value = "id_ks")String id_ks, @RequestParam(value="kto")String id_kto) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        BasketDAO r = (BasketDAO)context.getBean("BasketDAO");
	        return  r.exist(id_ks,id_kto);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/basket/sum")
	public Double  sum (@RequestParam(value="id_kto")String id_kto) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        BasketDAO r = (BasketDAO)context.getBean("BasketDAO");
	        return  r.sum(id_kto);
	}
}