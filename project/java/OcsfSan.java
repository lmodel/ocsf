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
  The Subject Alternative name (SAN) object describes a SAN secured by a digital certificate
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSan extends OcsfObjectBase {

  private String name;
  private String type;


}