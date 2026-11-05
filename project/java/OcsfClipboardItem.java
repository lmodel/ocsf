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
  A piece of data on the system clipboard.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfClipboardItem extends OcsfObjectBase {

  private String binaryData;
  private String clipboardNativeType;
  private String mimeType;
  private String stringData;


}