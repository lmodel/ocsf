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
  Role Management events report lifecycle management of a role, as well as privileges, policies, credentials, and resources associated with the role. There are two ways updates to the state of a role may be expressed: Using the <code>Update</code> activity, for example when updating multiple items at one time, the <code>updated_role</code> reflects the changes made to <code>iam_role</code>. Using discrete activities, such as <code>Assign Privileges</code> the state change is expressed by the <code>privileges</code> attribute. Optionally, on success, the <code>updated_role</code> reflects the new state of the role. Roles assigned or removed from users and groups are expressed by the <code>User Management</code> and <code>Group Management</code> classes.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRoleManagement extends OcsfIamEvent {

  private OcsfIamRole iamRole;
  private List<OcsfPolicy> policies;
  private List<String> privileges;
  private List<OcsfProgrammaticCredential> programmaticCredentials;
  private List<OcsfResourceDetails> resources;
  private OcsfIamRole updatedRole;


}