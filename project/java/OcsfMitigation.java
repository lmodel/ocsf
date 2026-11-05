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
  The MITRE Mitigation object describes the ATT&CK® or ATLAS™ Mitigation ID and/or name that is associated to an attack.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfMitigation extends OcsfEntity {

  private List<OcsfD3fend> countermeasures;
  private String srcUrl;


}