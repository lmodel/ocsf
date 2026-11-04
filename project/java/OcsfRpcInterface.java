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
  The RPC Interface represents the remote procedure call interface used in the DCE/RPC session.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRpcInterface extends OcsfObjectBase {

  private Integer ackReason;
  private Integer ackResult;
  private String uuid;
  private String version;


}