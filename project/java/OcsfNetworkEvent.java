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
  Network event is a generic event that defines a set of attributes available in the Network category.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfNetworkEvent extends OcsfBaseEvent {

  private String appName;
  private String appProtocolName;
  private OcsfNetworkConnectionInfo connectionInfo;
  private OcsfNetworkTraffic cumulativeTraffic;
  private OcsfNetworkEndpoint dstEndpoint;
  private List<OcsfJa4Fingerprint> ja4FingerprintList;
  private OcsfNetworkEndpoint networkObservationPoint;
  private String observationPoint;
  private Integer observationPointId;
  private List<OcsfPacket> packetList;
  private OcsfNetworkProxy proxy;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfTls tls;
  private OcsfNetworkTraffic traffic;
  private OcsfNetworkConnectionInfo proxyConnectionInfo;
  private OcsfNetworkProxy proxyEndpoint;
  private OcsfHttpRequest proxyHttpRequest;
  private OcsfHttpResponse proxyHttpResponse;
  private OcsfTls proxyTls;
  private OcsfNetworkTraffic proxyTraffic;
  private OcsfLoadBalancer loadBalancer;
  private OcsfAiAgent aiAgent;
  private OcsfAiModel aiModel;
  private OcsfDelegation delegation;
  private OcsfMessageContext messageContext;


}