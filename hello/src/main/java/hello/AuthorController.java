package hello;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class AuthorController {
	
	@CrossOrigin
	@RequestMapping("/author")
	public ArrayList<Author> author() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        AuthorDAO a = (AuthorDAO)context.getBean("AuthorDAO");
        
        ArrayList<Author> authors = a.listAuthors();
		return authors;
	}
}
