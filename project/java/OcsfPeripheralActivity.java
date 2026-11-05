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
  Peripheral Activity events log a system's interactions with external, connectable, and detachable hardware. These events provide visibility into the external devices connected to and used by a system.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPeripheralActivity extends OcsfSystemEvent {

  private OcsfPeripheralDevice peripheralDevice;


}