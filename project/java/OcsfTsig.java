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
  The TSIG (Transaction Signature) object represents a TSIG resource record as defined in RFC 2845. TSIG uses a shared secret key and one-way hash function to authenticate DNS messages. Per RFC 2845, at most one TSIG record is permitted per DNS message.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTsig extends OcsfObjectBase {

  private String algorithm;
  private String error;
  private Integer errorId;
  private String keyName;


}