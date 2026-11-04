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
  An Application describes the details for an inventoried application as reported by an Application Security tool or other Developer-centric tooling. Applications can be defined as Kubernetes resources, Containerized resources, or application hosting-specific cloud sources such as AWS Elastic BeanStalk, AWS Lightsail, or Azure Logic Apps.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfApplication extends OcsfObjectBase {

  private String criticality;
  private String data;
  private String desc;
  private OcsfGroup group;
  private String hostname;
  private List<String> labels;
  private String name;
  private OcsfUser owner;
  private OcsfProduct product;
  private String region;
  private OcsfGraph resourceRelationship;
  private String riskLevel;
  private Integer riskLevelId;
  private Integer riskScore;
  private OcsfSbom sbom;
  private List<OcsfKeyValueObject> tags;
  private String type;
  private String uid;
  private String uidAlt;
  private OcsfUrl url;
  private String version;


}