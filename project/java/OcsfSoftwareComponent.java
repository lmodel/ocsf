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
  The Software Component object describes characteristics of a software component within a software package.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSoftwareComponent extends OcsfObjectBase {

  private String author;
  private OcsfFingerprint hash;
  private String license;
  private String name;
  private String purl;
  private String relatedComponent;
  private String relationship;
  private Integer relationshipId;
  private String type;
  private Integer typeId;
  private String version;


}