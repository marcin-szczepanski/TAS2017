package hello;

public class TOP6 {
	protected String nazwa;
	protected String imie;
	protected String nazwisko;
	protected String ocena;
	protected String kategoria;
	protected String cena;
	
	public TOP6(String naz, String i, String n, String o, String k, String c) {
		this.nazwa = naz;
		this.imie = i;
		this.nazwisko = n;
		this.ocena = o;
		this.kategoria = k;
		this.cena = c;
	}
	
	public String getNazwa() {
		return nazwa;
	}
	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
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
	public String getOcena() {
		return ocena;
	}
	public void setOcena(String ocena) {
		this.ocena = ocena;
	}
	public String getKategoria() {
		return kategoria;
	}
	public void setKategoria(String kategoria) {
		this.kategoria = kategoria;
	}
	public String getCena() {
		return cena;
	}
	public void setCena(String cena) {
		this.cena = cena;
	}
	
	

}
