package hello;

import java.text.DecimalFormat;

public class BookAuthor {
	protected String id;
	protected String nazwa;
	protected String imie;
	protected String nazwisko;
	protected String ocena;
	protected String kategoria;
	protected String cena;

	
	public BookAuthor(String id, String naz, String i, String n, String k, String c) {
		this.id=id;
		this.nazwa = naz;
		this.imie = i;
		this.nazwisko = n;
		//this.ocena = o;
		this.kategoria = k;
		//this.cena = c.substring(0,5);
		String number = c;
		double amount = Double.parseDouble(number);
		DecimalFormat formatter = new DecimalFormat("#,###,###,###.00");
		this.cena = formatter.format(amount);
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
