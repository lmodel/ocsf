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
  The Port Information object describes a port and its associated protocol details.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPortInfo extends OcsfObjectBase {

  private int port;
  private String protocolName;
  private Integer protocolNum;


}