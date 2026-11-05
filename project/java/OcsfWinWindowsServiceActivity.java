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
  Windows Service Activity events report when a process interacts with the Service Control Manager.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinWindowsServiceActivity extends OcsfSystemEvent {

  private OcsfWinService prevWinService;
  private OcsfWinService winService;


}