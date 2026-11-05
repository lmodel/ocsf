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
  Operating System Patch State reports the installation of an OS patch to a device and any associated knowledgebase articles.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPatchState extends OcsfDiscoveryEvent {

  private List<OcsfKbArticle> kbArticleList;


}