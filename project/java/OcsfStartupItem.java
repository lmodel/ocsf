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
  The startup item object describes an application component that has associated startup criteria and configurations.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfStartupItem  {

  private OcsfKernelDriver driver;
  private OcsfJob job;
  private String name;
  private OcsfProcess process;
  private List<Integer> runModeIds;
  private List<String> runModes;
  private String runState;
  private Integer runStateId;
  private String startType;
  private int startTypeId;
  private String type;
  private Integer typeId;
  private OcsfWinService winService;


}