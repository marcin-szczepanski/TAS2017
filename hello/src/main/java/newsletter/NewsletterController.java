package newsletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class NewsletterController {

	private NewsletterDAO dao;

	@Autowired
	public void setDAO(NewsletterDAO dao) {
		this.dao = dao;
	}

	@RequestMapping(value = "/newsletter", method = RequestMethod.POST)
	public String review(@RequestBody Newsletter news) {
		return dao.newLetter(news.mail);
	}

}
