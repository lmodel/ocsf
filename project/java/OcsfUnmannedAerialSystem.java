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
  The Unmanned Aerial System object describes the characteristics, Position Location Information (PLI), and other metadata of Unmanned Aerial Systems (UAS) and other unmanned and drone systems used in Remote ID. Remote ID is defined in the Standard Specification for Remote ID and Tracking (ASTM Designation: F3411-22a).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUnmannedAerialSystem extends OcsfAircraft {

  private OcsfDeviceHwInfo hwInfo;
  private String type;
  private Integer typeId;
  private String uuid;


}