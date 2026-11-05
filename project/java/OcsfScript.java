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
  The Script object describes a script or command that can be executed by a shell, script engine, or interpreter. Examples include Bash, JavsScript, PowerShell, Python, VBScript, etc. Note that the term <em>script</em> here denotes not only a script contained within a file but also a script or command typed interactively by a user, supplied on the command line, or provided by some other file-less mechanism.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfScript extends OcsfObjectBase {

  private OcsfFile file;
  private List<OcsfFingerprint> hashes;
  private String name;
  private String parentUid;
  private OcsfLongString scriptContent;
  private String type;
  private int typeId;
  private String uid;


}