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
  Adds host and actor context to event classes. Apply this profile when the event originates from or is observed on a specific host or device, and when the initiating user, process, or service is known. All event classes include this profile by default through the base event.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfHostProfile  {

  private OcsfActor actor;
  private OcsfDevice device;


}