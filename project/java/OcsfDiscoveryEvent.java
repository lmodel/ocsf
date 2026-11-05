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
  The Discovery event is a generic event that defines a set of attributes available in Discovery category events. As a generic event, it could be used to log events that are not otherwise defined by the Discovery specific event classes.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfDiscoveryEvent extends OcsfBaseEvent {



}