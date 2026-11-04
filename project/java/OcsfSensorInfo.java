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
  The Sensor Information object describes a control point sensor that emits data, or originates detections. It can be part of an endpoint or agent running on an OS, a SaaS application, a network device, a Cyber Threat Intelligence (CTI) system, or other detection and enforcement technologies.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfSensorInfo extends OcsfEntity {

  private String sensorLayer;
  private int sensorLayerId;


}