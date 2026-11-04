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
  The registry value object describes a Windows registry value.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWinRegValue extends OcsfObjectBase {

  private String data;
  private Boolean isDefault;
  private Boolean isSystem;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String name;
  private String path;
  private String regBinaryData;
  private Integer regIntegerData;
  private String regStringData;
  private List<String> regStringListData;
  private String type;
  private Integer typeId;


}