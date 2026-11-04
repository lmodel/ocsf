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
  Network Activity events report network connection and traffic activity.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkActivity extends OcsfNetworkEvent {

  private String initiator;
  private Integer initiatorId;
  private Boolean isSrcDstAssignmentKnown;
  private OcsfUrl url;


}