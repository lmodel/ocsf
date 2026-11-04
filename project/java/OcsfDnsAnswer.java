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
  The DNS Answer object represents a specific response provided by the Domain Name System (DNS) when querying for information about a domain or performing a DNS operation. It encapsulates the relevant details and data returned by the DNS server in response to a query.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDnsAnswer extends OcsfDnsResourceRecord {

  private List<Integer> flagIds;
  private List<String> flags;
  private Integer packetUid;


}