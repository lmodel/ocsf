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
  The TLS Extension object describes additional attributes that extend the base Transport Layer Security (TLS) object.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTlsExtension extends OcsfObjectBase {

  private String data;
  private String type;
  private int typeId;


}