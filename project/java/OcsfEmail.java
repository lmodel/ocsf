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
  The Email object describes the email metadata such as sender, recipients, and direction, and can include embedded URLs and files.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfEmail extends OcsfObjectBase {

  private List<String> bcc;
  private List<String> bccMailboxes;
  private List<String> cc;
  private List<String> ccMailboxes;
  private String deliveredTo;
  private List<String> deliveredToList;
  private List<OcsfFile> files;
  private String from;
  private List<String> fromList;
  private String fromMailbox;
  private List<String> fromMailboxes;
  private List<OcsfHttpHeader> httpHeaders;
  private Boolean isRead;
  private String messageUid;
  private String rawHeader;
  private String replyTo;
  private List<String> replyToList;
  private List<String> replyToMailboxes;
  private String returnPath;
  private String sender;
  private String senderMailbox;
  private Integer size;
  private String smtpFrom;
  private List<String> smtpTo;
  private String subject;
  private List<String> to;
  private List<String> toMailboxes;
  private String uid;
  private List<OcsfUrl> urls;
  private List<String> xOriginatingIp;
  private OcsfDataClassification dataClassification;
  private List<OcsfDataClassification> dataClassifications;


}