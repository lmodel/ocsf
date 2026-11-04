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
  The Data Classification profile adds attributes to specific resource objects, allowing users to describe information about classifiers & data classification results.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDataClassificationProfile  {

  private OcsfDataClassification dataClassification;
  private List<OcsfDataClassification> dataClassifications;


}