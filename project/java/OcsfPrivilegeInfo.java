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
  The Privilege Info object describes information about a specific privilege, action, or permission. It captures the privilege name, type, usage status, and when it was last used.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPrivilegeInfo extends OcsfObjectBase {

  private Boolean isUnused;
  private Integer lastUsedTime;
  private String lastUsedTimeDt;
  private String name;
  private String type;
  private Integer typeId;


}