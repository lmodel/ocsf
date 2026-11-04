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
  The Finding event is a generic event that defines a set of attributes available in the Findings category.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfFindingEvent extends OcsfBaseEvent {

  private String comment;
  private OcsfFindingInfo findingInfo;
  private List<OcsfNote> notes;
  private List<OcsfResourceDetails> resources;
  private OcsfVendorAttributes vendorAttributes;
  private OcsfUser assignee;
  private OcsfGroup assigneeGroup;
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