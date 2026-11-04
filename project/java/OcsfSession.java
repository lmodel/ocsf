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
  The Session object describes details about an authenticated session. e.g. Session Creation Time, Session Issuer.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSession extends OcsfObjectBase {

  private Integer count;
  private Integer createdTime;
  private String createdTimeDt;
  private String credentialUid;
  private String expirationReason;
  private Integer expirationTime;
  private String expirationTimeDt;
  private Boolean isMfa;
  private Boolean isRemote;
  private Boolean isVpn;
  private String issuer;
  private String terminal;
  private String uid;
  private String uidAlt;
  private String uuid;


}