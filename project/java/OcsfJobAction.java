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
  The action that will be performed by the job when certain conditions are met.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfJobAction  {

  private String cmdLine;
  private String comClassUuid;
  private OcsfFile file;
  private List<OcsfKeyValueObject> properties;
  private String type;
  private int typeId;
  private String workingDirectory;


}