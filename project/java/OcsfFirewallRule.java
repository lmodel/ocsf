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
  The Firewall Rule object represents a specific rule within a firewall policy or event. It contains information about a rule's configuration, properties, and associated actions that define how network traffic is handled by the firewall.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFirewallRule extends OcsfRule {

  private String condition;
  private Integer duration;
  private List<String> matchDetails;
  private String matchLocation;
  private Integer rateLimit;
  private String sensitivity;


}