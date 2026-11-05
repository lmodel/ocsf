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
  Describes the baseline or expected behavior of a system, service, or component based on historical observations and measurements. It establishes reference points for comparison to detect anomalies, trends, and deviations from typical patterns.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfBaseline extends OcsfObjectBase {

  private String observationParameter;
  private String observationType;
  private List<OcsfObservation> observations;
  private String observedPattern;


}