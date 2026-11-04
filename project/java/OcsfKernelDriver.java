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
  The Kernel Extension object describes a kernel driver that has been loaded or unloaded into the operating system (OS) kernel.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKernelDriver extends OcsfObjectBase {

  private OcsfFile file;


}