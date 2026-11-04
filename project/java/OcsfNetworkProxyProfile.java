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
  The attributes that identify network proxy attributes.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkProxyProfile  {

  private OcsfNetworkConnectionInfo proxyConnectionInfo;
  private OcsfNetworkProxy proxyEndpoint;
  private OcsfHttpRequest proxyHttpRequest;
  private OcsfHttpResponse proxyHttpResponse;
  private OcsfTls proxyTls;
  private OcsfNetworkTraffic proxyTraffic;


}