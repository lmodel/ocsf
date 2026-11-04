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
  The HTTP Response object contains detailed information about the response sent from a web server to the requester. It encompasses attributes and metadata that describe the response status, headers, body content, and other relevant information.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfHttpResponse extends OcsfObjectBase {

  private Integer bodyLength;
  private int code;
  private String contentType;
  private List<OcsfHttpHeader> httpHeaders;
  private Integer latency;
  private Integer length;
  private String message;
  private String status;


}