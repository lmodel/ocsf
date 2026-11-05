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
  The Advisory object represents publicly disclosed cybersecurity vulnerabilities defined in a Security advisory. e.g. <code> Microsoft KB Article</code>, <code>Apple Security Advisory</code>, or a <code>GitHub Security Advisory (GHSA)</code>
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAdvisory extends OcsfObjectBase {

  private OcsfTimespan avgTimespan;
  private String bulletin;
  private String classification;
  private Integer createdTime;
  private String createdTimeDt;
  private String desc;
  private String installState;
  private Integer installStateId;
  private Boolean isSuperseded;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private OcsfOs os;
  private OcsfProduct product;
  private List<String> references;
  private List<OcsfCve> relatedCves;
  private List<OcsfCwe> relatedCwes;
  private Integer size;
  private String srcUrl;
  private String title;
  private String uid;


}