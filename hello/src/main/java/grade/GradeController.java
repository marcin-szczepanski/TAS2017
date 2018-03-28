package grade;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GradeController {

	private GradeDAO dao;

	@Autowired
	public void setDAO(GradeDAO dao) {
		this.dao = dao;
	}

	@RequestMapping(value = "/grade", method = RequestMethod.POST)
	public String review(@RequestBody Grade grade) {
		return dao.createGrade(grade.ks, grade.kto, grade.ocena);
	}
	
	@RequestMapping("/grade/view")
	public ArrayList<GradeView> getGrade(@RequestParam(value = "id_ks") String ks, @RequestParam(value = "id_kto") String kto){
		ArrayList<GradeView> grade = dao.getGrade(ks, kto);
				return grade;
	}
}