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
  The database object is used for databases which are typically datastore services that contain an organized collection of structured and unstructured data or a types of data.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDatabase extends OcsfEntity {

  private Integer createdTime;
  private String createdTimeDt;
  private String desc;
  private String embeddingModel;
  private List<OcsfGroup> groups;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private Integer size;
  private String type;
  private int typeId;
  private OcsfDataClassification dataClassification;
  private List<OcsfDataClassification> dataClassifications;


}