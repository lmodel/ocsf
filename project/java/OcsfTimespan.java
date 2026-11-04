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
  The Time Span object represents different time period durations. If a timespan is fractional, i.e. crosses one period, e.g. a week and 3 days, more than one may be populated since each member is of integral type. In that case <code>type_id</code> if present should be set to <code>Other.</code><P>A timespan may also be defined by its time interval boundaries, <code>start_time</code> and <code>end_time</code>.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTimespan extends OcsfObjectBase {

  private Integer duration;
  private Integer durationDays;
  private Integer durationHours;
  private Integer durationMins;
  private Integer durationMonths;
  private Integer durationSecs;
  private Integer durationWeeks;
  private Integer durationYears;
  private Integer endTime;
  private String endTimeDt;
  private Integer startTime;
  private String startTimeDt;
  private String type;
  private Integer typeId;


}