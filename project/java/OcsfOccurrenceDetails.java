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
  Details about where in the target entity, specified information was discovered. Only the attributes, relevant to the target entity type should be populated.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfOccurrenceDetails extends OcsfObjectBase {

  private String cellName;
  private String columnName;
  private Integer columnNumber;
  private Integer endLine;
  private String jsonPath;
  private Integer pageNumber;
  private Integer recordIndexInArray;
  private Integer rowNumber;
  private Integer startLine;


}