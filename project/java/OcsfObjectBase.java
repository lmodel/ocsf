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
  The abstract parent of the objects that extend OCSF's object, which adds no attribute of its own. OCSF's object itself is OcsfObject, which stays open.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfObjectBase  {



}