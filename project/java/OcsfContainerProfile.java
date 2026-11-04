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
  The container context for a process.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfContainerProfile  {

  private OcsfContainer container;
  private Integer namespacePid;


}