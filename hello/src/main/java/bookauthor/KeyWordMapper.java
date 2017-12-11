package bookauthor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.regex.Pattern;

import org.springframework.jdbc.core.RowMapper;
import java.util.regex.Matcher;

public class KeyWordMapper implements RowMapper<BookAuthor> {
	protected String query;

	public KeyWordMapper(String query) {
		this.query = query;
	}

	public BookAuthor mapRow(ResultSet rs, int rowNum) throws SQLException {
		int accuracy = 0;

		String[] splitArray = query.split("\\s+");

		for (int i = 0; i < splitArray.length; i++) {
			splitArray[i] = splitArray[i].replaceAll("(^.{3,})[aeiouy]$", "$1");
		}
		for (String x : splitArray) {
			String p = "(?i).*\\b(" + x + ".?)\\b.*";
			if (rs.getString(2).matches(p))
				accuracy += 20;
			if (rs.getString(3).matches(p))
				accuracy += 3;
			if (rs.getString(4).matches(p))
				accuracy += 20;
			if (rs.getString(8).matches(p))
				accuracy += 10;
			if (rs.getString(10).matches(p))
				accuracy += 2;
		}
		if (accuracy > 2) {
			BookAuthor n = new BookAuthor(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4),
					rs.getString(5), rs.getString(6), rs.getString(7));
			n.setAccuracy(accuracy);
			return n;
		} else {
			return null;
		}
	}
}
