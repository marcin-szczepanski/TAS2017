package review;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

@CrossOrigin
@RestController
public class ReviewController {
	

	@RequestMapping(value = "/review", method = RequestMethod.POST)
	public String  review(@RequestBody Review review) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        ReviewDAO r = (ReviewDAO)context.getBean("ReviewDAO");
	        return r.createReview(review.ks, review.kto, review.text);
		}}