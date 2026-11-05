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
  The Common Vulnerability Scoring System (CVSS) object provides a way to capture the principal characteristics of a vulnerability and produce a numerical score reflecting its severity.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCvss extends OcsfObjectBase {

  private float baseScore;
  private String depth;
  private List<OcsfMetric> metrics;
  private Float overallScore;
  private String severity;
  private String srcUrl;
  private String vectorString;
  private String vendorName;
  private String version;


}