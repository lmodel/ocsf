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
  The DNS Section object represents a DNS message section that carries supplementary resource records alongside an optional TSIG record. It is used for both the client Additional section (<code>query_additional</code>) and the server Additional section (<code>response_additional</code>) of a DNS message. A DNS message has at most one TSIG record, which authenticates the entire message.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDnsSection extends OcsfObjectBase {

  private List<OcsfDnsResourceRecord> records;
  private OcsfTsig tsig;


}