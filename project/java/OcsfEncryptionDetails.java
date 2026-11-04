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
  Details about the encryption methodology utilized.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEncryptionDetails extends OcsfObjectBase {

  private String algorithm;
  private Integer algorithmId;
  private Integer keyLength;
  private String keyUid;
  private String type;


}