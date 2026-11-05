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
  The attributes that describe information specific to Cloud services/applications.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCloudProfile  {

  private OcsfApi api;
  private OcsfCloud cloud;


}