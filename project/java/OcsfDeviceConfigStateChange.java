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
  Device Config State Change events report state changes that impact the security of the device.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDeviceConfigStateChange extends OcsfDiscoveryEvent {

  private String prevSecurityLevel;
  private Integer prevSecurityLevelId;
  private List<OcsfSecurityState> prevSecurityStates;
  private String securityLevel;
  private Integer securityLevelId;
  private List<OcsfSecurityState> securityStates;
  private String state;
  private Integer stateId;


}