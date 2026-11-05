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
  The Discovery Details object describes results of a discovery task/job. Each result may be due to the violation of a <code>rule</code> associated with a <code>policy</code> and have multiple <code>occurrences</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDiscoveryDetails extends OcsfObjectBase {

  private Integer count;
  private OcsfOccurrenceDetails occurrenceDetails;
  private List<OcsfOccurrenceDetails> occurrences;
  private OcsfRule rule;
  private String type;
  private String value;


}