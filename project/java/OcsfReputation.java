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
  The Reputation object describes the reputation/risk score of an entity (e.g. device, user, domain).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfReputation extends OcsfObjectBase {

  private float baseScore;
  private String provider;
  private String score;
  private int scoreId;


}