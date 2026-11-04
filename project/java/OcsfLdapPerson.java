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
  The additional LDAP attributes that describe a person.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfLdapPerson extends OcsfObjectBase {

  private String costCenter;
  private Integer createdTime;
  private String createdTimeDt;
  private Integer deletedTime;
  private String deletedTimeDt;
  private String department;
  private String displayName;
  private List<String> emailAddrs;
  private String employeeUid;
  private String givenName;
  private Integer hireTime;
  private String hireTimeDt;
  private String jobTitle;
  private List<String> labels;
  private Integer lastLoginTime;
  private String lastLoginTimeDt;
  private String ldapCn;
  private String ldapDn;
  private Integer leaveTime;
  private String leaveTimeDt;
  private OcsfLocation location;
  private OcsfUser manager;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String officeLocation;
  private String phoneNumber;
  private String surname;
  private List<OcsfKeyValueObject> tags;


}