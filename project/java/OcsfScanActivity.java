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
  Scan events report the start, completion, and results of a scan job. The scan event includes the number of items that were scanned and the number of detections that were resolved.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfScanActivity extends OcsfApplicationEvent {

  private String commandUid;
  private Integer numDetections;
  private Integer numFiles;
  private Integer numFolders;
  private Integer numNetworkItems;
  private Integer numProcesses;
  private Integer numRegistryItems;
  private Integer numResolutions;
  private Integer numSkippedItems;
  private Integer numTrustedItems;
  private OcsfScan scan;
  private String scheduleUid;
  private Integer total;


}