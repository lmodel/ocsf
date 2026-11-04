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
  The Identity Activity Metrics object captures usage patterns, authentication activity, credential usage and other metrics for identities across cloud and on-premises environments. Example identities include AWS IAM Users, Roles, Azure AD Principals, GCP Service Accounts, on-premises Active Directory accounts.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfIdentityActivityMetrics extends OcsfObjectBase {

  private Integer firstSeenTime;
  private String firstSeenTimeDt;
  private Integer lastAuthenticationTime;
  private String lastAuthenticationTimeDt;
  private Integer lastSeenTime;
  private String lastSeenTimeDt;
  private Integer passwordLastUsedTime;
  private String passwordLastUsedTimeDt;
  private List<OcsfProgrammaticCredential> programmaticCredentials;


}