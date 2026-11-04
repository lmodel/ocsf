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
  The Device Hardware Information object contains details and specifications of the physical components that make up a device. This information provides an overview of the hardware capabilities, configuration, and characteristics of the device.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDeviceHwInfo extends OcsfObjectBase {

  private String biosDate;
  private String biosManufacturer;
  private String biosVer;
  private String chassis;
  private Integer cores;
  private String cpuArchitecture;
  private Integer cpuArchitectureId;
  private Integer cpuBits;
  private Integer cpuCores;
  private Integer cpuCount;
  private List<OcsfCpuInfo> cpuInfoList;
  private Integer cpuSpeed;
  private String cpuType;
  private OcsfDisplay desktopDisplay;
  private Integer gpuCount;
  private List<OcsfGpuInfo> gpuInfoList;
  private OcsfKeyboardInfo keyboardInfo;
  private Integer ramSize;
  private String serialNumber;
  private String uuid;
  private String vendorName;


}