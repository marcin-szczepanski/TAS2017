package book;

import java.util.ArrayList;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
public class BookController {
	
	@RequestMapping("/book")
	public Book getBook(@RequestParam(value = "id")String id) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookDAO t = (BookDAO)context.getBean("BookDAO");
        
        Book book = t.getBook(id);
		return book;
	}
	
	@RequestMapping("/book/delete")
	public Boolean deleteBook(@RequestParam(value = "id")String id) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookDAO t = (BookDAO)context.getBean("BookDAO");
        
        return t.deleteBook(id);
	}
	@RequestMapping("/book/add")
	public Boolean addBook(@RequestBody Book book) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookDAO t = (BookDAO)context.getBean("BookDAO");
        
        return t.addBook(book);
	}
	
	@RequestMapping("/book/edit")
	public Boolean editBook(@RequestBody Book book) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookDAO t = (BookDAO)context.getBean("BookDAO");
        
        return t.editBook(book);
	}
}
