package hello;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;



@SpringBootApplication
@ComponentScan(basePackages = { "author","book","bookauthor","category","grade","hello","review","session"})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}