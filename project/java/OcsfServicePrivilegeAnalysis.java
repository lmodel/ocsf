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
  The Service Privilege Analysis object describes privilege analysis results for a single cloud service or resource namespace. It provides metrics on privilege usage, counts by type, and mappings to potential attack techniques.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfServicePrivilegeAnalysis extends OcsfObjectBase {

  private Boolean allPrivilegesUnused;
  private Integer analyzedPrivilegesCount;
  private Integer executeCount;
  private Integer lastUsedTime;
  private String lastUsedTimeDt;
  private String name;
  private List<OcsfPrivilegeAttackInfo> privilegeAttackInfoList;
  private Integer readCount;
  private Integer unusedPrivilegesCount;
  private Integer writeCount;


}