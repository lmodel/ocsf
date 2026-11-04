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
  The Digital Signature object contains information about the cryptographic mechanism used to verify the authenticity, integrity, and origin of the file or application.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDigitalSignature extends OcsfObjectBase {

  private String algorithm;
  private int algorithmId;
  private OcsfCertificate certificate;
  private Integer createdTime;
  private String createdTimeDt;
  private String developerUid;
  private OcsfFingerprint digest;
  private String serialization;
  private Integer serializationId;
  private String state;
  private Integer stateId;


}