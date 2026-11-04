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
  The registry key object describes a Windows registry key.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinRegKey extends OcsfObjectBase {

  private Boolean isSystem;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String path;
  private String securityDescriptor;


}