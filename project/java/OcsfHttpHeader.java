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
  The HTTP Header object represents the headers sent in an HTTP request or response. HTTP headers are key-value pairs that convey additional information about the HTTP message, including details about the content, caching, authentication, encoding, and other aspects of the communication.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfHttpHeader extends OcsfObjectBase {

  private String name;
  private String value;


}