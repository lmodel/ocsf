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
  The Digital Certificate, also known as a Public Key Certificate, object contains information about the ownership and usage of a public key. It serves as a means to establish trust in the authenticity and integrity of the public key and the associated entity.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCertificate extends OcsfObjectBase {

  private Integer createdTime;
  private String createdTimeDt;
  private Integer expirationTime;
  private String expirationTimeDt;
  private List<OcsfFingerprint> fingerprints;
  private Boolean isSelfSigned;
  private String issuer;
  private List<OcsfSan> sans;
  private String serialNumber;
  private String subject;
  private String uid;
  private String version;


}