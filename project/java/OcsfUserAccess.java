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
  User Access Management events report management updates to a user's privileges.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUserAccess extends OcsfIamEvent {

  private OcsfIamRole iamRole;
  private List<String> privileges;
  private OcsfResourceDetails resource;
  private List<OcsfResourceDetails> resources;
  private OcsfUser user;


}