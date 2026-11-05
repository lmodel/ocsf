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
  The Clipboard object represents an endpoint clipboard and its contents.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfClipboard extends OcsfObjectBase {

  private List<OcsfClipboardItem> contents;
  private String name;


}