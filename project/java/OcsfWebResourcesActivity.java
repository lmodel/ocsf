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
  Web Resources Activity events describe actions executed on a set of Web Resources.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWebResourcesActivity extends OcsfApplicationEvent {

  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfTls tls;
  private List<OcsfWebResource> updatedWebResources;
  private List<OcsfWebResource> webResources;
  private List<OcsfWebResource> webResourcesResult;
  private OcsfNetworkConnectionInfo proxyConnectionInfo;
  private OcsfNetworkProxy proxyEndpoint;
  private OcsfHttpRequest proxyHttpRequest;
  private OcsfHttpResponse proxyHttpResponse;
  private OcsfTls proxyTls;
  private OcsfNetworkTraffic proxyTraffic;


}