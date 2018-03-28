package update;

import org.springframework.web.bind.annotation.RestController;

import basket.BasketDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@RestController
public class UpdateController {

	private UpdateDAO updatedao;
	private BasketDAO basketdao;

	@Autowired
	public void setUpdateDAO(UpdateDAO dao) {
		this.updatedao = dao;
	}

	@Autowired
	public void setBasetDAO(BasketDAO dao) {
		this.basketdao = dao;
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String updateDatabase(@RequestBody Update update) {
		return updatedao.updateDatabase(update.what, update.how, update.who);
	}

	@RequestMapping(value = "/updatebasket", method = RequestMethod.POST)
	public boolean updateBasket(@RequestBody Update update) {
		return updatedao.updateBasket(update.what, update.how, update.who);
	}

	@RequestMapping(value = "/deletebasket", method = RequestMethod.POST)
	public String deleteBasket(@RequestBody Delete update) {
		return updatedao.deleteBasket(update.what, update.who);
	}

	@RequestMapping(value = "/addbasket", method = RequestMethod.POST)
	public boolean addBasket(@RequestBody Update basket) {
		return basketdao.addBasket(basket.what, basket.who, basket.how);
	}
}
