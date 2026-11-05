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
  The Security State object describes the security related state of a managed entity.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSecurityState extends OcsfObjectBase {

  private String state;
  private Integer stateId;


}