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
  API events describe general CRUD (Create, Read, Update, Delete) API activities, e.g. (AWS Cloudtrail)
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfApiActivity extends OcsfApplicationEvent {

  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private List<OcsfResourceDetails> resources;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfTrace trace;


}