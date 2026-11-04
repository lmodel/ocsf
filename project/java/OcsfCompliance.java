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
  The Compliance object contains information about Industry and Regulatory Framework standards, controls and requirements or details about custom assessments utilized in a compliance evaluation. Standards define broad security frameworks, controls represent specific security requirements within those frameworks, and checks are the testable verification points used to determine if controls are properly implemented.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfCompliance extends OcsfObjectBase {

  private List<OcsfAssessment> assessments;
  private String category;
  private List<OcsfCheck> checks;
  private List<OcsfKbArticle> complianceReferences;
  private List<OcsfKbArticle> complianceStandards;
  private String control;
  private List<OcsfKeyValueObject> controlParameters;
  private String desc;
  private List<String> requirements;
  private List<String> standards;
  private String status;
  private String statusCode;
  private String statusDetail;
  private List<String> statusDetails;
  private Integer statusId;


}