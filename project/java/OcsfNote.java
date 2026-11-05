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
  Represents a note or a comment in the system. Notes can be used to provide additional context, explanations, or observations related to an event, object, or any other entity in the system. They can be created and modified by users to capture important information that may not be directly represented in the structured data.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNote extends OcsfObjectBase {

  private String comment;
  private Integer createdTime;
  private String createdTimeDt;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private OcsfUser owner;
  private String title;
  private String uid;


}