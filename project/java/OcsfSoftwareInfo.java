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
  Software Inventory Info events report device software inventory data that is either logged or proactively collected. For example, when collecting device information from a CMDB or running a network sweep of connected devices.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSoftwareInfo extends OcsfDiscoveryEvent {

  private OcsfPackage package_;
  private OcsfProduct product;
  private OcsfSbom sbom;


}