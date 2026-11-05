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
  The Software Package object describes details about a software package.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPackage extends OcsfObjectBase {

  private String architecture;
  private String cpeName;
  private Integer epoch;
  private OcsfFingerprint hash;
  private String license;
  private String licenseUrl;
  private String name;
  private String packageManager;
  private String packageManagerUrl;
  private String purl;
  private String release;
  private String srcUrl;
  private String type;
  private Integer typeId;
  private String uid;
  private String vendorName;
  private String version;


}