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
  The Network Traffic object describes characteristics of network traffic over a time period. The metrics represent network data transferred between source and destination during an observation window.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkTraffic extends OcsfObjectBase {

  private Integer bytes;
  private Integer bytesIn;
  private Integer bytesMissed;
  private Integer bytesOut;
  private Integer chunks;
  private Integer chunksIn;
  private Integer chunksOut;
  private Integer endTime;
  private String endTimeDt;
  private Integer packets;
  private Integer packetsIn;
  private Integer packetsOut;
  private Integer startTime;
  private String startTimeDt;
  private OcsfTimespan timespan;


}