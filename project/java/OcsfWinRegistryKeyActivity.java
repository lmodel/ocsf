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
  Registry Key Activity events report when a process performs an action on a Windows registry key.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinRegistryKeyActivity extends OcsfSystemEvent {

  private Integer accessMask;
  private String createMask;
  private Integer openMask;
  private OcsfWinRegKey prevRegKey;
  private OcsfWinRegKey regKey;


}