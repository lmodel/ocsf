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
  Application Lifecycle events report installation, removal, start, stop of an application or service.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfApplicationLifecycle extends OcsfApplicationEvent {

  private OcsfProduct app;
  private OcsfApplication application;


}