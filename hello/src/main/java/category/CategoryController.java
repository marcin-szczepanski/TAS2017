package category;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class CategoryController {

	private CategoryDAO dao;

	@Autowired
	public void setDAO(CategoryDAO dao) {
		this.dao = dao;
	}

	@RequestMapping("/category")
	public ArrayList<Category> category() {
		ArrayList<Category> category = dao.listCategory();
		return category;
	}
}