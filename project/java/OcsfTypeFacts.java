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
  What an annotation on a type states about an OCSF data type, where the metamodel has no slot for it.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfTypeFacts  {

  private String ocsfName;
  private String ocsfMaxLen;
  private String ocsfObservable;
  private String ocsfExtension;


}