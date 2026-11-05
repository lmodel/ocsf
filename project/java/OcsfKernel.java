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
  The Kernel Resource object provides information about a specific kernel resource, including its name and type. It describes essential attributes associated with a resource managed by the kernel of an operating system.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKernel extends OcsfObjectBase {

  private Boolean isSystem;
  private String name;
  private String path;
  private String systemCall;
  private String type;
  private int typeId;


}