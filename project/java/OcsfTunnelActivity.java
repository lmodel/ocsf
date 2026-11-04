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
  Tunnel Activity events report secure tunnel establishment (such as VPN), teardowns, renewals, and other network tunnel specific actions.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTunnelActivity extends OcsfNetworkEvent {

  private String protocolName;
  private OcsfSession session;
  private OcsfNetworkInterface tunnelInterface;
  private String tunnelType;
  private Integer tunnelTypeId;
  private OcsfUser user;


}