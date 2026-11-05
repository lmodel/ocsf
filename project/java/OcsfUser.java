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
  The User object describes the characteristics of a user/person or a security principal.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUser extends OcsfEntity {

  private OcsfAccount account;
  private String credentialUid;
  private String displayName;
  private String domain;
  private String emailAddr;
  private String forwardAddr;
  private String fullName;
  private List<OcsfGroup> groups;
  private Boolean hasMfa;
  private OcsfLdapPerson ldapPerson;
  private OcsfOrganization org;
  private String phoneNumber;
  private List<OcsfProgrammaticCredential> programmaticCredentials;
  private String riskLevel;
  private Integer riskLevelId;
  private Integer riskScore;
  private String type;
  private Integer typeId;
  private String uidAlt;


}