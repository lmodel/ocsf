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
  The Record Integrity profile adds one or more cryptographic attestations over the event itself, providing integrity, authenticity, and non-repudiation independent of any domain-specific content. It is domain-agnostic and may be applied to any event class. Each attestation is computed over a canonical serialization of the event; independent attesters over the same event each contribute a separate entry in <code>attestation_list</code>, while multiple signers of a single attestation, such as a producer plus a co-signature, notary, or witness, are carried in that attestation's <code>signatures</code> array, and a sequence of events may form a tamper-evident hash chain.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfRecordIntegrityProfile  {

  private List<OcsfAttestation> attestationList;


}