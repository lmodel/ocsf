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
  The Ticket object represents ticket in the customer's IT Service Management (ITSM) systems like ServiceNow, Jira, etc.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTicket extends OcsfObjectBase {

  private String srcUrl;
  private String status;
  private List<String> statusDetails;
  private Integer statusId;
  private String title;
  private String type;
  private Integer typeId;
  private String uid;


}