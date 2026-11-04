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
  The DNS Resource Record object represents a single resource record as defined in RFC 1035. It is used in the Answer, Authority, and Additional sections of a DNS message.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDnsResourceRecord extends OcsfObjectBase {

  private String class_;
  private String hostname;
  private String rdata;
  private Integer ttl;
  private String type;


}