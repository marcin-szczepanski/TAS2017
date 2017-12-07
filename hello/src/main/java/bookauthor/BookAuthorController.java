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
	
	@RequestMapping("/books/search")
	public ArrayList<BookAuthor> advancedSearch(
			@RequestParam(value = "title", required=false)String title,
			@RequestParam(value = "author_first", required=false)String authorFirstName,
			@RequestParam(value = "author_last", required=false)String authorLastName,
			@RequestParam(value = "category", required=false)String category,
			@RequestParam(value = "publisher", required=false)String publisher,
			@RequestParam(value = "year", required=false)String year,
			@RequestParam(value = "pagesMin", required=false)String pagesMin,
			@RequestParam(value = "pagesMax", required=false)String pagesMax){
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookAuthorDAO t = (BookAuthorDAO)context.getBean("BookAuthorDAO");
        
        if(pagesMin!=null && pagesMax!=null && Integer.parseInt(pagesMin)>Integer.parseInt(pagesMax)) {
        	String temp;
        	temp=pagesMin;
        	pagesMin=pagesMax;
        	pagesMax=temp;
        }
        return t.advancedSearch(title, authorFirstName, authorLastName, category, publisher, year, pagesMin, pagesMax);
	}
	
	@RequestMapping("/books/keyWord")
	public ArrayList<BookAuthor> keyWordSearch(
			@RequestParam(value = "query") String query,
			@RequestParam(value = "category", required=false)String category){
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        BookAuthorDAO t = (BookAuthorDAO)context.getBean("BookAuthorDAO");
        

        return t.searchByKeyWord(query,category);
	}
}
