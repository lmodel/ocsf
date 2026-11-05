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
  The CWE object represents a weakness in a software system that can be exploited by a threat actor to perform an attack. The CWE object is based on the Common Weakness Enumeration (CWE) catalog.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCwe extends OcsfObjectBase {

  private String caption;
  private String srcUrl;
  private String uid;


}