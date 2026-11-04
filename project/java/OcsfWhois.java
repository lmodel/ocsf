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
  The resources of a WHOIS record for a given domain. This can include domain names, IP address blocks, autonomous system information, and/or contact and registration information for a domain.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfWhois extends OcsfObjectBase {

  private OcsfAutonomousSystem autonomousSystem;
  private Integer createdTime;
  private String createdTimeDt;
  private String dnssecStatus;
  private Integer dnssecStatusId;
  private String domain;
  private List<OcsfDomainContact> domainContacts;
  private String emailAddr;
  private String isp;
  private String ispOrg;
  private Integer lastSeenTime;
  private String lastSeenTimeDt;
  private List<String> nameServers;
  private String phoneNumber;
  private String registrar;
  private String status;
  private List<String> subdomains;
  private String subnet;


}