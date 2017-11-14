package hello;

public class Book {
	protected String id;
	protected String nazwa;
	protected String autor;
	protected String wydawnictwo;
	protected String gatunek;
	protected String kategoria;
	protected String rok_wyd;
	protected String ocena;
	protected String strony;
	protected String isbn;
	protected String cena;
	
	public Book(String id, String nazwa, String autor, String wydawnictwo, String gatunek, String kategoria,
			String rok_wyd, String ocena, String strony, String isbn, String cena) {
		this.id = id;
		this.nazwa = nazwa;
		this.autor = autor;
		this.wydawnictwo = wydawnictwo;
		this.gatunek = gatunek;
		this.kategoria = kategoria;
		this.rok_wyd = rok_wyd;
		this.ocena = ocena;
		this.strony = strony;
		this.isbn = isbn;
		this.cena = cena;
	}
	
	
}
