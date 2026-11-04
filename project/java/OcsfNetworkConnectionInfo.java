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
  The Network Connection Information object describes characteristics of an OSI Transport Layer communication, including TCP and UDP.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfNetworkConnectionInfo extends OcsfObjectBase {

  private String boundary;
  private Integer boundaryId;
  private String communityUid;
  private String direction;
  private int directionId;
  private String flagHistory;
  private String protocolName;
  private Integer protocolNum;
  private String protocolVer;
  private Integer protocolVerId;
  private OcsfSession session;
  private Integer tcpFlags;
  private String uid;


}