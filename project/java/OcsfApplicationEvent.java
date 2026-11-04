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
  The abstract parent of OCSF's Application Activity event classes.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfApplicationEvent extends OcsfBaseEvent {

  private OcsfAiAgent aiAgent;
  private OcsfAiModel aiModel;
  private OcsfDelegation delegation;
  private OcsfMessageContext messageContext;


}