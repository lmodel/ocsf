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
  The CIS Benchmark object describes best practices for securely configuring IT systems, software, networks, and cloud infrastructure as defined by the Center for Internet Security. See also Getting to Know the CIS Benchmarks.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCisBenchmark extends OcsfObjectBase {

  private List<OcsfCisControl> cisControls;
  private String desc;
  private String name;


}