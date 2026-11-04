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
  The Device object represents an addressable computer system or host, which is typically connected to a computer network and participates in the transmission or processing of data within the computer network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDevice extends OcsfEndpoint {

  private String autoscaleUid;
  private Integer bootTime;
  private String bootTimeDt;
  private String bootUid;
  private Integer createdTime;
  private String createdTimeDt;
  private String desc;
  private String eid;
  private Integer firstSeenTime;
  private String firstSeenTimeDt;
  private List<OcsfGroup> groups;
  private String hypervisor;
  private String iccid;
  private OcsfImage image;
  private String imei;
  private List<String> imeiList;
  private Boolean isBackedUp;
  private Boolean isCompliant;
  private Boolean isManaged;
  private Boolean isMobileAccountActive;
  private Boolean isPersonal;
  private Boolean isShared;
  private Boolean isSupervised;
  private Boolean isTrusted;
  private Integer lastSeenTime;
  private String lastSeenTimeDt;
  private String meid;
  private String model;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private List<OcsfNetworkInterface> networkInterfaces;
  private OcsfOrganization org;
  private String osMachineUuid;
  private List<OcsfPeripheralDevice> peripheralDevices;
  private String region;
  private String riskLevel;
  private Integer riskLevelId;
  private Integer riskScore;
  private String subnet;
  private String udid;
  private String uidAlt;
  private String vendorName;


}