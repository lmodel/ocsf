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
  Memory Activity events report when a process has memory allocated, read/modified, or other manipulation activities - such as a buffer overflow or turning off data execution protection (DEP).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfMemoryActivity extends OcsfSystemEvent {

  private Integer actualPermissions;
  private String baseAddress;
  private OcsfProcess process;
  private Integer requestedPermissions;
  private Integer size;


}