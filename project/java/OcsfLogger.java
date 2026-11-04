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
  The Logger object represents the device and product where events are stored with times for receipt and transmission.  This may be at the source device where the event occurred, a remote scanning device, intermediate hops, or the ultimate destination.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfLogger extends OcsfEntity {

  private OcsfDevice device;
  private String eventUid;
  private Boolean isTruncated;
  private String logFormat;
  private String logLevel;
  private String logName;
  private String logProvider;
  private String logVersion;
  private Integer loggedTime;
  private String loggedTimeDt;
  private OcsfProduct product;
  private Integer transmitTime;
  private String transmitTimeDt;
  private Integer untruncatedSize;
  private String version;


}