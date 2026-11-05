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
  The Packet object represents a single captured network packet and its associated metadata. It describes where the packet came from, how it is stored or encoded, and how it can be located within a capture file or stream. This object does not interpret protocol content; it only represents the captured packet data and its positioning information.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPacket extends OcsfObjectBase {

  private String encoding;
  private Integer encodingId;
  private Integer endOffset;
  private String format;
  private Integer formatId;
  private Integer sequenceNumber;
  private String source;
  private Integer sourceId;
  private Integer startOffset;
  private String value;


}