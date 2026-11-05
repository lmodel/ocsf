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
  The Account object contains details about the account that initiated or performed a specific activity within a system or application. Additionally, the Account object refers to logical Cloud and Software-as-a-Service (SaaS) based containers such as AWS Accounts, Azure Subscriptions, Oracle Cloud Compartments, Google Cloud Projects, and otherwise.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAccount extends OcsfEntity {

  private Boolean isDisabled;
  private Boolean isLocked;
  private Boolean isOnPremisesSyncEnabled;
  private List<String> labels;
  private List<OcsfKeyValueObject> tags;
  private String type;
  private Integer typeId;


}