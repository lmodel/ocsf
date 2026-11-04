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
  Authorize Session events report privileges, groups or roles assigned to a new user session, usually at login time.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAuthorizeSession extends OcsfIamEvent {

  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfGroup group;
  private List<OcsfGroup> groups;
  private List<OcsfIamRole> iamRoles;
  private List<String> privileges;
  private OcsfSession session;
  private OcsfUser user;


}