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
  A record of an observed value or event that captures the timing and frequency of its occurrence. Used to track when values/events were first detected, last detected, and their total occurrence count.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfObservation extends OcsfObjectBase {

  private Integer count;
  private OcsfTimespan timespan;
  private String value;


}