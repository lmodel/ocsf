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
  Account Change events report when specific user account management tasks are performed, such as a user/role being created or role assigned, changed, deleted, renamed, disabled, enabled, locked out or unlocked.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAccountChange extends OcsfIamEvent {

  private List<OcsfAuthFactor> authFactors;
  private List<OcsfPolicy> policies;
  private OcsfUser user;
  private OcsfUser userResult;


}