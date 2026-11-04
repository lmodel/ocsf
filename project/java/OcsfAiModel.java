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
  The AI Model object describes the characteristics of an AI/ML model. Examples include language models like GPT-4, embedding models like text-embedding-ada-002, and computer vision models like CLIP.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAiModel extends OcsfEntity {

  private String aiProvider;
  private String version;


}