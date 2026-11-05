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
  The Affected Package object describes details about a software package identified as affected by a vulnerability/vulnerabilities.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAffectedPackage extends OcsfPackage {

  private String fixedInVersion;
  private String path;
  private OcsfRemediation remediation;


}