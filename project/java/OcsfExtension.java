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
  The OCSF Schema Extension object provides detailed information about the schema extension used to construct the event. The schema extensions are registered in the <code>extensions.md</code> file.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfExtension extends OcsfEntity {

  private String version;


}