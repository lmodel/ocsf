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
  The Cloud object describes the cloud computing environment where an event or finding originated. It provides comprehensive context about the cloud infrastructure, including the cloud service provider, account or subscription details, organizational structure, geographic regions, availability zones, and logical partitions.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCloud extends OcsfObjectBase {

  private OcsfAccount account;
  private String cloudPartition;
  private OcsfOrganization org;
  private String projectUid;
  private String provider;
  private String region;
  private String zone;


}