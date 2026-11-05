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
  This finding represents an IAM analysis result, which evaluates IAM policies, access patterns, and IAM configurations for potential security risks. The analysis can focus on either an identity (user, role, service account) or a resource to assess permissions, access patterns, and security posture within the IAM domain. <br><strong>Note:</strong> Use <code>permission_analysis_results</code> for identity-centric analysis (evaluating what an identity can do) and <code>access_analysis_result</code> for resource-centric analysis (evaluating who can access a resource). These complement each other for comprehensive IAM security assessment.<br><strong>Note:</strong> If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile or aggregate this finding into an <code>Incident Finding</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfIamAnalysisFinding extends OcsfFindingEvent {

  private OcsfAccessAnalysisResult accessAnalysisResult;
  private List<OcsfApplication> applications;
  private OcsfIdentityActivityMetrics identityActivityMetrics;
  private List<OcsfPermissionAnalysisResult> permissionAnalysisResults;
  private OcsfRemediation remediation;
  private OcsfUser user;


}