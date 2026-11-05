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
  The Application Security Posture Finding event is a notification about any bug, defect, deficiency, exploit, vulnerability, weakness or any other issue with software and related systems. Application Security Posture Findings typically involve reporting on the greater context including compliance, impacted resources, remediation guidance, specific code defects, and/or vulnerability metadata. Application Security Posture Findings can be reported by Threat & Vulnerability Management (TVM) tools, Application Security Posture Management (ASPM) tools, or other similar tools. Note: if the event producer is a security control, the <code>security_control</code> profile should be applied and its <code>attacks</code> information, if present, should be duplicated into the <code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile or aggregate this finding into an <code>Incident Finding</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfApplicationSecurityPostureFinding extends OcsfFindingEvent {

  private OcsfApplication application;
  private OcsfCompliance compliance;
  private OcsfRemediation remediation;
  private List<OcsfVulnerability> vulnerabilities;


}