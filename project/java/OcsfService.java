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
  The Service object describes characteristics of a service, <code> e.g. AWS EC2. </code>
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfService extends OcsfEntity {

  private List<String> labels;
  private List<OcsfKeyValueObject> tags;
  private String version;


}