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
  The IAM Role object describes permission characteristics (or privileges) associated with a user or group of users as security principals against one or more resources. In some cases only the name or ID of the role is known hence other attributes are optional. In some systems a user or group of users can have multiple roles, imparting the union of privileges to the principal. In some systems the role can serve as a temporary security principal without its own credentials on behalf of the actual security principal.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfIamRole extends OcsfEntity {

  private OcsfAccount account;
  private List<OcsfPolicy> policies;
  private List<String> privileges;
  private List<OcsfProgrammaticCredential> programmaticCredentials;
  private List<OcsfResourceDetails> resources;
  private OcsfSession session;
  private String uidAlt;


}