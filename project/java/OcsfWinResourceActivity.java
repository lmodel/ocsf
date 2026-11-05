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
  Windows Resource Activity events report when a process accesses a Windows managed resource object, successful or otherwise.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinResourceActivity extends OcsfSystemEvent {

  private OcsfWinResource winResource;


}