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
  The Function Invocation object provides details regarding the invocation of a function.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFunctionInvocation extends OcsfObjectBase {

  private String error;
  private List<OcsfParameter> parameters;
  private String returnValue;


}