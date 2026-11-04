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
  The KB Article object contains metadata that describes the patch or update.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfKbArticle extends OcsfObjectBase {

  private OcsfTimespan avgTimespan;
  private String bulletin;
  private String classification;
  private Integer createdTime;
  private String createdTimeDt;
  private String installState;
  private Integer installStateId;
  private Boolean isSuperseded;
  private OcsfOs os;
  private OcsfProduct product;
  private String severity;
  private Integer size;
  private String srcUrl;
  private String title;
  private String uid;


}