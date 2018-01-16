package author;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AuthorController {

	private AuthorDAO dao;

	@Autowired
	public void setDAO(AuthorDAO dao) {
		this.dao = dao;
	}

	@RequestMapping("/author")
	public ArrayList<Author> author() {
		ArrayList<Author> authors = dao.listAuthors();
		return authors;
	}
}
