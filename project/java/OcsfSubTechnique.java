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
  The MITRE Sub-technique object describes the ATT&CK® or ATLAS™ Sub-technique ID and/or name associated to an attack.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSubTechnique extends OcsfEntity {

  private String srcUrl;


}