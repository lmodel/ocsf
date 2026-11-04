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
  Admin Group Query events report information about administrative groups.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAdminGroupQuery extends OcsfDiscoveryResultEvent {

  private OcsfGroup group;
  private List<OcsfUser> users;


}