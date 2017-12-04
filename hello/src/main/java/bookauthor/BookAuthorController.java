package bookauthor;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class BookAuthorController {
	

	@RequestMapping("/top6")
	public ArrayList<BookAuthor> top6() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookAuthorDAO t = (BookAuthorDAO)context.getBean("BookAuthorDAO");
        
        ArrayList<BookAuthor> top6 = t.listTOP6();
		return top6;
	}
	

	@RequestMapping("/books")
	public ArrayList<BookAuthor> searchByCategory(@RequestParam(value = "category")String category) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookAuthorDAO t = (BookAuthorDAO)context.getBean("BookAuthorDAO");
        
        ArrayList<BookAuthor> list = t.listByCategory(category);
		return list;
	}
}
