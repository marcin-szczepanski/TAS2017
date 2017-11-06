package hello;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class TOP6Controller {
	
	@CrossOrigin
	@RequestMapping("/top6")
	public ArrayList<TOP6> top6() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");

        TOP6DAO t = (TOP6DAO)context.getBean("TOP6DAO");
        
        ArrayList<TOP6> top6 = t.listTOP6();
		return top6;
	}
}
