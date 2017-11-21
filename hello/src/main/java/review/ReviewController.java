package review;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

@RestController
public class ReviewController {
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/review", method = RequestMethod.POST)
	public void  review(@RequestParam(value = "ks")String ks,@RequestParam(value = "kto")String kto,@RequestParam(value = "text")String text) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        ReviewDAO r = (ReviewDAO)context.getBean("ReviewDAO");
	        r.createReview(ks, kto, text);
		}}