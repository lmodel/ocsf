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
  The Previous Event object references the previous event in a chain of events. Refer to specific usage.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPrevEvent extends OcsfObjectBase {

  private OcsfFingerprint fingerprint;
  private Integer typeUid;
  private String uid;


}