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
  The CIS Benchmark Result object contains information as defined by the Center for Internet Security (CIS) benchmark result. CIS Benchmarks are a collection of best practices for securely configuring IT systems, software, networks, and cloud infrastructure.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCisBenchmarkResult extends OcsfObjectBase {

  private String desc;
  private String name;
  private OcsfRemediation remediation;
  private OcsfRule rule;


}