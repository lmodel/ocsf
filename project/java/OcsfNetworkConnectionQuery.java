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
  Network Connection Query events report information about active network connections.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkConnectionQuery extends OcsfDiscoveryResultEvent {

  private OcsfNetworkConnectionInfo connectionInfo;
  private OcsfProcess process;
  private String state;
  private int stateId;


}