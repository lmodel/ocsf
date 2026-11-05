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
  Represents a single unit of work or operation within a distributed trace. A span typically tracks the execution of a request across a service, capturing important details such as the operation, timestamps, and status. Spans help break down the overall trace into smaller, manageable parts, enabling detailed analysis of the performance and behavior of specific operations within the system. They are crucial for understanding latency, dependencies, and bottlenecks in complex distributed systems.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSpan extends OcsfObjectBase {

  private Integer duration;
  private int endTime;
  private String endTimeDt;
  private String message;
  private String operation;
  private String parentUid;
  private OcsfService service;
  private int startTime;
  private String startTimeDt;
  private String statusCode;
  private String uid;


}