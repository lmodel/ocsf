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
  Registry Value Query events report information about discovered Windows registry values.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinRegistryValueQuery extends OcsfDiscoveryResultEvent {

  private OcsfWinRegValue regValue;


}