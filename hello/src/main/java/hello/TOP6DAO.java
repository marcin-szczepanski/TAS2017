package hello;

import java.util.ArrayList;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;



public class TOP6DAO {
   private DataSource dataSource;
   private JdbcTemplate jdbcTemplateObject;
   
   public void setDataSource(DataSource dataSource) {
      this.dataSource = dataSource;
      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
   }

   public ArrayList<TOP6> listTOP6() {
      String SQL = "CREATE OR ALTER VIEW TOP6(Nazwa,Imie_autora,Nazwisko_autora,Ocena,Kategoria,Cena)\r\n" + 
      		"as\r\n" + 
      		"SELECT TOP 6 k.Nazwa,a.Imie,a.Nazwisko,k.Ocena,t.Kat,k.Cena\r\n" + 
      		"FROM Ksiazka k\r\n" + 
      		"	JOIN Kategoria t ON k.Kategoria = t.id\r\n" + 
      		"	JOIN Autor a ON k.Autor = a.id\r\n" + 
      		"ORDER BY k.ocena DESC\r\n" + 
      		"\r\n" + 
      		"Select * from TOP6";
      ArrayList <TOP6> top6 = (ArrayList<TOP6>) jdbcTemplateObject.query(SQL, new TOP6Mapper());
      return top6;
   }
}
