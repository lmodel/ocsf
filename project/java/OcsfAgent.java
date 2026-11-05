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
  An Agent (also known as a Sensor) is typically installed on an Operating System (OS) and serves as a specialized software component that can be designed to monitor, detect, collect, archive, or take action. These activities and possible actions are defined by the upstream system controlling the Agent and its intended purpose. For instance, an Agent can include Endpoint Detection & Response (EDR) agents, backup/disaster recovery sensors, Application Performance Monitoring or profiling sensors, and similar software.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAgent extends OcsfObjectBase {

  private String name;
  private List<OcsfPolicy> policies;
  private String type;
  private Integer typeId;
  private String uid;
  private String uidAlt;
  private String vendorName;
  private String version;


}