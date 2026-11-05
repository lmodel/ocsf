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
  Application Error events describe issues with an applications. The error message should be put in the event's <code>message</code> attribute. The <code>metadata.product</code> attribute can be used to capture the originating application information. The <code>host</code> profile can used to include the generating device information. This class is helpful for applications that generate or handle OCSF events and can also be used for errors in upstream products and services.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfApplicationError extends OcsfApplicationEvent {



}