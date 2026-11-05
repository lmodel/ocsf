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
  The Image object provides a description of a specific Virtual Machine (VM) or Container image.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfImage extends OcsfEntity {

  private List<String> labels;
  private String path;
  private String tag;
  private List<OcsfKeyValueObject> tags;


}