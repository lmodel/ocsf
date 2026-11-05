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
  The Trace Profile extends the OCSF framework to capture and standardize observability events, specifically targeting trace-level data. This profile enables integration and normalization of distributed tracing information, allowing OCSF events to retain essential trace context such as trace IDs, span relationships, and service dependencies.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTraceProfile  {

  private OcsfTrace trace;


}