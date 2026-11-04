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
  Prefetch Query events report information about Windows prefetch files.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinPrefetchQuery extends OcsfDiscoveryResultEvent {

  private Integer lastRunTime;
  private String lastRunTimeDt;
  private String name;
  private Integer runCount;


}