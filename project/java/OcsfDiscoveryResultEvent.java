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
  Discovery Result events report the results of a discovery request.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfDiscoveryResultEvent extends OcsfBaseEvent {

  private OcsfQueryInfo queryInfo;
  private String queryResult;
  private int queryResultId;


}