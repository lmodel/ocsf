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
  The Web Resource object describes characteristics of a web resource that was affected by the activity/event.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWebResource extends OcsfResource {

  private String createdTimeDt;
  private String desc;
  private String modifiedTimeDt;
  private String urlString;


}