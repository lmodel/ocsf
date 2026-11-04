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
  Folder Query events report information about folders that are present on the system.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFolderQuery extends OcsfDiscoveryResultEvent {

  private OcsfFile folder;


}