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
  The peripheral device object describes the properties of external, connectable, and detachable hardware.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfPeripheralDevice extends OcsfEntity {

  private String class_;
  private String model;
  private String serialNumber;
  private String type;
  private Integer typeId;
  private List<String> vendorIdList;
  private String vendorName;


}