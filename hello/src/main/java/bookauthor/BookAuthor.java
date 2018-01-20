package bookauthor;

import java.text.DecimalFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class BookAuthor {
	protected String id;
	protected String nazwa;
	protected String imie;
	protected String nazwisko;
	protected String kategoria;
	protected String cena;
	protected String ocena;
	protected String okladka;
	protected int accuracy;

	public BookAuthor(String id, String naz, String i, String n, String k, String c, String okladka, String o) {
		this.id = id;
		this.nazwa = naz;
		this.imie = i;
		this.nazwisko = n;
		this.kategoria = k;
		String number = c;
		double amount = Double.parseDouble(number);
		DecimalFormat formatter = new DecimalFormat("#,###,###,###.00");
		this.cena = formatter.format(amount);
		this.okladka=okladka;
		this.ocena = o;
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

	public String getOcena() {
		return ocena;
	}

	public void setOcena(String ocena) {
		this.ocena = ocena;
	}
	
	

	public String getOkladka() {
		return okladka;
	}

	public void setOkladka(String okladka) {
		this.okladka = okladka;
	}

	public void setAccuracy(int accuracy) {
		this.accuracy = accuracy;
	}

	@JsonIgnore
	public int getAccuracy() {
		return this.accuracy;
	}

}
