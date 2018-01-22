package session;

public class User {
	protected String id;
	protected String login;
	protected String password;
	protected String name;
	protected String status;
		
	public User() {	
			
	}
	
	public User(String id , String login, String password, String name, String status) {
			this.id=id;
			this.login = login;
			this.password = password;
			this.name = name;
			this.status = status;
	}
		
	public String getId() {
			return id;
	}
	
	public void setId(String id) {
			this.id = id;
	}
	
	public String getLogin() {
			return login;
	}
	
	public void setLogin(String login) {
			this.login = login;
	}
	
	public String getPassword() {
			return password;
	}
	
	public void setPassword(String password) {
			this.password = password;
	}
	
	public String getName() {
			return name;
	}
	
	public void setName(String name) {
			this.name = name;
	}
	
	public String getStatus() {
			return status;
	}
	
	public void setStatus(String status) {
			this.status = status;
	}
		
}
