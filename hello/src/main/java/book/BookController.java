package book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
public class BookController {
	
	private BookDAO dao;

	@Autowired
	public void setDAO(BookDAO dao) {
		this.dao = dao;
	}
	
	@RequestMapping("/book")
	public Book getBook(@RequestParam(value = "id")String id) {
        Book book = dao.getBook(id);
		return book;
	}
	
	@RequestMapping("/book/delete")
	public Boolean deleteBook(@RequestParam(value = "id")String id) {
        return dao.deleteBook(id);
	}
	@RequestMapping(value="/book/add", method = RequestMethod.POST)
	public Boolean addBook(@RequestBody Book book) {
        return dao.addBook(book);
	}
	
	@RequestMapping(value="/book/edit", method = RequestMethod.POST)
	public Boolean editBook(@RequestBody Book book) {
        return dao.editBook(book);
	}
}
