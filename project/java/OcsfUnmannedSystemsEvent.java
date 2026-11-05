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
  The Unmanned Systems event is a generic event that defines a set of attributes available in the Unmanned Systems category.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfUnmannedSystemsEvent extends OcsfBaseEvent {

  private OcsfNetworkConnectionInfo connectionInfo;
  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfNetworkProxy proxyEndpoint;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfTls tls;
  private OcsfNetworkTraffic traffic;


}