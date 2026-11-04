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
  File Hosting Activity events report the actions taken by file management applications, including file sharing servers like Sharepoint and services such as Box, MS OneDrive, Google Drive, or network file share services.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFileHosting extends OcsfApplicationEvent {

  private List<String> accessList;
  private Integer accessMask;
  private String accessResult;
  private OcsfNetworkConnectionInfo connectionInfo;
  private OcsfNetworkEndpoint dstEndpoint;
  private Integer expirationTime;
  private String expirationTimeDt;
  private OcsfFile file;
  private OcsfFile fileResult;
  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private String share;
  private String shareType;
  private Integer shareTypeId;
  private OcsfNetworkEndpoint srcEndpoint;


}