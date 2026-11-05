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
  The CPU information object contains attributes describing a physical CPU package installed in the device.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCpuInfo extends OcsfObjectBase {

  private Integer cores;
  private String cpuArchitecture;
  private Integer cpuArchitectureId;
  private Integer cpuBits;
  private String model;
  private Integer speedMhz;
  private String vendorName;


}