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
  The Permission Analysis object describes analysis results of permissions, policies directly associated with an identity (user, role, or service account). This evaluates what permissions an identity has been granted through attached policies, which privileges are actively used versus unused, and identifies potential over-privileged access. Use this for identity-centric security assessments such as privilege audits, dormant permission discovery, and least-privilege compliance analysis.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPermissionAnalysisResult extends OcsfObjectBase {

  private Integer analyzedPrivilegesCount;
  private List<OcsfKeyValueObject> conditionKeys;
  private List<String> grantedPrivileges;
  private OcsfPolicy policy;
  private List<OcsfServicePrivilegeAnalysis> servicePrivilegeAnalysisList;
  private Integer totalPotentialAttacksCount;
  private Integer unusedPrivilegesCount;
  private Integer unusedServicesCount;


}