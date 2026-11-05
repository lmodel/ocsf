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
  The Request Elements object describes characteristics of an API request.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRequest extends OcsfObjectBase {

  private List<OcsfContainer> containers;
  private String data;
  private List<String> flags;
  private String uid;


}