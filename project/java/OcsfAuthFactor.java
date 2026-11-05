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
  An Authentication Factor object describes a category of methods used for identity verification in an authentication attempt.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAuthFactor extends OcsfObjectBase {

  private OcsfDevice device;
  private String emailAddr;
  private String factorType;
  private int factorTypeId;
  private Boolean isHotp;
  private Boolean isTotp;
  private String phoneNumber;
  private String provider;
  private List<String> securityQuestions;


}