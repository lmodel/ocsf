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
  File Transfer Protocol (FTP) Activity events report file transfers between a server and a client as seen on the network.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFtpActivity extends OcsfNetworkEvent {

  private List<Integer> codes;
  private String command;
  private List<String> commandResponses;
  private OcsfFile file;
  private String name;
  private Integer port;
  private String type;


}