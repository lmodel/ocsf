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
  The Entity object is an unordered collection of attributes, with a name and unique identifier. It serves as a base object that defines a set of attributes and default constraints available in all objects that extend it.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public abstract class OcsfEntity extends OcsfObjectBase {

  private String name;
  private String uid;
  private Integer uidNumeric;


}