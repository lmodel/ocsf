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
  A cryptographic attestation that an event has not been altered since it was produced and was produced by the holder of a verifiable identity, providing integrity, authenticity, and non-repudiation. The attestation is computed over a canonical serialization of the event: the entire event, including the attestation's own <code>authority_uid</code>, <code>chain_uid</code>, and <code>prev_event</code> attributes, and excluding only the attestation's <code>fingerprint</code> and <code>signatures</code>. Because <code>prev_event</code> is inside the serialized content, deleting or altering an event in a chain breaks the fingerprint and signatures of the event that references it. An attestation may carry more than one signature (for example, a co-signature, notary, or witness over the same event). The verifiable identity is a technical credential, such as a key or certificate, and is not an attribution of any person, organization, or state.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAttestation extends OcsfObjectBase {

  private String authorityUid;
  private String chainUid;
  private OcsfFingerprint fingerprint;
  private OcsfPrevEvent prevEvent;
  private List<OcsfDigitalSignature> signatures;
  private String uid;


}