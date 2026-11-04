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
  Campaign represent organized efforts by threat actors to achieve malicious objectives over a period, often characterized by shared tactics, techniques, and procedures (TTPs).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCampaign extends OcsfObjectBase {

  private String name;


}