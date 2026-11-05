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
  The Resource object contains attributes that provide information about a particular resource. It serves as a base object, offering attributes that help identify and classify the resource effectively.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfResource extends OcsfEntity {

  private Integer createdTime;
  private String data;
  private List<String> labels;
  private Integer modifiedTime;
  private List<OcsfKeyValueObject> tags;
  private String type;
  private String uidAlt;
  private OcsfDataClassification dataClassification;
  private List<OcsfDataClassification> dataClassifications;


}