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
  Module Activity events report when an endpoint process acts on a <code>module</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfModuleActivity extends OcsfSystemEvent {

  private OcsfModule module;


}