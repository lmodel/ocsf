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
  The attributes that macOS uses to identify user information.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfMacosUsersProfile  {

  private Integer egid;
  private Integer euid;


}