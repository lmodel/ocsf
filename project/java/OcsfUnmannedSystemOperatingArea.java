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
  The Unmanned System Operating Area object describes details about a precise area of operations for a UAS flight or mission.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUnmannedSystemOperatingArea extends OcsfLocation {

  private String altitudeCeiling;
  private String altitudeFloor;
  private Integer count;
  private Integer endTime;
  private String endTimeDt;
  private List<OcsfLocation> locations;
  private String radius;
  private Integer startTime;
  private String startTimeDt;
  private String type;
  private Integer typeId;


}