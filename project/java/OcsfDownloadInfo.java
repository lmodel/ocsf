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
  The Download Info object contains metadata pertaining to a downloaded file.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDownloadInfo extends OcsfObjectBase {

  private String referrer;
  private OcsfNetworkEndpoint srcEndpoint;
  private String srcUrl;
  private String type;
  private Integer typeId;


}