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
  The Network Endpoint object describes characteristics of a network endpoint. These can be a source or destination of a network connection.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkEndpoint extends OcsfEndpoint {

  private OcsfAutonomousSystem autonomousSystem;
  private List<OcsfFingerprint> fingerprints;
  private List<String> intermediateIps;
  private String isp;
  private String ispOrg;
  private String networkScope;
  private Integer networkScopeId;
  private Integer port;
  private OcsfNetworkProxy proxyEndpoint;
  private String svcName;


}