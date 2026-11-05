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
  The Exploit Prediction Scoring System (EPSS) object describes the estimated probability a vulnerability will be exploited. EPSS is a community-driven effort to combine descriptive information about vulnerabilities (CVEs) with evidence of actual exploitation in-the-wild.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEpss extends OcsfObjectBase {

  private Integer createdTime;
  private String createdTimeDt;
  private Float percentile;
  private String score;
  private String version;


}