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
  The entity from which an event or finding was reported.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfReporter extends OcsfEntity {

  private String hostname;
  private String ip;
  private OcsfOrganization org;


}