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
  The condition or event that, when met, will initiate the job to perform specified actions.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfJobTrigger  {

  private List<String> eventCodes;
  private Integer lastRunTime;
  private String lastRunTimeDt;
  private List<String> logSources;
  private Integer nextRunTime;
  private String nextRunTimeDt;
  private List<OcsfKeyValueObject> properties;
  private String type;
  private int typeId;
  private OcsfUser user;


}