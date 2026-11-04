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
  SSH Activity events report remote client connections to a server using the Secure Shell (SSH) Protocol.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSshActivity extends OcsfNetworkEvent {

  private String authType;
  private Integer authTypeId;
  private OcsfHassh clientHassh;
  private OcsfFile file;
  private String protocolVer;
  private OcsfHassh serverHassh;


}