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
  The Response Elements object describes characteristics of an API response.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfResponse extends OcsfObjectBase {

  private Integer code;
  private List<OcsfContainer> containers;
  private String data;
  private String error;
  private String errorMessage;
  private List<String> flags;
  private String message;


}