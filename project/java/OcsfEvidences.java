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
  A collection of evidence artifacts associated to the activity/activities that triggered a security detection.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEvidences extends OcsfEntity {

  private OcsfActor actor;
  private OcsfAiAgent aiAgent;
  private OcsfApi api;
  private OcsfNetworkConnectionInfo connectionInfo;
  private OcsfContainer container;
  private String data;
  private OcsfDatabase database;
  private OcsfDatabucket databucket;
  private OcsfDevice device;
  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfEmail email;
  private OcsfFile file;
  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private List<OcsfJa4Fingerprint> ja4FingerprintList;
  private OcsfJob job;
  private OcsfProcess process;
  private OcsfDnsQuery query;
  private OcsfWinRegKey regKey;
  private OcsfWinRegValue regValue;
  private List<OcsfResourceDetails> resources;
  private OcsfScript script;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfTls tls;
  private OcsfUrl url;
  private OcsfUser user;
  private String verdict;
  private Integer verdictId;
  private OcsfWinService winService;


}