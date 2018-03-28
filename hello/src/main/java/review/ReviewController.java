package review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ReviewController {

	private ReviewDAO dao;

	@Autowired
	public void setDAO(ReviewDAO dao) {
		this.dao = dao;
	}

	@RequestMapping(value = "/review", method = RequestMethod.POST)
	public String review(@RequestBody Review review) {
		return dao.createReview(review.ks, review.kto, review.text);
	}
}