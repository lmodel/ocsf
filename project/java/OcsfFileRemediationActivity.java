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
  File Remediation Activity events report on attempts at remediating files. Sub-techniques of countermeasures will include File, such as File Removal or Restore File.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFileRemediationActivity extends OcsfRemediationActivity {

  private OcsfFile file;


}