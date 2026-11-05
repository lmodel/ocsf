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
  The Remediation object describes the recommended remediation steps to address identified issue(s).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRemediation extends OcsfObjectBase {

  private List<OcsfCisControl> cisControls;
  private String desc;
  private List<OcsfKbArticle> kbArticleList;
  private List<String> kbArticles;
  private List<String> references;


}