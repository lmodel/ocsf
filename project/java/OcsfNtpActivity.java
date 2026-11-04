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
  The Network Time Protocol (NTP) Activity events report instances of remote clients synchronizing their clocks with an NTP server, as observed on the network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNtpActivity extends OcsfNetworkEvent {

  private Integer delay;
  private Integer dispersion;
  private Integer precision;
  private String stratum;
  private Integer stratumId;
  private String version;


}