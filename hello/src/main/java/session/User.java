package session;

public class User {
		public String login;
		public String password;
		protected String name;
		protected String status;
		public User() {	
			
		}
		public User(String login, String password, String name, String status) {
			this.login = login;
			this.password = password;
			this.name = name;
			this.status = status;
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