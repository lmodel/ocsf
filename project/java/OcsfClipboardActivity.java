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
  Clipboard Activity events report when a process performs an action on a clipboard.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfClipboardActivity extends OcsfSystemEvent {

  private OcsfClipboard clipboard;
  private OcsfProcess sourceProcess;


}