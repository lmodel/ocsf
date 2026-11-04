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
  The check object defines a specific, testable compliance verification point that evaluates a target device against a standard, framework, or custom requirement. While checks are typically associated with formal standards (like CIS, NIST, or ISO), they can also represent custom or organizational requirements. When mapped to controls, checks can evaluate specific control_parameters to determine compliance status, but neither the control mapping nor control_parameters are required for a valid check.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCheck extends OcsfObjectBase {

  private String desc;
  private String name;
  private OcsfResourceDetails resource;
  private String severity;
  private Integer severityId;
  private List<String> standards;
  private String status;
  private Integer statusId;
  private String uid;
  private String version;


}