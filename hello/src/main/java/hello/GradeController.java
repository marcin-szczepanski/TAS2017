package hello;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GradeController {
	
	
	@RequestMapping(value = "/grade", method = RequestMethod.POST)
	public void  review(@RequestParam(value = "ks")String ks,@RequestParam(value = "kto")String kto,@RequestParam(value = "ocena")String ocena) {
			ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	        GradeDAO g = (GradeDAO)context.getBean("GradeDAO");
	        g.createGrade(ks, kto, ocena);
		}}