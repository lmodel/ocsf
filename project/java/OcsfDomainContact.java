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
  The contact information related to a domain registration, e.g., registrant, administrator, abuse, billing, or technical contact.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDomainContact extends OcsfObjectBase {

  private String emailAddr;
  private OcsfLocation location;
  private String name;
  private String phoneNumber;
  private String type;
  private int typeId;
  private String uid;


}