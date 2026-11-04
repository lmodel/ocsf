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
  The Common Vulnerabilities and Exposures (CVE) object represents publicly disclosed cybersecurity vulnerabilities defined in CVE Program catalog (CVE). There is one CVE Record for each vulnerability in the catalog.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCve extends OcsfObjectBase {

  private Integer createdTime;
  private String createdTimeDt;
  private List<OcsfCvss> cvss;
  private OcsfCwe cwe;
  private String cweUid;
  private String cweUrl;
  private String desc;
  private OcsfEpss epss;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private OcsfProduct product;
  private List<String> references;
  private List<OcsfCwe> relatedCwes;
  private String title;
  private String type;
  private String uid;


}