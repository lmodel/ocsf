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
  The Resource Details object describes details about a resource (including a user) affected by or related to the activity or finding. The <code>name</code> and/or <code>uid</code> should correspond to the resource for which the details pertain. Use <code>role_id</code> to characterize the role of the resource.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfResourceDetails extends OcsfResource {

  private List<OcsfAgent> agentList;
  private String cloudPartition;
  private String createdTimeDt;
  private String criticality;
  private Integer criticalityId;
  private OcsfDevice device;
  private OcsfGroup group;
  private String hostname;
  private String ip;
  private Boolean isBackedUp;
  private String modifiedTimeDt;
  private String namespace;
  private OcsfUser owner;
  private String provider;
  private String region;
  private OcsfGraph resourceRelationship;
  private String role;
  private Integer roleId;
  private OcsfUser user;
  private String version;
  private String zone;


}