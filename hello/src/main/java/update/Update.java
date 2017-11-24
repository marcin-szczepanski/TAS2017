package update;

public class Update {
	protected String what;
	protected String how;
	protected String who;
	
	public Update() {
		
	}
	
	public Update(String what, String how, String who) {
		this.what = what;
		this.how = how;
		this.who = who;
	}

	public String getWhat() {
		return what;
	}

	public void setWhat(String what) {
		this.what = what;
	}

	public String getHow() {
		return how;
	}

	public void setHow(String how) {
		this.how = how;
	}

	public String getWho() {
		return who;
	}

	public void setWho(String who) {
		this.who = who;
	}
	
	
}
