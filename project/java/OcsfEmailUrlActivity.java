package example;

/* metamodel_version: 1.12.0 */
/* version: 1.9.0 */
import java.net.URI;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.List;
import lombok.*;

/**
  Email URL Activity events report URLs within an email.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEmailUrlActivity extends OcsfBaseEvent {

  private String emailUid;
  private OcsfUrl url;


}