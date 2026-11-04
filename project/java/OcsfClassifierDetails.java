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
  The Classifier Details object describes details about the classifier used for data classification.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfClassifierDetails extends OcsfObjectBase {

  private String name;
  private String type;
  private String uid;


}