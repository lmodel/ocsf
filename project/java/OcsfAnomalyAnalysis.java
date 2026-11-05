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
  Describes the analysis of activity patterns and anomalies of target entities to identify potential security threats, performance issues, or other deviations from established baselines. This includes monitoring and analyzing user interactions, API usage, resource utilization, access patterns and other measured indicators.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAnomalyAnalysis  {

  private List<OcsfAnalysisTarget> analysisTargets;
  private List<OcsfAnomaly> anomalies;
  private List<OcsfBaseline> baselines;


}