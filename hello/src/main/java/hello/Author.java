package hello;

public class Author {
	protected int id;
	protected String firstname;
	protected String lastname;
	
	public Author(int id, String f, String l) {
		this.id=id;
		this.firstname=f;
		this.lastname=l;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
}
