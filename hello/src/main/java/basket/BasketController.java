package basket;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
public class BasketController {

	private BasketDAO dao;

	@Autowired
	public void setDAO(BasketDAO dao) {
		this.dao = dao;
	}

	@RequestMapping(value = "/basket")
	public ArrayList<Basket> showBasket(@RequestParam(value = "kto") String kto,
			@RequestParam(value = "status") String status) {
		ArrayList<Basket> list = dao.showBasket(kto, status);
		return list;
	}

	@RequestMapping(value = "/buy")
	public String buyBasket(@RequestParam(value = "kto") String kto) {
		return dao.buyBasket(kto);
	}

	@RequestMapping(value = "/basket/exist")
	public Boolean exist(@RequestParam(value = "id_kto") String id_kto, @RequestParam(value = "id_ks") String id_ks) {
		return dao.exist(id_ks, id_kto);
	}

	@RequestMapping(value = "/basket/sum")
	public Double sum(@RequestParam(value = "id_kto") String id_kto) {
		return dao.sum(id_kto);
	}
}
