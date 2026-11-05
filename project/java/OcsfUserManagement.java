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
  User Management events report lifecycle management of a user and account management tasks that are performed, such as a password change or reset, a user being created, updated, deleted, disabled, enabled, locked out or unlocked. There are two ways updates to the state of a user may be expressed: Using the <code>Update</code> activity, for example when updating multiple items at one time, the <code>updated_user</code> reflects the changes made to <code>user</code>. Using discrete activities, such as <code>Assign Privileges</code> the state change is expressed by the <code>privileges</code> attribute. Optionally, on successful changes, the <code>updated_user</code> reflects the new state of the user.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUserManagement extends OcsfIamEvent {

  private List<OcsfAuthFactor> authFactors;
  private List<OcsfIamRole> iamRoles;
  private List<OcsfPolicy> policies;
  private List<String> privileges;
  private List<OcsfResourceDetails> resources;
  private OcsfUser updatedUser;
  private OcsfUser user;


}