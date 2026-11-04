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
  When applied, this profile adds a sibling attribute of data type <code>datetime_t</code> (RFC-3339 string) wherever a <code>timestamp_t</code> attribute appears in the event class. This provides human-readable date/time representations alongside the epoch-millisecond timestamps. For example, <code>time</code> (<code>timestamp_t</code>) would gain a <code>time_dt</code> (<code>datetime_t</code>) sibling such as <code>"1985-04-12T23:20:50.52Z"</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfDatetimeProfile  {



}