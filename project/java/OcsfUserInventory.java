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
  User Inventory Info events report user inventory data that is either logged or proactively collected. For example, when collecting user information from Active Directory entries.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUserInventory extends OcsfDiscoveryEvent {

  private OcsfUser user;


}