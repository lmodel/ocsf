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
  Server Message Block (SMB) Protocol Activity events report client/server connections sharing resources within the network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSmbActivity extends OcsfNetworkEvent {

  private List<String> clientDialects;
  private String command;
  private OcsfDceRpc dceRpc;
  private String dialect;
  private OcsfFile file;
  private String openType;
  private OcsfResponse response;
  private String share;
  private String shareType;
  private Integer shareTypeId;
  private String treeUid;


}