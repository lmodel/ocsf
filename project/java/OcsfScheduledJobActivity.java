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
  Scheduled Job Activity events report activities related to scheduled jobs or tasks.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfScheduledJobActivity extends OcsfSystemEvent {

  private OcsfJob job;
  private OcsfJob updatedJob;


}