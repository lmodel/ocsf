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
  The DNS Query object represents a specific request made to the Domain Name System (DNS) to retrieve information about a domain or perform a DNS operation.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDnsQuery extends OcsfObjectBase {

  private String class_;
  private String hostname;
  private String opcode;
  private Integer opcodeId;
  private Integer packetUid;
  private String type;


}