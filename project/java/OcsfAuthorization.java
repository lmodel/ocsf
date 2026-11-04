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
  The Authorization Result object provides details about the authorization outcome and associated policies related to activity.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAuthorization extends OcsfObjectBase {

  private String decision;
  private OcsfPolicy policy;


}