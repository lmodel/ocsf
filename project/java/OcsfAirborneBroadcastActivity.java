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
  Airborne Broadcast Activity events report the activity of any aircraft or unmanned system as reported and tracked by Automatic Dependent Surveillance - Broadcast (ADS-B) receivers. Based on the ADS-B standards described in Code of Federal Regulations (CFR) Title 14 Chapter I Subchapter F Part 91 and in other general Federal Aviation Administration (FAA) supplemental orders and guidance.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAirborneBroadcastActivity extends OcsfUnmannedSystemsEvent {

  private OcsfAircraft aircraft;
  private String protocolName;
  private Integer rssi;
  private OcsfUnmannedAerialSystem unmannedAerialSystem;
  private OcsfUnmannedSystemOperatingArea unmannedSystemOperatingArea;
  private OcsfUser unmannedSystemOperator;


}