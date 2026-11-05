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
  The Data Classification object includes information about data classification levels and data category types.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDataClassification extends OcsfObjectBase {

  private String category;
  private Integer categoryId;
  private OcsfClassifierDetails classifierDetails;
  private String confidentiality;
  private Integer confidentialityId;
  private List<OcsfDiscoveryDetails> discoveryDetails;
  private OcsfPolicy policy;
  private Integer size;
  private String srcUrl;
  private String status;
  private List<String> statusDetails;
  private Integer statusId;
  private Integer total;
  private String uid;


}