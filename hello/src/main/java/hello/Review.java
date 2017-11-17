package hello;

public class Review {
	String ks;
	String kto;
	String text;
	
	Review(String ks, String kto, String text){
		this.ks=ks;
		this.kto=kto;
		this.text=text;
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
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
}
