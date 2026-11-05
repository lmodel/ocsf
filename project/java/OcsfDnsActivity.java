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
  DNS Activity events report DNS queries and answers as seen on the network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDnsActivity extends OcsfNetworkEvent {

  private List<OcsfDnsAnswer> answers;
  private List<OcsfDnsResourceRecord> authority;
  private List<Integer> flagIds;
  private List<String> flags;
  private String opcode;
  private Integer opcodeId;
  private OcsfDnsQuery query;
  private OcsfDnsSection queryAdditional;
  private Integer queryTime;
  private String queryTimeDt;
  private String rcode;
  private Integer rcodeId;
  private OcsfDnsSection responseAdditional;
  private Integer responseTime;
  private String responseTimeDt;
  private Integer transactionId;


}