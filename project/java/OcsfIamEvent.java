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
  The Identity & Access Management event is a generic event that defines a set of attributes available in the access control events. As a generic event, it could be used to log events that are not otherwise defined by the IAM category.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfIamEvent extends OcsfBaseEvent {

  private OcsfHttpRequest httpRequest;
  private OcsfHttpResponse httpResponse;
  private OcsfNetworkEndpoint srcEndpoint;
  private OcsfAiAgent aiAgent;
  private OcsfAiModel aiModel;
  private OcsfDelegation delegation;
  private OcsfMessageContext messageContext;


}