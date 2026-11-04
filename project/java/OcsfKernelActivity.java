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
  Kernel Activity events report when an process creates, reads, or deletes a kernel resource.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKernelActivity extends OcsfSystemEvent {

  private OcsfKernel kernel;


}