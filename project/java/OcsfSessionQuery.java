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
  User Session Query events report information about existing user sessions.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSessionQuery extends OcsfDiscoveryResultEvent {

  private OcsfSession session;


}