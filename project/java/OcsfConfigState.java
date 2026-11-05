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
  Device Config State events report device configuration data, device assessments, and/or CIS Benchmark results.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfConfigState extends OcsfDiscoveryEvent {

  private List<OcsfAssessment> assessments;
  private OcsfCisBenchmarkResult cisBenchmarkResult;


}