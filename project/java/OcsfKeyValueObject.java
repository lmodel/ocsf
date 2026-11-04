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
  A generic object allowing to define a <code>{key:value}</code> pair.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKeyValueObject extends OcsfObjectBase {

  private String name;
  private String value;
  private List<String> values;


}