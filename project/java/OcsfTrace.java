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
  The trace object contains information about a distributed trace,  which is crucial for observability. Traces are made up of one or more spans, which are individual units of work in application activity. Traces track the journey of a request as it moves through various services in a system, capturing key details like timing, status, and dependencies at each step. Traces provide insights into system performance, helping to identify latency, bottlenecks, and issues in complex, distributed environments.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTrace extends OcsfObjectBase {

  private Integer duration;
  private Integer endTime;
  private String endTimeDt;
  private List<String> flags;
  private OcsfService service;
  private OcsfSpan span;
  private Integer startTime;
  private String startTimeDt;
  private String uid;


}