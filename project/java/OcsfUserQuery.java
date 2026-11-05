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
  User Query events report user data that have been discovered, queried, polled or searched. This event differs from User Inventory as it describes the result of a targeted search by filtering a subset of user attributes.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUserQuery extends OcsfDiscoveryResultEvent {

  private OcsfUser user;


}