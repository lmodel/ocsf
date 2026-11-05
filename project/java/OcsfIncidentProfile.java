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
  The attributes that add incident handling semantics to a Finding.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfIncidentProfile  {

  private OcsfUser assignee;
  private OcsfGroup assigneeGroup;
  private String confidence;
  private Integer confidenceId;
  private String impact;
  private Integer impactId;
  private Integer impactScore;
  private Boolean isSuspectedBreach;
  private String priority;
  private Integer priorityId;
  private String srcUrl;
  private OcsfTicket ticket;
  private List<OcsfTicket> tickets;
  private String verdict;
  private Integer verdictId;


}