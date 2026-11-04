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
  Data collected directly from devices that represents forensic information pulled, queried, or discovered from devices that may indicate malicious activity. It contains a number of child objects, each representing a distinct evidence domain (network connections, file artifacts, registry entries, etc.). When mapping raw telemetry data users should select Query Evidence and then the appropriate child object that best matches the evidence type.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEvidenceInfo extends OcsfDiscoveryResultEvent {

  private OcsfQueryEvidence queryEvidence;


}