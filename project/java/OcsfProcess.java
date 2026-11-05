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
  The Process object describes a running instance of a launched program.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfProcess extends OcsfProcessEntity {

  private OcsfAiAgent aiAgent;
  private List<OcsfProcessEntity> ancestry;
  private List<OcsfEnvironmentVariable> environmentVariables;
  private OcsfFile file;
  private List<OcsfAiAgent> hostedAiAgentList;
  private List<OcsfWinService> hostedServices;
  private String integrity;
  private Integer integrityId;
  private List<String> lineage;
  private List<String> loadedModules;
  private OcsfProcess parentProcess;
  private Integer ptid;
  private String sandbox;
  private OcsfSession session;
  private Integer terminatedTime;
  private String terminatedTimeDt;
  private Integer tid;
  private OcsfUser user;
  private String workingDirectory;
  private Object xattributes;
  private OcsfContainer container;
  private Integer namespacePid;
  private Integer auid;
  private Integer egid;
  private Integer euid;
  private OcsfGroup group;


}