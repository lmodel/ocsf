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
  The Email Authentication object describes the Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM) and Domain-based Message Authentication, Reporting and Conformance (DMARC) attributes of an email.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEmailAuth extends OcsfObjectBase {

  private String dkim;
  private String dkimDomain;
  private String dkimSignature;
  private String dmarc;
  private String dmarcOverride;
  private String dmarcPolicy;
  private String spf;


}