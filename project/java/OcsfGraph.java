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
  A graph data structure representation with nodes and edges.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfGraph extends OcsfEntity {

  private String desc;
  private List<OcsfEdge> edges;
  private Boolean isDirected;
  private List<OcsfNode> nodes;
  private String queryLanguage;
  private Integer queryLanguageId;
  private String type;


}