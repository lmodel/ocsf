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
  Process Activity events report when a process launches, injects, opens or terminates another process, successful or otherwise.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfProcessActivity extends OcsfSystemEvent {

  private Integer actualPermissions;
  private Integer exitCode;
  private String injectionType;
  private Integer injectionTypeId;
  private String launchType;
  private Integer launchTypeId;
  private OcsfModule module;
  private OcsfProcess process;
  private Integer requestedPermissions;


}