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
  Security Finding events describe findings, detections, anomalies, alerts and/or actions performed by security products
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSecurityFinding extends OcsfBaseEvent {

  private OcsfAnalytic analytic;
  private List<OcsfCisCsc> cisCsc;
  private OcsfCompliance compliance;
  private List<String> dataSources;
  private String evidence;
  private OcsfFinding finding;
  private String impact;
  private Integer impactId;
  private Integer impactScore;
  private List<OcsfKillChainPhase> killChain;
  private List<String> nist;
  private OcsfProcess process;
  private List<OcsfResourceDetails> resources;
  private String state;
  private int stateId;
  private List<OcsfVulnerability> vulnerabilities;


}