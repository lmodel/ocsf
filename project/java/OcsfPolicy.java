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
  The Policy object describes the policies that are applicable. <p>Policy attributes provide traceability to the operational state of the security product at the time that the event was captured, facilitating forensics, troubleshooting, and policy tuning/adjustments.</p>
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPolicy extends OcsfEntity {

  private String data;
  private String desc;
  private OcsfGroup group;
  private Boolean isApplied;
  private String type;
  private String version;


}