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
  What an annotation states about an OCSF element where the metamodel has no slot for it. No data holds this class: it declares the annotation keys, and each annotated element names it through instantiates.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfFacts  {

  private String ocsfKey;
  private String ocsfCategory;
  private String ocsfCategoryUid;
  private String ocsfExtension;
  private String ocsfExtensionUid;
  private String ocsfGroup;
  private String ocsfProfiles;
  private String ocsfRequirement;
  private String ocsfSibling;
  private String ocsfObservable;
  private String ocsfSourceNote;
  private String ocsfSuppressChecks;
  private String ocsfMaxLen;
  private String ocsfConstraints;
  private String ocsfAssociations;
  private String ocsfDeprecatedSince;
  private String ocsfSupersededBy;


}