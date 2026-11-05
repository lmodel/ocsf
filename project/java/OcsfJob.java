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
  The Job object provides information about a scheduled job or task, including its name, command line, and state. It encompasses attributes that describe the properties and status of the scheduled job.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfJob extends OcsfObjectBase {

  private String cmdLine;
  private Integer createdTime;
  private String createdTimeDt;
  private String desc;
  private OcsfFile file;
  private List<OcsfJobAction> jobActions;
  private List<OcsfJobTrigger> jobTriggers;
  private Integer lastRunTime;
  private String lastRunTimeDt;
  private String name;
  private Integer nextRunTime;
  private String nextRunTimeDt;
  private String runState;
  private Integer runStateId;
  private String type;
  private Integer typeId;
  private String uid;
  private OcsfUser user;


}