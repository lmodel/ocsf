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
  The HTTP Cookie object, also known as a web cookie or browser cookie, contains details and values pertaining to a small piece of data that a server sends to a user's web browser. This data is then stored by the browser and sent back to the server with subsequent requests, allowing the server to remember and track certain information about the user's browsing session or preferences.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfHttpCookie extends OcsfObjectBase {

  private String domain;
  private Integer expirationTime;
  private String expirationTimeDt;
  private Boolean httpOnly;
  private Boolean isHttpOnly;
  private Boolean isSecure;
  private String name;
  private String path;
  private String samesite;
  private Boolean secure;
  private String value;


}