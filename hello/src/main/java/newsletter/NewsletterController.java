package newsletter;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class NewsletterController {
	
		@RequestMapping(value = "/newsletter", method = RequestMethod.POST)
		public String  review(@RequestBody Newsletter news) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
			NewsletterDAO n = (NewsletterDAO)context.getBean("NewsletterDAO");
			return n.newLetter(news.mail);
		}
		
	
}
