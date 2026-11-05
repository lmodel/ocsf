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
  The Endpoint object describes a physical or virtual device that connects to and exchanges information with a computer network. Some examples of endpoints are mobile devices, desktop computers, virtual machines, embedded devices, and servers. Internet-of-Things devices—like cameras, lighting, refrigerators, security systems, smart speakers, and thermostats—are also endpoints.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEndpoint extends OcsfEntity {

  private List<OcsfAgent> agentList;
  private String domain;
  private String hostname;
  private OcsfDeviceHwInfo hwInfo;
  private String instanceUid;
  private String interfaceName;
  private String interfaceUid;
  private String ip;
  private OcsfLocation location;
  private String mac;
  private String macVendor;
  private OcsfOs os;
  private OcsfUser owner;
  private OcsfGroup pool;
  private String subnetUid;
  private String type;
  private Integer typeId;
  private String vlanUid;
  private String vpcUid;
  private String zone;
  private OcsfContainer container;
  private Integer namespacePid;


}