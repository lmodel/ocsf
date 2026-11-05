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
  The Metric object defines a simple name/value pair entity for a metric.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfMetric extends OcsfObjectBase {

  private String name;
  private String value;


}