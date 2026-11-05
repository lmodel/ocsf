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
  What an annotation on a class states about an OCSF class, object or profile, where the metamodel has no slot for it.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfClassFacts  {

  private String ocsfName;
  private String ocsfCategory;
  private String ocsfProfiles;
  private String ocsfConstraints;
  private String ocsfAssociations;
  private String ocsfObservable;
  private String ocsfExtension;
  private String ocsfDeprecatedSince;
  private String ocsfSupersededBy;


}