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
  The DCE/RPC, or Distributed Computing Environment/Remote Procedure Call, object describes the remote procedure call system for distributed computing environments.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDceRpc extends OcsfObjectBase {

  private String command;
  private String commandResponse;
  private List<String> flags;
  private Integer opnum;
  private OcsfRpcInterface rpcInterface;


}