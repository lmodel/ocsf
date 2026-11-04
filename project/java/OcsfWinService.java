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
  The Windows Service object describes a Windows service.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinService extends OcsfService {

  private String cmdLine;
  private OcsfProcessEntity hostingProcess;
  private String loadOrderGroup;
  private String serviceCategory;
  private Integer serviceCategoryId;
  private List<String> serviceDependencies;
  private OcsfFile serviceDllFile;
  private String serviceErrorControl;
  private Integer serviceErrorControlId;
  private OcsfFile serviceFile;
  private String serviceStartName;
  private String serviceStartType;
  private Integer serviceStartTypeId;
  private String serviceType;
  private Integer serviceTypeId;


}