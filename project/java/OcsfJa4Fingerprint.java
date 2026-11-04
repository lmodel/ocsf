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
  The JA4+ fingerprint object provides detailed fingerprint information about various aspects of network traffic which is both machine and human readable.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfJa4Fingerprint extends OcsfObjectBase {

  private String sectionA;
  private String sectionB;
  private String sectionC;
  private String sectionD;
  private String type;
  private int typeId;
  private String value;


}