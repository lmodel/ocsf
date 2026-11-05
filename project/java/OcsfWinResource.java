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
  The Windows resource object describes a resource object managed by Windows, such as mutant or timer.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinResource extends OcsfResource {

  private String createdTimeDt;
  private String details;
  private String modifiedTimeDt;
  private String svcName;
  private int typeId;


}