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
  Email Activity events report SMTP protocol and email activities including those with embedded URLs and files. See the <code>Email</code> object for details.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEmailActivity extends OcsfBaseEvent {

  private Integer attempt;
  private String banner;
  private String command;
  private String direction;
  private int directionId;
  private OcsfNetworkEndpoint dstEndpoint;
  private OcsfEmail email;
  private OcsfEmailAuth emailAuth;
  private String from;
  private String messageTraceUid;
  private String protocolName;
  private String smtpHello;
  private OcsfNetworkEndpoint srcEndpoint;
  private List<String> to;
  private OcsfAiAgent aiAgent;
  private OcsfAiModel aiModel;
  private OcsfDelegation delegation;
  private OcsfMessageContext messageContext;


}