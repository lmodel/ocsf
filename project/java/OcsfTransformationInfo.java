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
  The transformation_info object represents the mapping or transformation used.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTransformationInfo extends OcsfEntity {

  private String lang;
  private OcsfProduct product;
  private Integer time;
  private String timeDt;
  private String urlString;


}