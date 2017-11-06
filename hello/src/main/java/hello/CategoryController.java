package hello;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class CategoryController {
	
	@CrossOrigin
	@RequestMapping("/category")
	public ArrayList<Category> category() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        CategoryDAO c = (CategoryDAO)context.getBean("CategoryDAO");
        
        ArrayList<Category> category = c.listCategory();
		return category;
	}
}