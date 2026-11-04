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
  The Single Sign-On (SSO) object provides a structure for normalizing SSO attributes, configuration, and/or settings from Identity Providers.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSso extends OcsfObjectBase {

  private String authProtocol;
  private Integer authProtocolId;
  private OcsfCertificate certificate;
  private Integer createdTime;
  private String createdTimeDt;
  private Integer durationMins;
  private Integer idleTimeout;
  private String loginEndpoint;
  private String logoutEndpoint;
  private String metadataEndpoint;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String name;
  private String protocolName;
  private List<String> scopes;
  private String uid;
  private String vendorName;


}