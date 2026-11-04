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
  The Enrichment object provides inline enrichment data for specific attributes of interest within an event. It serves as a mechanism to enhance or supplement the information associated with the event by adding additional relevant details or context.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEnrichment extends OcsfObjectBase {

  private Integer createdTime;
  private String createdTimeDt;
  private String data;
  private String desc;
  private String name;
  private String provider;
  private OcsfReputation reputation;
  private String shortDesc;
  private String srcUrl;
  private String type;
  private String value;


}