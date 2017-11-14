package hello;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class BookController {
	@CrossOrigin
	@RequestMapping("/book")
	public Book getBook(@RequestParam(value = "id")String id) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookDAO t = (BookDAO)context.getBean("BookDAO");
        
        Book book = t.getBook(id);
		return book;
	}
}
