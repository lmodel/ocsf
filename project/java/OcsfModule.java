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
  The Module object describes the attributes of a module.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfModule extends OcsfObjectBase {

  private String baseAddress;
  private OcsfFile file;
  private OcsfFunctionInvocation functionInvocation;
  private String functionName;
  private String loadType;
  private Integer loadTypeId;
  private String startAddress;
  private String type;


}