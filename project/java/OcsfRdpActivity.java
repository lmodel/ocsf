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
  Remote Desktop Protocol (RDP) Activity events report post-authentication remote client connections between clients and servers over the network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRdpActivity extends OcsfNetworkEvent {

  private List<String> capabilities;
  private List<String> certificateChain;
  private OcsfFile file;
  private String identifierCookie;
  private OcsfKeyboardInfo keyboardInfo;
  private String protocolVer;
  private OcsfDisplay remoteDisplay;
  private OcsfRequest request;
  private OcsfResponse response;
  private OcsfUser user;


}