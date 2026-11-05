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
  The Uniform Resource Locator (URL) object describes the characteristics of a URL.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfUrl extends OcsfObjectBase {

  private List<String> categories;
  private List<Integer> categoryIds;
  private String domain;
  private String hostname;
  private String path;
  private Integer port;
  private String queryString;
  private String resourceType;
  private String scheme;
  private String subdomain;
  private String urlString;


}