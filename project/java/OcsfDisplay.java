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
  The Display object contains information about the physical or virtual display connected to a computer system.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDisplay extends OcsfObjectBase {

  private Integer colorDepth;
  private Integer physicalHeight;
  private Integer physicalOrientation;
  private Integer physicalWidth;
  private Integer scaleFactor;


}