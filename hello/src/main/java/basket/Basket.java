package basket;

import java.text.DecimalFormat;

public class Basket {
	protected String id_kto;
	protected String id_ks;
	protected String kto;
	protected String nazwa;
	protected String imie_autora;
	protected String nazwisko_autora;
	protected String ilosc;
	protected String cena;
	protected String status;
	protected String okladka;
	
	public Basket() {
		
	}
	
	public Basket(String id_kto,String id_ks, String kto, String nazwa, String ia, String na, String kat, String cena, String stat, String okladka) {
		this.id_kto = id_kto;
		this.id_ks = id_ks;
		this.kto = kto;
		this.nazwa = nazwa;
		this.imie_autora = ia;
		this.nazwisko_autora = na;
		this.ilosc = kat;
		String number = cena;
		double amount = Double.parseDouble(number);
		DecimalFormat formatter = new DecimalFormat("#,###,###,###.00");
		this.cena = formatter.format(amount);
		this.status = stat;
		this.okladka = okladka;
	}

	public String getOkladka() {
		return okladka;
	}

	public void setOkladka(String okladka) {
		this.okladka = okladka;
	}

	public String getId_kto() {
		return id_kto;
	}

	public void setId_kto(String id_kto) {
		this.id_kto = id_kto;
	}

	public String getId_ks() {
		return id_ks;
	}

	public void setId_ks(String id_ks) {
		this.id_ks = id_ks;
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
