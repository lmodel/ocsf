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
  The Fingerprint object provides detailed information about a fingerprint, which is a compact representation of data used to identify a longer piece of information, such as a public key, file content, or application implementation. It contains the algorithm or scheme and value of the fingerprint, enabling efficient and reliable identification of the associated data.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFingerprint extends OcsfObjectBase {

  private String algorithm;
  private int algorithmId;
  private String encoding;
  private Integer encodingId;
  private String serialization;
  private Integer serializationId;
  private String value;


}