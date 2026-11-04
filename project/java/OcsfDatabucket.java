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
  The databucket object is a basic container that holds data, typically organized through the use of data partitions.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDatabucket extends OcsfResource {

  private List<OcsfAgent> agentList;
  private String cloudPartition;
  private String createdTimeDt;
  private String criticality;
  private String desc;
  private OcsfEncryptionDetails encryptionDetails;
  private OcsfFile file;
  private OcsfGroup group;
  private List<OcsfGroup> groups;
  private String hostname;
  private String ip;
  private Boolean isBackedUp;
  private Boolean isEncrypted;
  private Boolean isPublic;
  private String modifiedTimeDt;
  private String namespace;
  private OcsfUser owner;
  private String region;
  private OcsfGraph resourceRelationship;
  private Integer size;
  private int typeId;
  private String version;
  private String zone;


}