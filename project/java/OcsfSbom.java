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
  The Software Bill of Materials object describes characteristics of a generated SBOM.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSbom extends OcsfObjectBase {

  private Integer createdTime;
  private String createdTimeDt;
  private OcsfPackage package_;
  private OcsfProduct product;
  private List<OcsfSoftwareComponent> softwareComponents;
  private String type;
  private Integer typeId;
  private String uid;
  private String version;


}