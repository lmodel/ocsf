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
  The analysis target defines the scope of monitored activities, specifying what entity, system or process is analyzed for activity patterns.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAnalysisTarget  {

  private String name;
  private String type;


}