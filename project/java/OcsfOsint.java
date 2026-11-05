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
  The OSINT (Open Source Intelligence) object contains details related to an indicator such as the indicator itself, related indicators, geolocation, registrar information, subdomains, analyst commentary, and other contextual information. This information can be used to further enrich a detection or finding by providing decisioning support to other analysts and engineers.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfOsint extends OcsfObjectBase {

  private List<OcsfDnsAnswer> answers;
  private List<OcsfAttack> attacks;
  private OcsfAutonomousSystem autonomousSystem;
  private OcsfCampaign campaign;
  private String category;
  private String comment;
  private String confidence;
  private Integer confidenceId;
  private Integer createdTime;
  private String createdTimeDt;
  private OcsfUser creator;
  private String desc;
  private String detectionPattern;
  private String detectionPatternType;
  private Integer detectionPatternTypeId;
  private OcsfEmail email;
  private OcsfEmailAuth emailAuth;
  private Integer expirationTime;
  private String expirationTimeDt;
  private String externalUid;
  private OcsfFile file;
  private List<String> intrusionSets;
  private List<OcsfKillChainPhase> killChain;
  private List<String> labels;
  private OcsfLocation location;
  private List<OcsfMalware> malware;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String name;
  private List<String> references;
  private List<OcsfAnalytic> relatedAnalytics;
  private OcsfReputation reputation;
  private Integer riskScore;
  private OcsfScript script;
  private String severity;
  private Integer severityId;
  private List<OcsfDigitalSignature> signatures;
  private String srcUrl;
  private List<String> subdomains;
  private String subnet;
  private OcsfThreatActor threatActor;
  private String tlp;
  private String type;
  private int typeId;
  private String uid;
  private Integer uploadedTime;
  private String uploadedTimeDt;
  private String value;
  private String vendorName;
  private List<OcsfVulnerability> vulnerabilities;
  private OcsfWhois whois;


}