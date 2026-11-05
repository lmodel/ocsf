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
  A durable authorization context that a principal issues to a delegate (e.g., an application, automated process, service account, or AI agent), representing delegated authority to act on the principal's behalf. Persists independently of any single trace, session, or workflow instance, so the same delegation can be referenced across many events. The principal and delegate themselves are identified by the other objects on the event carrying this delegation, such as <code>actor.user</code> or <code>actor.iam_role</code> for the principal and <code>ai_operation.ai_agent</code> for an AI delegate. The <code>delegation</code> object itself only carries the durable identifiers used to correlate across those events. Delegations reference a parent via <code>parent_uid</code>, forming a directed acyclic graph (DAG) of re-delegations that supports lineage queries across the chain of authority. This authority graph is distinct from any agent instantiation or orchestration hierarchy, which may or may not coincide with it.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDelegation extends OcsfObjectBase {

  private Integer createdTime;
  private String createdTimeDt;
  private String issuerUid;
  private String parentUid;
  private String uid;


}