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
  The Scan object describes characteristics of a proactive scan.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfScan extends OcsfEntity {

  private String type;
  private int typeId;


}