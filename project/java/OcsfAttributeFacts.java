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
  What an annotation on a slot or slot_usage states about an OCSF attribute, where the metamodel has no slot for it.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfAttributeFacts  {

  private String ocsfGroup;
  private String ocsfProfiles;
  private String ocsfRequirement;
  private String ocsfSibling;
  private String ocsfObservable;
  private String ocsfSource;
  private String ocsfSuppressChecks;
  private String ocsfExtension;
  private String ocsfDeprecatedSince;
  private String ocsfSupersededBy;


}