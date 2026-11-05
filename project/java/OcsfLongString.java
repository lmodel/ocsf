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
  This object is a used to capture strings which may be truncated by a security product due to their length.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfLongString extends OcsfObjectBase {

  private Boolean isTruncated;
  private Integer untruncatedSize;
  private String value;


}