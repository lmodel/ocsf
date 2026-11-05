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
  Entity Management events report activity by a managed client, a micro service, or a user at a management console. The activity can be a create, read, update, and delete operation on a managed entity.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEntityManagement extends OcsfIamEvent {

  private List<String> accessList;
  private Integer accessMask;
  private String comment;
  private OcsfManagedEntity entity;
  private OcsfManagedEntity entityResult;
  private OcsfManagedEntity updatedEntity;


}