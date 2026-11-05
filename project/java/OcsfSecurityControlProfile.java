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
  The attributes including disposition that represent the outcome of a security control including but not limited to access control, malware or policy violation, network proxy, intrusion detection, firewall, or data control.  The profile is intended to augment activities or findings with an outcome when a security control has observed or intervened. If the control detected a security violation, and the <code>disposition_id</code> or <code>action_id</code> is an alertable outcome or action, the <code>is_alert</code> flag may be set to <code>true</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSecurityControlProfile  {

  private String action;
  private Integer actionId;
  private List<OcsfAttack> attacks;
  private List<OcsfAuthorization> authorizations;
  private String confidence;
  private Integer confidenceId;
  private Integer confidenceScore;
  private String disposition;
  private Integer dispositionId;
  private OcsfFirewallRule firewallRule;
  private Boolean isAlert;
  private List<OcsfMalware> malware;
  private OcsfMalwareScanInfo malwareScanInfo;
  private OcsfPolicy policy;
  private String riskDetails;
  private String riskLevel;
  private Integer riskLevelId;
  private Integer riskScore;


}