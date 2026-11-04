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
  The Related Event object describes an event or another finding related to a finding. It may or may not be an OCSF event.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRelatedEvent extends OcsfObjectBase {

  private List<OcsfAttack> attacks;
  private Integer count;
  private Integer createdTime;
  private String createdTimeDt;
  private String desc;
  private Integer firstSeenTime;
  private String firstSeenTimeDt;
  private List<OcsfKillChainPhase> killChain;
  private Integer lastSeenTime;
  private String lastSeenTimeDt;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private List<OcsfObservable> observables;
  private OcsfProduct product;
  private String productUid;
  private String severity;
  private Integer severityId;
  private String status;
  private List<OcsfKeyValueObject> tags;
  private String title;
  private List<OcsfTrait> traits;
  private String type;
  private String typeName;
  private Integer typeUid;
  private String uid;


}