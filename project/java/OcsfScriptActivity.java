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
  Script Activity events report when a process executes a script.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfScriptActivity extends OcsfSystemEvent {

  private OcsfScript script;


}