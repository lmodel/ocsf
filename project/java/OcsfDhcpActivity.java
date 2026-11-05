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
  DHCP Activity events report MAC to IP assignment via DHCP from a client or server.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDhcpActivity extends OcsfNetworkEvent {

  private Boolean isRenewal;
  private Integer leaseDur;
  private OcsfNetworkInterface relay;
  private String transactionUid;


}