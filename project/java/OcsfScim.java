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
  The System for Cross-domain Identity Management (SCIM) Configuration object provides a structured set of attributes related to SCIM protocols used for identity provisioning and management across cloud-based platforms. It standardizes user and group provisioning details, enabling identity synchronization and lifecycle management with compatible Identity Providers (IdPs) and applications. SCIM is defined in RFC 7634.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfScim extends OcsfObjectBase {

  private String authProtocol;
  private Integer authProtocolId;
  private Integer createdTime;
  private String createdTimeDt;
  private String errorMessage;
  private Boolean isGroupProvisioningEnabled;
  private Boolean isUserProvisioningEnabled;
  private Integer lastRunTime;
  private String lastRunTimeDt;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String name;
  private String protocolName;
  private Integer rateLimit;
  private String scimGroupSchema;
  private String scimUserSchema;
  private String state;
  private Integer stateId;
  private String uid;
  private String uidAlt;
  private String urlString;
  private String vendorName;
  private String version;


}