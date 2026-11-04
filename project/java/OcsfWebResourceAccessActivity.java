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
  Web Resource Access Activity events describe successful/failed attempts to access a web resource over HTTP.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWebResourceAccessActivity extends OcsfApplicationEvent {

  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private OcsfNetworkProxy proxy;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfTls tls;
  private List<OcsfWebResource> webResources;
  private OcsfNetworkConnectionInfo proxyConnectionInfo;
  private OcsfNetworkProxy proxyEndpoint;
  private OcsfHttpRequest proxyHttpRequest;
  private OcsfHttpResponse proxyHttpResponse;
  private OcsfTls proxyTls;
  private OcsfNetworkTraffic proxyTraffic;


}