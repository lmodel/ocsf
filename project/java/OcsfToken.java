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
  The Token object is the base object for representing tokens, API keys, and authentication credentials used across different contexts. This object provides common attributes for all token types, including protocol-specific authentication tokens (Kerberos, OIDC, SAML) and API/client tokens used for service authentication. When to use this object: Use the base <code>token</code> object directly in API activity events to represent API tokens, client tokens, or API keys used to authenticate API requests. Examples include: Okta API tokens, Microsoft Entra ID Application Registration client secrets, Stripe API keys, AWS API keys. When NOT to use this object: Do NOT use the base <code>token</code> object for protocol-specific authentication tokens in authentication events - use <code>authentication_token</code> instead (which extends this object). Do NOT use <code>token</code> for tracking credential lifecycle and usage patterns - use <code>programmatic_credential</code> instead.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfToken extends OcsfObjectBase {

  private Integer createdTime;
  private String createdTimeDt;
  private Integer expirationTime;
  private String expirationTimeDt;
  private Boolean isRenewable;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private String name;
  private String tenantUid;
  private String type;
  private Integer typeId;
  private String uid;
  private String zone;


}