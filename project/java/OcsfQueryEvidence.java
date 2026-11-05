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
  The specific resulting evidence information that was queried or discovered. When mapping raw telemetry data users should select the appropriate child object that best matches the evidence type as defined by query_type_id.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfQueryEvidence  {

  private OcsfNetworkConnectionInfo connectionInfo;
  private OcsfFile file;
  private OcsfFile folder;
  private OcsfGroup group;
  private OcsfJob job;
  private OcsfKernel kernel;
  private OcsfModule module;
  private List<OcsfNetworkInterface> networkInterfaces;
  private OcsfPeripheralDevice peripheralDevice;
  private OcsfProcess process;
  private String queryType;
  private int queryTypeId;
  private OcsfWinRegKey regKey;
  private OcsfWinRegValue regValue;
  private OcsfService service;
  private OcsfSession session;
  private OcsfStartupItem startupItem;
  private String state;
  private Integer tcpStateId;
  private OcsfUser user;
  private List<OcsfUser> users;


}