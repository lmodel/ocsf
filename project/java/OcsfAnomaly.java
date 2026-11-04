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
  Describes an anomaly or deviation detected in a system. Anomalies are unexpected activity patterns that could indicate potential issues needing attention.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAnomaly extends OcsfObjectBase {

  private String observationParameter;
  private String observationType;
  private List<OcsfObservation> observations;
  private String observedPattern;


}