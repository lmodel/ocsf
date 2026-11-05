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
  Cloud Resources Inventory Info events report cloud asset inventory data. This data can be either logged or proactively collected. For example, use this event class when creating an inventory of cloud resource information from a Configuration Management Database (CMDB), Cyber Asset Attack Surface Management (CAASM), direct public cloud service provider APIs, Software-as-a-Service (SaaS) APIs, or otherwise.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCloudResourcesInventoryInfo extends OcsfDiscoveryEvent {

  private OcsfContainer container;
  private OcsfDatabase database;
  private OcsfDatabucket databucket;
  private OcsfIdp idp;
  private String region;
  private List<OcsfResourceDetails> resources;
  private OcsfTable table;


}