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
  Remediation Activity events report on attempts at remediating a compromised device or computer network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRemediationActivity extends OcsfBaseEvent {

  private String commandUid;
  private List<OcsfD3fend> countermeasures;
  private OcsfRemediation remediation;
  private OcsfScan scan;


}