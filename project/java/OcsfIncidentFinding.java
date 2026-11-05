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
  An Incident Finding reports the creation, update, or closure of security incidents as a result of detections and/or analytics. <br><strong>Note: </strong><code>Incident Finding</code> implicitly includes the <code>incident</code> profile and it should be added to the <code>metadata.profiles[]</code> array.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfIncidentFinding extends OcsfBaseEvent {

  private OcsfUser assignee;
  private OcsfGroup assigneeGroup;
  private String comment;
  private String desc;
  private List<OcsfFindingInfo> findingInfoList;
  private String impact;
  private Integer impactId;
  private Integer impactScore;
  private Boolean isSuspectedBreach;
  private List<OcsfNote> notes;
  private String priority;
  private Integer priorityId;
  private String srcUrl;
  private OcsfTicket ticket;
  private List<OcsfTicket> tickets;
  private OcsfVendorAttributes vendorAttributes;
  private String verdict;
  private Integer verdictId;


}