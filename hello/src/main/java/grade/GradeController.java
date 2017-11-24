package grade;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GradeController {
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/grade", method = RequestMethod.POST)
	public String  review(@RequestBody Grade grade) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        GradeDAO g = (GradeDAO)context.getBean("GradeDAO");
	        return g.createGrade(grade.ks, grade.kto, grade.ocena);
		}}