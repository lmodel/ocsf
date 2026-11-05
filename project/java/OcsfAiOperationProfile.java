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
  AI-specific attributes for model operations, retrieval systems, and agent activities. e.g. model_name, total_token_counts etc.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAiOperationProfile  {

  private OcsfAiAgent aiAgent;
  private OcsfAiModel aiModel;
  private OcsfDelegation delegation;
  private OcsfMessageContext messageContext;


}