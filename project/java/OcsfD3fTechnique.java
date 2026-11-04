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
  The Defensive Technique object describes the leaf defensive technique ID and/or name associated to a countermeasure.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfD3fTechnique extends OcsfEntity {

  private String srcUrl;


}