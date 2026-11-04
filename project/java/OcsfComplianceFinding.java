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
  Compliance Finding events describe results of evaluations performed against resources, to check compliance with various Industry Frameworks or Security Standards such as <code>NIST SP 800-53, CIS AWS Foundations Benchmark v1.4.0, ISO/IEC 27001</code> etc. Note: if the event producer is a security control, the <code>security_control</code> profile should be applied and its <code>attacks</code> information, if present, should be duplicated into the <code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile or aggregate this finding into an <code>Incident Finding</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfComplianceFinding extends OcsfFindingEvent {

  private OcsfCompliance compliance;
  private List<OcsfEvidences> evidences;
  private OcsfRemediation remediation;
  private OcsfResourceDetails resource;


}