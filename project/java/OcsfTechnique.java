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
  The MITRE Technique object describes the ATT&CK® or ATLAS™ Technique ID and/or name associated to an attack.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTechnique extends OcsfEntity {

  private String srcUrl;


}