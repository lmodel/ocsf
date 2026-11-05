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
  The Endpoint Connection object contains information detailing a connection attempt to an endpoint.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEndpointConnection extends OcsfObjectBase {

  private Integer code;
  private OcsfNetworkEndpoint networkEndpoint;


}