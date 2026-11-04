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
  The Programmatic Credential object describes service-specific credentials used for direct API access and system integration. These credentials are typically issued by individual services or platforms for accessing their APIs and resources, focusing on credential lifecycle management and usage tracking. Examples include API keys, service account keys, client certificates, and vendor-specific access tokens.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfProgrammaticCredential extends OcsfObjectBase {

  private Integer lastUsedTime;
  private String lastUsedTimeDt;
  private String type;
  private String uid;


}