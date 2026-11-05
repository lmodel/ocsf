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
  Represents a connection or relationship between two nodes in a graph.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEdge extends OcsfEntity {

  private String data;
  private Boolean isDirected;
  private String relation;
  private String source;
  private String target;


}