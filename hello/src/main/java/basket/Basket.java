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

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getKto() {
		return kto;
	}

	public void setKto(String kto) {
		this.kto = kto;
	}

	public String getNazwa() {
		return nazwa;
	}

	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}

	public String getImie_autora() {
		return imie_autora;
	}

	public void setImie_autora(String imie_autora) {
		this.imie_autora = imie_autora;
	}

	public String getNazwisko_autora() {
		return nazwisko_autora;
	}

	public void setNazwisko_autora(String nazwisko_autora) {
		this.nazwisko_autora = nazwisko_autora;
	}

	public String getIlosc() {
		return ilosc;
	}

	public void setIlosc(String ilosc) {
		this.ilosc = ilosc;
	}

	public String getCena() {
		return cena;
	}

	public void setCena(String cena) {
		this.cena = cena;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
