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
  The Defensive Countermeasure object describes the tactic & technique associated with a countermeasure.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfD3fend extends OcsfObjectBase {

  private OcsfD3fTactic d3fTactic;
  private OcsfD3fTechnique d3fTechnique;
  private String version;


}