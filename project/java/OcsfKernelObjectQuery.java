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
  Kernel Object Query events report information about discovered kernel resources.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKernelObjectQuery extends OcsfDiscoveryResultEvent {

  private OcsfKernel kernel;


}