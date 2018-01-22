package newsletter;

public class Newsletter {
	protected String mail;
	
	Newsletter() {
		
	}
	
	Newsletter(String mail) {
		this.mail = mail;
	}
	
	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}
	
}
