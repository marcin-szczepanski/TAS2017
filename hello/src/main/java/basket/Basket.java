package basket;

public class Basket {
	public String id;
	public String kto;
	public String nazwa;
	public String imie_autora;
	public String nazwisko_autora;
	public String ilosc;
	public String cena;
	public String status;
	
	Basket(){
		
	}
	
	Basket(String id, String kto, String nazwa, String ia, String na, String kat, String cena, String stat){
		this.id = id;
		this.kto = kto;
		this.nazwa = nazwa;
		this.imie_autora = ia;
		this.nazwisko_autora = na;
		this.ilosc = kat;
		this.cena = cena;
		this.status = stat;
	}
	
	Basket(String id, String kto, String ilosc){
		this.id = id;
		this.kto = kto;
		this.ilosc = ilosc;
	}
}
