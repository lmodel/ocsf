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
  The Rule object describes characteristics of a rule associated with a policy or an event.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRule extends OcsfEntity {

  private String category;
  private String desc;
  private String type;
  private String version;


}