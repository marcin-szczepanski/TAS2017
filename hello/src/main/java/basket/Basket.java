package basket;

public class Basket {
	public String ks;
	public String kto;
	public String nazwa;
	public String imie_autora;
	public String nazwisko_autora;
	public String kategoria;
	public String cena;
	public String status;
	
	Basket(){
		
	}
	
	Basket(String ks, String kto, String nazwa, String ia, String na, String kat, String cena, String stat){
		this.ks = ks;
		this.kto = kto;
		this.nazwa = nazwa;
		this.imie_autora = ia;
		this.nazwisko_autora = na;
		this.kategoria = kat;
		this.cena = cena;
		this.status = stat;
	}
	
	Basket(String ks, String kto){
		this.ks = ks;
		this.kto = kto;
	}
}
