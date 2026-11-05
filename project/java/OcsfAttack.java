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
  The Attack object describes the tactic, technique, sub-technique & mitigation associated to an attack.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAttack extends OcsfObjectBase {

  private OcsfMitigation mitigation;
  private OcsfSubTechnique subTechnique;
  private OcsfTactic tactic;
  private List<OcsfTactic> tactics;
  private OcsfTechnique technique;
  private String version;


}