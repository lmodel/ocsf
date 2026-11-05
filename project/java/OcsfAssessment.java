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
  The Assessment object describes a point-in-time assessment, check, or evaluation of a specific configuration or signal against an asset, entity, person, or otherwise. For example, this can encapsulate <code>os_signals</code> from CrowdStrike Falcon Zero Trust Assessments, or account for <code>Datastore</code> configurations from Cyera, or capture details of Microsoft Intune configuration policies.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAssessment extends OcsfEntity {

  private String category;
  private String desc;
  private boolean meetsCriteria;
  private OcsfPolicy policy;


}