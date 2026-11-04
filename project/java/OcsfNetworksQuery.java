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
  Networks Query events report information about network adapters.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworksQuery extends OcsfDiscoveryResultEvent {

  private List<OcsfNetworkInterface> networkInterfaces;


}