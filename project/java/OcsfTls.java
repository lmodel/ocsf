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
  The Transport Layer Security (TLS) object describes the negotiated TLS protocol used for secure communications over an establish network connection.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfTls extends OcsfObjectBase {

  private Integer alert;
  private OcsfCertificate certificate;
  private List<String> certificateChain;
  private String cipher;
  private List<String> clientCiphers;
  private List<OcsfTlsExtension> extensionList;
  private Integer handshakeDur;
  private OcsfFingerprint ja3Hash;
  private OcsfFingerprint ja3sHash;
  private Integer keyLength;
  private List<OcsfSan> sans;
  private List<String> serverCiphers;
  private String sni;
  private List<OcsfTlsExtension> tlsExtensionList;
  private String version;


}