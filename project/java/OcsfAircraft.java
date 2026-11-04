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
  The Aircraft object represents any aircraft or otherwise airborne asset such as an unmanned system, airplane, balloon, spacecraft, or otherwise. The Aircraft object is intended to normalized data captured or otherwise logged from active radar, passive radar, multi-spectral systems, or the Automatic Dependant Broadcast - Surveillance (ADS-B), and/or Mode S systems.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAircraft extends OcsfEntity {

  private OcsfLocation location;
  private String model;
  private String serialNumber;
  private String speed;
  private String speedAccuracy;
  private String trackDirection;
  private String uidAlt;
  private String verticalSpeed;


}