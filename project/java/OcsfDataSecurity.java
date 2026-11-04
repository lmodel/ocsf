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
  The Data Security object describes the characteristics, techniques and content of a Data Loss Prevention (DLP), Data Loss Detection (DLD), Data Classification, or similar tools' finding, alert, or detection mechanism(s).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDataSecurity extends OcsfDataClassification {

  private String dataLifecycleState;
  private Integer dataLifecycleStateId;
  private String detectionPattern;
  private String detectionSystem;
  private Integer detectionSystemId;
  private String patternMatch;


}