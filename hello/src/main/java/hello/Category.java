package hello;

public class Category {
	protected int id;
	protected String category;
	
	public Category(int id,String cat) {
		this.id = id;
		this.category = cat;
	}
	
	public int  getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;		
	}
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String cat) {
		this.category = cat;
	}
}
