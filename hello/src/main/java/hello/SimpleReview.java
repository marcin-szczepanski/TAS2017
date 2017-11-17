package hello;

public class SimpleReview {
	String uzytkownik;
	String tekst;
	


	public SimpleReview(String autor, String text) {
		super();
		this.uzytkownik = autor;
		this.tekst = text;
	}




	public String getUzytkownik() {
		return uzytkownik;
	}




	public void setUzytkownik(String uzytkownik) {
		this.uzytkownik = uzytkownik;
	}




	public String getTekst() {
		return tekst;
	}




	public void setTekst(String tekst) {
		this.tekst = tekst;
	}





}
