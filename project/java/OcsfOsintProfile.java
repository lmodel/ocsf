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
  The OSINT (Open Source Intelligence) profile contains one or more indicators and associated analysis and details, such as registrar (WHOIS) information and commentary about a hostname, or information about a digital certificate and its usage within a campaign. This information can be used to further enrich a detection or finding by providing decisioning support to other analysts and engineers within the profile itself.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfOsintProfile  {

  private List<OcsfOsint> osint;


}