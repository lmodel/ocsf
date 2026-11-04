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
  The observable object is a pivot element that contains related information found in many places in the event.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfObservable extends OcsfObjectBase {

  private String eventUid;
  private String name;
  private OcsfReputation reputation;
  private String type;
  private int typeId;
  private Integer typeUid;
  private String value;


}