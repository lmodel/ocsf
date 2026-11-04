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
  The Keyboard Information object contains details and attributes related to a computer or device keyboard. It encompasses information that describes the characteristics, capabilities, and configuration of the keyboard.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKeyboardInfo extends OcsfObjectBase {

  private Integer functionKeys;
  private String ime;
  private String keyboardLayout;
  private Integer keyboardSubtype;
  private String keyboardType;


}