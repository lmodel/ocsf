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
  Represents a node or a vertex in a graph structure.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNode extends OcsfObjectBase {

  private String data;
  private String desc;
  private String name;
  private String type;
  private String uid;


}