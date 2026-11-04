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
  The API, or Application Programming Interface, object represents  information pertaining to an API request and response.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfApi extends OcsfObjectBase {

  private OcsfGroup group;
  private String operation;
  private OcsfRequest request;
  private OcsfResponse response;
  private OcsfService service;
  private OcsfToken token;
  private String version;


}