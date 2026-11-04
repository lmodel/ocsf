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
  The Parameter object provides details regarding a parameter of a a function.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfParameter extends OcsfObjectBase {

  private String name;
  private String postValue;
  private String preValue;


}