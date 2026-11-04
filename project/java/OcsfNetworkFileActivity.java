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
  Network File Activity events report file activities traversing the network, including file storage services such as Box, MS OneDrive, or Google Drive.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkFileActivity extends OcsfNetworkEvent {

  private Integer expirationTime;
  private String expirationTimeDt;
  private OcsfFile file;


}