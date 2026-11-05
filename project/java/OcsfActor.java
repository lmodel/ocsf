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
  The Actor object contains details about the user, role, application, service, or process that initiated or performed a specific activity. Note that Actor is not the threat actor of a campaign but may be part of a campaign. When the initiator of the activity is an autonomous AI agent, apply the <code>ai_operation</code> profile and populate <code>ai_operation.ai_agent</code> rather than describing the agent here.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfActor extends OcsfObjectBase {

  private String appName;
  private String appUid;
  private OcsfApplication application;
  private List<OcsfAuthorization> authorizations;
  private OcsfIamRole iamRole;
  private OcsfIdp idp;
  private String invokedBy;
  private OcsfProcess process;
  private OcsfSession session;
  private OcsfUser user;


}