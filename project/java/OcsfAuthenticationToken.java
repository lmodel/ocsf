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
  The Authentication Token object extends the base <code>token</code> object and represents standardized authentication tokens, tickets, or assertions that conform to established authentication protocols such as Kerberos, OIDC, and SAML. This object inherits all attributes from <code>token</code> and adds protocol-specific attributes (e.g., <code>kerberos_flags</code>, <code>encryption_details</code>) for authentication events. Use this object in authentication events to represent protocol-specific tokens: Kerberos Ticket Granting Tickets (TGT) and Service Tickets (ST), OIDC Identity Tokens and Refresh Tokens, and SAML Assertions. These tokens are issued by authentication servers and identity providers and carry protocol-specific metadata, lifecycle information, and security attributes defined by their respective specifications. When to use this object: Use <code>authentication_token</code> when representing protocol-specific authentication tokens (type_id values 1-5: Kerberos TGT/ST, OIDC ID/Refresh tokens, SAML assertions) in authentication events. When NOT to use this object: Do NOT use <code>authentication_token</code> for API tokens or client tokens (type_id values 6-7) used in API activity events - use the base <code>token</code> object instead. Do NOT use <code>authentication_token</code> for generic API keys - use the base <code>token</code> object instead.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfAuthenticationToken extends OcsfToken {

  private OcsfEncryptionDetails encryptionDetails;
  private String kerberosFlags;


}