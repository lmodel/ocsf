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
  Threat actor is responsible for the observed malicious activity.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfThreatActor extends OcsfObjectBase {

  private String name;
  private String type;
  private Integer typeId;


}