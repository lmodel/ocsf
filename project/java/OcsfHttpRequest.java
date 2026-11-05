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
  The HTTP Request object represents the attributes of a request made to a web server. It encapsulates the details and metadata associated with an HTTP request, including the request method, headers, URL, query parameters, body content, and other relevant information.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfHttpRequest extends OcsfObjectBase {

  private String args;
  private Integer bodyLength;
  private List<OcsfHttpHeader> httpHeaders;
  private String httpMethod;
  private Integer length;
  private String referrer;
  private String uid;
  private OcsfUrl url;
  private String userAgent;
  private String version;
  private List<String> xForwardedFor;


}