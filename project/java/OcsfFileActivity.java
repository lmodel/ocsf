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
  File System Activity events report when a process performs an action on a file or folder.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFileActivity extends OcsfSystemEvent {

  private Integer accessMask;
  private String component;
  private String connectionUid;
  private String createMask;
  private OcsfFile file;
  private String fileDiff;
  private OcsfFile fileResult;


}