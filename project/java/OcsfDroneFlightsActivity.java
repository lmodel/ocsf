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
  Drone Flights Activity events report the activity of Unmanned Aerial Systems (UAS), their Operators, and mission-planning and authorization metadata as reported by the UAS platforms themselves, by Counter-UAS (CUAS) systems, or other remote monitoring or sensing infrastructure. Based on the Remote ID defined in Standard Specification for Remote ID and Tracking (ASTM Designation: F3411-22a).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDroneFlightsActivity extends OcsfUnmannedSystemsEvent {

  private String authProtocol;
  private Integer authProtocolId;
  private String classification;
  private String comment;
  private String protocolName;
  private OcsfUnmannedAerialSystem unmannedAerialSystem;
  private OcsfUnmannedSystemOperatingArea unmannedSystemOperatingArea;
  private OcsfUser unmannedSystemOperator;


}