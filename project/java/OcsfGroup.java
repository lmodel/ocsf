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
  The Group object represents a collection or association of entities, such as users, policies, or devices. It serves as a logical grouping mechanism to organize and manage entities with similar characteristics or permissions within a system or organization, including but not limited to purposes of access control.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfGroup extends OcsfEntity {

  private String desc;
  private String domain;
  private List<String> privileges;
  private String type;
  private String uidAlt;


}