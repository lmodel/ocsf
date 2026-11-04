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
  The base event is a generic and concrete event. It also defines a set of attributes available in most event classes. As a generic event that does not belong to any event category, it could be used to log events that are not otherwise defined by the schema.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfBaseEvent  {

  private int activityId;
  private String activityName;
  private String categoryName;
  private int categoryUid;
  private String className;
  private int classUid;
  private Integer count;
  private Integer duration;
  private Integer endTime;
  private String endTimeDt;
  private List<OcsfEnrichment> enrichments;
  private String message;
  private OcsfMetadata metadata;
  private List<OcsfObservable> observables;
  private String rawData;
  private OcsfFingerprint rawDataHash;
  private Integer rawDataSize;
  private String severity;
  private int severityId;
  private Integer startTime;
  private String startTimeDt;
  private String status;
  private String statusCode;
  private String statusDetail;
  private Integer statusId;
  private int time;
  private String timeDt;
  private Integer timezoneOffset;
  private String typeName;
  private int typeUid;
  private Object unmapped;
  private OcsfApi api;
  private OcsfCloud cloud;
  private OcsfActor actor;
  private OcsfDevice device;
  private List<OcsfOsint> osint;
  private List<OcsfAttestation> attestationList;
  private String action;
  private Integer actionId;
  private List<OcsfAttack> attacks;
  private List<OcsfAuthorization> authorizations;
  private String confidence;
  private Integer confidenceId;
  private Integer confidenceScore;
  private String disposition;
  private Integer dispositionId;
  private OcsfFirewallRule firewallRule;
  private Boolean isAlert;
  private List<OcsfMalware> malware;
  private OcsfMalwareScanInfo malwareScanInfo;
  private OcsfPolicy policy;
  private String riskDetails;
  private String riskLevel;
  private Integer riskLevelId;
  private Integer riskScore;


}