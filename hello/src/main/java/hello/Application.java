package hello;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;


@ImportResource("classpath:Beans.xml")
@SpringBootApplication
@ComponentScan(basePackages = { "author","book","bookauthor","category","grade","hello","review","session", "user","update","basket","newsletter"})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}