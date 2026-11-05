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
  Datastore events describe general activities (Read, Update, Query, Delete, etc.) which affect datastores or data within those datastores, e.g. (AWS RDS, AWS S3).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDatastoreActivity extends OcsfApplicationEvent {

  private OcsfDatabase database;
  private OcsfDatabucket databucket;
  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private OcsfQueryInfo queryInfo;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfTable table;
  private String type;
  private Integer typeId;


}