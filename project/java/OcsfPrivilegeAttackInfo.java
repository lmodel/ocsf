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
  The Privilege Attack Info object groups privileges by the potential attack they could enable. It maps specific privileges to MITRE ATT&CK techniques, helping identify security risks associated with granted permissions.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPrivilegeAttackInfo extends OcsfObjectBase {

  private OcsfAttack attack;
  private List<OcsfPrivilegeInfo> privilegeInfoList;


}