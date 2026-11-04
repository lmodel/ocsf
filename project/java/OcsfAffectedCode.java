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
  The Affected Code object describes details about a code block identified as vulnerable.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAffectedCode extends OcsfObjectBase {

  private Integer endColumn;
  private Integer endLine;
  private OcsfFile file;
  private OcsfUser owner;
  private OcsfRemediation remediation;
  private OcsfRule rule;
  private Integer startColumn;
  private Integer startLine;


}