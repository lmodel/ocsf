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
  The Operating System (OS) object describes characteristics of an OS, such as Linux or Windows.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfOs extends OcsfObjectBase {

  private String build;
  private String country;
  private String cpeName;
  private Integer cpuBits;
  private String edition;
  private String kernelRelease;
  private String lang;
  private String name;
  private String spName;
  private Integer spVer;
  private String type;
  private int typeId;
  private String version;


}