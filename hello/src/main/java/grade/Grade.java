package grade;

public class Grade {
	protected String ks;
	protected String kto;
	protected String ocena;
	
	public Grade() {
		
	}
	
	public Grade(String ks, String kto, String ocena) {
		this.ks = ks;
		this.kto = kto;
		this.ocena = ocena;
	}

	public String getKs() {
		return ks;
	}

	public void setKs(String ks) {
		this.ks = ks;
	}

	public String getKto() {
		return kto;
	}

	public void setKto(String kto) {
		this.kto = kto;
	}

	public String getOcena() {
		return ocena;
	}

	public void setOcena(String ocena) {
		this.ocena = ocena;
	}
	
}
