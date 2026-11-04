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
  Process Remediation Activity events report on attempts at remediating processes. Sub-techniques of countermeasures will include Process Eviction, such as Process Termination or Kernel-based Process Isolation.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfProcessRemediationActivity extends OcsfRemediationActivity {

  private OcsfProcess process;


}