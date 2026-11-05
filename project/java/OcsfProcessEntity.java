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
  The Process Entity object provides critical fields for referencing a process.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfProcessEntity extends OcsfEntity {

  private String cmdLine;
  private String cpid;
  private Integer createdTime;
  private String createdTimeDt;
  private String path;
  private Integer pid;


}