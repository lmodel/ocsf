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
  HTTP Activity events report HTTP connection and traffic information.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfHttpActivity extends OcsfNetworkEvent {

  private OcsfFile file;
  private List<OcsfHttpCookie> httpCookies;
  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private Integer httpStatus;
  private OcsfTrace trace;


}