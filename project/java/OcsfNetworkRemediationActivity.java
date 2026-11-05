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
  Network Remediation Activity events report on attempts at remediating computer networks. Techniques and Sub-techniques of countermeasures will include Network, such as Network Isolation or Network Traffic Filtering.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkRemediationActivity extends OcsfRemediationActivity {

  private OcsfNetworkConnectionInfo connectionInfo;


}