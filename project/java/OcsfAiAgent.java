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
  An autonomous AI agent that performs tasks under delegated authority. Distinguished from the OCSF agent object (which describes security sensors such as EDR and DLP tools) and from human principals. An AI agent has a stable logical identity across runs and a restart-sensitive instance identity. The agent owns its model; the ai_model attribute captures which model was backing the agent at the time of action.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAiAgent extends OcsfEntity {

  private OcsfAiModel aiModel;
  private OcsfFile charter;
  private String instanceUid;
  private String type;
  private Integer typeId;
  private String version;


}