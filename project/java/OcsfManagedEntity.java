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
  The Managed Entity object describes the type and version of an entity, such as a user, device, or policy.  For types in the <code>type_id</code> enum list, an associated attribute should be populated.  If the type of entity is not in the <code>type_id</code> list, information can be put into the <code>data</code> attribute, <code>type_id</code> should be 'Other' and the <code>type</code> attribute should label the entity type.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfManagedEntity extends OcsfEntity {

  private String data;
  private OcsfDevice device;
  private OcsfEmail email;
  private OcsfGroup group;
  private OcsfLocation location;
  private OcsfOrganization org;
  private OcsfPolicy policy;
  private String type;
  private Integer typeId;
  private OcsfUser user;
  private String version;


}