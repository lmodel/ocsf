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
  Event Log Activity events report actions pertaining to the system's event logging service(s), such as disabling logging or clearing the log data.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEventLogActvity extends OcsfSystemEvent {

  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfFile file;
  private String logName;
  private String logProvider;
  private String logType;
  private Integer logTypeId;
  private OcsfNetworkEndpoint srcEndpoint;


}