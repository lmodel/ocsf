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
  Communication context for AI system interactions including protocols, roles, clients, and session information for MCP and other AI communication systems.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfMessageContext extends OcsfEntity {

  private String aiRole;
  private Integer aiRoleId;
  private OcsfApplication application;
  private Integer completionTokens;
  private String promptText;
  private Integer promptTokens;
  private String responseText;
  private OcsfService service;
  private Integer totalTokens;


}