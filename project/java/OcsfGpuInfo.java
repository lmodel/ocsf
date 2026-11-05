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
  The GPU information object contains attributes describing graphical processing hardware.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfGpuInfo extends OcsfObjectBase {

  private String busType;
  private Integer busTypeId;
  private Integer cores;
  private String model;
  private String vendorName;
  private String vramMode;
  private Integer vramModeId;
  private Integer vramSize;


}