package user;

public class UserInfo {
	protected String id;
	protected String login;
	protected String haslo;
	protected String email;
	protected String imie;
	protected String nazwisko;
	protected String telefon;
	protected String adres;
	protected String miasto;
	protected String kod;
	protected String status;

	public UserInfo(){
	
	}

	public UserInfo(String id,String login, String haslo, String email, String imie, String nazwisko, String telefon, String adres, String miasto, String kod, String status){
			this.id = id;
			this.login = login;
			this.haslo = haslo;
			this.email = email;
			this.imie = imie;
			this.nazwisko = nazwisko;
			this.telefon = telefon;
			this.adres = adres;
			this.miasto = miasto;
			this.kod = kod;
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
	public String getHaslo() {
		return haslo;
	}
	public void setHaslo(String haslo) {
		this.haslo = haslo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getImie() {
		return imie;
	}
	public void setImie(String imie) {
		this.imie = imie;
	}
	public String getNazwisko() {
		return nazwisko;
	}
	public void setNazwisko(String nazwisko) {
		this.nazwisko = nazwisko;
	}
	public String getTelefon() {
		return telefon;
	}
	public void setTelefon(String telefon) {
		this.telefon = telefon;
	}
	public String getAdres() {
		return adres;
	}
	public void setAdres(String adres) {
		this.adres = adres;
	}
	public String getMiasto() {
		return miasto;
	}
	public void setMiasto(String miasto) {
		this.miasto = miasto;
	}
	public String getKod() {
		return kod;
	}
	public void setKod(String kod) {
		this.kod = kod;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
