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
  Kernel Extension events report when a driver/extension is loaded or unloaded into the kernel
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKernelExtensionActivity extends OcsfSystemEvent {

  private OcsfKernelDriver driver;


}