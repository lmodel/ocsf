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
  Group Management events report lifecycle management of a group, as well as privileges, roles, and resources associated with the group. There are two ways updates to the state of a group may be expressed: Using the <code>Update</code> activity, for example when updating multiple items at one time, the <code>updated_group</code> reflects the changes made to <code>group</code>. Using discrete activities, such as <code>Assign Privileges</code> the state change is expressed by the <code>privileges</code> attribute. Optionally, on success, the <code>updated_group</code> reflects the new state of the group.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfGroupManagement extends OcsfIamEvent {

  private OcsfGroup group;
  private List<OcsfIamRole> iamRoles;
  private List<OcsfPolicy> policies;
  private List<String> privileges;
  private OcsfResourceDetails resource;
  private List<OcsfResourceDetails> resources;
  private OcsfGroup subgroup;
  private OcsfGroup updatedGroup;
  private OcsfUser user;
  private List<OcsfUser> users;


}