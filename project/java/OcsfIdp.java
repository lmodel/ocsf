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
  The Identity Provider object contains detailed information about a provider responsible for creating, maintaining, and managing identity information while offering authentication services to applications. An Identity Provider (IdP) serves as a trusted authority that verifies the identity of users and issues authentication tokens or assertions to enable secure access to applications or services.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfIdp extends OcsfEntity {

  private List<OcsfAuthFactor> authFactors;
  private String domain;
  private OcsfFingerprint fingerprint;
  private Boolean hasMfa;
  private String issuer;
  private String protocolName;
  private OcsfScim scim;
  private OcsfSso sso;
  private String state;
  private Integer stateId;
  private String tenantUid;
  private String urlString;


}