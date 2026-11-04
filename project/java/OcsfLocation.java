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
  The Geo Location object describes a geographical location, usually associated with an IP address.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfLocation extends OcsfObjectBase {

  private String aerialHeight;
  private String city;
  private String continent;
  private List<Float> coordinates;
  private String country;
  private String desc;
  private String geodeticAltitude;
  private String geodeticVerticalAccuracy;
  private String geohash;
  private String horizontalAccuracy;
  private Boolean isOnPremises;
  private String isp;
  private Float lat;
  private Float long_;
  private String postalCode;
  private String pressureAltitude;
  private String provider;
  private String region;


}