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
  The load balancer object describes the load balancer entity and contains additional information regarding the distribution of traffic across a network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfLoadBalancer extends OcsfEntity {

  private String classification;
  private Integer code;
  private OcsfNetworkEndpoint dstEndpoint;
  private List<OcsfEndpointConnection> endpointConnections;
  private String errorMessage;
  private String ip;
  private String message;
  private List<OcsfMetric> metrics;
  private String statusDetail;


}