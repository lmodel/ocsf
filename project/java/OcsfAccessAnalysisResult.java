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
  The Access Analysis Result object describes access relationships and pathways between identities, resources, focusing on who can access what and through which mechanisms. This evaluates access levels (read/write/admin), access types (direct, cross-account, public, federated), and the conditions under which access is granted. Use this for resource-centric security assessments such as external access discovery, public exposure analysis, etc.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAccessAnalysisResult extends OcsfObjectBase {

  private String accessLevel;
  private String accessType;
  private List<OcsfUser> accessors;
  private List<OcsfAdditionalRestriction> additionalRestrictions;
  private List<OcsfKeyValueObject> conditionKeys;
  private List<String> grantedPrivileges;


}