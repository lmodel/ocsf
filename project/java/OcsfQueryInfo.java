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
  The query info object holds information related to data access within a datastore. To access, manipulate, delete, or retrieve data from a datastore, a query must be written using a specific syntax.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfQueryInfo extends OcsfEntity {

  private Integer bytes;
  private String data;
  private String queryString;
  private Integer queryTime;
  private String queryTimeDt;


}