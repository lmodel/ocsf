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
  Describes a characteristic or feature of an entity that was observed. For example, this object can be used to represent specific characteristics derived from events or findings that can be surfaced as distinguishing traits of the entity in question.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTrait extends OcsfEntity {

  private String category;
  private String type;
  private List<String> values;


}