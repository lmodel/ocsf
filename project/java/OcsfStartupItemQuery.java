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
  Startup Item Query events report information about discovered items, e.g., application components that are generally configured to run automatically.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfStartupItemQuery extends OcsfDiscoveryResultEvent {

  private OcsfStartupItem startupItem;


}