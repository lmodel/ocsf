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
  The Container object describes an instance of a specific container. A container is a prepackaged, portable system image that runs isolated on an existing system using a container runtime like containerd.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfContainer extends OcsfObjectBase {

  private OcsfFingerprint hash;
  private OcsfImage image;
  private List<String> labels;
  private String name;
  private String networkDriver;
  private String orchestrator;
  private String podUuid;
  private String runtime;
  private Integer size;
  private String tag;
  private List<OcsfKeyValueObject> tags;
  private String uid;


}