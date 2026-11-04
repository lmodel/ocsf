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
  The Product object describes characteristics of a software product.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfProduct extends OcsfEntity {

  private String cpeName;
  private OcsfFeature feature;
  private String lang;
  private String path;
  private String urlString;
  private String vendorName;
  private String version;
  private OcsfDataClassification dataClassification;
  private List<OcsfDataClassification> dataClassifications;


}