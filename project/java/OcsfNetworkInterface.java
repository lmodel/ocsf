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
  The Network Interface object describes the type and associated attributes of a physical or virtual network interface.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkInterface extends OcsfEntity {

  private String hostname;
  private String ip;
  private String mac;
  private String namespace;
  private List<OcsfPortInfo> openPorts;
  private Integer subnetPrefix;
  private String type;
  private Integer typeId;


}