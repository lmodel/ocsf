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
  The HASSH object contains SSH network fingerprinting values for specific client/server implementations. It provides a standardized way of identifying and categorizing SSH connections based on their unique characteristics and behavior.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfHassh extends OcsfObjectBase {

  private String algorithm;
  private OcsfFingerprint fingerprint;


}