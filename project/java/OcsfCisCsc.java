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
  The CIS Critical Security Control (CSC) contains information as defined by the Center for Internet Security Critical Security Controls (CIS CSC). Prioritized set of actions to protect your organization and data from cyber-attack vectors.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCisCsc extends OcsfObjectBase {

  private String control;
  private String version;


}