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
  The Metadata object describes the metadata associated with the event.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfMetadata extends OcsfObjectBase {

  private String correlationUid;
  private List<String> debug;
  private String eventCode;
  private OcsfExtension extension;
  private List<OcsfExtension> extensions;
  private Boolean isTruncated;
  private List<String> labels;
  private String logFormat;
  private String logLevel;
  private String logName;
  private String logProvider;
  private String logSource;
  private String logVersion;
  private Integer loggedTime;
  private String loggedTimeDt;
  private List<OcsfLogger> loggers;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String originalEventUid;
  private String originalTime;
  private Integer processedTime;
  private String processedTimeDt;
  private OcsfProduct product;
  private List<String> profiles;
  private OcsfReporter reporter;
  private Integer sequence;
  private String source;
  private List<OcsfKeyValueObject> tags;
  private String tenantUid;
  private OcsfTimespan totalQueuedDuration;
  private List<OcsfTransformationInfo> transformationInfoList;
  private Integer transmitTime;
  private String transmitTimeDt;
  private String type;
  private String uid;
  private Integer untruncatedSize;
  private String version;
  private OcsfDataClassification dataClassification;
  private List<OcsfDataClassification> dataClassifications;


}