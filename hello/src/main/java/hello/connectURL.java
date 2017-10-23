package hello;

import java.sql.*;

public class connectURL {

	
	public static String test() {
		String connectionUrl = "jdbc:sqlserver://localhost:1433;" +
			"databaseName=Ksiegarnia;integratedSecurity=true;";

		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		String testValue=null;
        	try {
        		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            		con = DriverManager.getConnection(connectionUrl);
            
            		String SQL = "SELECT id, Nazwa FROM Gatunek";
            		stmt = con.createStatement();
            		rs = stmt.executeQuery(SQL);
            
            		while (rs.next()) {
            			//System.out.println(rs.getString(1) + " " + rs.getString(2));
            			testValue=testValue+rs.getString(1)+" "+rs.getString(2);
            		}
        	}
        
		catch (Exception e) {
			e.printStackTrace();
		}

		finally {
			if (rs != null) try { rs.close(); } catch(Exception e) {}
	    		if (stmt != null) try { stmt.close(); } catch(Exception e) {}
	    		if (con != null) try { con.close(); } catch(Exception e) {}
		}
        return testValue;
	}
}

