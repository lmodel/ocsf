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
  The Analytic object contains details about the analytic technique used to analyze and derive insights from the data or information that led to the creation of a finding or conclusion.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAnalytic extends OcsfEntity {

  private String algorithm;
  private String category;
  private String desc;
  private List<OcsfAnalytic> relatedAnalytics;
  private List<OcsfSensorInfo> sensorInfoList;
  private String state;
  private Integer stateId;
  private String type;
  private int typeId;
  private String version;


}