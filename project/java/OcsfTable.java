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
  The table object represents a table within a structured relational database or datastore, which contains columns and rows of data that are able to be create, updated, deleted and queried.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTable extends OcsfEntity {

  private Integer createdTime;
  private String createdTimeDt;
  private String desc;
  private List<OcsfGroup> groups;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private Integer size;


}