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
  The CIS Control (aka Critical Security Control) object describes a prioritized set of actions to protect your organization and data from cyber-attack vectors. The CIS Controls are defined by the Center for Internet Security.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCisControl extends OcsfObjectBase {

  private String desc;
  private String name;
  private String version;


}