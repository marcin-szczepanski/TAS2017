package book;
import java.util.ArrayList;

public class Book {
	protected String id;
	protected String nazwa;
	protected String imie;
	protected String nazwisko;
	protected String wydawnictwo;
	protected String gatunek;
	protected String kategoria;
	protected String rok_wyd;
	protected String strony;
	protected String isbn;
	protected String cena;
	protected String opis;
	protected String ocena;
	protected ArrayList<SimpleReview> recenzje;
	
	public Book(String id, String nazwa, String imie, String nazwisko, String wydawnictwo, String gatunek,
			String kategoria, String rok_wyd, String strony, String isbn, String cena, String ocena) {
		super();
		this.id = id;
		this.nazwa = nazwa;
		this.imie = imie;
		this.nazwisko = nazwisko;
		this.wydawnictwo = wydawnictwo;
		this.gatunek = gatunek;
		this.kategoria = kategoria;
		this.rok_wyd = rok_wyd;
		this.strony = strony;
		this.isbn = isbn;
		this.cena = cena;
		this.ocena = ocena;
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

	public String getWydawnictwo() {
		return wydawnictwo;
	}

	public void setWydawnictwo(String wydawnictwo) {
		this.wydawnictwo = wydawnictwo;
	}

	public String getGatunek() {
		return gatunek;
	}

	public void setGatunek(String gatunek) {
		this.gatunek = gatunek;
	}

	public String getKategoria() {
		return kategoria;
	}

	public void setKategoria(String kategoria) {
		this.kategoria = kategoria;
	}

	public String getRok_wyd() {
		return rok_wyd;
	}

	public void setRok_wyd(String rok_wyd) {
		this.rok_wyd = rok_wyd;
	}

	public String getStrony() {
		return strony;
	}

	public void setStrony(String strony) {
		this.strony = strony;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
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

	public ArrayList<SimpleReview> getRecenzje() {
		return recenzje;
	}
	
	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public void setRecenzje(ArrayList<SimpleReview> recenzje) {
		this.recenzje = recenzje;
	}
	
	
}
