/**
* The normalized identifier of the account switch method.
*/
export enum AccountSwitchTypeIdEnum {
    
    /** The account switch type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** A utility like <code>sudo</code>, <code>su</code>, or equivalent was used to
perform actions in the context of another user. */
    SUBSTITUTE_USER = "SUBSTITUTE_USER",
    /** An API like <code>ImpersonateLoggedOnUser()</code> or equivalent was used to
perform actions in the context of another user. */
    IMPERSONATE = "IMPERSONATE",
    /** The account switch type is not mapped. See the <code>account_switch_type</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized action taken by a control or other policy-based system leading
to an outcome or disposition.
*/
export enum ActionIdEnum {
    
    /** The action was unknown. */
    UNKNOWN = "UNKNOWN",
    /** The activity was allowed. */
    ALLOWED = "ALLOWED",
    /** The attempted activity was denied. */
    DENIED = "DENIED",
    /** The action was not mapped. See the <code>action</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the activity that triggered the event.
*/
export enum ActivityIdEnum {
    
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the algorithm. See specific usage.
*/
export enum AlgorithmIdEnum {
    
    /** The algorithm is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The algorithm is not mapped. See the <code>algorithm</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the authentication protocol used to create the
user session.
*/
export enum AuthProtocolIdEnum {
    
    /** The authentication protocol is unknown. */
    UNKNOWN = "UNKNOWN",
    /** NTLM */
    NTLM = "NTLM",
    /** Kerberos */
    KERBEROS = "KERBEROS",
    /** Digest */
    DIGEST = "DIGEST",
    /** OpenID */
    OPENID = "OPENID",
    /** SAML */
    SAML = "SAML",
    /** OAUTH 2.0 */
    OAUTH_2_0 = "OAUTH_2_0",
    /** PAP */
    PAP = "PAP",
    /** CHAP */
    CHAP = "CHAP",
    /** EAP */
    EAP = "EAP",
    /** RADIUS */
    RADIUS = "RADIUS",
    /** Basic Authentication */
    BASIC_AUTHENTICATION = "BASIC_AUTHENTICATION",
    /** LDAP */
    LDAP = "LDAP",
    /** The authentication protocol is not mapped. See the <code>auth_protocol</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the agreed upon authentication type. See specific
usage.
*/
export enum AuthTypeIdEnum {
    
    /** The authentication type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The authentication type is not mapped. See the <code>auth_type</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* <p>The normalized identifier of the boundary of the connection. </p><p> For
cloud connections, this translates to the traffic-boundary (same VPC, through
IGW, etc.). For traditional networks, this is described as Local, Internal, or
External.</p>
*/
export enum BoundaryIdEnum {
    
    /** The connection boundary is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Local network traffic on the same endpoint. */
    LOCALHOST = "LOCALHOST",
    /** Internal network traffic between two endpoints inside network. */
    INTERNAL = "INTERNAL",
    /** External network traffic between two endpoints on the Internet or outside the
network. */
    EXTERNAL = "EXTERNAL",
    /** Through another resource in the same VPC */
    SAME_VPC = "SAME_VPC",
    /** Through an Internet gateway or a gateway VPC endpoint */
    INTERNET_VPC_GATEWAY = "INTERNET_VPC_GATEWAY",
    /** Through a virtual private gateway */
    VIRTUAL_PRIVATE_GATEWAY = "VIRTUAL_PRIVATE_GATEWAY",
    /** Through an intra-region VPC peering connection */
    INTRA_REGION_VPC = "INTRA_REGION_VPC",
    /** Through an inter-region VPC peering connection */
    INTER_REGION_VPC = "INTER_REGION_VPC",
    /** Through a local gateway */
    LOCAL_GATEWAY = "LOCAL_GATEWAY",
    /** Through a gateway VPC endpoint (Nitro-based instances only) */
    GATEWAY_VPC = "GATEWAY_VPC",
    /** Through an Internet gateway (Nitro-based instances only) */
    INTERNET_GATEWAY = "INTERNET_GATEWAY",
    /** The boundary is not mapped. See the <code>boundary</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the attachment bus or interface standard.
*/
export enum BusTypeIdEnum {
    
    /** The bus type is unknown or not reported. */
    UNKNOWN = "UNKNOWN",
    /** The device is attached directly on the motherboard or SoC (often referred to as
'integrated' or 'onboard'). */
    ONBOARD = "ONBOARD",
    /** Peripheral Component Interconnect Express slot with 16 lanes, typically used
for high‑bandwidth add‑in devices. */
    PCIE_X16 = "PCIE_X16",
    /** Peripheral Component Interconnect Express slot with 8 lanes; common for
high‑performance NICs, storage controllers, and accelerators. */
    PCIE_X8 = "PCIE_X8",
    /** Mobile PCI Express Module (MXM) Type A form factor (compact laptop/embedded GPU
module). */
    MXM_TYPE_A = "MXM_TYPE_A",
    /** Mobile PCI Express Module (MXM) Type B form factor (larger laptop/embedded GPU
module). */
    MXM_TYPE_B = "MXM_TYPE_B",
    /** M.2 (NGFF) internal module form factor/connector exposing PCIe (and/or
SATA/USB) for SSDs and add‑in modules. */
    M_2 = "M_2",
    /** Compute Express Link (CXL), an open cache‑coherent interconnect for processors,
memory expansion, and accelerators built on the PCIe physical layer. */
    CXL = "CXL",
    /** A bus or interface standard not covered by the defined values; the exact value
is reported by the event source. */
    OTHER = "OTHER",
};
/**
* The Website categorization identifiers.
*/
export enum CategoryIdsEnum {
    
    /** The Domain/URL category is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Adult/Mature Content */
    ADULT_MATURE_CONTENT = "ADULT_MATURE_CONTENT",
    /** Pornography */
    PORNOGRAPHY = "PORNOGRAPHY",
    /** Sex Education */
    SEX_EDUCATION = "SEX_EDUCATION",
    /** Intimate Apparel/Swimsuit */
    INTIMATE_APPAREL_SWIMSUIT = "INTIMATE_APPAREL_SWIMSUIT",
    /** Nudity */
    NUDITY = "NUDITY",
    /** Extreme */
    EXTREME = "EXTREME",
    /** Scam/Questionable/Illegal */
    SCAM_QUESTIONABLE_ILLEGAL = "SCAM_QUESTIONABLE_ILLEGAL",
    /** Gambling */
    GAMBLING = "GAMBLING",
    /** Violence/Hate/Racism */
    VIOLENCE_HATE_RACISM = "VIOLENCE_HATE_RACISM",
    /** Weapons */
    WEAPONS = "WEAPONS",
    /** Abortion */
    ABORTION = "ABORTION",
    /** Hacking */
    HACKING = "HACKING",
    /** Phishing */
    PHISHING = "PHISHING",
    /** Entertainment */
    ENTERTAINMENT = "ENTERTAINMENT",
    /** Business/Economy */
    BUSINESS_ECONOMY = "BUSINESS_ECONOMY",
    /** Alternative Spirituality/Belief */
    ALTERNATIVE_SPIRITUALITY_BELIEF = "ALTERNATIVE_SPIRITUALITY_BELIEF",
    /** Alcohol */
    ALCOHOL = "ALCOHOL",
    /** Tobacco */
    TOBACCO = "TOBACCO",
    /** Controlled Substances */
    CONTROLLED_SUBSTANCES = "CONTROLLED_SUBSTANCES",
    /** Child Pornography */
    CHILD_PORNOGRAPHY = "CHILD_PORNOGRAPHY",
    /** Education */
    EDUCATION = "EDUCATION",
    /** Charitable Organizations */
    CHARITABLE_ORGANIZATIONS = "CHARITABLE_ORGANIZATIONS",
    /** Art/Culture */
    ART_CULTURE = "ART_CULTURE",
    /** Financial Services */
    FINANCIAL_SERVICES = "FINANCIAL_SERVICES",
    /** Brokerage/Trading */
    BROKERAGE_TRADING = "BROKERAGE_TRADING",
    /** Games */
    GAMES = "GAMES",
    /** Government/Legal */
    GOVERNMENT_LEGAL = "GOVERNMENT_LEGAL",
    /** Military */
    MILITARY = "MILITARY",
    /** Political/Social Advocacy */
    POLITICAL_SOCIAL_ADVOCACY = "POLITICAL_SOCIAL_ADVOCACY",
    /** Health */
    HEALTH = "HEALTH",
    /** Technology/Internet */
    TECHNOLOGY_INTERNET = "TECHNOLOGY_INTERNET",
    /** Search Engines/Portals */
    SEARCH_ENGINES_PORTALS = "SEARCH_ENGINES_PORTALS",
    /** Malicious Sources/Malnets */
    MALICIOUS_SOURCES_MALNETS = "MALICIOUS_SOURCES_MALNETS",
    /** Malicious Outbound Data/Botnets */
    MALICIOUS_OUTBOUND_DATA_BOTNETS = "MALICIOUS_OUTBOUND_DATA_BOTNETS",
    /** Job Search/Careers */
    JOB_SEARCH_CAREERS = "JOB_SEARCH_CAREERS",
    /** News/Media */
    NEWS_MEDIA = "NEWS_MEDIA",
    /** Personals/Dating */
    PERSONALS_DATING = "PERSONALS_DATING",
    /** Reference */
    REFERENCE = "REFERENCE",
    /** Mixed Content/Potentially Adult */
    MIXED_CONTENT_POTENTIALLY_ADULT = "MIXED_CONTENT_POTENTIALLY_ADULT",
    /** Chat (IM)/SMS */
    CHAT_IM_SMS = "CHAT_IM_SMS",
    /** Email */
    EMAIL = "EMAIL",
    /** Newsgroups/Forums */
    NEWSGROUPS_FORUMS = "NEWSGROUPS_FORUMS",
    /** Religion */
    RELIGION = "RELIGION",
    /** Social Networking */
    SOCIAL_NETWORKING = "SOCIAL_NETWORKING",
    /** File Storage/Sharing */
    FILE_STORAGE_SHARING = "FILE_STORAGE_SHARING",
    /** Remote Access Tools */
    REMOTE_ACCESS_TOOLS = "REMOTE_ACCESS_TOOLS",
    /** Shopping */
    SHOPPING = "SHOPPING",
    /** Auctions */
    AUCTIONS = "AUCTIONS",
    /** Real Estate */
    REAL_ESTATE = "REAL_ESTATE",
    /** Society/Daily Living */
    SOCIETY_DAILY_LIVING = "SOCIETY_DAILY_LIVING",
    /** Personal Sites */
    PERSONAL_SITES = "PERSONAL_SITES",
    /** Restaurants/Dining/Food */
    RESTAURANTS_DINING_FOOD = "RESTAURANTS_DINING_FOOD",
    /** Sports/Recreation */
    SPORTS_RECREATION = "SPORTS_RECREATION",
    /** Travel */
    TRAVEL = "TRAVEL",
    /** Vehicles */
    VEHICLES = "VEHICLES",
    /** Humor/Jokes */
    HUMOR_JOKES = "HUMOR_JOKES",
    /** Software Downloads */
    SOFTWARE_DOWNLOADS = "SOFTWARE_DOWNLOADS",
    /** Peer-to-Peer (P2P) */
    PEER_TO_PEER_P2P = "PEER_TO_PEER_P2P",
    /** Audio/Video Clips */
    AUDIO_VIDEO_CLIPS = "AUDIO_VIDEO_CLIPS",
    /** Office/Business Applications */
    OFFICE_BUSINESS_APPLICATIONS = "OFFICE_BUSINESS_APPLICATIONS",
    /** Proxy Avoidance */
    PROXY_AVOIDANCE = "PROXY_AVOIDANCE",
    /** For Kids */
    FOR_KIDS = "FOR_KIDS",
    /** Web Ads/Analytics */
    WEB_ADS_ANALYTICS = "WEB_ADS_ANALYTICS",
    /** Web Hosting */
    WEB_HOSTING = "WEB_HOSTING",
    /** Uncategorized */
    UNCATEGORIZED = "UNCATEGORIZED",
    /** Suspicious */
    SUSPICIOUS = "SUSPICIOUS",
    /** Sexual Expression */
    SEXUAL_EXPRESSION = "SEXUAL_EXPRESSION",
    /** Translation */
    TRANSLATION = "TRANSLATION",
    /** Non-Viewable/Infrastructure */
    NON_VIEWABLE_INFRASTRUCTURE = "NON_VIEWABLE_INFRASTRUCTURE",
    /** Content Servers */
    CONTENT_SERVERS = "CONTENT_SERVERS",
    /** Placeholders */
    PLACEHOLDERS = "PLACEHOLDERS",
    /** The Domain/URL category is not mapped. See the <code>categories</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
    /** Spam */
    SPAM = "SPAM",
    /** Potentially Unwanted Software */
    POTENTIALLY_UNWANTED_SOFTWARE = "POTENTIALLY_UNWANTED_SOFTWARE",
    /** Dynamic DNS Host */
    DYNAMIC_DNS_HOST = "DYNAMIC_DNS_HOST",
    /** E-Card/Invitations */
    E_CARD_INVITATIONS = "E_CARD_INVITATIONS",
    /** Informational */
    INFORMATIONAL = "INFORMATIONAL",
    /** Computer/Information Security */
    COMPUTER_INFORMATION_SECURITY = "COMPUTER_INFORMATION_SECURITY",
    /** Internet Connected Devices */
    INTERNET_CONNECTED_DEVICES = "INTERNET_CONNECTED_DEVICES",
    /** Internet Telephony */
    INTERNET_TELEPHONY = "INTERNET_TELEPHONY",
    /** Online Meetings */
    ONLINE_MEETINGS = "ONLINE_MEETINGS",
    /** Media Sharing */
    MEDIA_SHARING = "MEDIA_SHARING",
    /** Radio/Audio Streams */
    RADIO_AUDIO_STREAMS = "RADIO_AUDIO_STREAMS",
    /** TV/Video Streams */
    TV_VIDEO_STREAMS = "TV_VIDEO_STREAMS",
    /** Piracy/Copyright Concerns */
    PIRACY_COPYRIGHT_CONCERNS = "PIRACY_COPYRIGHT_CONCERNS",
    /** Marijuana */
    MARIJUANA = "MARIJUANA",
};
/**
* The list of normalized classification identifiers. See specific usage.
*/
export enum ClassificationIdsEnum {
    
    /** The classification is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The classification is not mapped. See the <code>classifications</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized confidence refers to the accuracy of the rule that created the
finding. A rule with a low confidence means that the finding scope is wide and
may create finding reports that may not be malicious in nature.
*/
export enum ConfidenceIdEnum {
    
    /** The normalized confidence is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Low */
    LOW = "LOW",
    /** Medium */
    MEDIUM = "MEDIUM",
    /** High */
    HIGH = "HIGH",
    /** The confidence is not mapped to the defined enum values. See the
<code>confidence</code> attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the file content confidentiality indicator.
*/
export enum ConfidentialityIdEnum {
    
    /** The confidentiality is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Not Confidential */
    NOT_CONFIDENTIAL = "NOT_CONFIDENTIAL",
    /** Confidential */
    CONFIDENTIAL = "CONFIDENTIAL",
    /** Secret */
    SECRET = "SECRET",
    /** Top Secret */
    TOP_SECRET = "TOP_SECRET",
    /** Private */
    PRIVATE = "PRIVATE",
    /** Restricted */
    RESTRICTED = "RESTRICTED",
    /** The confidentiality is not mapped. See the <code>confidentiality</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the CPU architecture.
*/
export enum CpuArchitectureIdEnum {
    
    /** The CPU architecture is unknown. */
    UNKNOWN = "UNKNOWN",
    /** CPU uses the x86 ISA. For bitness, refer to <code>cpu_bits</code>. */
    X86 = "X86",
    /** CPU uses the ARM ISA. For bitness, refer to <code>cpu_bits</code>. */
    ARM = "ARM",
    /** CPU uses the RISC-V ISA. For bitness, refer to <code>cpu_bits</code>. */
    RISC_V = "RISC_V",
    /** The CPU architecture is not mapped. See the <code>cpu_architecture</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The stage or state that the data was in when it was assessed or scanned by a
data security tool.
*/
export enum DataLifecycleStateIdEnum {
    
    /** The data lifecycle state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The data was stored on physical or logical media and was not actively moving
through the network nor was being processed. E.g., data stored in a database,
PDF files in a file share, or EHR records in object storage. */
    DATA_AT_REST = "DATA_AT_REST",
    /** The data was actively moving through the network or from one physical or
logical location to another. E.g., emails being send, data replication or
Change Data Capture (CDC) streams, or sensitive data processed on an API. */
    DATA_IN_TRANSIT = "DATA_IN_TRANSIT",
    /** The data was being processed, accessed, or read by a system, making it active
in memory or CPU. E.g., sensitive data in a Business Intelligence tool, ePHI
being processed in an EHR application or a user viewing data stored in a
spreadsheet or PDF. */
    DATA_IN_USE = "DATA_IN_USE",
    /** The data lifecycle state is not mapped. See the
<code>data_lifecycle_state</code> attribute, which contains a data source
specific value. */
    OTHER = "OTHER",
};
/**
* The CVSS depth represents a depth of the equation used to calculate CVSS score.
*/
export enum DepthEnum {
    
    /** Base */
    BASE = "BASE",
    /** Environmental */
    ENVIRONMENTAL = "ENVIRONMENTAL",
    /** Temporal */
    TEMPORAL = "TEMPORAL",
};
/**
* Specifies the type of detection pattern used to identify the associated threat
indicator.
*/
export enum DetectionPatternTypeIdEnum {
    
    /** The type is not mapped. */
    UNKNOWN = "UNKNOWN",
    /** STIX */
    STIX = "STIX",
    /** PCRE */
    PCRE = "PCRE",
    /** SIGMA */
    SIGMA = "SIGMA",
    /** Snort */
    SNORT = "SNORT",
    /** Suricata */
    SURICATA = "SURICATA",
    /** YARA */
    YARA = "YARA",
    /** The detection pattern type is not mapped. See the
<code>detection_pattern_type</code> attribute, which contains a data source
specific value. */
    OTHER = "OTHER",
};
/**
* The type of data security tool or system that the finding, detection, or alert
originated from.
*/
export enum DetectionSystemIdEnum {
    
    /** The type is not mapped. See the <code>detection_system</code> attribute, which
contains a data source specific value. */
    UNKNOWN = "UNKNOWN",
    /** A dedicated agent or sensor installed on a device, either a dedicated data
security tool or an Endpoint Detection & Response (EDR) tool that can detect
sensitive data and/or enforce data security policies. E.g., Forcepoint DLP,
Symantec DLP, Microsoft Defender for Endpoint (MDE). */
    ENDPOINT = "ENDPOINT",
    /** A Data Loss Prevention (DLP) gateway that is positioned in-line of an
information store such as a network share, a database, or otherwise that can
detect sensitive data and/or enforce data security policies. */
    DLP_GATEWAY = "DLP_GATEWAY",
    /** A Mobile Device Management (MDM) or Enterprise Mobility Management (EMM) tool
that can detect sensitive data and/or enforce data security policies on mobile
devices (e.g., cellphones, tablets, End User Devices [EUDs]). */
    MOBILE_DEVICE_MANAGEMENT = "MOBILE_DEVICE_MANAGEMENT",
    /** A tool that actively identifies and classifies sensitive data in digital media
and information stores in accordance with a policy or automated functionality.
E.g, Amazon Macie, Microsoft Purview. */
    DATA_DISCOVERY_CLASSIFICATION = "DATA_DISCOVERY_CLASSIFICATION",
    /** A Secure Web Gateway (SWG) is any tool that can detect sensitive data and/or
enforce data security policies at a network-edge such as within a proxy or
firewall service. */
    SECURE_WEB_GATEWAY = "SECURE_WEB_GATEWAY",
    /** A Secure Email Gateway (SEG) is any tool that can detect sensitive data and/or
enforce data security policies within email systems. E.g., Microsoft Defender
for Office, Google Workspaces. */
    SECURE_EMAIL_GATEWAY = "SECURE_EMAIL_GATEWAY",
    /** A Digital Rights Management (DRM) or a dedicated Information Rights Management
(IRM) are tools which can detect sensitive data and/or enforce data security
policies on digital media via policy or user access rights. */
    DIGITAL_RIGHTS_MANAGEMENT = "DIGITAL_RIGHTS_MANAGEMENT",
    /** A Cloud Access Security Broker (CASB) that can detect sensitive data and/or
enforce data security policies in-line to cloud systems such as the public
cloud or Software-as-a-Service (SaaS) tool. E.g., Forcepoint CASB, SkyHigh
Security. */
    CLOUD_ACCESS_SECURITY_BROKER = "CLOUD_ACCESS_SECURITY_BROKER",
    /** A Database Activity Monitoring (DAM) tool that can detect sensitive data and/or
enforce data security policies as part of a dedicated database or warehouse
monitoring solution. */
    DATABASE_ACTIVITY_MONITORING = "DATABASE_ACTIVITY_MONITORING",
    /** A built in Data Loss Prevention (DLP) or other data security capability within
a tool or platform such as an Enterprise Resource Planning (ERP) or Customer
Relations Management (CRM) tool that can detect sensitive data and/or enforce
data security policies. */
    APPLICATION_LEVEL_DLP = "APPLICATION_LEVEL_DLP",
    /** Any Developer Security tool such as an Infrastructure-as-Code (IAC) security
scanner, Secrets Detection, or Secure Software Development Lifecycle (SSDLC)
tool that can detect sensitive data and/or enforce data security policies.
E.g., TruffleHog, GitGuardian, Git-Secrets. */
    DEVELOPER_SECURITY = "DEVELOPER_SECURITY",
    /** A Data Security Posture Management (DSPM) tool is a continuous monitoring and
data discovery solution that can detect sensitive data and/or enforce data
security policies for local and cloud environments. E.g., Cyera, Sentra, IBM
Polar Security. */
    DATA_SECURITY_POSTURE_MANAGEMENT = "DATA_SECURITY_POSTURE_MANAGEMENT",
    /** Any other type of detection system or a multi-variate system made up of several
other systems. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the direction of the initiated connection,
traffic, or email.
*/
export enum DirectionIdEnum {
    
    /** The connection direction is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Inbound network connection. The connection originated from the Internet or
outside network, destined for services on the inside network. */
    INBOUND = "INBOUND",
    /** Outbound network connection. The connection originated from inside the network,
destined for services on the Internet or outside network. */
    OUTBOUND = "OUTBOUND",
    /** Lateral network connection. The connection originated from inside the network,
destined for services on the inside network. */
    LATERAL = "LATERAL",
    /** Local network connection (<code>localhost</code>). The connection is
intra-device, originating from and destined for services running on the same
device. */
    LOCAL = "LOCAL",
    /** The direction is not mapped. See the <code>direction</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* Describes the outcome or action taken by a security control, such as access
control checks, malware detections or various types of policy violations.
*/
export enum DispositionIdEnum {
    
    /** The disposition is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Granted access or allowed the action to the protected resource. */
    ALLOWED = "ALLOWED",
    /** Denied access or blocked the action to the protected resource. */
    BLOCKED = "BLOCKED",
    /** A suspicious file or other content was moved to a benign location. */
    QUARANTINED = "QUARANTINED",
    /** A session was isolated on the network or within a browser. */
    ISOLATED = "ISOLATED",
    /** A file or other content was deleted. */
    DELETED = "DELETED",
    /** The request was detected as a threat and resulted in the connection being
dropped. */
    DROPPED = "DROPPED",
    /** A custom action was executed such as running of a command script. Use the
<code>message</code> attribute of the base class for details. */
    CUSTOM_ACTION = "CUSTOM_ACTION",
    /** A request or submission was approved. For example, when a form was properly
filled out and submitted. This is distinct from <code>1</code> 'Allowed'. */
    APPROVED = "APPROVED",
    /** A quarantined file or other content was restored to its original location. */
    RESTORED = "RESTORED",
    /** A suspicious or risky entity was deemed to no longer be suspicious (re-scored). */
    EXONERATED = "EXONERATED",
    /** A corrupt file or configuration was corrected. */
    CORRECTED = "CORRECTED",
    /** A corrupt file or configuration was partially corrected. */
    PARTIALLY_CORRECTED = "PARTIALLY_CORRECTED",
    /** A corrupt file or configuration was not corrected. */
    UNCORRECTED = "UNCORRECTED",
    /** An operation was delayed, for example if a restart was required to finish the
operation. */
    DELAYED = "DELAYED",
    /** Suspicious activity or a policy violation was detected without further action. */
    DETECTED = "DETECTED",
    /** The outcome of an operation had no action taken. */
    NO_ACTION = "NO_ACTION",
    /** The operation or action was logged without further action. */
    LOGGED = "LOGGED",
    /** A file or other entity was marked with extended attributes. */
    TAGGED = "TAGGED",
    /** The request or activity was detected as a threat and resulted in a notification
but request was not blocked. */
    ALERT = "ALERT",
    /** Counted the request or activity but did not determine whether to allow it or
block it. */
    COUNT = "COUNT",
    /** The request was detected as a threat and resulted in the connection being
reset. */
    RESET = "RESET",
    /** Required the end user to solve a CAPTCHA puzzle to prove that a human being is
sending the request. */
    CAPTCHA = "CAPTCHA",
    /** Ran a silent challenge that required the client session to verify that it's a
browser, and not a bot. */
    CHALLENGE = "CHALLENGE",
    /** The requestor's access has been revoked due to security policy enforcements.
Note: use the <code>Host</code> profile if the <code>User</code> or
<code>Actor</code> requestor is not present in the event class. */
    ACCESS_REVOKED = "ACCESS_REVOKED",
    /** A request or submission was rejected.  For example, when a form was improperly
filled out and submitted. This is distinct from <code>2</code> 'Blocked'. */
    REJECTED = "REJECTED",
    /** An attempt to access a resource was denied due to an authorization check that
failed. This is a more specific disposition than <code>2</code> 'Blocked' and
can be complemented with the <code>authorizations</code> attribute for more
detail. */
    UNAUTHORIZED = "UNAUTHORIZED",
    /** An error occurred during the processing of the activity or request. Use the
<code>message</code> attribute of the base class for details. */
    ERROR = "ERROR",
    /** The disposition is not mapped. See the <code>disposition</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* Describes the normalized status of DNS Security Extensions (DNSSEC) for a
domain.
*/
export enum DnssecStatusIdEnum {
    
    /** The disposition is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The related domain enables the signing of DNS records using DNSSEC. */
    SIGNED = "SIGNED",
    /** The related domain does not enable the signing of DNS records using DNSSEC. */
    UNSIGNED = "UNSIGNED",
    /** The DNSSEC status is not mapped. See the <code>dnssec_status</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* Identifies the type of a disk drive, i.e. fixed, removable, etc.
*/
export enum DriveTypeIdEnum {
    
    /** The drive type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The drive has removable media; for example, a floppy drive, thumb drive, or
flash card reader. */
    REMOVABLE = "REMOVABLE",
    /** The drive has fixed media; for example, a hard disk drive or flash drive. */
    FIXED = "FIXED",
    /** The drive is a remote (network) drive. */
    REMOTE = "REMOTE",
    /** The drive is a CD-ROM drive. */
    CD_ROM = "CD_ROM",
    /** The drive is a RAM disk. */
    RAM_DISK = "RAM_DISK",
    /** The drive type is not mapped. See the <code>drive_type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the encoding method. See specific usage.
*/
export enum EncodingIdEnum {
    
    /** The encoding method is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The encoding method is not mapped. See the <code>encoding</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier for the authentication factor.
*/
export enum FactorTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** User receives and inputs a code sent to their mobile device via SMS text
message. */
    SMS = "SMS",
    /** The user responds to a security question as part of a question-based
authentication factor */
    SECURITY_QUESTION = "SECURITY_QUESTION",
    /** System calls the user's registered phone number and requires the user to answer
and provide a response. */
    PHONE_CALL = "PHONE_CALL",
    /** Devices that verify identity-based on user's physical identifiers, such as
fingerprint scanners or retina scanners. */
    BIOMETRIC = "BIOMETRIC",
    /** Push notification is sent to user's registered device and requires the user to
acknowledge. */
    PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
    /** Physical device that generates a code to be used for authentication. */
    HARDWARE_TOKEN = "HARDWARE_TOKEN",
    /** Application generates a one-time password (OTP) for use in authentication. */
    OTP = "OTP",
    /** A code or link is sent to a user's registered email address. */
    EMAIL = "EMAIL",
    /** Typically involves a hardware token, which the user physically interacts with
to authenticate. */
    U2F = "U2F",
    /** Web-based API that enables users to register devices as authentication factors. */
    WEBAUTHN = "WEBAUTHN",
    /** The user enters a password that they have previously established. */
    PASSWORD = "PASSWORD",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier for fix coverage. See specific usage.
*/
export enum FixCoverageIdEnum {
    
    /** The fix coverage is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The fix coverage is not mapped. See the <code>fix_coverage</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The list of normalized identifiers of the communication flag IDs. See specific
usage.
*/
export enum FlagIdsEnum {
    
    /** The flag is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The flag is not mapped. See the <code>flags</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the format. See specific usage.
*/
export enum FormatIdEnum {
    
    /** The format is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The format is not mapped. See the <code>format</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized impact of the incident or finding. Per NIST, this is the
magnitude of harm that can be expected to result from the consequences of
unauthorized disclosure, modification, destruction, or loss of information or
information system availability.
*/
export enum ImpactIdEnum {
    
    /** The normalized impact is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The magnitude of harm is low. */
    LOW = "LOW",
    /** The magnitude of harm is moderate. */
    MEDIUM = "MEDIUM",
    /** The magnitude of harm is high. */
    HIGH = "HIGH",
    /** The magnitude of harm is high and the scope is widespread. */
    CRITICAL = "CRITICAL",
    /** The impact is not mapped. See the <code>impact</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the process injection method.
*/
export enum InjectionTypeIdEnum {
    
    /** The injection type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Remote Thread */
    REMOTE_THREAD = "REMOTE_THREAD",
    /** Load Library */
    LOAD_LIBRARY = "LOAD_LIBRARY",
    /** Queue APC */
    QUEUE_APC = "QUEUE_APC",
    /** The injection type is not mapped. See the <code>injection_type</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized state of the install.
*/
export enum InstallStateIdEnum {
    
    /** The normalized install state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The item is installed. */
    INSTALLED = "INSTALLED",
    /** The item is not installed. */
    NOT_INSTALLED = "NOT_INSTALLED",
    /** The item is installed pending reboot operation. */
    INSTALLED_PENDING_REBOOT = "INSTALLED_PENDING_REBOOT",
    /** The install state is not mapped. See the <code>install_state</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the <code>initiator</code>. See specific usage.
*/
export enum InitiatorIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the process integrity level (Windows only).
*/
export enum IntegrityIdEnum {
    
    /** The integrity level is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Untrusted */
    UNTRUSTED = "UNTRUSTED",
    /** Low */
    LOW = "LOW",
    /** Medium */
    MEDIUM = "MEDIUM",
    /** High */
    HIGH = "HIGH",
    /** System */
    SYSTEM = "SYSTEM",
    /** Protected */
    PROTECTED = "PROTECTED",
    /** The integrity level is not mapped. See the <code>integrity</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier for the specific type of <code>Launch</code>
activity.
*/
export enum LaunchTypeIdEnum {
    
    /** The launch type is unknown or not specified. */
    UNKNOWN = "UNKNOWN",
    /** Denotes that the <code>Launch</code> event represents atomic creation of a new
process on Windows. This launch type ID may also be used to represent both
steps of Unix process creation in a single <code>Launch</code> event. */
    SPAWN = "SPAWN",
    /** Denotes that the <code>Launch</code> event represents the "fork" step of Unix
process creation, where a process creates a clone of itself in a parent-child
relationship. WSL1 pico processes on Windows also use the 2-step Unix model. */
    FORK = "FORK",
    /** Denotes that the <code>Launch</code> event represents the "exec" step of Unix
process creation, where a process replaces its executable image, command line,
and environment. WSL1 pico processes on Windows also use the 2-step Unix model. */
    EXEC = "EXEC",
    /** The launch type is not mapped. See the <code>launch_type</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the load type. See specific usage.
*/
export enum LoadTypeIdEnum {
    
    /** The load type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The load type is not mapped. See the <code>load_type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized log type identifier.
*/
export enum LogTypeIdEnum {
    
    /** The log type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The log type is an Operating System log. */
    OS = "OS",
    /** The log type is an Application log. */
    APPLICATION = "APPLICATION",
    /** The log type is not mapped. See the <code>log_type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized logon type identifier.
*/
export enum LogonTypeIdEnum {
    
    /** The logon type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Used only by the System account, for example at system startup. */
    SYSTEM = "SYSTEM",
    /** A local logon to device console. */
    INTERACTIVE = "INTERACTIVE",
    /** A user or device logged onto this device from the network. */
    NETWORK = "NETWORK",
    /** A batch server logon, where processes may be executing on behalf of a user
without their direct intervention. */
    BATCH = "BATCH",
    /** A logon by a service or daemon that was started by the OS. */
    OS_SERVICE = "OS_SERVICE",
    /** A user unlocked the device. */
    UNLOCK = "UNLOCK",
    /** A user logged on to this device from the network. The user's password in the
authentication package was not hashed. */
    NETWORK_CLEARTEXT = "NETWORK_CLEARTEXT",
    /** A caller cloned its current token and specified new credentials for outbound
connections. The new logon session has the same local identity, but uses
different credentials for other network connections. */
    NEW_CREDENTIALS = "NEW_CREDENTIALS",
    /** A remote logon using Terminal Services or remote desktop application. */
    REMOTE_INTERACTIVE = "REMOTE_INTERACTIVE",
    /** A user logged on to this device with network credentials that were stored
locally on the device and the domain controller was not contacted to verify the
credentials. */
    CACHED_INTERACTIVE = "CACHED_INTERACTIVE",
    /** Same as Remote Interactive. This is used for internal auditing. */
    CACHED_REMOTE_INTERACTIVE = "CACHED_REMOTE_INTERACTIVE",
    /** Workstation logon. */
    CACHED_UNLOCK = "CACHED_UNLOCK",
    /** The logon type is not mapped. See the <code>logon_type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the endpoint’s network scope. The normalized
network scope identifier indicates whether the endpoint resides inside the
customer’s network, outside on the Internet, or if its location relative to the
customer’s network cannot be determined.
*/
export enum NetworkScopeIdEnum {
    
    /** Unknown whether this endpoint resides within the customer’s network. */
    UNKNOWN = "UNKNOWN",
    /** The endpoint resides inside the customer’s network. */
    INTERNAL = "INTERNAL",
    /** The endpoint is on the Internet or otherwise external to the customer’s
network. */
    EXTERNAL = "EXTERNAL",
    /** The network scope is not mapped. See the <code>network_scope</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the observation point. See specific usage.
*/
export enum ObservationPointIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Other */
    OTHER = "OTHER",
};
/**
* The DNS opcode ID specifies the normalized query message type as defined in <a
target='_blank'
href='https://www.rfc-editor.org/rfc/rfc5395.html'>RFC-5395</a>.
*/
export enum OpcodeIdEnum {
    
    /** Standard query */
    QUERY = "QUERY",
    /** Inverse query, obsolete */
    INVERSE_QUERY = "INVERSE_QUERY",
    /** Server status request */
    STATUS = "STATUS",
    /** Reserved, not used */
    RESERVED = "RESERVED",
    /** Zone change notification */
    NOTIFY = "NOTIFY",
    /** Dynamic DNS update */
    UPDATE = "UPDATE",
    /** DNS Stateful Operations (DSO) */
    DSO_MESSAGE = "DSO_MESSAGE",
    /** The DNS Opcode is not defined by the RFC. See the <code>opcode</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The cyber kill chain phase identifier.
*/
export enum PhaseIdEnum {
    
    /** The kill chain phase is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The attackers pick a target and perform a detailed analysis, start collecting
information (email addresses, conferences information, etc.) and evaluate the
victim’s vulnerabilities to determine how to exploit them. */
    RECONNAISSANCE = "RECONNAISSANCE",
    /** The attackers develop a malware weapon and aim to exploit the discovered
vulnerabilities. */
    WEAPONIZATION = "WEAPONIZATION",
    /** The intruders will use various tactics, such as phishing, infected USB drives,
etc. */
    DELIVERY = "DELIVERY",
    /** The intruders start leveraging vulnerabilities to executed code on the victim’s
system. */
    EXPLOITATION = "EXPLOITATION",
    /** The intruders install malware on the victim’s system. */
    INSTALLATION = "INSTALLATION",
    /** Malware opens a command channel to enable the intruders to remotely manipulate
the victim's system. */
    COMMAND_CONTROL = "COMMAND_CONTROL",
    /** With hands-on keyboard access, intruders accomplish the mission’s goal. */
    ACTIONS_ON_OBJECTIVES = "ACTIONS_ON_OBJECTIVES",
    /** The kill chain phase is not mapped. See the <code>phase</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The previous security level of the entity
*/
export enum PrevSecurityLevelIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Secure */
    SECURE = "SECURE",
    /** At Risk */
    AT_RISK = "AT_RISK",
    /** Compromised */
    COMPROMISED = "COMPROMISED",
    /** The security level is not mapped. See the <code>prev_security_level</code>
attribute, which contains data source specific values. */
    OTHER = "OTHER",
};
/**
* The normalized priority. Priority identifies the relative importance of the
incident or finding. It is a measurement of urgency.
*/
export enum PriorityIdEnum {
    
    /** No priority is assigned. */
    UNKNOWN = "UNKNOWN",
    /** Application or personal procedure is unusable, where a workaround is available
or a repair is possible. */
    LOW = "LOW",
    /** Non-critical function or procedure is unusable or hard to use causing
operational disruptions with no direct impact on a service's availability. A
workaround is available. */
    MEDIUM = "MEDIUM",
    /** Critical functionality or network access is interrupted, degraded or unusable,
having a severe impact on services availability. No acceptable alternative is
possible. */
    HIGH = "HIGH",
    /** Interruption making a critical functionality inaccessible or a complete network
interruption causing a severe impact on services availability. There is no
possible alternative. */
    CRITICAL = "CRITICAL",
    /** The priority is not normalized. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the Protocol version. See specific usage.
*/
export enum ProtocolVerIdEnum {
    
    /** The protocol version is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The protocol version is not mapped. See the <code>protocol_ver</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the query language. See specific usage.
*/
export enum QueryLanguageIdEnum {
    
    /** The Query Language is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The Query Language is not mapped. See the <code>query_language</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the query result.
*/
export enum QueryResultIdEnum {
    
    /** The query result is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The target was found. */
    EXISTS = "EXISTS",
    /** The target was partially found. */
    PARTIAL = "PARTIAL",
    /** The target was not found. */
    DOES_NOT_EXIST = "DOES_NOT_EXIST",
    /** The discovery attempt failed. */
    ERROR = "ERROR",
    /** Discovery of the target was not supported. */
    UNSUPPORTED = "UNSUPPORTED",
    /** The query result is not mapped. See the <code>query_result</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized type of system query performed against a device or system
component.
*/
export enum QueryTypeIdEnum {
    
    /** The query type was unknown or not specified. */
    UNKNOWN = "UNKNOWN",
    /** A query about kernel resources including system calls, shared mutex, or other
kernel components. */
    KERNEL = "KERNEL",
    /** A query about file attributes, metadata, content, hash values, or properties. */
    FILE = "FILE",
    /** A query about folder attributes, metadata, content, or structure. */
    FOLDER = "FOLDER",
    /** A query about group membership, privileges, domain, or group properties. */
    ADMIN_GROUP = "ADMIN_GROUP",
    /** A query about scheduled jobs, their command lines, run states, or execution
times. */
    JOB = "JOB",
    /** A query about loaded modules, their base addresses, load types, or function
entry points. */
    MODULE = "MODULE",
    /** A query about active network connections, boundaries, protocols, or TCP states. */
    NETWORK_CONNECTION = "NETWORK_CONNECTION",
    /** A query about physical or virtual network interfaces, their IP/MAC addresses,
or types. */
    NETWORK_INTERFACES = "NETWORK_INTERFACES",
    /** A query about attached peripheral devices, their classes, models, or vendor
information. */
    PERIPHERAL_DEVICE = "PERIPHERAL_DEVICE",
    /** A query about running processes, command lines, ancestry, loaded modules, or
execution context. */
    PROCESS = "PROCESS",
    /** A query about system services, their names, versions, labels, or properties. */
    SERVICE = "SERVICE",
    /** A query about authenticated user or service sessions, their creation times, or
issuer details. */
    SESSION = "SESSION",
    /** A query about user accounts, their properties, credentials, or domain
information. */
    USER = "USER",
    /** A query about multiple users belonging to an administrative group. */
    USERS = "USERS",
    /** A query about startup configuration items, their run modes, start types, or
current states. */
    STARTUP_ITEM = "STARTUP_ITEM",
    /** A Windows-specific query about registry keys, their paths, security
descriptors, or modification times. */
    REGISTRY_KEY = "REGISTRY_KEY",
    /** A Windows-specific query about registry values, their data types, content, or
names. */
    REGISTRY_VALUE = "REGISTRY_VALUE",
    /** A Windows-specific query about prefetch files, their run counts, last execution
times, or existence. */
    PREFETCH = "PREFETCH",
    /** The query type was not mapped to a standard category. See the query_type
attribute for source-specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the server response code. See specific usage.
*/
export enum RcodeIdEnum {
    
    /** The DNS response code is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The DNS response code is not defined by the RFC. See the <code>rcode</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the relationship between two software components.
*/
export enum RelationshipIdEnum {
    
    /** The relationship is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The component is a dependency of another component. Can be used to define both
direct and transitive dependencies. */
    DEPENDS_ON = "DEPENDS_ON",
    /** The relationship is not mapped. See the <code>relationship</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized risk level id.
*/
export enum RiskLevelIdEnum {
    
    /** Info */
    INFO = "INFO",
    /** Low */
    LOW = "LOW",
    /** Medium */
    MEDIUM = "MEDIUM",
    /** High */
    HIGH = "HIGH",
    /** Critical */
    CRITICAL = "CRITICAL",
    /** The risk level is not mapped. See the <code>risk_level</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of an entity's role in the context of the event or
finding. See specific usage.
*/
export enum RoleIdEnum {
    
    /** The role is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The role is not mapped. See the role attribute, which contains a data source
specific value. */
    OTHER = "OTHER",
};
/**
* The list of normalized identifiers that describe application attributes when it
is running. See specific usage.
*/
export enum RunModeIdsEnum {
    
    /** The run mode is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The run mode is not mapped. See the <code>run_modes</code> attribute, which
contains data source specific values. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the state of the job or service. See specific
usage.
*/
export enum RunStateIdEnum {
    
    /** The run state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The run state is not mapped. See the <code>run_state</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized reputation score identifier.
*/
export enum ScoreIdEnum {
    
    /** The reputation score is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Long history of good behavior. */
    VERY_SAFE = "VERY_SAFE",
    /** Consistently good behavior. */
    SAFE = "SAFE",
    /** Reasonable history of good behavior. */
    PROBABLY_SAFE = "PROBABLY_SAFE",
    /** Starting to establish a history of normal behavior. */
    LEANS_SAFE = "LEANS_SAFE",
    /** No established history of normal behavior. */
    MAY_NOT_BE_SAFE = "MAY_NOT_BE_SAFE",
    /** Starting to establish a history of suspicious or risky behavior. */
    EXERCISE_CAUTION = "EXERCISE_CAUTION",
    /** A site with a history of suspicious or risky behavior. (spam, scam, potentially
unwanted software, potentially malicious). */
    SUSPICIOUS_RISKY = "SUSPICIOUS_RISKY",
    /** Strong possibility of maliciousness. */
    POSSIBLY_MALICIOUS = "POSSIBLY_MALICIOUS",
    /** Indicators of maliciousness. */
    PROBABLY_MALICIOUS = "PROBABLY_MALICIOUS",
    /** Proven evidence of maliciousness. */
    MALICIOUS = "MALICIOUS",
    /** The reputation score is not mapped. See the <code>rep_score</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The current security level of the entity
*/
export enum SecurityLevelIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Secure */
    SECURE = "SECURE",
    /** At Risk */
    AT_RISK = "AT_RISK",
    /** Compromised */
    COMPROMISED = "COMPROMISED",
    /** The security level is not mapped. See the <code>security_level</code>
attribute, which contains data source specific values. */
    OTHER = "OTHER",
};
/**
* <p>The normalized identifier of the event/finding severity.</p>The normalized
severity is a measurement the effort and expense required to manage and resolve
an event or incident. Smaller numerical values represent lower impact events,
and larger numerical values represent higher impact events.
*/
export enum SeverityIdEnum {
    
    /** The event/finding severity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Informational message. No action required. */
    INFORMATIONAL = "INFORMATIONAL",
    /** The user decides if action is needed. */
    LOW = "LOW",
    /** Action is required but the situation is not serious at this time. */
    MEDIUM = "MEDIUM",
    /** Action is required immediately. */
    HIGH = "HIGH",
    /** Action is required immediately and the scope is broad. */
    CRITICAL = "CRITICAL",
    /** An error occurred but it is too late to take remedial action. */
    FATAL = "FATAL",
    /** The event/finding severity is not mapped. See the <code>severity</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the share type.
*/
export enum ShareTypeIdEnum {
    
    /** The share type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** File */
    FILE = "FILE",
    /** Pipe */
    PIPE = "PIPE",
    /** Print */
    PRINT = "PRINT",
    /** The share type is not mapped. See the <code>share_type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the source. See specific usage.
*/
export enum SourceIdEnum {
    
    /** The source is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The source is not mapped. See the <code>source</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The start type ID of a service or application.
*/
export enum StartTypeIdEnum {
    
    /** The start type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Service started automatically during system startup. */
    AUTO = "AUTO",
    /** Device driver started by the system loader. */
    BOOT = "BOOT",
    /** Started on demand. For example, by the Windows Service Control Manager when a
process calls the <i>StartService</i> function. */
    ON_DEMAND = "ON_DEMAND",
    /** The service is disabled, and cannot be started. */
    DISABLED = "DISABLED",
    /** Started on all user logins. */
    ALL_LOGINS = "ALL_LOGINS",
    /** Started on specific user logins. */
    SPECIFIC_USER_LOGIN = "SPECIFIC_USER_LOGIN",
    /** Stared according to a schedule. */
    SCHEDULED = "SCHEDULED",
    /** Started when a system item, such as a file or registry key, changes. */
    SYSTEM_CHANGED = "SYSTEM_CHANGED",
    /** The start type is not mapped. See the <code>start_type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized state ID of the event or object. See specific usage.
*/
export enum StateIdEnum {
    
    /** The state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The state is not mapped. See the <code>state</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the event status.
*/
export enum StatusIdEnum {
    
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Success */
    SUCCESS = "SUCCESS",
    /** Failure */
    FAILURE = "FAILURE",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the stratum level, as defined in <a
target='_blank'
href='https://www.rfc-editor.org/rfc/rfc5905.html'>RFC-5905</a>.
*/
export enum StratumIdEnum {
    
    /** Unspecified or invalid. */
    UNKNOWN = "UNKNOWN",
    /** The highest precision primary server (e.g atomic clock or GPS). */
    PRIMARY_SERVER = "PRIMARY_SERVER",
    /** A secondary level server (possible values: 2-15). */
    SECONDARY_SERVER = "SECONDARY_SERVER",
    /** Unsynchronized */
    UNSYNCHRONIZED = "UNSYNCHRONIZED",
    /** Reserved stratum (possible values: 17-255). */
    RESERVED = "RESERVED",
    /** The stratum level is not mapped. See the <code>stratum</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The state of the TCP socket for the network connection.
*/
export enum TcpStateIdEnum {
    
    /** The socket state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The socket has an established connection between a local application and a
remote peer. */
    ESTABLISHED = "ESTABLISHED",
    /** The socket is actively trying to establish a connection to a remote peer. */
    SYN_SENT = "SYN_SENT",
    /** The socket has passively received a connection request from a remote peer. */
    SYN_RECEIVED = "SYN_RECEIVED",
    /** The socket connection has been closed by the local application, the remote peer
has not yet acknowledged the close, and the system is waiting for it to close
its half of the connection. */
    FIN_WAIT_1 = "FIN_WAIT_1",
    /** The socket connection has been closed by the local application, the remote peer
has acknowledged the close, and the system is waiting for it to close its half
of the connection. */
    FIN_WAIT_2 = "FIN_WAIT_2",
    /** The socket connection has been closed by the local application, the remote peer
has closed its half of the connection, and the system is waiting to be sure
that the remote peer received the last acknowledgement. */
    TIME_WAIT = "TIME_WAIT",
    /** The socket is not in use. */
    CLOSED = "CLOSED",
    /** The socket connection has been closed by the remote peer, and the system is
waiting for the local application to close its half of the connection. */
    CLOSE_WAIT = "CLOSE_WAIT",
    /** The socket connection has been closed by the remote peer, the local application
has closed its half of the connection, and the system is waiting for the remote
peer to acknowledge the close. */
    LAST_ACK = "LAST_ACK",
    /** The socket is listening for incoming connections. */
    LISTEN = "LISTEN",
    /** The socket connection has been closed by the local application and the remote
peer simultaneously, and the remote peer has not yet acknowledged the close
attempt of the local application. */
    CLOSING = "CLOSING",
};
/**
* The normalized identifier for the type of tunnel configuration, indicating the
scope of traffic routed through the connection. See specific usage.
*/
export enum TunnelTypeIdEnum {
    
    /** The type of tunnel configuration is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The tunnel configuration routes only specific traffic through the tunnel. */
    SPLIT_TUNNEL = "SPLIT_TUNNEL",
    /** The tunnel configuration routes all traffic through the tunnel. */
    FULL_TUNNEL = "FULL_TUNNEL",
    /** The type of tunnel configuration is not defined by the event source. */
    OTHER = "OTHER",
};
/**
* The normalized type identifier of an object. See specific usage.
*/
export enum TypeIdEnum {
    
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized verdict of an Incident.
*/
export enum VerdictIdEnum {
    
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The incident is a false positive. */
    FALSE_POSITIVE = "FALSE_POSITIVE",
    /** The incident is a true positive. */
    TRUE_POSITIVE = "TRUE_POSITIVE",
    /** The incident can be disregarded as it is unimportant, an error or accident. */
    DISREGARD = "DISREGARD",
    /** The incident is suspicious. */
    SUSPICIOUS = "SUSPICIOUS",
    /** The incident is benign. */
    BENIGN = "BENIGN",
    /** The incident is a test. */
    TEST = "TEST",
    /** The incident has insufficient data to make a verdict. */
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
    /** The incident is a security risk. */
    SECURITY_RISK = "SECURITY_RISK",
    /** The incident remediation or required actions are managed externally. */
    MANAGED_EXTERNALLY = "MANAGED_EXTERNALLY",
    /** The incident is a duplicate. */
    DUPLICATE = "DUPLICATE",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the video memory attachment mode.
*/
export enum VramModeIdEnum {
    
    /** The VRAM mode is unknown or not reported. */
    UNKNOWN = "UNKNOWN",
    /** Video memory is allocated from system memory. */
    SHARED = "SHARED",
    /** Video memory is physically separate from system memory. */
    DEDICATED = "DEDICATED",
    /** A VRAM mode not covered by the defined values; the exact value is reported by
the event source. */
    OTHER = "OTHER",
};
/**
* The observable value type identifier.
*/
export enum ObservableTypeIdEnum {
    
    /** Unknown observable data type. */
    UNKNOWN = "UNKNOWN",
    /** The observable data type is not mapped. See the <code>type</code> attribute,
which may contain data source specific value. */
    OTHER = "OTHER",
};
/**
* The type identifier of the operating system.
*/
export enum OsTypeIdEnum {
    
    /** Windows */
    WINDOWS = "WINDOWS",
    /** Windows Mobile */
    WINDOWS_MOBILE = "WINDOWS_MOBILE",
    /** Linux */
    LINUX = "LINUX",
    /** Android */
    ANDROID = "ANDROID",
    /** macOS */
    MACOS = "MACOS",
    /** iOS */
    IOS = "IOS",
    /** iPadOS */
    IPADOS = "IPADOS",
    /** Solaris */
    SOLARIS = "SOLARIS",
    /** AIX */
    AIX = "AIX",
    /** HP-UX */
    HP_UX = "HP_UX",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The <a target='_blank' href='https://www.first.org/tlp/'>Traffic Light
Protocol</a> was created to facilitate greater sharing of potentially sensitive
information and more effective collaboration. TLP provides a simple and
intuitive schema for indicating with whom potentially sensitive information can
be shared.
*/
export enum OsintTlpEnum {
    
    /** TLP:AMBER is for limited disclosure, recipients can only spread this on a
need-to-know basis within their organization and its clients. Note that
TLP:AMBER+STRICT restricts sharing to the organization only. Sources may use
TLP:AMBER when information requires support to be effectively acted upon, yet
carries risk to privacy, reputation, or operations if shared outside of the
organizations involved. Recipients may share TLP:AMBER information with members
of their own organization and its clients, but only on a need-to-know basis to
protect their organization and its clients and prevent further harm. Note: if
the source wants to restrict sharing to the organization only, they must
specify TLP:AMBER+STRICT. */
    TLP_AMBER = "TLP_AMBER",
    /** TLP:AMBER is for limited disclosure, recipients can only spread this on a
need-to-know basis within their organization and its clients. Note that
TLP:AMBER+STRICT restricts sharing to the organization only. Sources may use
TLP:AMBER when information requires support to be effectively acted upon, yet
carries risk to privacy, reputation, or operations if shared outside of the
organizations involved. Recipients may share TLP:AMBER information with members
of their own organization and its clients, but only on a need-to-know basis to
protect their organization and its clients and prevent further harm. Note: if
the source wants to restrict sharing to the organization only, they must
specify TLP:AMBER+STRICT. */
    TLP_AMBER_STRICT = "TLP_AMBER_STRICT",
    /** TLP:CLEAR denotes that recipients can spread this to the world, there is no
limit on disclosure. Sources may use TLP:CLEAR when information carries minimal
or no foreseeable risk of misuse, in accordance with applicable rules and
procedures for public release. Subject to standard copyright rules, TLP:CLEAR
information may be shared without restriction. */
    TLP_CLEAR = "TLP_CLEAR",
    /** TLP:GREEN is for limited disclosure, recipients can spread this within their
community. Sources may use TLP:GREEN when information is useful to increase
awareness within their wider community. Recipients may share TLP:GREEN
information with peers and partner organizations within their community, but
not via publicly accessible channels. TLP:GREEN information may not be shared
outside of the community. Note: when “community” is not defined, assume the
cybersecurity/defense community. */
    TLP_GREEN = "TLP_GREEN",
    /** TLP:RED is for the eyes and ears of individual recipients only, no further
disclosure. Sources may use TLP:RED when information cannot be effectively
acted upon without significant risk for the privacy, reputation, or operations
of the organizations involved. Recipients may therefore not share TLP:RED
information with anyone else. In the context of a meeting, for example, TLP:RED
information is limited to those present at the meeting. */
    TLP_RED = "TLP_RED",
    /** TLP:WHITE and TLP:CLEAR may be used interchangeably, TLP:WHITE is the most up
to date (as of TLP 2.0) usage. */
    TLP_WHITE = "TLP_WHITE",
};
/**
* The OSINT indicator type ID.
*/
export enum OsintTypeIdEnum {
    
    /** The indicator type is ambiguous or there is not a related indicator for the
OSINT object. */
    UNKNOWN = "UNKNOWN",
    /** An IPv4 or IPv6 address. */
    IP_ADDRESS = "IP_ADDRESS",
    /** A full-qualified domain name (FQDN), subdomain, or partial domain. */
    DOMAIN = "DOMAIN",
    /** A hostname or computer name. */
    HOSTNAME = "HOSTNAME",
    /** Any type of hash e.g., MD5, SHA1, SHA2, BLAKE, BLAKE2, SSDEEP, VHASH, etc.
generated from a file, malware sample, request header, or otherwise used to
identify a pertinent artifact. */
    HASH = "HASH",
    /** A Uniform Resource Locator (URL) or Uniform Resource Indicator (URI). */
    URL = "URL",
    /** A User Agent typically seen in HTTP request headers. */
    USER_AGENT = "USER_AGENT",
    /** The serial number, fingerprint, or full content of an X.509 digital
certificate. */
    DIGITAL_CERTIFICATE = "DIGITAL_CERTIFICATE",
    /** The contents of an email or any related information to an email object. */
    EMAIL = "EMAIL",
    /** An email address. */
    EMAIL_ADDRESS = "EMAIL_ADDRESS",
    /** A CVE ID, CWE ID, or other identifier for a weakness, exploit, bug, or
misconfiguration. */
    VULNERABILITY = "VULNERABILITY",
    /** A file or metadata about a file. */
    FILE = "FILE",
    /** A Windows Registry Key. */
    REGISTRY_KEY = "REGISTRY_KEY",
    /** A Windows Registry Value. */
    REGISTRY_VALUE = "REGISTRY_VALUE",
    /** A partial or full Command Line used to invoke scripts or other remote commands. */
    COMMAND_LINE = "COMMAND_LINE",
    /** The indicator type is not directly listed. */
    OTHER = "OTHER",
};
/**
* The type of software package.
*/
export enum PackageTypeIdEnum {
    
    /** An application software package. */
    APPLICATION = "APPLICATION",
    /** An operating system software package. */
    OPERATING_SYSTEM = "OPERATING_SYSTEM",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the encoding method used to represent the packet
data as a string.
*/
export enum PacketEncodingIdEnum {
    
    /** The encoding format of the packet data is not known. */
    UNKNOWN = "UNKNOWN",
    /** The packet data is encoded using Base64. */
    BASE64 = "BASE64",
    /** The packet data is encoded as a hexadecimal string representation of the raw
bytes. */
    HEXADECIMAL = "HEXADECIMAL",
    /** The packet data is encoded using percent-encoding (URL encoding). */
    URL_ENCODED = "URL_ENCODED",
    /** The encoding method is not mapped. Refer to the <code>encoding</code> field for
the original source-specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the packet capture format.
*/
export enum PacketFormatIdEnum {
    
    /** The packet format is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Standard libpcap/tcpdump packet capture file format. */
    PCAP = "PCAP",
    /** Next-generation PCAP format that supports multiple interfaces and enhanced
metadata. */
    PCAPNG = "PCAPNG",
    /** Solaris/Unix capture format. */
    SNOOP = "SNOOP",
    /** Extensible Record Format used by Endace network monitoring hardware. */
    ERF = "ERF",
    /** Microsoft Network Monitor capture file format. */
    NETMON = "NETMON",
    /** Accellent 5Views packet capture format. */
    number_5VIEWS = "5VIEWS",
    /** The packet format is not mapped. Refer to the <code>format</code> field for the
original source-specific value. */
    OTHER = "OTHER",
};
/**
* A normalized numeric identifier that specifies how the packet was obtained or
generated.
*/
export enum PacketSourceIdEnum {
    
    /** The packet source is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The packet was captured directly from a network interface. */
    WIRE = "WIRE",
    /** The packet was reconstructed or derived from a stream of packets. */
    STREAM = "STREAM",
    /** The packet was generated or extracted by a protocol decoder or analysis engine. */
    DECODER = "DECODER",
    /** The packet was captured from a physical network Test Access Point (TAP) device
used for passive monitoring. */
    TAP = "TAP",
    /** The packet was captured from a switch Switched Port Analyzer (SPAN) or mirror
port. */
    SPAN = "SPAN",
    /** The packet was captured by a host-based agent or endpoint detection and
response (EDR) sensor. */
    ENDPOINT = "ENDPOINT",
    /** The packet was captured from a virtual network interface, virtual switch, or
container network. */
    VIRTUAL = "VIRTUAL",
    /** The packet source is not mapped. Refer to the <code>source</code> field for the
original source-specific value. */
    OTHER = "OTHER",
};
/**
* The normalized type of the privilege.
*/
export enum PrivilegeInfoTypeIdEnum {
    
    /** The privilege type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** A read-type privilege that permits viewing or retrieving data. Examples:
<code>s3:GetObject</code>, <code>Microsoft.Storage/storageAccounts/read</code>,
<code>storage.objects.get</code>. */
    READ = "READ",
    /** A write-type privilege that permits creating, modifying, or deleting data.
Examples: <code>s3:PutObject</code>,
<code>Microsoft.Storage/storageAccounts/write</code>,
<code>storage.objects.create</code>. */
    WRITE = "WRITE",
    /** An execute-type privilege that permits running operations or invoking
functions. Examples: <code>lambda:InvokeFunction</code>,
<code>Microsoft.Compute/virtualMachines/start/action</code>. */
    EXECUTE = "EXECUTE",
    /** The privilege type is not mapped. See the <code>type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized type of system query performed against a device or system
component.
*/
export enum QueryEvidenceQueryTypeIdEnum {
    
    /** The query type was unknown or not specified. */
    UNKNOWN = "UNKNOWN",
    /** A query about kernel resources including system calls, shared mutex, or other
kernel components. */
    KERNEL = "KERNEL",
    /** A query about file attributes, metadata, content, hash values, or properties. */
    FILE = "FILE",
    /** A query about folder attributes, metadata, content, or structure. */
    FOLDER = "FOLDER",
    /** A query about group membership, privileges, domain, or group properties. */
    ADMIN_GROUP = "ADMIN_GROUP",
    /** A query about scheduled jobs, their command lines, run states, or execution
times. */
    JOB = "JOB",
    /** A query about loaded modules, their base addresses, load types, or function
entry points. */
    MODULE = "MODULE",
    /** A query about active network connections, boundaries, protocols, or TCP states. */
    NETWORK_CONNECTION = "NETWORK_CONNECTION",
    /** A query about physical or virtual network interfaces, their IP/MAC addresses,
or types. */
    NETWORK_INTERFACES = "NETWORK_INTERFACES",
    /** A query about attached peripheral devices, their classes, models, or vendor
information. */
    PERIPHERAL_DEVICE = "PERIPHERAL_DEVICE",
    /** A query about running processes, command lines, ancestry, loaded modules, or
execution context. */
    PROCESS = "PROCESS",
    /** A query about system services, their names, versions, labels, or properties. */
    SERVICE = "SERVICE",
    /** A query about authenticated user or service sessions, their creation times, or
issuer details. */
    SESSION = "SESSION",
    /** A query about user accounts, their properties, credentials, or domain
information. */
    USER = "USER",
    /** A query about multiple users belonging to an administrative group. */
    USERS = "USERS",
    /** A query about startup configuration items, their run modes, start types, or
current states. */
    STARTUP_ITEM = "STARTUP_ITEM",
    /** A Windows-specific query about registry keys, their paths, security
descriptors, or modification times. */
    REGISTRY_KEY = "REGISTRY_KEY",
    /** A Windows-specific query about registry values, their data types, content, or
names. */
    REGISTRY_VALUE = "REGISTRY_VALUE",
    /** A Windows-specific query about prefetch files, their run counts, last execution
times, or existence. */
    PREFETCH = "PREFETCH",
    /** The query type was not mapped to a standard category. See the query_type
attribute for source-specific value. */
    OTHER = "OTHER",
};
/**
* The type of SBOM.
*/
export enum SbomTypeIdEnum {
    
    /** System Package Data Exchange (SPDX®) is an open standard capable of
representing systems with software components in as SBOMs (Software Bill of
Materials) and other AI, data and security references supporting a range of
risk management use cases. The SPDX specification is a freely available
international open standard (ISO/IEC 5692:2021). */
    SPDX = "SPDX",
    /** CycloneDX is an International Standard for Bill of Materials (ECMA-424). */
    CYCLONEDX = "CYCLONEDX",
    /** The International Organization for Standardization (ISO) and the International
Electrotechnical Commission (IEC) publishes, ISO/IEC 19770-2, a standard for
software identification (SWID) tags that defines a structured metadata format
for describing a software product. A SWID tag document is composed of a
structured set of data elements that identify the software product */
    SWID = "SWID",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized state ID of the SCIM resource to reflect its activation status.
*/
export enum ScimStateIdEnum {
    
    /** The provisioning state of the SCIM resource is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The SCIM resource is Pending activation or creation. */
    PENDING = "PENDING",
    /** The SCIM resource is in an Active state, or otherwise enabled. */
    ACTIVE = "ACTIVE",
    /** The SCIM resource is in a Failed state. */
    FAILED = "FAILED",
    /** The SCIM resource is in a Deleted state, or otherwise disabled. */
    DELETED = "DELETED",
    /** The provisioning state of the SCIM resource is not mapped. See the
<code>state</code> attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized script type ID.
*/
export enum ScriptTypeIdEnum {
    
    /** The script type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Windows Command Prompt */
    WINDOWS_COMMAND_PROMPT = "WINDOWS_COMMAND_PROMPT",
    /** PowerShell */
    POWERSHELL = "POWERSHELL",
    /** Python */
    PYTHON = "PYTHON",
    /** JavaScript */
    JAVASCRIPT = "JAVASCRIPT",
    /** VBScript */
    VBSCRIPT = "VBSCRIPT",
    /** Unix Shell */
    UNIX_SHELL = "UNIX_SHELL",
    /** VBA */
    VBA = "VBA",
    /** The script type is not mapped. See the <code>type</code> attribute which
contains an event source specific value. */
    OTHER = "OTHER",
};
/**
* The security state of the managed entity.
*/
export enum SecurityStateStateIdEnum {
    
    /** The security state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The content is missing or outdated. */
    MISSING_OR_OUTDATED_CONTENT = "MISSING_OR_OUTDATED_CONTENT",
    /** Not in compliance with the expected security policy. */
    POLICY_MISMATCH = "POLICY_MISMATCH",
    /** Isolated from the network. */
    IN_NETWORK_QUARANTINE = "IN_NETWORK_QUARANTINE",
    /** Not protected by a security solution. */
    PROTECTION_OFF = "PROTECTION_OFF",
    /** The security solution is not functioning properly. */
    PROTECTION_MALFUNCTION = "PROTECTION_MALFUNCTION",
    /** The security solution does not have a valid license. */
    PROTECTION_NOT_LICENSED = "PROTECTION_NOT_LICENSED",
    /** A detected threat has not been remediated. */
    UNREMEDIATED_THREAT = "UNREMEDIATED_THREAT",
    /** Reputation of the entity is suspicious. */
    SUSPICIOUS_REPUTATION = "SUSPICIOUS_REPUTATION",
    /** A reboot is required for one or more pending actions. */
    REBOOT_PENDING = "REBOOT_PENDING",
    /** The content is locked to a specific version. */
    CONTENT_IS_LOCKED = "CONTENT_IS_LOCKED",
    /** The entity is not installed. */
    NOT_INSTALLED = "NOT_INSTALLED",
    /** The system partition is writeable. */
    WRITABLE_SYSTEM_PARTITION = "WRITABLE_SYSTEM_PARTITION",
    /** The device has failed the SafetyNet check. */
    SAFETYNET_FAILURE = "SAFETYNET_FAILURE",
    /** The device has failed the boot verification process. */
    FAILED_BOOT_VERIFY = "FAILED_BOOT_VERIFY",
    /** The execution environment has been modified. */
    MODIFIED_EXECUTION_ENVIRONMENT = "MODIFIED_EXECUTION_ENVIRONMENT",
    /** The SELinux security feature has been disabled. */
    SELINUX_DISABLED = "SELINUX_DISABLED",
    /** An elevated privilege shell has been detected. */
    ELEVATED_PRIVILEGE_SHELL = "ELEVATED_PRIVILEGE_SHELL",
    /** The file system has been altered on an iOS device. */
    IOS_FILE_SYSTEM_ALTERED = "IOS_FILE_SYSTEM_ALTERED",
    /** Remote access is enabled. */
    OPEN_REMOTE_ACCESS = "OPEN_REMOTE_ACCESS",
    /** Mobile OTA (Over The Air) updates have been disabled. */
    OTA_UPDATES_DISABLED = "OTA_UPDATES_DISABLED",
    /** The device has been modified to allow root access. */
    ROOTED = "ROOTED",
    /** The Android partition has been modified. */
    ANDROID_PARTITION_MODIFIED = "ANDROID_PARTITION_MODIFIED",
    /** The entity is not compliant with the associated security policy. */
    COMPLIANCE_FAILURE = "COMPLIANCE_FAILURE",
    /** The security state is not mapped. See the <code>state</code> attribute, which
contains data source specific values. */
    OTHER = "OTHER",
};
/**
* The type of software component.
*/
export enum SoftwareComponentTypeIdEnum {
    
    /** A software framework. */
    FRAMEWORK = "FRAMEWORK",
    /** A software library. */
    LIBRARY = "LIBRARY",
    /** An operating system. Useful for SBOMs of container images. */
    OPERATING_SYSTEM = "OPERATING_SYSTEM",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The list of normalized identifiers that describe the startup items' properties
when it is running.  Use this field to capture extended information about the
process, which may depend on the type of startup item.  E.g., A Windows service
that interacts with the desktop.
*/
export enum StartupItemRunModeIdsEnum {
    
    /** The startup item interacts with the desktop. */
    INTERACTIVE = "INTERACTIVE",
    /** The startup item runs in its own process. */
    OWN_PROCESS = "OWN_PROCESS",
    /** The startup item runs in a shared process. */
    SHARED_PROCESS = "SHARED_PROCESS",
    /** The run mode is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The run mode is not mapped. See the <code>run_modes</code> attribute, which
contains data source specific values. */
    OTHER = "OTHER",
};
/**
* The run state ID of the startup item.
*/
export enum StartupItemRunStateIdEnum {
    
    /** The service is not running. */
    STOPPED = "STOPPED",
    /** The service is starting. */
    START_PENDING = "START_PENDING",
    /** The service is stopping. */
    STOP_PENDING = "STOP_PENDING",
    /** The service is running. */
    RUNNING = "RUNNING",
    /** The service is pending continue. */
    CONTINUE_PENDING = "CONTINUE_PENDING",
    /** The service is pending pause. */
    PAUSE_PENDING = "PAUSE_PENDING",
    /** The service is paused. */
    PAUSED = "PAUSED",
    /** The service is pending restart. */
    RESTART_PENDING = "RESTART_PENDING",
    /** The run state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The run state is not mapped. See the <code>run_state</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The startup item type identifier.
*/
export enum StartupItemTypeIdEnum {
    
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Kernel mode driver. */
    KERNEL_MODE_DRIVER = "KERNEL_MODE_DRIVER",
    /** User mode driver. */
    USER_MODE_DRIVER = "USER_MODE_DRIVER",
    /** A background process typically managed by the operating system, e.g., a service
process on Windows or a systemd-managed daemon on Linux. */
    SERVICE = "SERVICE",
    /** An application that runs in the user space. */
    USER_MODE_APPLICATION = "USER_MODE_APPLICATION",
    /** The macOS Autoload Application. */
    AUTOLOAD = "AUTOLOAD",
    /** System extensions on macOS enables 3rd parties to extend the capabilities of
macOS. */
    SYSTEM_EXTENSION = "SYSTEM_EXTENSION",
    /** Kernel extensions on macOS includes Apple provided pre-installs and 3rd party
installs which enables support for specific hardware or software features not
natively supported by macOS. */
    KERNEL_EXTENSION = "KERNEL_EXTENSION",
    /** A job or task that runs on a configured schedule. */
    SCHEDULED_JOB_TASK = "SCHEDULED_JOB_TASK",
    /** The startup item type is not mapped. See the <code>type</code> attribute, which
contains data source specific values. */
    OTHER = "OTHER",
};
/**
* The normalized datastore resource type identifier.
*/
export enum ThreatActorTypeIdEnum {
    
    /** The threat actor type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Nation-state */
    NATION_STATE = "NATION_STATE",
    /** Cybercriminal */
    CYBERCRIMINAL = "CYBERCRIMINAL",
    /** Hacktivists */
    HACKTIVISTS = "HACKTIVISTS",
    /** Insider */
    INSIDER = "INSIDER",
    /** The threat actor type is not mapped. */
    OTHER = "OTHER",
};
/**
* The normalized identifier for the ticket status.
*/
export enum TicketStatusIdEnum {
    
    /** The ticket is new and yet to be reviewed. */
    NEW = "NEW",
    /** The ticket is actively being worked on. */
    IN_PROGRESS = "IN_PROGRESS",
    /** Relevant parties have been notified about the ticket. */
    NOTIFIED = "NOTIFIED",
    /** Work on the ticket is temporarily suspended. */
    ON_HOLD = "ON_HOLD",
    /** The ticket is resolved and a solution is implemented, pending confirmation or
verification from the requestor. */
    RESOLVED = "RESOLVED",
    /** The ticket has been completed and closed. */
    CLOSED = "CLOSED",
    /** The ticket has been canceled and will not be processed. */
    CANCELED = "CANCELED",
    /** The ticket was previously closed, but has been reopened. */
    REOPENED = "REOPENED",
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier for the ticket type.
*/
export enum TicketTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Internal */
    INTERNAL = "INTERNAL",
    /** External */
    EXTERNAL = "EXTERNAL",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier for the time span duration type.
*/
export enum TimespanTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Milliseconds */
    MILLISECONDS = "MILLISECONDS",
    /** Seconds */
    SECONDS = "SECONDS",
    /** Minutes */
    MINUTES = "MINUTES",
    /** Hours */
    HOURS = "HOURS",
    /** Days */
    DAYS = "DAYS",
    /** Weeks */
    WEEKS = "WEEKS",
    /** Months */
    MONTHS = "MONTHS",
    /** Years */
    YEARS = "YEARS",
    /** The <code>start_time</code> and <code>end_time</code> should be set. */
    TIME_INTERVAL = "TIME_INTERVAL",
    /** Other */
    OTHER = "OTHER",
};
/**
* The TLS extension type identifier. See <a target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc8446#page-35'>The Transport
Layer Security (TLS) extension page</a>.
*/
export enum TlsExtensionTypeIdEnum {
    
    /** The Server Name Indication extension. */
    SERVER_NAME = "SERVER_NAME",
    /** The Maximum Fragment Length Negotiation extension. */
    MAXIMUM_FRAGMENT_LENGTH = "MAXIMUM_FRAGMENT_LENGTH",
    /** The Certificate Status Request extension. */
    STATUS_REQUEST = "STATUS_REQUEST",
    /** The Supported Groups extension. */
    SUPPORTED_GROUPS = "SUPPORTED_GROUPS",
    /** The Signature Algorithms extension. */
    SIGNATURE_ALGORITHMS = "SIGNATURE_ALGORITHMS",
    /** The Use SRTP data protection extension. */
    USE_SRTP = "USE_SRTP",
    /** The Heartbeat extension. */
    HEARTBEAT = "HEARTBEAT",
    /** The Application-Layer Protocol Negotiation extension. */
    APPLICATION_LAYER_PROTOCOL_NEGOTIATION = "APPLICATION_LAYER_PROTOCOL_NEGOTIATION",
    /** The Signed Certificate Timestamp extension. */
    SIGNED_CERTIFICATE_TIMESTAMP = "SIGNED_CERTIFICATE_TIMESTAMP",
    /** The Client Certificate Type extension. */
    CLIENT_CERTIFICATE_TYPE = "CLIENT_CERTIFICATE_TYPE",
    /** The Server Certificate Type extension. */
    SERVER_CERTIFICATE_TYPE = "SERVER_CERTIFICATE_TYPE",
    /** The Padding extension. */
    PADDING = "PADDING",
    /** The Pre Shared Key extension. */
    PRE_SHARED_KEY = "PRE_SHARED_KEY",
    /** The Early Data extension. */
    EARLY_DATA = "EARLY_DATA",
    /** The Supported Versions extension. */
    SUPPORTED_VERSIONS = "SUPPORTED_VERSIONS",
    /** The Cookie extension. */
    COOKIE = "COOKIE",
    /** The Pre-Shared Key Exchange Modes extension. */
    PSK_KEY_EXCHANGE_MODES = "PSK_KEY_EXCHANGE_MODES",
    /** The Certificate Authorities extension. */
    CERTIFICATE_AUTHORITIES = "CERTIFICATE_AUTHORITIES",
    /** The OID Filters extension. */
    OID_FILTERS = "OID_FILTERS",
    /** The Post-Handshake Client Authentication extension. */
    POST_HANDSHAKE_AUTH = "POST_HANDSHAKE_AUTH",
    /** The Signature Algorithms extension. */
    SIGNATURE_ALGORITHMS_CERT = "SIGNATURE_ALGORITHMS_CERT",
    /** The Key Share extension. */
    KEY_SHARE = "KEY_SHARE",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized token type identifier. Valid values: 0 (Unknown), 1 (Ticket
Granting Ticket - Kerberos), 2 (Service Ticket - Kerberos), 3 (Identity Token -
OIDC), 4 (Refresh Token - OIDC), 5 (SAML Assertion), 6 (Client Token -
IdP-issued), 7 (API Token - generic API keys), 99 (Other).
*/
export enum TokenTypeIdEnum {
    
    /** The token type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Ticket Granting Ticket (TGT) for Kerberos. */
    TICKET_GRANTING_TICKET = "TICKET_GRANTING_TICKET",
    /** Service Ticket (ST) for Kerberos. */
    SERVICE_TICKET = "SERVICE_TICKET",
    /** Identity (ID) Token for OIDC. */
    IDENTITY_TOKEN = "IDENTITY_TOKEN",
    /** Refresh Token for OIDC. */
    REFRESH_TOKEN = "REFRESH_TOKEN",
    /** Authentication Assertion for SAML. */
    SAML_ASSERTION = "SAML_ASSERTION",
    /** Client Token issued by an Identity Provider (IdP) for application
authentication. Use this value for IdP-issued tokens used for
service-to-service authentication. Examples: Microsoft Entra ID Application
Registration client secrets, Okta API tokens, Auth0 Machine-to-Machine tokens.
Key characteristic: These tokens are issued by Identity Providers, not by
individual services. */
    CLIENT_TOKEN = "CLIENT_TOKEN",
    /** A generic API token or API key used for authenticating API requests. Use this
value for service-specific API authentication tokens that are NOT issued by
Identity Providers. Examples: REST API keys, GraphQL API keys, Stripe API keys,
Twilio API keys, AWS API keys. Key characteristic: These tokens are issued by
individual services/platforms, not by Identity Providers. */
    API_TOKEN = "API_TOKEN",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier for fix coverage, applicable to this vulnerability.
Typically useful, when there are multiple affected packages but only a subset
have available fixes.
*/
export enum VulnerabilityFixCoverageIdEnum {
    
    /** All affected packages and components have available fixes or patches to
remediate the vulnerability. */
    COMPLETE = "COMPLETE",
    /** Only some of the affected packages and components have available fixes or
patches, while others remain vulnerable. */
    PARTIAL = "PARTIAL",
    /** No fixes or patches are currently available for any of the affected packages
and components. */
    NONE = "NONE",
    /** The fix coverage is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The fix coverage is not mapped. See the <code>fix_coverage</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized account type identifier.
*/
export enum AccountTypeIdEnum {
    
    /** The account type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** LDAP Account */
    LDAP_ACCOUNT = "LDAP_ACCOUNT",
    /** Windows Account */
    WINDOWS_ACCOUNT = "WINDOWS_ACCOUNT",
    /** AWS IAM User */
    AWS_IAM_USER = "AWS_IAM_USER",
    /** AWS IAM Role */
    AWS_IAM_ROLE = "AWS_IAM_ROLE",
    /** GCP Account */
    GCP_ACCOUNT = "GCP_ACCOUNT",
    /** Note: The new product name for Azure AD is Microsoft Entra ID. */
    AZURE_AD_ACCOUNT = "AZURE_AD_ACCOUNT",
    /** Mac OS Account */
    MAC_OS_ACCOUNT = "MAC_OS_ACCOUNT",
    /** Apple Account */
    APPLE_ACCOUNT = "APPLE_ACCOUNT",
    /** Linux Account */
    LINUX_ACCOUNT = "LINUX_ACCOUNT",
    /** AWS Account */
    AWS_ACCOUNT = "AWS_ACCOUNT",
    /** GCP Project */
    GCP_PROJECT = "GCP_PROJECT",
    /** OCI Compartment */
    OCI_COMPARTMENT = "OCI_COMPARTMENT",
    /** Azure Subscription */
    AZURE_SUBSCRIPTION = "AZURE_SUBSCRIPTION",
    /** Salesforce Account */
    SALESFORCE_ACCOUNT = "SALESFORCE_ACCOUNT",
    /** Google Workspace */
    GOOGLE_WORKSPACE = "GOOGLE_WORKSPACE",
    /** Servicenow Instance */
    SERVICENOW_INSTANCE = "SERVICENOW_INSTANCE",
    /** M365 Tenant */
    M365_TENANT = "M365_TENANT",
    /** Email Account */
    EMAIL_ACCOUNT = "EMAIL_ACCOUNT",
    /** ActiveDirectory Account */
    ACTIVEDIRECTORY_ACCOUNT = "ACTIVEDIRECTORY_ACCOUNT",
    /** The account type is not mapped. */
    OTHER = "OTHER",
};
/**
* The normalized status identifier indicating the applicability of this policy
restriction.
*/
export enum AdditionalRestrictionStatusIdEnum {
    
    /** This restriction is currently applicable and being enforced. */
    APPLICABLE = "APPLICABLE",
    /** This restriction is not applicable. */
    INAPPLICABLE = "INAPPLICABLE",
    /** This restriction could not be properly evaluated due to an error. */
    EVALUATION_ERROR = "EVALUATION_ERROR",
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized representation of an agent or sensor. E.g., EDR, vulnerability
management, APM, backup & recovery, etc.
*/
export enum AgentTypeIdEnum {
    
    /** Any EDR sensor or agent. Or any tool that provides similar threat detection,
anti-malware, anti-ransomware, or similar capabilities. E.g., Crowdstrike
Falcon, Microsoft Defender for Endpoint, Wazuh. */
    ENDPOINT_DETECTION_AND_RESPONSE = "ENDPOINT_DETECTION_AND_RESPONSE",
    /** Any DLP sensor or agent. Or any tool that provides similar data classification,
data loss detection, and/or data loss prevention capabilities. E.g., Forcepoint
DLP, Microsoft Purview, Symantec DLP. */
    DATA_LOSS_PREVENTION = "DATA_LOSS_PREVENTION",
    /** Any agent or sensor that provides backups, archival, or recovery capabilities.
E.g., Azure Backup, AWS Backint Agent. */
    BACKUP_RECOVERY = "BACKUP_RECOVERY",
    /** Any agent or sensor that provides Application Performance Monitoring (APM),
active tracing, profiling, or other observability use cases and optionally
forwards the logs. E.g., New Relic Agent, Datadog Agent, Azure Monitor Agent. */
    PERFORMANCE_MONITORING_OBSERVABILITY = "PERFORMANCE_MONITORING_OBSERVABILITY",
    /** Any agent or sensor that provides vulnerability management or scanning
capabilities. E.g., Qualys VMDR, Microsoft Defender for Endpoint, Crowdstrike
Spotlight, Amazon Inspector Agent. */
    VULNERABILITY_MANAGEMENT = "VULNERABILITY_MANAGEMENT",
    /** Any agent or sensor that forwards logs to a 3rd party storage system such as a
data lake or SIEM. E.g., Splunk Universal Forwarder, Tenzir, FluentBit, Amazon
CloudWatch Agent, Amazon Kinesis Agent. */
    LOG_FORWARDING = "LOG_FORWARDING",
    /** Any agent or sensor responsible for providing Mobile Device Management (MDM) or
Mobile Enterprise Management (MEM) capabilities. E.g., JumpCloud Agent, Esper
Agent, Jamf Pro binary. */
    MOBILE_DEVICE_MANAGEMENT = "MOBILE_DEVICE_MANAGEMENT",
    /** Any agent or sensor that provides configuration management of a device, such as
scanning for software, license management, or applying configurations. E.g.,
AWS Systems Manager Agent, Flexera, ServiceNow MID Server. */
    CONFIGURATION_MANAGEMENT = "CONFIGURATION_MANAGEMENT",
    /** Any agent or sensor that provides remote access capabilities to a device. E.g.,
BeyondTrust, Amazon Systems Manager Agent, Verkada Agent. */
    REMOTE_ACCESS = "REMOTE_ACCESS",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The Analytic state identifier.
*/
export enum AnalyticStateIdEnum {
    
    /** The Analytic is active. */
    ACTIVE = "ACTIVE",
    /** The Analytic is suppressed. For example, a user/customer has suppressed a
particular detection signature in a security product. */
    SUPPRESSED = "SUPPRESSED",
    /** The Analytic is still under development and considered experimental. */
    EXPERIMENTAL = "EXPERIMENTAL",
    /** The state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The state is not mapped. See the <code>state</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The analytic type ID.
*/
export enum AnalyticTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** A Rule in security analytics refers to predefined criteria or conditions set to
monitor, alert, or enforce policies, playing a crucial role in access control,
threat detection, and regulatory compliance across security systems. */
    RULE = "RULE",
    /** Behavioral analytics focus on monitoring and analyzing user or system actions
to identify deviations from established patterns, aiding in the detection of
insider threats, fraud, and advanced persistent threats (APTs). */
    BEHAVIORAL = "BEHAVIORAL",
    /** Statistical analytics pertains to analyzing data patterns and anomalies using
statistical models to predict, detect, and respond to potential threats,
enhancing overall security posture through informed decision-making. */
    STATISTICAL = "STATISTICAL",
    /** Learning (ML/DL) encompasses techniques that can "learn" from known data to
create analytics that generalize to new data. There may be a statistical
component to these techniques, but it is not a requirement. */
    LEARNING_ML_DL = "LEARNING_ML_DL",
    /** Fingerprinting is the technique of collecting detailed system data, including
software versions and configurations, to enhance threat detection, data loss
prevention (DLP), and endpoint detection and response (EDR) capabilities. */
    FINGERPRINTING = "FINGERPRINTING",
    /** Tagging refers to the practice of assigning labels or identifiers to data,
users, assets, or activities to monitor, control access, and facilitate
incident response across various security domains such as DLP and EDR. */
    TAGGING = "TAGGING",
    /** Keyword Match involves scanning content for specific terms to identify
sensitive information, potential threats, or policy violations, aiding in DLP
and compliance monitoring. */
    KEYWORD_MATCH = "KEYWORD_MATCH",
    /** Regular Expressions are used to define complex search patterns for identifying,
validating, and extracting specific data sets or threats within digital
content, enhancing DLP, EDR, and threat detection mechanisms. */
    REGULAR_EXPRESSIONS = "REGULAR_EXPRESSIONS",
    /** Exact Data Match is a precise comparison technique used to detect the
unauthorized use or exposure of specific, sensitive information, crucial for
enforcing DLP policies and protecting against data breaches. */
    EXACT_DATA_MATCH = "EXACT_DATA_MATCH",
    /** Partial Data Match involves identifying instances where segments of sensitive
information or patterns match, facilitating nuanced DLP and threat detection
without requiring complete data conformity. */
    PARTIAL_DATA_MATCH = "PARTIAL_DATA_MATCH",
    /** Indexed Data Match refers to comparing content against a pre-compiled index of
sensitive information to efficiently detect and prevent unauthorized access or
breaches, streamlining DLP and compliance efforts. */
    INDEXED_DATA_MATCH = "INDEXED_DATA_MATCH",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized authentication token type identifier. This attribute restricts
the base <code>token.type_id</code> enum to only protocol-specific
authentication token types (values 0, 1-5, 99). API tokens and client tokens
(values 6-7) are not valid for <code>authentication_token</code> - use the base
<code>token</code> object for those types.
*/
export enum AuthenticationTokenTypeIdEnum {
    
    /** The Authentication token type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Ticket Granting Ticket (TGT) for Kerberos. */
    TICKET_GRANTING_TICKET = "TICKET_GRANTING_TICKET",
    /** Service Ticket (ST) for Kerberos. */
    SERVICE_TICKET = "SERVICE_TICKET",
    /** Identity (ID) Token for OIDC. */
    IDENTITY_TOKEN = "IDENTITY_TOKEN",
    /** Refresh Token for OIDC. */
    REFRESH_TOKEN = "REFRESH_TOKEN",
    /** Authentication Assertion for SAML. */
    SAML_ASSERTION = "SAML_ASSERTION",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized severity identifier that maps severity levels to standard
severity levels. For example CIS Benchmark: <code>Level 2</code> maps to
<code>4</code> (High), <code>Level 1</code> maps to <code>3</code> (Medium).
For DISA STIG: <code>CAT I</code> maps to <code>5</code> (Critical), <code>CAT
II</code> maps to <code>4</code> (High), and <code>CAT III</code> maps to
<code>3</code> (Medium).
*/
export enum CheckSeverityIdEnum {
    
    /** The severity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Informational message. No action required. */
    INFORMATIONAL = "INFORMATIONAL",
    /** The user decides if action is needed. */
    LOW = "LOW",
    /** Maps to CIS Benchmark <code>Level 1</code> - Essential security settings
recommended for all systems, or DISA STIG <code>CAT III</code> - Action is
required but the situation is not serious at this time. */
    MEDIUM = "MEDIUM",
    /** Maps to CIS Benchmark <code>Level 2</code> - More restrictive and
security-focused settings for sensitive environments, or DISA STIG <code>CAT
II</code> - Action is required immediately. */
    HIGH = "HIGH",
    /** Maps to DISA STIG <code>CAT I</code> - Action is required immediately and the
scope is broad. */
    CRITICAL = "CRITICAL",
    /** An error occurred but it is too late to take remedial action. */
    FATAL = "FATAL",
    /** The severity is not mapped. See the <code>severity</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized status identifier of the compliance check.
*/
export enum CheckStatusIdEnum {
    
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The compliance check passed for all the evaluated resources. */
    PASS = "PASS",
    /** The compliance check did not yield a result due to missing information. */
    WARNING = "WARNING",
    /** The compliance check failed for at least one of the evaluated resources. */
    FAIL = "FAIL",
    /** The event status is not mapped. See the <code>status</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized status identifier of the compliance check.
*/
export enum ComplianceStatusIdEnum {
    
    /** The compliance check passed for all the evaluated resources. */
    PASS = "PASS",
    /** The compliance check did not yield a result due to missing information. */
    WARNING = "WARNING",
    /** The compliance check failed for at least one of the evaluated resources. */
    FAIL = "FAIL",
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the data classification category.
*/
export enum DataClassificationCategoryIdEnum {
    
    /** The type is not mapped. See the <code>data_type</code> attribute, which
contains a data source specific value. */
    UNKNOWN = "UNKNOWN",
    /** Any Personally Identifiable Information (PII), Electronic Personal Health
Information (ePHI), or similarly personal information. E.g., full name, home
address, date of birth, etc. */
    PERSONAL = "PERSONAL",
    /** Any sensitive government identification number related to a person or other
classified material. E.g., Passport numbers, driver license numbers, business
identification, taxation identifiers, etc. */
    GOVERNMENTAL = "GOVERNMENTAL",
    /** Any financially-related sensitive information or Cardholder Data (CHD). E.g.,
banking account numbers, credit card numbers, International Banking Account
Numbers (IBAN), SWIFT codes, etc. */
    FINANCIAL = "FINANCIAL",
    /** Any business-specific sensitive data such as intellectual property, trademarks,
copyrights, human resource data, Board of Directors meeting minutes, and
similar. */
    BUSINESS = "BUSINESS",
    /** Any mission-specific sensitive data for military, law enforcement, or other
government agencies such as specifically classified data, weapon systems
information, or other planning data. */
    MILITARY_AND_LAW_ENFORCEMENT = "MILITARY_AND_LAW_ENFORCEMENT",
    /** Any sensitive security-related data such as passwords, passkeys, IP addresses,
API keys, credentials and similar secrets. E.g., AWS Access Secret Key, SaaS
API Keys, user passwords, database credentials, etc. */
    SECURITY = "SECURITY",
    /** Any other type of data classification or a multi-variate classification made up
of several other classification categories. */
    OTHER = "OTHER",
};
/**
* The normalized status identifier of the classification job.
*/
export enum DataClassificationStatusIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** The classification job completed for the evaluated resource. */
    COMPLETE = "COMPLETE",
    /** The classification job partially completed for the evaluated resource. */
    PARTIAL = "PARTIAL",
    /** The classification job failed for the evaluated resource. */
    FAIL = "FAIL",
    /** The classification job type id is not mapped. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the database type.
*/
export enum DatabaseTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Relational */
    RELATIONAL = "RELATIONAL",
    /** Network */
    NETWORK = "NETWORK",
    /** Object Oriented */
    OBJECT_ORIENTED = "OBJECT_ORIENTED",
    /** Centralized */
    CENTRALIZED = "CENTRALIZED",
    /** Operational */
    OPERATIONAL = "OPERATIONAL",
    /** NoSQL */
    NOSQL = "NOSQL",
    /** Vector */
    VECTOR = "VECTOR",
    /** Knowledge Graph */
    KNOWLEDGE_GRAPH = "KNOWLEDGE_GRAPH",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the databucket type.
*/
export enum DatabucketTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** S3 */
    S3 = "S3",
    /** Azure Blob */
    AZURE_BLOB = "AZURE_BLOB",
    /** GCP Bucket */
    GCP_BUCKET = "GCP_BUCKET",
    /** Other */
    OTHER = "OTHER",
};
/**
* The identifier of the normalized digital signature algorithm.
*/
export enum DigitalSignatureAlgorithmIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Digital Signature Algorithm (DSA). */
    DSA = "DSA",
    /** Rivest-Shamir-Adleman (RSA) Algorithm. */
    RSA = "RSA",
    /** Elliptic Curve Digital Signature Algorithm. */
    ECDSA = "ECDSA",
    /** Microsoft Authenticode Digital Signature Algorithm. */
    AUTHENTICODE = "AUTHENTICODE",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the signature state.
*/
export enum DigitalSignatureStateIdEnum {
    
    /** The digital signature is valid. */
    VALID = "VALID",
    /** The digital signature is invalid because its timestamp does not fall within the
certificate's validity period. */
    EXPIRED = "EXPIRED",
    /** The digital signature is invalid due to certificate revocation. */
    REVOKED = "REVOKED",
    /** The digital signature is invalid due to certificate suspension. */
    SUSPENDED = "SUSPENDED",
    /** The digital signature state is pending. */
    PENDING = "PENDING",
    /** The digital signature is invalid because the certificate is rooted in an
untrusted CA or is an untrusted self-signed certificate. */
    UNTRUSTED = "UNTRUSTED",
    /** The digital signature is invalid because the certificate is explicitly
distrusted. Note that whereas revocation is global, distrust reflects local
IT/security policy. */
    DISTRUSTED = "DISTRUSTED",
    /** The digital signature is invalid because the certificate is not intended for
code signing purposes. */
    WRONGUSAGE = "WRONGUSAGE",
    /** The digital signature is cryptographically invalid, e.g. a mismatched digest.
This indicates possible tampering. */
    BAD = "BAD",
    /** The digital signature is malformed and could not be processed. */
    BROKEN = "BROKEN",
    /** The state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The state is not mapped. See the <code>state</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The list of DNS answer header flag IDs.
*/
export enum DnsAnswerFlagIdsEnum {
    
    /** Authoritative Answer */
    AUTHORITATIVE_ANSWER = "AUTHORITATIVE_ANSWER",
    /** Truncated Response */
    TRUNCATED_RESPONSE = "TRUNCATED_RESPONSE",
    /** Recursion Desired */
    RECURSION_DESIRED = "RECURSION_DESIRED",
    /** Recursion Available */
    RECURSION_AVAILABLE = "RECURSION_AVAILABLE",
    /** Authentic Data */
    AUTHENTIC_DATA = "AUTHENTIC_DATA",
    /** Checking Disabled */
    CHECKING_DISABLED = "CHECKING_DISABLED",
    /** The flag is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The flag is not mapped. See the <code>flags</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized domain contact type ID.
*/
export enum DomainContactTypeIdEnum {
    
    /** The contact information provided is for the domain registrant. */
    REGISTRANT = "REGISTRANT",
    /** The contact information provided is for the domain administrator. */
    ADMINISTRATIVE = "ADMINISTRATIVE",
    /** The contact information provided is for the domain technical lead. */
    TECHNICAL = "TECHNICAL",
    /** The contact information provided is for the domain billing lead. */
    BILLING = "BILLING",
    /** The contact information provided is for the domain abuse contact. */
    ABUSE = "ABUSE",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The encryption algorithm used.
*/
export enum EncryptionDetailsAlgorithmIdEnum {
    
    /** Data Encryption Standard Algorithm */
    DES = "DES",
    /** Triple Data Encryption Standard Algorithm */
    TRIPLEDES = "TRIPLEDES",
    /** Advanced Encryption Standard Algorithm. */
    AES = "AES",
    /** Rivest-Shamir-Adleman Algorithm */
    RSA = "RSA",
    /** Elliptic Curve Cryptography Algorithm */
    ECC = "ECC",
    /** ShangMi Cryptographic Algorithm */
    SM2 = "SM2",
    /** The algorithm is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The algorithm is not mapped. See the <code>algorithm</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The endpoint type ID.
*/
export enum EndpointTypeIdEnum {
    
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:Server/'>server</a>. */
    SERVER = "SERVER",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:DesktopComputer/'>desktop
computer</a>. */
    DESKTOP = "DESKTOP",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:LaptopComputer/'>laptop
computer</a>. */
    LAPTOP = "LAPTOP",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:TabletComputer/'>tablet
computer</a>. */
    TABLET = "TABLET",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:MobilePhone/'>mobile phone</a>. */
    MOBILE = "MOBILE",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:VirtualizationSoftware/'>virtual
machine</a>. */
    VIRTUAL = "VIRTUAL",
    /** An <a target='_blank'
href='https://www.techtarget.com/iotagenda/definition/IoT-device'>IOT (Internet
of Things) device</a>. */
    IOT = "IOT",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:Browser/'>web browser</a>. */
    BROWSER = "BROWSER",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:Firewall/'>networking
firewall</a>. */
    FIREWALL = "FIREWALL",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:Switch/'>networking switch</a>. */
    SWITCH = "SWITCH",
    /** A <a target='_blank'
href='https://en.wikipedia.org/wiki/Ethernet_hub'>networking hub</a>. */
    HUB = "HUB",
    /** A <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:Router/'>networking router</a>. */
    ROUTER = "ROUTER",
    /** An <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:IntrusionDetectionSystem/'>intrusion
detection system</a>. */
    IDS = "IDS",
    /** An <a target='_blank'
href='https://d3fend.mitre.org/dao/artifact/d3f:IntrusionPreventionSystem/'>intrusion
prevention system</a>. */
    IPS = "IPS",
    /** A <a target='_blank'
href='https://en.wikipedia.org/wiki/Load_balancing_(computing)'>Load Balancer
device.</a> */
    LOAD_BALANCER = "LOAD_BALANCER",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized verdict (or status) ID of the evidence associated with the
security detection. For example, Microsoft Graph Security Alerts contain a
<code>verdict</code> enumeration for each type of <code>evidence</code>
associated with the Alert. This is typically set by an automated investigation
process or an analyst/investigator assigned to the finding.
*/
export enum EvidencesVerdictIdEnum {
    
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The verdict for the evidence has been identified as a False Positive. */
    FALSE_POSITIVE = "FALSE_POSITIVE",
    /** The verdict for the evidence has been identified as a True Positive. */
    TRUE_POSITIVE = "TRUE_POSITIVE",
    /** The verdict for the evidence is that is should be Disregarded. */
    DISREGARD = "DISREGARD",
    /** The verdict for the evidence is that the behavior has been identified as
Suspicious. */
    SUSPICIOUS = "SUSPICIOUS",
    /** The verdict for the evidence is that the behavior has been identified as
Benign. */
    BENIGN = "BENIGN",
    /** The evidence is part of a Test, or other sanctioned behavior(s). */
    TEST = "TEST",
    /** There is insufficient data to render a verdict on the evidence. */
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
    /** The verdict for the evidence is that the behavior has been identified as a
Security Risk. */
    SECURITY_RISK = "SECURITY_RISK",
    /** The verdict for the evidence is Managed Externally, such as in a case
management tool. */
    MANAGED_EXTERNALLY = "MANAGED_EXTERNALLY",
    /** This evidence duplicates existing evidence related to this finding. */
    DUPLICATE = "DUPLICATE",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The file type ID. Note the distinction between a <code>Regular File</code> and
an <code>Executable File</code>. If the distinction is not known, or not
indicated by the log, use <code>Regular File</code>. In this case, it should
not be assumed that a Regular File is not executable.
*/
export enum FileTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Regular File */
    REGULAR_FILE = "REGULAR_FILE",
    /** Folder */
    FOLDER = "FOLDER",
    /** Character Device */
    CHARACTER_DEVICE = "CHARACTER_DEVICE",
    /** Block Device */
    BLOCK_DEVICE = "BLOCK_DEVICE",
    /** Local Socket */
    LOCAL_SOCKET = "LOCAL_SOCKET",
    /** Named Pipe */
    NAMED_PIPE = "NAMED_PIPE",
    /** Symbolic Link */
    SYMBOLIC_LINK = "SYMBOLIC_LINK",
    /** Executable File */
    EXECUTABLE_FILE = "EXECUTABLE_FILE",
    /** Other */
    OTHER = "OTHER",
};
/**
* The identifier of the normalized algorithm or scheme, which was used to create
the fingerprint.
*/
export enum FingerprintAlgorithmIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** MD5 message-digest algorithm producing a 128-bit (16-byte) hash value. */
    MD5 = "MD5",
    /** Secure Hash Algorithm 1 producing a 160-bit (20-byte) hash value. */
    SHA_1 = "SHA_1",
    /** Secure Hash Algorithm 2 producing a 256-bit (32-byte) hash value. */
    SHA_256 = "SHA_256",
    /** Secure Hash Algorithm 2 producing a 512-bit (64-byte) hash value. */
    SHA_512 = "SHA_512",
    /** The ssdeep generated fuzzy checksum. Also known as Context Triggered Piecewise
Hash (CTPH). */
    CTPH = "CTPH",
    /** The TLSH fuzzy hashing algorithm. */
    TLSH = "TLSH",
    /** Microsoft simple non-cryptographic hash algorithm that works by XORing the
bytes in a circular-shifting fashion. */
    QUICKXORHASH = "QUICKXORHASH",
    /** Secure Hash Algorithm 2 producing a 224-bit (28-byte) hash value. */
    SHA_224 = "SHA_224",
    /** Secure Hash Algorithm 2 producing a 384-bit (48-byte) hash value. */
    SHA_384 = "SHA_384",
    /** Secure Hash Algorithm 2 producing a 512-bit (64-byte) hash value truncated to a
224-bit (28-byte) hash value. */
    SHA_512_224 = "SHA_512_224",
    /** Secure Hash Algorithm 2 producing a 512-bit (64-byte) hash value truncated to a
256-bit (32-byte) hash value. */
    SHA_512_256 = "SHA_512_256",
    /** Secure Hash Algorithm 3 producing a 224-bit (28-byte) hash value. */
    SHA3_224 = "SHA3_224",
    /** Secure Hash Algorithm 3 producing a 256-bit (32-byte) hash value. */
    SHA3_256 = "SHA3_256",
    /** Secure Hash Algorithm 3 producing a 384-bit (48-byte) hash value. */
    SHA3_384 = "SHA3_384",
    /** Secure Hash Algorithm 3 producing a 512-bit (64-byte) hash value. */
    SHA3_512 = "SHA3_512",
    /** xxHash H3 producing a 64-bit hash value. */
    XXHASH_H3_64_BIT = "XXHASH_H3_64_BIT",
    /** xxHash H3 producing a 128-bit hash value. */
    XXHASH_H3_128_BIT = "XXHASH_H3_128_BIT",
    /** Import hash (imphash) based on the import table of a Portable Executable (PE)
file producing a 128-bit (16-byte) hash value. */
    IMPHASH = "IMPHASH",
    /** Network Protocol Fingerprint (NPF) used to identify network protocols and
applications. */
    NPF = "NPF",
    /** HASSH is a network fingerprinting standard which can be used to identify
specific SSH client and server implementations. */
    HASSH = "HASSH",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the attachment bus or interface standard.
*/
export enum GpuInfoBusTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Onboard */
    ONBOARD = "ONBOARD",
    /** PCIe x16 */
    PCIE_X16 = "PCIE_X16",
    /** PCIe x8 */
    PCIE_X8 = "PCIE_X8",
    /** MXM Type A */
    MXM_TYPE_A = "MXM_TYPE_A",
    /** MXM Type B */
    MXM_TYPE_B = "MXM_TYPE_B",
    /** M.2 */
    M_2 = "M_2",
    /** CXL */
    CXL = "CXL",
    /** Other */
    OTHER = "OTHER",
};
/**
* GpuInfo vram_mode_id values.
*/
export enum GpuInfoVramModeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Shared */
    SHARED = "SHARED",
    /** Dedicated */
    DEDICATED = "DEDICATED",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized identifier of a graph query language that can be used to
interact with the graph.
*/
export enum GraphQueryLanguageIdEnum {
    
    /** A declarative graph query language developed by Neo4j that allows for
expressive and efficient querying of graph databases. */
    CYPHER = "CYPHER",
    /** A query language for APIs that enables declarative data fetching and provides a
complete description of the data in the API. */
    GRAPHQL = "GRAPHQL",
    /** A graph traversal language and virtual machine developed by Apache TinkerPop
that enables graph computing across different graph databases. */
    GREMLIN = "GREMLIN",
    /** An ISO standard graph query language designed to provide a unified way to query
graph databases. */
    GQL = "GQL",
    /** A graph query language that combines features from existing languages while
adding support for paths as first-class citizens. */
    G_CORE = "G_CORE",
    /** Property Graph Query Language developed by Oracle that provides SQL-like syntax
for querying property graphs. */
    PGQL = "PGQL",
    /** A semantic query language for databases that enables querying and manipulating
data stored in RDF format. */
    SPARQL = "SPARQL",
    /** The Query Language is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The Query Language is not mapped. See the <code>query_language</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The <a target='_blank'
href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods'>HTTP request
method</a> indicates the desired action to be performed for a given resource.
*/
export enum HttpRequestHttpMethodEnum {
    
    /** The CONNECT method establishes a tunnel to the server identified by the target
resource. */
    CONNECT = "CONNECT",
    /** The DELETE method deletes the specified resource. */
    DELETE = "DELETE",
    /** The GET method requests a representation of the specified resource. Requests
using GET should only retrieve data. */
    GET = "GET",
    /** The HEAD method asks for a response identical to a GET request, but without the
response body. */
    HEAD = "HEAD",
    /** The OPTIONS method describes the communication options for the target resource. */
    OPTIONS = "OPTIONS",
    /** The PATCH method applies partial modifications to a resource. */
    PATCH = "PATCH",
    /** The POST method submits an entity to the specified resource, often causing a
change in state or side effects on the server. */
    POST = "POST",
    /** The PUT method replaces all current representations of the target resource with
the request payload. */
    PUT = "PUT",
    /** The TRACE method performs a message loop-back test along the path to the target
resource. */
    TRACE = "TRACE",
};
/**
* The normalized state ID of the Identity Provider to reflect its configuration
or activation status.
*/
export enum IdpStateIdEnum {
    
    /** The configuration state of the Identity Provider is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The Identity Provider is in an Active state, or otherwise enabled. */
    ACTIVE = "ACTIVE",
    /** The Identity Provider is in a Suspended state. */
    SUSPENDED = "SUSPENDED",
    /** The Identity Provider is in a Deprecated state, or is otherwise disabled. */
    DEPRECATED = "DEPRECATED",
    /** The Identity Provider is in a Deleted state. */
    DELETED = "DELETED",
    /** The configuration state of the Identity Provider is not mapped. See the
<code>state</code> attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The identifier of the JA4+ fingerprint type.
*/
export enum Ja4FingerprintTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** TLS Client Fingerprint. */
    JA4 = "JA4",
    /** TLS Server Response/Session Fingerprint. */
    JA4SERVER = "JA4SERVER",
    /** HTTP Client Fingerprint. */
    JA4HTTP = "JA4HTTP",
    /** Latency Measurement/Light Distance Fingerprint. */
    JA4LATENCY = "JA4LATENCY",
    /** X509 TLS Certificate Fingerprint. */
    JA4X509 = "JA4X509",
    /** SSH Traffic Fingerprint. */
    JA4SSH = "JA4SSH",
    /** Passive TCP Client Fingerprint. */
    JA4TCP = "JA4TCP",
    /** Passive TCP Server Fingerprint. */
    JA4TCPSERVER = "JA4TCPSERVER",
    /** Active TCP Server Fingerprint. */
    JA4TCPSCAN = "JA4TCPSCAN",
    /** Other */
    OTHER = "OTHER",
};
/**
* The run state ID of the job.
*/
export enum JobRunStateIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Ready */
    READY = "READY",
    /** Queued */
    QUEUED = "QUEUED",
    /** Running */
    RUNNING = "RUNNING",
    /** Stopped */
    STOPPED = "STOPPED",
    /** Other */
    OTHER = "OTHER",
};
/**
* The type of the kernel resource.
*/
export enum KernelTypeIdEnum {
    
    /** Shared Mutex */
    SHARED_MUTEX = "SHARED_MUTEX",
    /** System Call */
    SYSTEM_CALL = "SYSTEM_CALL",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The list of normalized identifiers of the malware classifications.
*/
export enum MalwareClassificationIdsEnum {
    
    /** Adware */
    ADWARE = "ADWARE",
    /** Backdoor */
    BACKDOOR = "BACKDOOR",
    /** Bot */
    BOT = "BOT",
    /** Bootkit */
    BOOTKIT = "BOOTKIT",
    /** DDOS */
    DDOS = "DDOS",
    /** Downloader */
    DOWNLOADER = "DOWNLOADER",
    /** Dropper */
    DROPPER = "DROPPER",
    /** Exploit-Kit */
    EXPLOIT_KIT = "EXPLOIT_KIT",
    /** Keylogger */
    KEYLOGGER = "KEYLOGGER",
    /** Ransomware */
    RANSOMWARE = "RANSOMWARE",
    /** Remote-Access-Trojan */
    REMOTE_ACCESS_TROJAN = "REMOTE_ACCESS_TROJAN",
    /** Resource-Exploitation */
    RESOURCE_EXPLOITATION = "RESOURCE_EXPLOITATION",
    /** Rogue-Security-Software */
    ROGUE_SECURITY_SOFTWARE = "ROGUE_SECURITY_SOFTWARE",
    /** Rootkit */
    ROOTKIT = "ROOTKIT",
    /** Screen-Capture */
    SCREEN_CAPTURE = "SCREEN_CAPTURE",
    /** Spyware */
    SPYWARE = "SPYWARE",
    /** Trojan */
    TROJAN = "TROJAN",
    /** Virus */
    VIRUS = "VIRUS",
    /** Webshell */
    WEBSHELL = "WEBSHELL",
    /** Wiper */
    WIPER = "WIPER",
    /** Worm */
    WORM = "WORM",
    /** The classification is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The classification is not mapped. See the <code>classifications</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The type of the Managed Entity. It is recommended to also populate the
<code>type</code> attribute with the associated label, or the source specific
name if <code>Other</code>.
*/
export enum ManagedEntityTypeIdEnum {
    
    /** A managed Device entity.  This item corresponds to population of the
<code>device</code> attribute. */
    DEVICE = "DEVICE",
    /** A managed User entity.  This item corresponds to population of the
<code>user</code> attribute. */
    USER = "USER",
    /** A managed Group entity.  This item corresponds to population of the
<code>group</code> attribute. */
    GROUP = "GROUP",
    /** A managed Organization entity.  This item corresponds to population of the
<code>org</code> attribute. */
    ORGANIZATION = "ORGANIZATION",
    /** A managed Policy entity.  This item corresponds to population of the
<code>policy</code> attribute. */
    POLICY = "POLICY",
    /** A managed Email entity.  This item corresponds to population of the
<code>email</code> attribute. */
    EMAIL = "EMAIL",
    /** A managed Network Zone entity. Populate the <code>name</code> attribute with
the zone name and/or the <code>uid</code> attribute with the zone ID.
Additional zone information can be added to the <code>data</code> attribute. */
    NETWORK_ZONE = "NETWORK_ZONE",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* Specifies the functional role of the AI within the context of this message,
such as retrieving information, assisting reasoning, executing a tool, or
generating content.
*/
export enum MessageContextAiRoleIdEnum {
    
    /** Unknown role type. */
    UNKNOWN = "UNKNOWN",
    /** The human user initiating a request. */
    USER = "USER",
    /** The AI model generating a response. */
    ASSISTANT = "ASSISTANT",
    /** A callable tool or API invoked by the assistant. */
    TOOL = "TOOL",
    /** A software agent that performs tasks with autonomy or delegated intent. */
    AGENT = "AGENT",
    /** The component coordinating multiple agents or tools. */
    ORCHESTRATOR = "ORCHESTRATOR",
    /** A component that retrieves information or context from a knowledge source
(e.g., vector DB, search system, or API). */
    RETRIEVER = "RETRIEVER",
    /** Other role type not covered above. */
    OTHER = "OTHER",
};
/**
* The normalized identifier for how the module was loaded in memory.
*/
export enum ModuleLoadTypeIdEnum {
    
    /** A normal module loaded by the normal windows loading mechanism i.e.
LoadLibrary. */
    STANDARD = "STANDARD",
    /** A module loaded in a way avoidant of normal windows procedures. i.e.
Bootstrapped Loading/Manual Dll Loading. */
    NON_STANDARD = "NON_STANDARD",
    /** A raw module in process memory that is READWRITE_EXECUTE and had a thread
started in its range. */
    SHELLCODE = "SHELLCODE",
    /** A memory mapped file, typically created with CreatefileMapping/MapViewOfFile. */
    MAPPED = "MAPPED",
    /** A module loaded in a non standard way. However, GetModuleFileName succeeds on
this allocation. */
    NONSTANDARD_BACKED = "NONSTANDARD_BACKED",
    /** The load type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The load type is not mapped. See the <code>load_type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The Internet Protocol version identifier.
*/
export enum NetworkConnectionInfoProtocolVerIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Internet Protocol version 4 (IPv4) */
    INTERNET_PROTOCOL_VERSION_4_IPV4 = "INTERNET_PROTOCOL_VERSION_4_IPV4",
    /** Internet Protocol version 6 (IPv6) */
    INTERNET_PROTOCOL_VERSION_6_IPV6 = "INTERNET_PROTOCOL_VERSION_6_IPV6",
    /** Other */
    OTHER = "OTHER",
};
/**
* The network interface type identifier.
*/
export enum NetworkInterfaceTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Wired */
    WIRED = "WIRED",
    /** Wireless */
    WIRELESS = "WIRELESS",
    /** Mobile */
    MOBILE = "MOBILE",
    /** Tunnel */
    TUNNEL = "TUNNEL",
    /** Other */
    OTHER = "OTHER",
};
/**
* The normalized peripheral device type ID.
*/
export enum PeripheralDeviceTypeIdEnum {
    
    /** The peripheral device type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The peripheral device is an external storage device. */
    EXTERNAL_STORAGE = "EXTERNAL_STORAGE",
    /** The peripheral device is a keyboard. */
    KEYBOARD = "KEYBOARD",
    /** The peripheral device is a mouse. */
    MOUSE = "MOUSE",
    /** The peripheral device is a printer. */
    PRINTER = "PRINTER",
    /** The peripheral device is a monitor. */
    MONITOR = "MONITOR",
    /** The peripheral device is a microphone. */
    MICROPHONE = "MICROPHONE",
    /** The peripheral device is a webcam. */
    WEBCAM = "WEBCAM",
    /** The peripheral device type is not mapped. See the <code>type</code> attribute
which contains an event source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the resource's role in the context of the event or
finding.
*/
export enum ResourceDetailsRoleIdEnum {
    
    /** The resource is the primary target or subject of the event/finding. */
    TARGET = "TARGET",
    /** The resource is acting as the initiator or performer in the context of the
event/finding. */
    ACTOR = "ACTOR",
    /** The resource was impacted or affected by the event/finding. */
    AFFECTED = "AFFECTED",
    /** The resource is related to or associated with the event/finding. */
    RELATED = "RELATED",
    /** The role is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The role is not mapped. See the role attribute, which contains a data source
specific value. */
    OTHER = "OTHER",
};
/**
* The type id of the scan.
*/
export enum ScanTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** The scan was manually initiated by the user or administrator. */
    MANUAL = "MANUAL",
    /** The scan was started based on scheduler. */
    SCHEDULED = "SCHEDULED",
    /** The scan was triggered by a content update. */
    UPDATED_CONTENT = "UPDATED_CONTENT",
    /** The scan was triggered by newly quarantined items. */
    QUARANTINED_ITEMS = "QUARANTINED_ITEMS",
    /** The scan was triggered by the attachment of removable media. */
    ATTACHED_MEDIA = "ATTACHED_MEDIA",
    /** The scan was started due to a user logon. */
    USER_LOGON = "USER_LOGON",
    /** The scan was triggered by an Early Launch Anti-Malware (ELAM) detection. */
    ELAM = "ELAM",
    /** The scan type id is not mapped. See the <code>type</code> attribute, which
contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The UAS type identifier.
*/
export enum UnmannedAerialSystemTypeIdEnum {
    
    /** The UAS type is empty or not declared. */
    UNKNOWN_UNDECLARED = "UNKNOWN_UNDECLARED",
    /** Airplane */
    AIRPLANE = "AIRPLANE",
    /** Can also be a Multi-rotor Unmanned Aircraft (e.g., Quad-copter). */
    HELICOPTER = "HELICOPTER",
    /** Gyroplane */
    GYROPLANE = "GYROPLANE",
    /** Fixed wing aircraft that can take off vertically. */
    HYBRID_LIFT = "HYBRID_LIFT",
    /** Ornithopter */
    ORNITHOPTER = "ORNITHOPTER",
    /** Glider */
    GLIDER = "GLIDER",
    /** Kite */
    KITE = "KITE",
    /** Free Balloon */
    FREE_BALLOON = "FREE_BALLOON",
    /** Captive Balloon */
    CAPTIVE_BALLOON = "CAPTIVE_BALLOON",
    /** E.g., a blimp. */
    AIRSHIP = "AIRSHIP",
    /** Parachutes, or objects without any power or propulsion mechanism. */
    FREE_FALL_PARACHUTE = "FREE_FALL_PARACHUTE",
    /** Rocket */
    ROCKET = "ROCKET",
    /** Tethered Powered Aircraft */
    TETHERED_POWERED_AIRCRAFT = "TETHERED_POWERED_AIRCRAFT",
    /** Ground Obstacle */
    GROUND_OBSTACLE = "GROUND_OBSTACLE",
    /** Other */
    OTHER = "OTHER",
};
/**
* The operating area type identifier.
*/
export enum UnmannedSystemOperatingAreaTypeIdEnum {
    
    /** The UA type is empty or not declared. */
    UNKNOWN_UNDECLARED = "UNKNOWN_UNDECLARED",
    /** Takeoff Location */
    TAKEOFF_LOCATION = "TAKEOFF_LOCATION",
    /** Fixed Location */
    FIXED_LOCATION = "FIXED_LOCATION",
    /** Dynamic Location */
    DYNAMIC_LOCATION = "DYNAMIC_LOCATION",
    /** Other */
    OTHER = "OTHER",
};
/**
* The account type identifier.
*/
export enum UserTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Regular user account. */
    USER = "USER",
    /** Admin/root user account. */
    ADMIN = "ADMIN",
    /** System account. For example, Windows computer accounts with a trailing dollar
sign ($). */
    SYSTEM = "SYSTEM",
    /** Service account. For example, Windows service account. */
    SERVICE = "SERVICE",
    /** Other */
    OTHER = "OTHER",
};
/**
* BaseEvent activity_id values.
*/
export enum BaseEventActivityIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Other */
    OTHER = "OTHER",
};
/**
* BaseEvent category_uid values.
*/
export enum BaseEventCategoryUidEnum {
    
    /** Uncategorized */
    UNCATEGORIZED = "UNCATEGORIZED",
};
/**
* BaseEvent class_uid values.
*/
export enum BaseEventClassUidEnum {
    
    /** Base Event */
    BASE_EVENT = "BASE_EVENT",
};
/**
* ApiActivity activity_id values.
*/
export enum ApiActivityActivityIdEnum {
    
    /** The API call in the event pertains to a 'create' activity. */
    CREATE = "CREATE",
    /** The API call in the event pertains to a 'read' activity. */
    READ = "READ",
    /** The API call in the event pertains to a 'update' activity. */
    UPDATE = "UPDATE",
    /** The API call in the event pertains to a 'delete' activity. */
    DELETE = "DELETE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* ApplicationError activity_id values.
*/
export enum ApplicationErrorActivityIdEnum {
    
    /** The application has experienced an error. */
    GENERAL_ERROR = "GENERAL_ERROR",
    /** The application has experienced an error translating (mapping) a raw event to
OCSF. Including the original raw event in the raw_data field is highly
recommended. */
    TRANSLATION_ERROR = "TRANSLATION_ERROR",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* ApplicationLifecycle activity_id values.
*/
export enum ApplicationLifecycleActivityIdEnum {
    
    /** Install the application. */
    INSTALL = "INSTALL",
    /** Remove the application. */
    REMOVE = "REMOVE",
    /** Start the application. */
    START = "START",
    /** Stop the application. */
    STOP = "STOP",
    /** Restart the application. */
    RESTART = "RESTART",
    /** Enable the application. */
    ENABLE = "ENABLE",
    /** Disable the application. */
    DISABLE = "DISABLE",
    /** Update the application. */
    UPDATE = "UPDATE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* DatastoreActivity activity_id values.
*/
export enum DatastoreActivityActivityIdEnum {
    
    /** The 'Read' activity involves accessing specific data record details. */
    READ = "READ",
    /** The 'Update' activity pertains to modifying specific data record details. */
    UPDATE = "UPDATE",
    /** The 'Connect' activity involves establishing a connection to the datastore. */
    CONNECT = "CONNECT",
    /** The 'Query' activity involves retrieving a filtered subset of data based on
specific criteria. */
    QUERY = "QUERY",
    /** The 'Write' activity involves writing specific data record details. */
    WRITE = "WRITE",
    /** The 'Create' activity involves generating new data record details. */
    CREATE = "CREATE",
    /** The 'Delete' activity involves removing specific data record details. */
    DELETE = "DELETE",
    /** The 'List' activity provides an overview of existing data records. */
    LIST = "LIST",
    /** The 'Encrypt' activity involves securing data by encrypting a specific data
record. */
    ENCRYPT = "ENCRYPT",
    /** The 'Decrypt' activity involves converting encrypted data back to its original
format. */
    DECRYPT = "DECRYPT",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized datastore resource type identifier.
*/
export enum DatastoreActivityTypeIdEnum {
    
    /** The datastore resource type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Database */
    DATABASE = "DATABASE",
    /** Databucket */
    DATABUCKET = "DATABUCKET",
    /** Table */
    TABLE = "TABLE",
    /** The datastore resource type is not mapped. */
    OTHER = "OTHER",
};
/**
* FileHosting activity_id values.
*/
export enum FileHostingActivityIdEnum {
    
    /** Upload a file. */
    UPLOAD = "UPLOAD",
    /** Download a file. */
    DOWNLOAD = "DOWNLOAD",
    /** Update a file. */
    UPDATE = "UPDATE",
    /** Delete a file. */
    DELETE = "DELETE",
    /** Rename a file. */
    RENAME = "RENAME",
    /** Copy a file. */
    COPY = "COPY",
    /** Move a file. */
    MOVE = "MOVE",
    /** Restore a file. */
    RESTORE = "RESTORE",
    /** Preview a file. */
    PREVIEW = "PREVIEW",
    /** Lock a file. */
    LOCK = "LOCK",
    /** Unlock a file. */
    UNLOCK = "UNLOCK",
    /** Share a file. */
    SHARE = "SHARE",
    /** Unshare a file. */
    UNSHARE = "UNSHARE",
    /** Open a file. */
    OPEN = "OPEN",
    /** Mark a file or folder to sync with a computer. */
    SYNC = "SYNC",
    /** Mark a file or folder to not sync with a computer. */
    UNSYNC = "UNSYNC",
    /** Access check for a file. The <code>security_control</code> profile can be used
to add the access check results. */
    ACCESS_CHECK = "ACCESS_CHECK",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* ScanActivity activity_id values.
*/
export enum ScanActivityActivityIdEnum {
    
    /** The scan was started. */
    STARTED = "STARTED",
    /** The scan was completed. */
    COMPLETED = "COMPLETED",
    /** The scan was cancelled. */
    CANCELLED = "CANCELLED",
    /** The allocated scan time was insufficient to complete the requested scan. */
    DURATION_VIOLATION = "DURATION_VIOLATION",
    /** The scan was paused, either by the user or by program constraints (e.g. scans
that are suspended during certain time intervals), and not resumed within the
allotted time. */
    PAUSE_VIOLATION = "PAUSE_VIOLATION",
    /** The scan could not be completed due to an internal error. */
    ERROR = "ERROR",
    /** The scan was paused. */
    PAUSED = "PAUSED",
    /** The scan was resumed from the pause point. */
    RESUMED = "RESUMED",
    /** The scan restarted from the beginning of the file enumeration. */
    RESTARTED = "RESTARTED",
    /** The user delayed the scan. */
    DELAYED = "DELAYED",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* WebResourceAccessActivity activity_id values.
*/
export enum WebResourceAccessActivityActivityIdEnum {
    
    /** The incoming request has permission to the web resource. */
    ACCESS_GRANT = "ACCESS_GRANT",
    /** The incoming request does not have permission to the web resource. */
    ACCESS_DENY = "ACCESS_DENY",
    /** The incoming request's access has been revoked due to security policy
enforcements. */
    ACCESS_REVOKE = "ACCESS_REVOKE",
    /** An error occurred during processing the request. */
    ACCESS_ERROR = "ACCESS_ERROR",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* WebResourcesActivity activity_id values.
*/
export enum WebResourcesActivityActivityIdEnum {
    
    /** One or more web resources were created. */
    CREATE = "CREATE",
    /** One or more web resources were read / viewed. */
    READ = "READ",
    /** One or more web resources were updated. */
    UPDATE = "UPDATE",
    /** One or more web resources were deleted. */
    DELETE = "DELETE",
    /** A search was performed on one or more web resources. */
    SEARCH = "SEARCH",
    /** One or more web resources were imported into an Application. */
    IMPORT = "IMPORT",
    /** One or more web resources were exported from an Application. */
    EXPORT = "EXPORT",
    /** One or more web resources were shared. */
    SHARE = "SHARE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* DiscoveryEvent activity_id values.
*/
export enum DiscoveryEventActivityIdEnum {
    
    /** The discovered information is via a log. */
    LOG = "LOG",
    /** The discovered information is via a collection process. */
    COLLECT = "COLLECT",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The Config Change State of the managed entity.
*/
export enum DeviceConfigStateChangeStateIdEnum {
    
    /** The Config Change state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Config State Changed to Disabled. */
    DISABLED = "DISABLED",
    /** Config State Changed to Enabled. */
    ENABLED = "ENABLED",
    /** The Config Change is not mapped. See the <code>state</code> attribute, which
contains data source specific values. */
    OTHER = "OTHER",
};
/**
* DiscoveryResult activity_id values.
*/
export enum DiscoveryResultActivityIdEnum {
    
    /** The discovered results are via a query request. */
    QUERY = "QUERY",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The state of the socket.
*/
export enum NetworkConnectionQueryStateIdEnum {
    
    /** The socket state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The socket has an established connection between a local application and a
remote peer. */
    ESTABLISHED = "ESTABLISHED",
    /** The socket is actively trying to establish a connection to a remote peer. */
    SYN_SENT = "SYN_SENT",
    /** The socket has passively received a connection request from a remote peer. */
    SYN_RECV = "SYN_RECV",
    /** The socket connection has been closed by the local application, the remote peer
has not yet acknowledged the close, and the system is waiting for it to close
its half of the connection. */
    FIN_WAIT1 = "FIN_WAIT1",
    /** The socket connection has been closed by the local application, the remote peer
has acknowledged the close, and the system is waiting for it to close its half
of the connection. */
    FIN_WAIT2 = "FIN_WAIT2",
    /** The socket connection has been closed by the local application, the remote peer
has closed its half of the connection, and the system is waiting to be sure
that the remote peer received the last acknowledgement. */
    TIME_WAIT = "TIME_WAIT",
    /** The socket is not in use. */
    CLOSED = "CLOSED",
    /** The socket connection has been closed by the remote peer, and the system is
waiting for the local application to close its half of the connection. */
    CLOSE_WAIT = "CLOSE_WAIT",
    /** The socket connection has been closed by the remote peer, the local application
has closed its half of the connection, and the system is waiting for the remote
peer to acknowledge the close. */
    LAST_ACK = "LAST_ACK",
    /** The socket is listening for incoming connections. */
    LISTEN = "LISTEN",
    /** The socket connection has been closed by the local application and the remote
peer simultaneously, and the remote peer has not yet acknowledged the close
attempt of the local application. */
    CLOSING = "CLOSING",
    /** The state is not mapped. See the <code>state</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the Data Security Finding activity.
*/
export enum DataSecurityFindingActivityIdEnum {
    
    /** A new Data Security finding is created. */
    CREATE = "CREATE",
    /** An existing Data Security finding is updated with more information. */
    UPDATE = "UPDATE",
    /** An existing Data Security finding is closed, this can be due to any resolution
(e.g., True Positive, False Positive, etc.). */
    CLOSE = "CLOSE",
    /** An existing Data Security finding is suppressed due to inaccurate detection
techniques or a known true negative. */
    SUPPRESSED = "SUPPRESSED",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the finding activity.
*/
export enum FindingActivityIdEnum {
    
    /** A finding was created. */
    CREATE = "CREATE",
    /** A finding was updated. */
    UPDATE = "UPDATE",
    /** A finding was closed. */
    CLOSE = "CLOSE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized status identifier of the Finding, set by the consumer.
*/
export enum FindingStatusIdEnum {
    
    /** The Finding is new and yet to be reviewed. */
    NEW = "NEW",
    /** The Finding is under review. */
    IN_PROGRESS = "IN_PROGRESS",
    /** The Finding was reviewed, determined to be benign or a false positive and is
now suppressed. */
    SUPPRESSED = "SUPPRESSED",
    /** The Finding was reviewed, remediated and is now considered resolved. */
    RESOLVED = "RESOLVED",
    /** The Finding was archived. */
    ARCHIVED = "ARCHIVED",
    /** The Finding was deleted. For example, it might have been created in error. */
    DELETED = "DELETED",
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the Incident activity.
*/
export enum IncidentFindingActivityIdEnum {
    
    /** Reports the creation of an Incident. */
    CREATE = "CREATE",
    /** Reports updates to an Incident. */
    UPDATE = "UPDATE",
    /** Reports closure of an Incident . */
    CLOSE = "CLOSE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized status identifier of the Incident.
*/
export enum IncidentFindingStatusIdEnum {
    
    /** The service desk has received the incident but has not assigned it to an agent. */
    NEW = "NEW",
    /** The incident has been assigned to an agent but has not been resolved. The agent
is actively working with the user to diagnose and resolve the incident. */
    IN_PROGRESS = "IN_PROGRESS",
    /** The incident requires some information or response from the user or from a
third party. */
    ON_HOLD = "ON_HOLD",
    /** The service desk has confirmed that the incident is resolved. */
    RESOLVED = "RESOLVED",
    /** The incident is resolved and no further action is necessary. */
    CLOSED = "CLOSED",
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* SecurityFinding activity_id values.
*/
export enum SecurityFindingActivityIdEnum {
    
    /** A security finding was created. */
    CREATE = "CREATE",
    /** A security finding was updated. */
    UPDATE = "UPDATE",
    /** A security finding was closed. */
    CLOSE = "CLOSE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized state identifier of a security finding.
*/
export enum SecurityFindingStateIdEnum {
    
    /** The finding is new and yet to be reviewed. */
    NEW = "NEW",
    /** The finding is under review. */
    IN_PROGRESS = "IN_PROGRESS",
    /** The finding was reviewed, considered as a false positive and is now suppressed. */
    SUPPRESSED = "SUPPRESSED",
    /** The finding was reviewed and remediated and is now considered resolved. */
    RESOLVED = "RESOLVED",
    /** The state is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The state is not mapped. See the <code>state</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* AccountChange activity_id values.
*/
export enum AccountChangeActivityIdEnum {
    
    /** A user/role was created. */
    CREATE = "CREATE",
    /** A user/role was enabled. */
    ENABLE = "ENABLE",
    /** An attempt was made to change a user account's password. */
    PASSWORD_CHANGE = "PASSWORD_CHANGE",
    /** An attempt was made to reset a user account's password. */
    PASSWORD_RESET = "PASSWORD_RESET",
    /** A user/role was disabled. */
    DISABLE = "DISABLE",
    /** A user/role was deleted. */
    DELETE = "DELETE",
    /** An IAM Policy was attached to a user/role. */
    ATTACH_POLICY = "ATTACH_POLICY",
    /** An IAM Policy was detached from a user/role. */
    DETACH_POLICY = "DETACH_POLICY",
    /** A user account was locked out. */
    LOCK = "LOCK",
    /** One or more authentication factors were enabled for a user account. */
    MFA_FACTOR_ENABLE = "MFA_FACTOR_ENABLE",
    /** One or more authentication factors were disabled for a user account. */
    MFA_FACTOR_DISABLE = "MFA_FACTOR_DISABLE",
    /** A user account was unlocked. */
    UNLOCK = "UNLOCK",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* Authentication activity_id values.
*/
export enum AuthenticationActivityIdEnum {
    
    /** A new logon session was requested. */
    LOGON = "LOGON",
    /** A logon session was terminated and no longer exists. */
    LOGOFF = "LOGOFF",
    /** A Kerberos authentication ticket (TGT) was requested. */
    AUTHENTICATION_TICKET = "AUTHENTICATION_TICKET",
    /** A Kerberos service ticket was requested. */
    SERVICE_TICKET_REQUEST = "SERVICE_TICKET_REQUEST",
    /** A Kerberos service ticket was renewed. */
    SERVICE_TICKET_RENEW = "SERVICE_TICKET_RENEW",
    /** A preauthentication stage was engaged. */
    PREAUTH = "PREAUTH",
    /** A utility or service switched the user account. See the
<code>account_switch_type_id</code> attribute for more details. */
    ACCOUNT_SWITCH = "ACCOUNT_SWITCH",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* AuthorizeSession activity_id values.
*/
export enum AuthorizeSessionActivityIdEnum {
    
    /** Assign special privileges to a new logon. */
    ASSIGN_PRIVILEGES = "ASSIGN_PRIVILEGES",
    /** Assign special groups to a new logon. */
    ASSIGN_GROUPS = "ASSIGN_GROUPS",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* EntityManagement activity_id values.
*/
export enum EntityManagementActivityIdEnum {
    
    /** Create a new managed entity. */
    CREATE = "CREATE",
    /** Read an existing managed entity. */
    READ = "READ",
    /** Update an existing managed entity. */
    UPDATE = "UPDATE",
    /** Delete a managed entity. */
    DELETE = "DELETE",
    /** Move or rename an existing managed entity. */
    MOVE = "MOVE",
    /** Enroll an existing managed entity. */
    ENROLL = "ENROLL",
    /** Unenroll an existing managed entity. */
    UNENROLL = "UNENROLL",
    /** Enable an existing managed entity. Note: This is typically regarded as a
semi-permanent, editor visible, syncable change. */
    ENABLE = "ENABLE",
    /** Disable an existing managed entity. Note: This is typically regarded as a
semi-permanent, editor visible, syncable change. */
    DISABLE = "DISABLE",
    /** Activate an existing managed entity. Note: This is a typically regarded as a
transient change, a change of state of the engine. */
    ACTIVATE = "ACTIVATE",
    /** Deactivate an existing managed entity. Note: This is a typically regarded as a
transient change, a change of state of the engine. */
    DEACTIVATE = "DEACTIVATE",
    /** Suspend an existing managed entity. */
    SUSPEND = "SUSPEND",
    /** Resume (unsuspend) an existing managed entity. */
    RESUME = "RESUME",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* GroupManagement activity_id values.
*/
export enum GroupManagementActivityIdEnum {
    
    /** Assign privileges to a group. */
    ASSIGN_PRIVILEGES = "ASSIGN_PRIVILEGES",
    /** Revoke privileges from a group. */
    REVOKE_PRIVILEGES = "REVOKE_PRIVILEGES",
    /** Add user to a group. */
    ADD_USER = "ADD_USER",
    /** Remove user from a group. */
    REMOVE_USER = "REMOVE_USER",
    /** A group was deleted. */
    DELETE = "DELETE",
    /** A group was created. */
    CREATE = "CREATE",
    /** Add subgroup to a group. */
    ADD_SUBGROUP = "ADD_SUBGROUP",
    /** Remove subgroup from a group. */
    REMOVE_SUBGROUP = "REMOVE_SUBGROUP",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* UserAccess activity_id values.
*/
export enum UserAccessActivityIdEnum {
    
    /** Assign privileges to a user. */
    ASSIGN_PRIVILEGES = "ASSIGN_PRIVILEGES",
    /** Revoke privileges from a user. */
    REVOKE_PRIVILEGES = "REVOKE_PRIVILEGES",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the observation point. The observation point
identifier indicates whether the source network endpoint, destination network
endpoint, or neither served as the observation point for the activity.
*/
export enum NetworkEventObservationPointIdEnum {
    
    /** The observation point is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The source network endpoint is the observation point. */
    SOURCE = "SOURCE",
    /** The destination network endpoint is the observation point. */
    DESTINATION = "DESTINATION",
    /** Neither the source nor destination network endpoint is the observation point.
Refer to the <code>network_observation_point</code> attribute for details. */
    NEITHER = "NEITHER",
    /** Both the source and destination network endpoint are the observation point.
This typically occurs in localhost or internal communications where the source
and destination are the same endpoint, often resulting in a
<code>connection_info.direction</code> of <code>Local</code>. */
    BOTH = "BOTH",
    /** The observation point is not mapped. See the <code>observation_point</code>
attribute for a data source specific value. */
    OTHER = "OTHER",
};
/**
* DhcpActivity activity_id values.
*/
export enum DhcpActivityActivityIdEnum {
    
    /** DHCPDISCOVER */
    DISCOVER = "DISCOVER",
    /** DHCPOFFER */
    OFFER = "OFFER",
    /** DHCPREQUEST */
    REQUEST = "REQUEST",
    /** DHCPDECLINE */
    DECLINE = "DECLINE",
    /** DHCPACK: The server accepts the request by sending the client a DHCP
Acknowledgment message. */
    ACK = "ACK",
    /** DHCPNAK */
    NAK = "NAK",
    /** DHCPRELEASE: A DHCP client sends a DHCPRELEASE packet to the server to release
the IP address and cancel any remaining lease. */
    RELEASE = "RELEASE",
    /** DHCPINFORM */
    INFORM = "INFORM",
    /** DHCPEXPIRE: A DHCP lease expired. */
    EXPIRE = "EXPIRE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* DnsActivity activity_id values.
*/
export enum DnsActivityActivityIdEnum {
    
    /** The DNS query request. */
    QUERY = "QUERY",
    /** The DNS query response. */
    RESPONSE = "RESPONSE",
    /** Bidirectional DNS request and response traffic. */
    TRAFFIC = "TRAFFIC",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the DNS server response code. See <a
target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc6895'>RFC-6895</a>.
*/
export enum DnsActivityRcodeIdEnum {
    
    /** No Error. */
    NOERROR = "NOERROR",
    /** Format Error. */
    FORMERROR = "FORMERROR",
    /** Server Failure. */
    SERVERROR = "SERVERROR",
    /** Non-Existent Domain. */
    NXDOMAIN = "NXDOMAIN",
    /** Not Implemented. */
    NOTIMP = "NOTIMP",
    /** Query Refused. */
    REFUSED = "REFUSED",
    /** Name Exists when it should not. */
    YXDOMAIN = "YXDOMAIN",
    /** RR Set Exists when it should not. */
    YXRRSET = "YXRRSET",
    /** RR Set that should exist does not. */
    NXRRSET = "NXRRSET",
    /** Not Authorized or Server Not Authoritative for zone. */
    NOTAUTH = "NOTAUTH",
    /** Name not contained in zone. */
    NOTZONE = "NOTZONE",
    /** DSO-TYPE Not Implemented. */
    DSOTYPENI = "DSOTYPENI",
    /** TSIG Signature Failure or Bad OPT Version. */
    BADSIG_VERS = "BADSIG_VERS",
    /** Key not recognized. */
    BADKEY = "BADKEY",
    /** Signature out of time window. */
    BADTIME = "BADTIME",
    /** Bad TKEY Mode. */
    BADMODE = "BADMODE",
    /** Duplicate key name. */
    BADNAME = "BADNAME",
    /** Algorithm not supported. */
    BADALG = "BADALG",
    /** Bad Truncation. */
    BADTRUNC = "BADTRUNC",
    /** Bad/missing Server Cookie. */
    BADCOOKIE = "BADCOOKIE",
    /** The codes deemed to be unassigned by the RFC (unassigned codes: 12-15, 24-3840,
4096-65534). */
    UNASSIGNED = "UNASSIGNED",
    /** The codes deemed to be reserved by the RFC (codes: 3841-4095, 65535). */
    RESERVED = "RESERVED",
    /** The dns response code is not defined by the RFC. */
    OTHER = "OTHER",
};
/**
* EmailActivity activity_id values.
*/
export enum EmailActivityActivityIdEnum {
    
    /** Send */
    SEND = "SEND",
    /** Receive */
    RECEIVE = "RECEIVE",
    /** Email being scanned (example: security scanning) */
    SCAN = "SCAN",
    /** Follow an email message as it travels through an organization. The
<code>message_trace_uid</code> should be populated when selected. */
    TRACE = "TRACE",
    /** Email processed by an MTA, typically combining send, receive, and scan
operations into a single activity. */
    MTA_RELAY = "MTA_RELAY",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* <p>The direction of the email relative to the scanning host or
organization.</p>Email scanned at an internet gateway might be characterized as
inbound to the organization from the Internet, outbound from the organization
to the Internet, or internal within the organization. Email scanned at a
workstation might be characterized as inbound to, or outbound from the
workstation.
*/
export enum EmailActivityDirectionIdEnum {
    
    /** The email direction is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Email Inbound, from the Internet or outside network destined for an entity
inside network. */
    INBOUND = "INBOUND",
    /** Email Outbound, from inside the network destined for an entity outside network. */
    OUTBOUND = "OUTBOUND",
    /** Email Internal, from inside the network destined for an entity inside network. */
    INTERNAL = "INTERNAL",
    /** Other */
    OTHER = "OTHER",
    /** Local network connection (<code>localhost</code>). The connection is
intra-device, originating from and destined for services running on the same
device. */
    LOCAL = "LOCAL",
};
/**
* EmailFileActivity activity_id values.
*/
export enum EmailFileActivityActivityIdEnum {
    
    /** Send */
    SEND = "SEND",
    /** Receive */
    RECEIVE = "RECEIVE",
    /** Email file being scanned (example: security scanning). */
    SCAN = "SCAN",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* EmailUrlActivity activity_id values.
*/
export enum EmailUrlActivityActivityIdEnum {
    
    /** Send */
    SEND = "SEND",
    /** Receive */
    RECEIVE = "RECEIVE",
    /** Email URL being scanned (example: security scanning). */
    SCAN = "SCAN",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* FtpActivity activity_id values.
*/
export enum FtpActivityActivityIdEnum {
    
    /** File upload to the FTP or SFTP site. */
    PUT = "PUT",
    /** File download from the FTP or SFTP site. */
    GET = "GET",
    /** Poll directory for specific file(s) or folder(s) at the FTP or SFTP site
location. */
    POLL = "POLL",
    /** Delete file(s) from the FTP or SFTP site. */
    DELETE = "DELETE",
    /** Rename the file(s) in the FTP or SFTP site. */
    RENAME = "RENAME",
    /** List files in a specified directory. */
    LIST = "LIST",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* HttpActivity activity_id values.
*/
export enum HttpActivityActivityIdEnum {
    
    /** The CONNECT method establishes a tunnel to the server identified by the target
resource. */
    CONNECT = "CONNECT",
    /** The DELETE method deletes the specified resource. */
    DELETE = "DELETE",
    /** The GET method requests a representation of the specified resource. Requests
using GET should only retrieve data. */
    GET = "GET",
    /** The HEAD method asks for a response identical to a GET request, but without the
response body. */
    HEAD = "HEAD",
    /** The OPTIONS method describes the communication options for the target resource. */
    OPTIONS = "OPTIONS",
    /** The POST method submits an entity to the specified resource, often causing a
change in state or side effects on the server. */
    POST = "POST",
    /** The PUT method replaces all current representations of the target resource with
the request payload. */
    PUT = "PUT",
    /** The TRACE method performs a message loop-back test along the path to the target
resource. */
    TRACE = "TRACE",
    /** The PATCH method applies partial modifications to a resource. */
    PATCH = "PATCH",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* NetworkActivity activity_id values.
*/
export enum NetworkActivityActivityIdEnum {
    
    /** A new network connection was opened. */
    OPEN = "OPEN",
    /** The network connection was closed. */
    CLOSE = "CLOSE",
    /** The network connection was abnormally terminated or closed by a middle device
like firewalls. */
    RESET = "RESET",
    /** The network connection failed. For example a connection timeout or no route to
host. */
    FAIL = "FAIL",
    /** The network connection was refused. For example an attempt to connect to a
server port which is not open. */
    REFUSE = "REFUSE",
    /** Network traffic report. */
    TRAFFIC = "TRAFFIC",
    /** A network endpoint began listening for new network connections. */
    LISTEN = "LISTEN",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the endpoint that initiated the network
communication. Use this field to disambiguate source and destination roles in
bi-directional or asymmetric flow scenarios.
*/
export enum NetworkActivityInitiatorIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** The <code>src_endpoint</code> is the true initiator and the source/destination
assignment is correct. */
    SOURCE_ENDPOINT = "SOURCE_ENDPOINT",
    /** The <code>dst_endpoint</code> is the true initiator and the source/destination
assignment is reversed. */
    DESTINATION_ENDPOINT = "DESTINATION_ENDPOINT",
    /** Other */
    OTHER = "OTHER",
};
/**
* NetworkFileActivity activity_id values.
*/
export enum NetworkFileActivityActivityIdEnum {
    
    /** Upload a file. */
    UPLOAD = "UPLOAD",
    /** Download a file. */
    DOWNLOAD = "DOWNLOAD",
    /** Update a file. */
    UPDATE = "UPDATE",
    /** Delete a file. */
    DELETE = "DELETE",
    /** Rename a file. */
    RENAME = "RENAME",
    /** Copy a file. */
    COPY = "COPY",
    /** Move a file. */
    MOVE = "MOVE",
    /** Restore a file. */
    RESTORE = "RESTORE",
    /** Preview a file. */
    PREVIEW = "PREVIEW",
    /** Lock a file. */
    LOCK = "LOCK",
    /** Unlock a file. */
    UNLOCK = "UNLOCK",
    /** Share a file. */
    SHARE = "SHARE",
    /** Unshare a file. */
    UNSHARE = "UNSHARE",
    /** Open a file. */
    OPEN = "OPEN",
    /** Mark a file or folder to sync with a computer. */
    SYNC = "SYNC",
    /** Mark a file or folder to not sync with a computer. */
    UNSYNC = "UNSYNC",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* NtpActivity activity_id values.
*/
export enum NtpActivityActivityIdEnum {
    
    /** Not used in standard NTP implementations. */
    UNKNOWN = "UNKNOWN",
    /** Bidirectional time exchange between devices. */
    SYMMETRIC_ACTIVE_EXCHANGE = "SYMMETRIC_ACTIVE_EXCHANGE",
    /** Device responds as a server to peers in symmetric active mode. */
    SYMMETRIC_PASSIVE_RESPONSE = "SYMMETRIC_PASSIVE_RESPONSE",
    /** NTP client, syncs with servers. */
    CLIENT_SYNCHRONIZATION = "CLIENT_SYNCHRONIZATION",
    /** Dedicated NTP time server, responds to clients. */
    SERVER_RESPONSE = "SERVER_RESPONSE",
    /** Broadcast time info to network devices. */
    BROADCAST = "BROADCAST",
    /** Monitoring and control messaging. */
    CONTROL = "CONTROL",
    /** Reserved - Not defined in standard NTP specifications. */
    PRIVATE_USE_CASE = "PRIVATE_USE_CASE",
    /** The event activity is not mapped. */
    OTHER = "OTHER",
};
/**
* RdpActivity activity_id values.
*/
export enum RdpActivityActivityIdEnum {
    
    /** The initial RDP request. */
    INITIAL_REQUEST = "INITIAL_REQUEST",
    /** The initial RDP response. */
    INITIAL_RESPONSE = "INITIAL_RESPONSE",
    /** An RDP connection request. */
    CONNECT_REQUEST = "CONNECT_REQUEST",
    /** An RDP connection response. */
    CONNECT_RESPONSE = "CONNECT_RESPONSE",
    /** The TLS handshake. */
    TLS_HANDSHAKE = "TLS_HANDSHAKE",
    /** Network traffic report. */
    TRAFFIC = "TRAFFIC",
    /** An RDP connection disconnect. */
    DISCONNECT = "DISCONNECT",
    /** An RDP connection reconnect. */
    RECONNECT = "RECONNECT",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* SmbActivity activity_id values.
*/
export enum SmbActivityActivityIdEnum {
    
    /** The event pertains to file superseded activity (overwritten if it exists and
created if not). */
    FILE_SUPERSEDE = "FILE_SUPERSEDE",
    /** The event pertains to file open activity (the file is opened if it exists and
fails to open if it doesn't). */
    FILE_OPEN = "FILE_OPEN",
    /** The event pertains to file creation activity (a file is created if it does not
exist and fails if it does). */
    FILE_CREATE = "FILE_CREATE",
    /** The event pertains to file open activity (the file is opened if it exists and
is created if it doesn't). */
    FILE_OPEN_IF = "FILE_OPEN_IF",
    /** The event pertains to file overwrite activity (the file is opened in a
truncated form if it exists and fails if it doesn't). */
    FILE_OVERWRITE = "FILE_OVERWRITE",
    /** The event pertains to file overwrite activity (the file is opened in a
truncated form if it exists and created otherwise) */
    FILE_OVERWRITE_IF = "FILE_OVERWRITE_IF",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* SshActivity activity_id values.
*/
export enum SshActivityActivityIdEnum {
    
    /** A new network connection was opened. */
    OPEN = "OPEN",
    /** The network connection was closed. */
    CLOSE = "CLOSE",
    /** The network connection was abnormally terminated or closed by a middle device
like firewalls. */
    RESET = "RESET",
    /** The network connection failed. For example a connection timeout or no route to
host. */
    FAIL = "FAIL",
    /** The network connection was refused. For example an attempt to connect to a
server port which is not open. */
    REFUSE = "REFUSE",
    /** Network traffic report. */
    TRAFFIC = "TRAFFIC",
    /** A network endpoint began listening for new network connections. */
    LISTEN = "LISTEN",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the SSH authentication type.
*/
export enum SshActivityAuthTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Authentication using digital certificates. */
    CERTIFICATE_BASED = "CERTIFICATE_BASED",
    /** GSSAPI for centralized authentication. */
    GSSAPI = "GSSAPI",
    /** Authentication based on the client host's identity. */
    HOST_BASED = "HOST_BASED",
    /** Multi-step, interactive authentication. */
    KEYBOARD_INTERACTIVE = "KEYBOARD_INTERACTIVE",
    /** Password Authentication. */
    PASSWORD = "PASSWORD",
    /** Paired public key authentication. */
    PUBLIC_KEY = "PUBLIC_KEY",
    /** Other */
    OTHER = "OTHER",
};
/**
* TunnelActivity activity_id values.
*/
export enum TunnelActivityActivityIdEnum {
    
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Open a tunnel. */
    OPEN = "OPEN",
    /** Close a tunnel. */
    CLOSE = "CLOSE",
    /** Renew a tunnel. */
    RENEW = "RENEW",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier for the type of tunnel configuration, indicating the
scope of traffic routed through the connection. Example: <code>1 (Split
Tunnel)</code> or <code>2 (Full Tunnel)</code>.
*/
export enum TunnelActivityTunnelTypeIdEnum {
    
    /** Unknown */
    UNKNOWN = "UNKNOWN",
    /** Split Tunnel */
    SPLIT_TUNNEL = "SPLIT_TUNNEL",
    /** Full Tunnel */
    FULL_TUNNEL = "FULL_TUNNEL",
    /** Other */
    OTHER = "OTHER",
};
/**
* Matches the MITRE D3FEND™ Tactic. Note: the Model and Detect Tactics are not
supported as remediations by the OCSF Remediation event class.
*/
export enum RemediationActivityActivityIdEnum {
    
    /** Creates logical or physical barriers in a system which reduces opportunities
for adversaries to create further accesses. Defined by D3FEND™ <a
target='_blank'
href='https://d3fend.mitre.org/tactic/d3f:Isolate/'>d3f:Isolate</a>. */
    ISOLATE = "ISOLATE",
    /** Removes an adversary or malicious resource from a device or computer network.
Defined by D3FEND™ <a target='_blank'
href='https://d3fend.mitre.org/tactic/d3f:Evict/'>d3f:Evict</a>. */
    EVICT = "EVICT",
    /** Returns the system to a better state. Defined by D3FEND™ <a target='_blank'
href='https://d3fend.mitre.org/tactic/d3f:Restore/'>d3f:Restore</a>. */
    RESTORE = "RESTORE",
    /** Increases the opportunity cost of computer network exploitation. Defined by
D3FEND™ <a target='_blank'
href='https://d3fend.mitre.org/tactic/d3f:Harden/'>d3f:Harden</a>. */
    HARDEN = "HARDEN",
    /** Further identify adversary access to or unauthorized activity on computer
networks. Defined by D3FEND™ <a target='_blank'
href='https://d3fend.mitre.org/tactic/d3f:Detect/'>d3f:Detect</a>. */
    DETECT = "DETECT",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* RemediationActivity status_id values.
*/
export enum RemediationActivityStatusIdEnum {
    
    /** The target of the remediation does not exist. */
    DOES_NOT_EXIST = "DOES_NOT_EXIST",
    /** The remediation was partially completed. */
    PARTIAL = "PARTIAL",
    /** The remediation was not supported. */
    UNSUPPORTED = "UNSUPPORTED",
    /** There was an error during the remediation process. */
    ERROR = "ERROR",
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Success */
    SUCCESS = "SUCCESS",
    /** Failure */
    FAILURE = "FAILURE",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* EventLogActvity activity_id values.
*/
export enum EventLogActvityActivityIdEnum {
    
    /** Clear the event log database, file, or cache. */
    CLEAR = "CLEAR",
    /** Delete the event log database, file, or cache. */
    DELETE = "DELETE",
    /** Export the event log database, file, or cache. */
    EXPORT = "EXPORT",
    /** Archive the event log database, file, or cache. */
    ARCHIVE = "ARCHIVE",
    /** Rotate the event log database, file, or cache. */
    ROTATE = "ROTATE",
    /** Start the event logging service. */
    START = "START",
    /** Stop the event logging service. */
    STOP = "STOP",
    /** Restart the event logging service. */
    RESTART = "RESTART",
    /** Enable the event logging service. */
    ENABLE = "ENABLE",
    /** Disable the event logging service. */
    DISABLE = "DISABLE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* FileActivity activity_id values.
*/
export enum FileActivityActivityIdEnum {
    
    /** A request to create a new file on a file system. */
    CREATE = "CREATE",
    /** A request to read data from a file on a file system. */
    READ = "READ",
    /** A request to write data to a file on a file system. */
    UPDATE = "UPDATE",
    /** A request to delete a file on a file system. */
    DELETE = "DELETE",
    /** A request to rename a file on a file system. */
    RENAME = "RENAME",
    /** A request to set attributes for a file on a file system. */
    SET_ATTRIBUTES = "SET_ATTRIBUTES",
    /** A request to set security for a file on a file system. */
    SET_SECURITY = "SET_SECURITY",
    /** A request to get attributes for a file on a file system. */
    GET_ATTRIBUTES = "GET_ATTRIBUTES",
    /** A request to get security for a file on a file system. */
    GET_SECURITY = "GET_SECURITY",
    /** A request to encrypt a file on a file system. */
    ENCRYPT = "ENCRYPT",
    /** A request to decrypt a file on a file system. */
    DECRYPT = "DECRYPT",
    /** A request to mount a file on a file system. */
    MOUNT = "MOUNT",
    /** A request to unmount a file from a file system. */
    UNMOUNT = "UNMOUNT",
    /** A request to create a file handle. */
    OPEN = "OPEN",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* KernelActivity activity_id values.
*/
export enum KernelActivityActivityIdEnum {
    
    /** Create */
    CREATE = "CREATE",
    /** Read */
    READ = "READ",
    /** Delete */
    DELETE = "DELETE",
    /** Invoke */
    INVOKE = "INVOKE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* KernelExtensionActivity activity_id values.
*/
export enum KernelExtensionActivityActivityIdEnum {
    
    /** A driver/extension was loaded into the kernel */
    LOAD = "LOAD",
    /** A driver/extension was unloaded (removed) from the kernel */
    UNLOAD = "UNLOAD",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* MemoryActivity activity_id values.
*/
export enum MemoryActivityActivityIdEnum {
    
    /** Allocate Page */
    ALLOCATE_PAGE = "ALLOCATE_PAGE",
    /** Modify Page */
    MODIFY_PAGE = "MODIFY_PAGE",
    /** Delete Page */
    DELETE_PAGE = "DELETE_PAGE",
    /** Buffer Overflow */
    BUFFER_OVERFLOW = "BUFFER_OVERFLOW",
    /** Data Execution Permission */
    DISABLE_DEP = "DISABLE_DEP",
    /** Data Execution Permission */
    ENABLE_DEP = "ENABLE_DEP",
    /** Read (Example: <code>ReadProcessMemory</code>) */
    READ = "READ",
    /** Write (Example: <code>WriteProcessMemory</code>) */
    WRITE = "WRITE",
    /** Map View (Example: <code>MapViewOfFile2</code>) */
    MAP_VIEW = "MAP_VIEW",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* ModuleActivity activity_id values.
*/
export enum ModuleActivityActivityIdEnum {
    
    /** The target module was loaded. */
    LOAD = "LOAD",
    /** The target module was unloaded. */
    UNLOAD = "UNLOAD",
    /** A function exported from the target module was invoked. */
    INVOKE = "INVOKE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* PeripheralActivity activity_id values.
*/
export enum PeripheralActivityActivityIdEnum {
    
    /** A peripheral device was connected to the system. */
    CONNECT = "CONNECT",
    /** A peripheral device was disconnected from the system. */
    DISCONNECT = "DISCONNECT",
    /** A peripheral device was enabled on the system. */
    ENABLE = "ENABLE",
    /** A peripheral device was disabled on the system. */
    DISABLE = "DISABLE",
    /** A peripheral device was ejected from the system. This is typically used for
removable media devices. Note: For <code>Mount</code> and <code>Unmount</code>
events, see the <a target='_blank' href='file_activity'>File System
Activity</a> event class. */
    EJECT = "EJECT",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* ProcessActivity activity_id values.
*/
export enum ProcessActivityActivityIdEnum {
    
    /** A request by the actor to launch another process. Refer to the
<code>launch_type_id</code> attribute for details of the specific launch type. */
    LAUNCH = "LAUNCH",
    /** A request by the actor to terminate a process. This activity is most commonly
reflexive, this being the case when a process exits at its own initiation. Note
too that Windows security products cannot always identify the actor in the case
of inter-process termination. In this case, <code>actor.process</code> and
<code>process</code> refer to the exiting process, i.e. indistinguishable from
the reflexive case. */
    TERMINATE = "TERMINATE",
    /** A request by the actor to obtain a handle or descriptor to a process with the
aim of performing further actions upon that process. The target is usually a
different process but this activity can also be reflexive. */
    OPEN = "OPEN",
    /** A request by the actor to execute code within the context of a process. The
target is usually a different process but this activity can also be reflexive.
Refer to the <code>injection_type_id</code> attribute for details of the
specific injection type. */
    INJECT = "INJECT",
    /** A request by the actor to change its user identity by invoking the
<code>setuid()</code> system call. Common programs like <code>su</code> and
<code>sudo</code> use this mechanism. Note that the <em>impersonation</em>
mechanism on Windows is not directly equivalent because it acts at the thread
level. */
    SET_USER_ID = "SET_USER_ID",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* ScheduledJobActivity activity_id values.
*/
export enum ScheduledJobActivityActivityIdEnum {
    
    /** Create */
    CREATE = "CREATE",
    /** Update */
    UPDATE = "UPDATE",
    /** Delete */
    DELETE = "DELETE",
    /** Enable */
    ENABLE = "ENABLE",
    /** Disable */
    DISABLE = "DISABLE",
    /** Start */
    START = "START",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* ScriptActivity activity_id values.
*/
export enum ScriptActivityActivityIdEnum {
    
    /** Execute */
    EXECUTE = "EXECUTE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* AirborneBroadcastActivity activity_id values.
*/
export enum AirborneBroadcastActivityActivityIdEnum {
    
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** ADS-B information is being captured (collected). */
    CAPTURE = "CAPTURE",
    /** ADS-B information is being recorded, for example by a standalone transceiver. */
    RECORD = "RECORD",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* DroneFlightsActivity activity_id values.
*/
export enum DroneFlightsActivityActivityIdEnum {
    
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Remote ID information from an Unmanned System is being captured (collected). */
    CAPTURE = "CAPTURE",
    /** Unmanned System activity is being recorded. */
    RECORD = "RECORD",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the authentication type used to authorize a flight
plan or mission.
*/
export enum DroneFlightsActivityAuthProtocolIdEnum {
    
    /** The authentication type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** None */
    NONE = "NONE",
    /** UAS ID Signature */
    UAS_ID_SIGNATURE = "UAS_ID_SIGNATURE",
    /** Operator ID Signature */
    OPERATOR_ID_SIGNATURE = "OPERATOR_ID_SIGNATURE",
    /** Message Set Signature */
    MESSAGE_SET_SIGNATURE = "MESSAGE_SET_SIGNATURE",
    /** Authentication Provided by Network Remote ID */
    AUTHENTICATION_PROVIDED_BY_NETWORK_REMOTE_ID = "AUTHENTICATION_PROVIDED_BY_NETWORK_REMOTE_ID",
    /** Specific Authentication Method */
    SPECIFIC_AUTHENTICATION_METHOD = "SPECIFIC_AUTHENTICATION_METHOD",
    /** Reserved */
    RESERVED = "RESERVED",
    /** Private User */
    PRIVATE_USER = "PRIVATE_USER",
    /** The authentication type is not mapped. See the <code>auth_protocol</code>
attribute, which contains a data source specific value. */
    OTHER = "OTHER",
    /** EAP */
    EAP = "EAP",
    /** RADIUS */
    RADIUS = "RADIUS",
    /** Basic Authentication */
    BASIC_AUTHENTICATION = "BASIC_AUTHENTICATION",
    /** LDAP */
    LDAP = "LDAP",
};
/**
* The normalized Operational status identifier for the Unmanned Aerial System
(UAS).
*/
export enum DroneFlightsActivityStatusIdEnum {
    
    /** The operational status is not reported. */
    UNDECLARED = "UNDECLARED",
    /** The Unmanned Aerial System (UAS) is grounded. */
    GROUND = "GROUND",
    /** The Unmanned Aerial System (UAS) is airborne. */
    AIRBORNE = "AIRBORNE",
    /** The Unmanned Aerial System (UAS) is reporting an emergency status. */
    EMERGENCY = "EMERGENCY",
    /** The Unmanned Aerial System (UAS) is reporting the Remote ID beacon or device is
malfunctioning or has failed. */
    REMOTE_ID_SYSTEM_FAILURE = "REMOTE_ID_SYSTEM_FAILURE",
    /** An ASTM Reserved status is reported. */
    RESERVED = "RESERVED",
    /** The status is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The status is not mapped. See the <code>status</code> attribute, which contains
a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the service category.
*/
export enum WindowsServiceCategoryIdEnum {
    
    /** The service category is unknown. */
    UNKNOWN = "UNKNOWN",
    /** A kernel mode driver. */
    KERNEL_MODE = "KERNEL_MODE",
    /** A user mode service. */
    USER_MODE = "USER_MODE",
    /** The service category is not mapped. See the <code>service_category</code>
attribute, which contains an event source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the service error control.
*/
export enum WindowsServiceErrorControlIdEnum {
    
    /** The service error control is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The startup program ignores the error and continues the startup operation. */
    IGNORE = "IGNORE",
    /** The startup program logs the error in the event log but continues the startup
operation. */
    NORMAL = "NORMAL",
    /** The startup program logs the error in the event log. If the last-known-good
configuration is being started, the startup operation continues. Otherwise, the
system is restarted with the last-known-good configuration. */
    SEVERE = "SEVERE",
    /** The startup program logs the error in the event log, if possible. If the
last-known-good configuration is being started, the startup operation fails.
Otherwise, the system is restarted with the last-known good configuration. */
    CRITICAL = "CRITICAL",
    /** The service error control is not mapped. See the
<code>service_error_control</code> attribute, which contains an event source
specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the service start type.
*/
export enum WindowsServiceStartTypeIdEnum {
    
    /** The service start type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** A kernel mode driver loaded at boot. */
    BOOT = "BOOT",
    /** A kernel mode driver loaded during system startup. */
    SYSTEM = "SYSTEM",
    /** A user mode service started automatically during system startup. */
    AUTO = "AUTO",
    /** A user mode service started on demand when a process calls
<code>StartService</code>. */
    DEMAND = "DEMAND",
    /** A driver or service that cannot be started. */
    DISABLED = "DISABLED",
    /** The service start type is not mapped. See the <code>service_start_type</code>
attribute, which contains an event source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized identifier of the service type.
*/
export enum WindowsServiceTypeIdEnum {
    
    /** The service type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** A kernel mode driver. */
    KERNEL_DRIVER = "KERNEL_DRIVER",
    /** A kernel mode file system minifilter. */
    FILE_SYSTEM_DRIVER = "FILE_SYSTEM_DRIVER",
    /** A user mode service that runs in its own process. */
    OWN_PROCESS = "OWN_PROCESS",
    /** A user mode service that shares a process with other services. */
    SHARE_PROCESS = "SHARE_PROCESS",
    /** The service type is not mapped. See the <code>service_type</code> attribute,
which contains an event source specific value. */
    OTHER = "OTHER",
};
/**
* The value type ID.
*/
export enum RegValueTypeIdEnum {
    
    /** Arbitrary binary data. */
    REG_BINARY = "REG_BINARY",
    /** A 32-bit integer. */
    REG_DWORD = "REG_DWORD",
    /** A 32-bit integer in big-endian byte order. */
    REG_DWORD_BIG_ENDIAN = "REG_DWORD_BIG_ENDIAN",
    /** A string containing unexpanded environment variables, e.g.
<code>%USERPROFILE%\Downloads</code>. */
    REG_EXPAND_SZ = "REG_EXPAND_SZ",
    /** A string containing the target path of a symbolic link created by calling
<code>RegCreateKeyEx</code> with <code>REG_OPTION_CREATE_LINK</code>. */
    REG_LINK = "REG_LINK",
    /** A sequence of zero or more strings. */
    REG_MULTI_SZ = "REG_MULTI_SZ",
    /** A value with no declared type. */
    REG_NONE = "REG_NONE",
    /** A 64-bit integer. */
    REG_QWORD = "REG_QWORD",
    /** Not defined in Windows documentation and previously added to OCSF in error. */
    REG_QWORD_LITTLE_ENDIAN = "REG_QWORD_LITTLE_ENDIAN",
    /** A string. */
    REG_SZ = "REG_SZ",
    /** The type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The type is not mapped. See the <code>type</code> attribute, which contains a
data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized type identifier of the Windows resource object accessed.
*/
export enum WinResourceTypeIdEnum {
    
    /** The resource object type is unknown. */
    UNKNOWN = "UNKNOWN",
    /** Directory */
    DIRECTORY = "DIRECTORY",
    /** Event */
    EVENT = "EVENT",
    /** Timer */
    TIMER = "TIMER",
    /** Device */
    DEVICE = "DEVICE",
    /** Mutant */
    MUTANT = "MUTANT",
    /** Type */
    TYPE = "TYPE",
    /** File */
    FILE = "FILE",
    /** Token */
    TOKEN = "TOKEN",
    /** Thread */
    THREAD = "THREAD",
    /** Section */
    SECTION = "SECTION",
    /** WindowStation */
    WINDOWSTATION = "WINDOWSTATION",
    /** DebugObject */
    DEBUGOBJECT = "DEBUGOBJECT",
    /** FilterCommunicationPort */
    FILTERCOMMUNICATIONPORT = "FILTERCOMMUNICATIONPORT",
    /** EventPair */
    EVENTPAIR = "EVENTPAIR",
    /** Driver */
    DRIVER = "DRIVER",
    /** IoCompletion */
    IOCOMPLETION = "IOCOMPLETION",
    /** Controller */
    CONTROLLER = "CONTROLLER",
    /** SymbolicLink */
    SYMBOLICLINK = "SYMBOLICLINK",
    /** WmiGuid */
    WMIGUID = "WMIGUID",
    /** Process */
    PROCESS = "PROCESS",
    /** Profile */
    PROFILE = "PROFILE",
    /** Desktop */
    DESKTOP = "DESKTOP",
    /** KeyedEvent */
    KEYEDEVENT = "KEYEDEVENT",
    /** Adapter */
    ADAPTER = "ADAPTER",
    /** Key */
    KEY = "KEY",
    /** WaitablePort */
    WAITABLEPORT = "WAITABLEPORT",
    /** Callback */
    CALLBACK = "CALLBACK",
    /** Semaphore */
    SEMAPHORE = "SEMAPHORE",
    /** Job */
    JOB = "JOB",
    /** Port */
    PORT = "PORT",
    /** FilterConnectionPort */
    FILTERCONNECTIONPORT = "FILTERCONNECTIONPORT",
    /** ALPC Port */
    ALPC_PORT = "ALPC_PORT",
    /** SAM_ALIAS */
    SAM_ALIAS = "SAM_ALIAS",
    /** SAM_GROUP */
    SAM_GROUP = "SAM_GROUP",
    /** SAM_USER */
    SAM_USER = "SAM_USER",
    /** SAM_DOMAIN */
    SAM_DOMAIN = "SAM_DOMAIN",
    /** SAM_SERVER */
    SAM_SERVER = "SAM_SERVER",
    /** Atom */
    ATOM = "ATOM",
    /** WFP Filter */
    WFP_FILTER = "WFP_FILTER",
    /** WFP Callout */
    WFP_CALLOUT = "WFP_CALLOUT",
    /** WFP Layer */
    WFP_LAYER = "WFP_LAYER",
    /** WFP Sub-layer */
    WFP_SUB_LAYER = "WFP_SUB_LAYER",
    /** WFP Provider */
    WFP_PROVIDER = "WFP_PROVIDER",
    /** WFP Provider Context */
    WFP_PROVIDER_CONTEXT = "WFP_PROVIDER_CONTEXT",
    /** The resource object type is not mapped. See the <code>type</code> attribute,
which may contain a data source specific value. */
    OTHER = "OTHER",
};
/**
* RegistryKeyActivity activity_id values.
*/
export enum RegistryKeyActivityActivityIdEnum {
    
    /** Create */
    CREATE = "CREATE",
    /** Read */
    READ = "READ",
    /** Modify */
    MODIFY = "MODIFY",
    /** Delete */
    DELETE = "DELETE",
    /** Rename */
    RENAME = "RENAME",
    /** Set Security */
    SET_SECURITY = "SET_SECURITY",
    /** Restore */
    RESTORE = "RESTORE",
    /** Import */
    IMPORT = "IMPORT",
    /** Export */
    EXPORT = "EXPORT",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* RegistryValueActivity activity_id values.
*/
export enum RegistryValueActivityActivityIdEnum {
    
    /** Get */
    GET = "GET",
    /** Set */
    SET = "SET",
    /** Modify */
    MODIFY = "MODIFY",
    /** Delete */
    DELETE = "DELETE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* WindowsResourceActivity activity_id values.
*/
export enum WindowsResourceActivityActivityIdEnum {
    
    /** Access */
    ACCESS = "ACCESS",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* WindowsServiceActivity activity_id values.
*/
export enum WindowsServiceActivityActivityIdEnum {
    
    /** A service is created, for example by calling <code>CreateService</code>. Refer
to the <code>win_service</code> attribute for details. */
    CREATE = "CREATE",
    /** A service is reconfigured, for example by calling
<code>ChangeServiceConfig</code> or <code>ChangeServiceConfig2</code>. Refer to
the <code>win_service</code> attribute for details. */
    RECONFIGURE = "RECONFIGURE",
    /** A stopped service is started, for example by calling <code>StartService</code>.
Refer to the <code>service</code> attribute for details. */
    START = "START",
    /** A running or paused service is stopped, for example by calling
<code>ControlService</code> or <code>ControlServiceEx</code>. Refer to the
<code>win_service</code> attribute for details. */
    STOP = "STOP",
    /** A running service is paused, for example by calling <code>ControlService</code>
or <code>ControlServiceEx</code>. Refer to the <code>win_service</code>
attribute for details. */
    PAUSE = "PAUSE",
    /** A paused service is continued, for example by calling
<code>ControlService</code> or <code>ControlServiceEx</code>. Refer to the
<code>win_service</code> attribute for details. */
    CONTINUE = "CONTINUE",
    /** A service is deleted, for example by calling <code>DeleteService</code>. Refer
to the <code>win_service</code> attribute for details. */
    DELETE = "DELETE",
    /** The event activity is unknown. */
    UNKNOWN = "UNKNOWN",
    /** The event activity is not mapped. See the <code>activity_name</code> attribute,
which contains a data source specific value. */
    OTHER = "OTHER",
};
/**
* The normalized OCSF event category (see categories.json).
*/
export enum CategoryUidEnum {
    
    /** Application Activity events report detailed information about the behavior of
applications and services. */
    APPLICATION_ACTIVITY = "APPLICATION_ACTIVITY",
    /** Discovery events report the existence and state of devices, files,
configurations, processes, registry keys, and other objects. */
    DISCOVERY = "DISCOVERY",
    /** Findings events report findings, detections, and possible resolutions of
malware, anomalies, or other actions performed by security products. */
    FINDINGS = "FINDINGS",
    /** Identity & Access Management (IAM) events relate to the supervision of the
system's authentication and access control model. Examples of such events are
the success or failure of authentication, granting of authority, password
change, entity change, privileged use etc. */
    IDENTITY_ACCESS_MANAGEMENT = "IDENTITY_ACCESS_MANAGEMENT",
    /** Network Activity events. */
    NETWORK_ACTIVITY = "NETWORK_ACTIVITY",
    /** Remediation events report the results of remediation commands targeting files,
processes, and other objects. */
    REMEDIATION = "REMEDIATION",
    /** System Activity events. */
    SYSTEM_ACTIVITY = "SYSTEM_ACTIVITY",
    /** Unmanned Systems events report the activity, existence, and/or state of
unmanned systems for tracking, mission planning, and other related activities. */
    UNMANNED_SYSTEMS = "UNMANNED_SYSTEMS",
};


/**
 * Abstract root for every OCSF object class.
 */
export interface OcsfObject {
}


/**
 * The analysis target defines the scope of monitored activities, specifying what
entity, system or process is analyzed for activity patterns.
 */
export interface AnalysisTarget extends OcsfObject {
    /** The specific name or identifier of the analysis target, such as the username of
a User Account, the name of a Kubernetes Cluster, the identifier of a Network
Namespace, or the name of an Application Component. */
    name: string,
    /** The category of the analysis target, such as User Account, Kubernetes Cluster,
Network Namespace, or Application Component. */
    type?: string,
}


/**
 * Describes the analysis of activity patterns and anomalies of target entities to
identify potential security threats, performance issues, or other deviations
from established baselines. This includes monitoring and analyzing user
interactions, API usage, resource utilization, access patterns and other
measured indicators.
 */
export interface AnomalyAnalysis extends OcsfObject {
    /** The analysis targets define the scope of monitored activities, specifying what
entities, systems or processes are analyzed for activity patterns. */
    analysis_targets: AnalysisTarget[],
    /** List of detected activities that significantly deviate from the established
baselines. This can include unusual access patterns, unexpected user-agents,
abnormal API usage, suspicious traffic spikes, unauthorized access attempts,
and other activities that may indicate potential security threats or system
issues. */
    anomalies: Anomaly[],
    /** List of established patterns representing normal activity that serve as
reference points for anomaly detection. This includes typical user interaction
patterns like common user-agents, expected API access frequencies and patterns,
standard resource utilization levels, and regular traffic flows. These
baselines help establish what constitutes 'normal' activity in the system. */
    baselines?: Baseline[],
}


/**
 * An unordered collection of attributes. It defines a set of attributes available
in all objects. It can be also used as a generic object to log objects that are
not otherwise defined by the schema.
 */
export interface Object extends OcsfObject {
}


/**
 * The observable object is a pivot element that contains related information
found in many places in the event.
 */
export interface Observable extends Object {
    /** The unique identifier (<code>metadata.uid</code>) of the source OCSF event from
which this observable was extracted. This field enables linking observables
back to their originating event data when observables are stored in a separate
location or system. */
    event_uid?: string,
    /** The full name of the observable attribute. The <code>name</code> is a
pointer/reference to an attribute within the OCSF event data. For example:
<code>file.name</code>. Array attributes may be represented in one of three
ways. For example: <code>resources.uid</code>, <code>resources[].uid</code>,
<code>resources[0].uid</code>. */
    name?: string,
    /** Contains the original and normalized reputation scores. */
    reputation?: Reputation,
    /** The observable value type name. */
    type?: string,
    /** The observable value type identifier. */
    type_id: string,
    /** The OCSF event type UID (<code>type_uid</code>) of the source event that this
observable was extracted from. This field enables filtering and categorizing
observables by their originating event type. For example: <code>300101</code>
for Network Activity (class_uid 3001) with activity_id 1. */
    type_uid?: number,
    /** The value associated with the observable attribute. The meaning of the value
depends on the observable type.<br/>If the <code>name</code> refers to a scalar
attribute, then the <code>value</code> is the value of the attribute.<br/>If
the <code>name</code> refers to an object attribute, then the
<code>value</code> is not populated. */
    value?: string,
}


/**
 * A record of an observed value or event that captures the timing and frequency
of its occurrence. Used to track when values/events were first detected, last
detected, and their total occurrence count.
 */
export interface Observation extends Object {
    /** Integer representing the total number of times this specific value/event was
observed across all occurrences. Helps establish prevalence and patterns. */
    count?: number,
    /** The time window when the value or event was first observed. It is used to
analyze activity patterns, detect trends, or correlate events within a specific
timeframe. */
    timespan?: Timespan,
    /** The specific value, event, indicator or data point that was observed and
recorded. This is the core piece of information being tracked. */
    value: string,
}


/**
 * Details about where in the target entity, specified information was discovered.
Only the attributes, relevant to the target entity type should be populated.
 */
export interface OccurrenceDetails extends Object {
    /** The cell name/reference in a spreadsheet. e.g <code>A2</code> */
    cell_name?: string,
    /** The column name in a spreadsheet, where the information was discovered. */
    column_name?: string,
    /** The column number in a spreadsheet or a plain text document, where the
information was discovered. */
    column_number?: number,
    /** The line number of the last line of the file, where the information was
discovered. */
    end_line?: number,
    /** The JSON path of the attribute in a json record, where the information was
discovered */
    json_path?: string,
    /** The page number in a document, where the information was discovered. */
    page_number?: number,
    /** The index of the record in the array of records, where the information was
discovered. e.g. the index of a record in an array of JSON records in a file. */
    record_index_in_array?: number,
    /** The row number in a spreadsheet, where the information was discovered. */
    row_number?: number,
    /** The line number of the first line of the file, where the information was
discovered. */
    start_line?: number,
}


/**
 * The Operating System (OS) object describes characteristics of an OS, such as
Linux or Windows.
 */
export interface Os extends Object {
    /** The operating system build number. */
    build?: string,
    /** The operating system country code, as defined by the ISO 3166-1 standard
(Alpha-2 code).<p><b>Note:</b> The two letter country code should be
capitalized. For example: <code>US</code> or <code>CA</code>.</p> */
    country?: string,
    /** The Common Platform Enumeration (CPE) name as described by (<a target='_blank'
href='https://nvd.nist.gov/products/cpe'>NIST</a>) For example:
<code>cpe:/a:apple:safari:16.2</code>. */
    cpe_name?: string,
    /** The cpu architecture, the number of bits used for addressing in memory. For
example: <code>32</code> or <code>64</code>. */
    cpu_bits?: number,
    /** The operating system edition. For example: <code>Professional</code>. */
    edition?: string,
    /** The kernel release of the operating system. On Unix-based systems, this is
determined from the <code>uname -r</code> command output, for example
"5.15.0-122-generic". */
    kernel_release?: string,
    /** The two letter lower case language codes, as defined by <a target='_blank'
href='https://en.wikipedia.org/wiki/ISO_639-1'>ISO 639-1</a>. For example:
<code>en</code> (English), <code>de</code> (German), or <code>fr</code>
(French). */
    lang?: string,
    /** The operating system name. */
    name: string,
    /** The name of the latest Service Pack. */
    sp_name?: string,
    /** The version number of the latest Service Pack. */
    sp_ver?: number,
    /** The type of the operating system. */
    type?: string,
    /** The type identifier of the operating system. */
    type_id: string,
    /** The version of the OS running on the device that originated the event. For
example: "Windows 10", "OS X 10.7", or "iOS 9". */
    version?: string,
}


/**
 * The OSINT (Open Source Intelligence) object contains details related to an
indicator such as the indicator itself, related indicators, geolocation,
registrar information, subdomains, analyst commentary, and other contextual
information. This information can be used to further enrich a detection or
finding by providing decisioning support to other analysts and engineers.
 */
export interface Osint extends Object {
    /** Any pertinent DNS answers information related to an indicator or OSINT
analysis. */
    answers?: DnsAnswer[],
    /** MITRE ATT&CK Tactics, Techniques, and/or Procedures (TTPs) pertinent to an
indicator or OSINT analysis. */
    attacks?: Attack[],
    /** Any pertinent autonomous system information related to an indicator or OSINT
analysis. */
    autonomous_system?: AutonomousSystem,
    /** The campaign object describes details about the campaign that was the source of
the activity. */
    campaign?: Campaign,
    /** Categorizes the threat indicator based on its functional or operational role. */
    category?: string,
    /** Analyst commentary or source commentary about an indicator or OSINT analysis. */
    comment?: string,
    /** The confidence of an indicator being malicious and/or pertinent, normalized to
the caption of the confidence_id value. In the case of 'Other', it is defined
by the event source or analyst. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of collected information
related to the OSINT or how pertinent an indicator or analysis is to a specific
event or finding. A low confidence means that the information collected or
analysis conducted lacked detail or is not accurate enough to qualify an
indicator as fully malicious. */
    confidence_id?: string,
    /** The timestamp when the indicator was initially created or identified. */
    created_time?: number,
    /** The identifier of the user, system, or organization that contributed the
indicator. */
    creator?: User,
    /** A detailed explanation of the indicator, including its context, purpose, and
relevance. */
    desc?: string,
    /** The specific detection pattern or signature associated with the indicator. */
    detection_pattern?: string,
    /** The detection pattern type, normalized to the caption of the
detection_pattern_type_id value. In the case of 'Other', it is defined by the
event source. */
    detection_pattern_type?: string,
    /** Specifies the type of detection pattern used to identify the associated threat
indicator. */
    detection_pattern_type_id?: string,
    /** Any email information pertinent to an indicator or OSINT analysis. */
    email?: Email,
    /** Any email authentication information pertinent to an indicator or OSINT
analysis. */
    email_auth?: EmailAuth,
    /** The expiration date of the indicator, after which it is no longer considered
reliable. */
    expiration_time?: number,
    /** A unique identifier assigned by an external system for cross-referencing. */
    external_uid?: string,
    /** Any pertinent file information related to an indicator or OSINT analysis. */
    file?: File,
    /** A grouping of adversarial behaviors and resources believed to be associated
with specific threat actors or campaigns. Intrusion sets often encompass
multiple campaigns and are used to organize related activities under a common
label. */
    intrusion_sets?: string[],
    /** Lockheed Martin Kill Chain Phases pertinent to an indicator or OSINT analysis. */
    kill_chain?: KillChainPhase[],
    /** Tags or keywords associated with the indicator to enhance searchability. */
    labels?: string[],
    /** Any pertinent geolocation information related to an indicator or OSINT
analysis. */
    location?: Location,
    /** A list of Malware objects, describing details about the identified malware. */
    malware?: Malware[],
    /** The timestamp of the last modification or update to the indicator. */
    modified_time?: number,
    /** The <code>name</code> is a pointer/reference to an attribute within the OCSF
event data. For example: file.name. */
    name?: string,
    /** Provides a reference to an external source of information related to the CTI
being represented. This may include a URL, a document, or some other type of
reference that provides additional context or information about the CTI. */
    references?: string[],
    /** Any analytics related to an indicator or OSINT analysis. */
    related_analytics?: Analytic[],
    /** Related reputational analysis from third-party engines and analysts for a given
indicator or OSINT analysis. */
    reputation?: Reputation,
    /** A numerical representation of the threat indicator’s risk level. */
    risk_score?: number,
    /** Any pertinent script information related to an indicator or OSINT analysis. */
    script?: Script,
    /** Represents the severity level of the threat indicator, typically reflecting its
potential impact or damage. */
    severity?: string,
    /** The normalized severity level of the threat indicator, typically reflecting its
potential impact or damage. */
    severity_id?: string,
    /** Any digital signatures or hashes related to an indicator or OSINT analysis. */
    signatures?: DigitalSignature[],
    /** The source URL of an indicator or OSINT analysis, e.g., a URL back to a TIP,
report, or otherwise. */
    src_url?: string,
    /** Any pertinent subdomain information - such as those generated by a Domain
Generation Algorithm - related to an indicator or OSINT analysis. */
    subdomains?: string[],
    /** A CIDR or network block related to an indicator or OSINT analysis. */
    subnet?: string,
    /** A threat actor is an individual or group that conducts malicious cyber
activities, often with financial, political, or ideological motives. */
    threat_actor?: ThreatActor,
    /** The <a target='_blank' href='https://www.first.org/tlp/'>Traffic Light
Protocol</a> was created to facilitate greater sharing of potentially sensitive
information and more effective collaboration. TLP provides a simple and
intuitive schema for indicating with whom potentially sensitive information can
be shared. */
    tlp?: string,
    /** The OSINT indicator type. */
    type?: string,
    /** The OSINT indicator type ID. */
    type_id: string,
    /** The unique identifier for the OSINT object. */
    uid?: string,
    /** The timestamp indicating when the associated indicator or intelligence was
added to the system or repository. */
    uploaded_time?: number,
    /** The actual indicator value in scope, e.g., a SHA-256 hash hexdigest or a domain
name. */
    value: string,
    /** The vendor name of a tool which generates intelligence or provides indicators. */
    vendor_name?: string,
    /** Any vulnerabilities related to an indicator or OSINT analysis. */
    vulnerabilities?: Vulnerability[],
    /** Any pertinent WHOIS information related to an indicator or OSINT analysis. */
    whois?: Whois,
}


/**
 * The Software Package object describes details about a software package.
 */
export interface Package extends Object {
    /** Architecture is a shorthand name describing the type of computer hardware the
packaged software is meant to run on. */
    architecture?: string,
    /** The Common Platform Enumeration (CPE) name as described by (<a target='_blank'
href='https://nvd.nist.gov/products/cpe'>NIST</a>) For example:
<code>cpe:/a:apple:safari:16.2</code>. */
    cpe_name?: string,
    /** The software package epoch. Epoch is a way to define weighted dependencies
based on version numbers. */
    epoch?: number,
    /** Cryptographic hash to identify the binary instance of a software component.
This can include any component such file, package, or library. */
    hash?: Fingerprint,
    /** The software license applied to this package. */
    license?: string,
    /** The URL pointing to the license applied on package or software. This is
typically a <code>LICENSE.md</code> file within a repository. */
    license_url?: string,
    /** The software package name. */
    name: string,
    /** The software packager manager utilized to manage a package on a system, e.g.
npm, yum, dpkg etc. */
    package_manager?: string,
    /** The URL of the package or library at the package manager, or the specific URL
or URI of an internal package manager link such as <code>AWS
CodeArtifact</code> or <code>Artifactory</code>. */
    package_manager_url?: string,
    /** A purl is a URL string used to identify and locate a software package in a
mostly universal and uniform way across programming languages, package
managers, packaging conventions, tools, APIs and databases. */
    purl?: string,
    /** Release is the number of times a version of the software has been packaged. */
    release?: string,
    /** The link to the specific library or package such as within <code>GitHub</code>,
this is different from the link to the package manager where the library or
package is hosted. */
    src_url?: string,
    /** The type of software package, normalized to the caption of the
<code>type_id</code> value. In the case of 'Other', it is defined by the
source. */
    type?: string,
    /** The type of software package. */
    type_id?: string,
    /** A unique identifier for the package or library reported by the source tool.
E.g., the <code>libId</code> within the <code>sbom</code> field of an OX
Security Issue or the SPDX <code>components.*.bom-ref</code>. */
    uid?: string,
    /** The name of the vendor who published the software package. */
    vendor_name?: string,
    /** The software package version. */
    version: string,
}


/**
 * The Packet object represents a single captured network packet and its
associated metadata. It describes where the packet came from, how it is stored
or encoded, and how it can be located within a capture file or stream. This
object does not interpret protocol content; it only represents the captured
packet data and its positioning information.
 */
export interface Packet extends Object {
    /** The human-readable name of the encoding used to represent the packet data in
the <code>value</code> field. This should match the caption associated with
<code>encoding_id</code>. If <code>encoding_id</code> is 99 (Other), this field
contains the original data source–specific encoding value. */
    encoding?: string,
    /** The normalized identifier of the encoding method used to represent the packet
data as a string. */
    encoding_id?: string,
    /** The ending byte position of this packet within a capture file or stream. */
    end_offset?: number,
    /** The human-readable name of the packet capture file format in which the packet
is stored. This should match the caption associated with
<code>format_id</code>. If <code>format_id</code> is 99 (Other), this field
contains the original data source–specific format value. */
    format?: string,
    /** The normalized identifier of the packet capture format. */
    format_id?: string,
    /** The relative order number of this packet within its capture context (such as a
PCAP file, network session, or reconstructed stream). This represents
chronological capture order, distinct from both protocol-level sequencing (such
as TCP sequence numbers). */
    sequence_number?: number,
    /** The human-readable name describing how or where the packet was obtained. This
should match the caption associated with <code>source_id</code>. If
<code>source_id</code> is 99 (Other), this field contains the original data
source–specific value. */
    source?: string,
    /** A normalized numeric identifier that specifies how the packet was obtained or
generated. */
    source_id?: string,
    /** The starting byte position of this packet within a capture file or stream. */
    start_offset?: number,
    /** The actual packet data, represented as a string. The format of this string is
determined by the specified <code>encoding_id</code> (e.g., Base64,
Hexadecimal, or URL Encoded). */
    value: string,
}


/**
 * The Parameter object provides details regarding a parameter of a a function.
 */
export interface Parameter extends Object {
    /** The parameter name. */
    name?: string,
    /** The parameter value after function execution. */
    post_value?: string,
    /** The parameter value before function execution. */
    pre_value?: string,
}


/**
 * The Permission Analysis object describes analysis results of permissions,
policies directly associated with an identity (user, role, or service account).
This evaluates what permissions an identity has been granted through attached
policies, which privileges are actively used versus unused, and identifies
potential over-privileged access. Use this for identity-centric security
assessments such as privilege audits, dormant permission discovery, and
least-privilege compliance analysis.
 */
export interface PermissionAnalysisResult extends Object {
    /** The total count of privileges that were analyzed across all services. */
    analyzed_privileges_count?: number,
    /** The condition keys and their values that were evaluated during policy analysis,
including contextual constraints that affect permission grants. These
conditions define when and how permissions are applied. Examples:
<code>aws:SourceIp:1.2.3.4</code>, <code>aws:RequestedRegion:us-east-1</code>. */
    condition_keys?: KeyValueObject[],
    /** The specific privileges, actions, or permissions that are explicitly granted by
the analyzed policy. Examples: AWS actions like <code>s3:GetObject</code>,
<code>ec2:RunInstances</code>, <code>iam:CreateUser</code>; Azure actions like
<code>Microsoft.Storage/storageAccounts/read</code>; or GCP permissions like
<code>storage.objects.get</code>. */
    granted_privileges?: string[],
    /** Detailed information about the policy document that was analyzed, including
policy metadata, version, type (identity-based, resource-based, etc.), and
structural details. This provides context for understanding the scope and
nature of the permission analysis. */
    policy?: Policy,
    /** The list of privilege analysis results grouped by cloud service or namespace. */
    service_privilege_analysis_list?: ServicePrivilegeAnalysis[],
    /** The total count of privilege-to-attack technique mappings identified across all
analyzed privileges. */
    total_potential_attacks_count?: number,
    /** The total count of privileges or actions defined in the policy that have not
been utilized within the analysis timeframe. This metric helps identify
over-privileged access and opportunities for privilege reduction to follow the
principle of least privilege. High counts may indicate policy bloat or
excessive permissions. */
    unused_privileges_count?: number,
    /** The total count of cloud services or resource types referenced in the policy
that have not been accessed or utilized within the analysis timeframe. This
helps identify unused service permissions that could be removed to reduce
attack surface. Examples: AWS services like S3, SQS, IAM, Lambda; Azure
services like Storage, Compute, KeyVault; or GCP services like Cloud Storage,
Compute Engine, BigQuery. */
    unused_services_count?: number,
}


/**
 * The Port Information object describes a port and its associated protocol
details.
 */
export interface PortInfo extends Object {
    /** The port number. For example: <code>80</code>, <code>443</code>,
<code>22</code>. */
    port: number,
    /** The IP protocol name in lowercase, as defined by the Internet Assigned Numbers
Authority (IANA). For example: <code>tcp</code> or <code>udp</code>. */
    protocol_name?: string,
    /** The IP protocol number, as defined by the Internet Assigned Numbers Authority
(IANA). For example: <code>6</code> for TCP and <code>17</code> for UDP. */
    protocol_num?: number,
}


/**
 * The Privilege Attack Info object groups privileges by the potential attack they
could enable. It maps specific privileges to MITRE ATT&CK techniques, helping
identify security risks associated with granted permissions.
 */
export interface PrivilegeAttackInfo extends Object {
    /** The MITRE ATT&CK technique that these privileges could enable. */
    attack: Attack,
    /** The list of privilege information objects, where each element describes a
specific privilege that could enable the associated attack technique. */
    privilege_info_list: PrivilegeInfo[],
}


/**
 * The Privilege Info object describes information about a specific privilege,
action, or permission. It captures the privilege name, type, usage status, and
when it was last used.
 */
export interface PrivilegeInfo extends Object {
    /** Indicates whether the privilege is unused within the analysis timeframe. */
    is_unused?: boolean,
    /** The most recent time this privilege was used. */
    last_used_time?: number,
    /** The name of the privilege, action, or permission. Examples:
<code>GetObject</code>, <code>CreateStoreImageTask</code> (AWS);
<code>Microsoft.Storage/storageAccounts/read</code> (Azure);
<code>storage.objects.get</code> (GCP). */
    name: string,
    /** The type or category of the privilege, normalized to the caption of the
<code>type_id</code> value. In the case of 'Other', it is defined by the event
source. */
    type?: string,
    /** The normalized type of the privilege. */
    type_id?: string,
}


/**
 * The Programmatic Credential object describes service-specific credentials used
for direct API access and system integration. These credentials are typically
issued by individual services or platforms for accessing their APIs and
resources, focusing on credential lifecycle management and usage tracking.
Examples include API keys, service account keys, client certificates, and
vendor-specific access tokens.
 */
export interface ProgrammaticCredential extends Object {
    /** The timestamp when this programmatic credential was last used for
authentication or API access. This helps track credential usage patterns,
identify dormant credentials that may pose security risks, and support
credential lifecycle management. The timestamp should reflect the most recent
successful authentication or API call using this credential. */
    last_used_time?: number,
    /** The type or category of programmatic credential, normalized to the caption of
the type_id value. In the case of 'Other', it is defined by the event source.
Examples include 'API Key', 'Service Account Key', 'Access Token', 'Client
Certificate', 'OAuth Token', 'Personal Access Token', etc. */
    type?: string,
    /** The unique identifier of the programmatic credential. This could be an API key
ID, service account key ID, access token identifier, certificate serial number,
or other unique identifier that distinguishes this credential from others.
Examples: AWS Access Key ID, GCP Service Account Key ID, Azure Application ID,
or OAuth2 token identifier. */
    uid: string,
}


/**
 * The specific resulting evidence information that was queried or discovered.
When mapping raw telemetry data users should select the appropriate child
object that best matches the evidence type as defined by query_type_id.
 */
export interface QueryEvidence extends OcsfObject {
    /** The network connection information related to a Network Connection query type. */
    connection_info?: NetworkConnectionInfo,
    /** The file that is the target of the query when query_type_id indicates a File
query. */
    file?: File,
    /** The folder that is the target of the query when query_type_id indicates a
Folder query. */
    folder?: File,
    /** The administrative group that is the target of the query when query_type_id
indicates an Admin Group query. */
    group?: Group,
    /** The job object that pertains to the event when query_type_id indicates a Job
query. */
    job?: Job,
    /** The kernel object that pertains to the event when query_type_id indicates a
Kernel query. */
    kernel?: Kernel,
    /** The module that pertains to the event when query_type_id indicates a Module
query. */
    module?: Module,
    /** The physical or virtual network interfaces that are associated with the device
when query_type_id indicates a Network Interfaces query. */
    network_interfaces?: NetworkInterface[],
    /** The peripheral device that triggered the event when query_type_id indicates a
Peripheral Device query. */
    peripheral_device?: PeripheralDevice,
    /** The process that pertains to the event when query_type_id indicates a Process
query. */
    process?: Process,
    /** The normalized caption of query_type_id or the source-specific query type. */
    query_type?: string,
    /** The normalized type of system query performed against a device or system
component. */
    query_type_id: string,
    /** The service that pertains to the event when query_type_id indicates a Service
query. */
    service?: Service,
    /** The authenticated user or service session when query_type_id indicates a
Session query. */
    session?: Session,
    /** The startup item object that pertains to the event when query_type_id indicates
a Startup Item query. */
    startup_item?: StartupItem,
    /** The state of the socket, normalized to the caption of the state_id value. In
the case of 'Other', it is defined by the event source. */
    state?: string,
    /** The state of the TCP socket for the network connection. */
    tcp_state_id?: string,
    /** The user that pertains to the event when query_type_id indicates a User query. */
    user?: User,
    /** The users that belong to the administrative group when query_type_id indicates
a Users query. */
    users?: User[],
}


/**
 * The Related Event object describes an event or another finding related to a
finding. It may or may not be an OCSF event.
 */
export interface RelatedEvent extends Object {
    /** An array of MITRE ATT&CK® objects describing identified tactics, techniques &
sub-techniques. The objects are compatible with MITRE ATLAS™ tactics,
techniques & sub-techniques. */
    attacks?: Attack[],
    /** The number of times that activity in the same logical group occurred, as
reported by the related Finding. */
    count?: number,
    /** <p>The time when the related event/finding was created.</p> If the related
event/finding is in OCSF and is a Finding, then this value should be equal to
<code>finding_info.created_time</code> in the corresponding Finding. If the
related event/finding is in OCSF and is not a Finding, then this value should
be equal to <code>time</code> in the corresponding event. */
    created_time?: number,
    /** A description of the related event/finding. */
    desc?: string,
    /** The time when the finding was first observed. e.g. The time when a
vulnerability was first observed.<br>It can differ from the
<code>created_time</code> timestamp, which reflects the time this finding was
created. */
    first_seen_time?: number,
    /** The <a target='_blank'
href='https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html'>Cyber
Kill Chain®</a> provides a detailed description of each phase and its
associated activities within the broader context of a cyber attack. */
    kill_chain?: KillChainPhase[],
    /** The time when the finding was most recently observed. e.g. The time when a
vulnerability was most recently observed.<br>It can differ from the
<code>modified_time</code> timestamp, which reflects the time this finding was
last modified. */
    last_seen_time?: number,
    /** The time when the related event/finding was last modified. */
    modified_time?: number,
    /** The observables associated with the event or a finding. */
    observables?: Observable[],
    /** Details about the product that reported the related event/finding. */
    product?: Product,
    /** The unique identifier of the product that reported the related event. */
    product_uid?: string,
    /** The event/finding severity, normalized to the caption of the
<code>severity_id</code> value. In the case of 'Other', it is defined by the
source. */
    severity?: string,
    /** <p>The normalized identifier of the event/finding severity.</p>The normalized
severity is a measurement the effort and expense required to manage and resolve
an event or incident. Smaller numerical values represent lower impact events,
and larger numerical values represent higher impact events. */
    severity_id?: string,
    /** The related event status. Should correspond to the label of the status_id (or
'Other' status value for status_id = 99) of the related event. */
    status?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated with the related
event/finding. */
    tags?: KeyValueObject[],
    /** A title or a brief phrase summarizing the related event/finding. */
    title?: string,
    /** The list of key traits or characteristics extracted from the related
event/finding that influenced or contributed to the overall finding's outcome. */
    traits?: Trait[],
    /** <p>The type of the related event/finding.</p>Populate if the related
event/finding is <code>NOT</code> in OCSF. If it is in OCSF, then utilize
<code>type_name, type_uid</code> instead. */
    type?: string,
    /** The type of the related OCSF event, as defined by <code>type_uid</code>.<p>For
example: <code>Process Activity: Launch.</code></p>Populate if the related
event/finding is in OCSF. */
    type_name?: string,
    /** The unique identifier of the related OCSF event type. <p>For example:
<code>100701.</code></p>Populate if the related event/finding is in OCSF. */
    type_uid?: number,
    /** <p>The unique identifier of the related event/finding.</p> If the related
event/finding is in OCSF, then this value must be equal to
<code>metadata.uid</code> in the corresponding event. */
    uid: string,
}


/**
 * The Remediation object describes the recommended remediation steps to address
identified issue(s).
 */
export interface Remediation extends Object {
    /** An array of Center for Internet Security (CIS) Controls that can be optionally
mapped to provide additional remediation details. */
    cis_controls?: CisControl[],
    /** The description of the remediation strategy. */
    desc: string,
    /** A list of KB articles or patches related to an endpoint. A KB Article contains
metadata that describes the patch or an update. */
    kb_article_list?: KbArticle[],
    /** The KB article/s related to the entity. A KB Article contains metadata that
describes the patch or an update. */
    kb_articles?: string[],
    /** A list of supporting URL/s, references that help describe the remediation
strategy. */
    references?: string[],
}


/**
 * The Reputation object describes the reputation/risk score of an entity (e.g.
device, user, domain).
 */
export interface Reputation extends Object {
    /** The reputation score as reported by the event source. */
    base_score: number,
    /** The provider of the reputation information. */
    provider?: string,
    /** The reputation score, normalized to the caption of the score_id value. In the
case of 'Other', it is defined by the event source. */
    score?: string,
    /** The normalized reputation score identifier. */
    score_id: string,
}


/**
 * The Request Elements object describes characteristics of an API request.
 */
export interface Request extends Object {
    /** When working with containerized applications, the set of containers which write
to the standard the output of a particular logging driver. For example, this
may be the set of containers involved in handling api requests and responses
for a containerized application. */
    containers?: Container[],
    /** The additional data that is associated with the api request. */
    data?: string,
    /** The communication flags that are associated with the api request. */
    flags?: string[],
    /** The unique request identifier. */
    uid: string,
}


/**
 * The Response Elements object describes characteristics of an API response.
 */
export interface Response extends Object {
    /** The numeric response sent to a request. */
    code?: number,
    /** When working with containerized applications, the set of containers which write
to the standard the output of a particular logging driver. For example, this
may be the set of containers involved in handling api requests and responses
for a containerized application. */
    containers?: Container[],
    /** The additional data that is associated with the api response. */
    data?: string,
    /** Error Code */
    error?: string,
    /** Error Message */
    error_message?: string,
    /** The communication flags that are associated with the api response. */
    flags?: string[],
    /** The description of the event/finding, as defined by the source. */
    message?: string,
}


/**
 * The RPC Interface represents the remote procedure call interface used in the
DCE/RPC session.
 */
export interface RpcInterface extends Object {
    /** An integer that provides a reason code or additional information about the
acknowledgment result. */
    ack_reason?: number,
    /** An integer that denotes the acknowledgment result of the DCE/RPC call. */
    ack_result?: number,
    /** The unique identifier of the particular remote procedure or service. */
    uuid: string,
    /** The version of the DCE/RPC protocol being used in the session. */
    version: string,
}


/**
 * The Subject Alternative name (SAN) object describes a SAN secured by a digital
certificate
 */
export interface San extends Object {
    /** Name of SAN (e.g. The actual IP Address or domain.) */
    name: string,
    /** Type descriptor of SAN (e.g. IP Address/domain/etc.) */
    type: string,
}


/**
 * The Software Bill of Materials object describes characteristics of a generated
SBOM.
 */
export interface Sbom extends Object {
    /** The time when the SBOM was created. */
    created_time?: number,
    /** The software package or library that is being discovered or inventoried by an
SBOM. */
    package: Package,
    /** Details about the upstream product that generated the SBOM e.g.
<code>cdxgen</code> or <code>Syft</code>. */
    product?: Product,
    /** The list of software components used in the software package. */
    software_components: SoftwareComponent[],
    /** The type of SBOM, normalized to the caption of the <code>type_id</code> value.
In the case of 'Other', it is defined by the source. */
    type?: string,
    /** The type of SBOM. */
    type_id?: string,
    /** A unique identifier for the SBOM or the SBOM generation by a source tool, such
as the SPDX <code>metadata.component.bom-ref</code>. */
    uid?: string,
    /** The specification (spec) version of the particular SBOM, e.g.,
<code>1.6</code>. */
    version?: string,
}


/**
 * The System for Cross-domain Identity Management (SCIM) Configuration object
provides a structured set of attributes related to SCIM protocols used for
identity provisioning and management across cloud-based platforms. It
standardizes user and group provisioning details, enabling identity
synchronization and lifecycle management with compatible Identity Providers
(IdPs) and applications. SCIM is defined in <a target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc7643'>RFC-7634</a>
 */
export interface Scim extends Object {
    /** The authorization protocol as defined by the caption of
<code>auth_protocol_id</code>. In the case of <code>Other</code>, it is defined
by the event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authorization protocol used by the SCIM
resource. */
    auth_protocol_id?: string,
    /** When the SCIM resource was added to the service provider. */
    created_time?: number,
    /** Message or code associated with the last encountered error. */
    error_message?: string,
    /** Indicates whether the SCIM resource is configured to provision groups,
automatically or otherwise. */
    is_group_provisioning_enabled?: boolean,
    /** Indicates whether the SCIM resource is configured to provision users,
automatically or otherwise. */
    is_user_provisioning_enabled?: boolean,
    /** Timestamp of the most recent successful synchronization. */
    last_run_time?: number,
    /** The most recent time when the SCIM resource was updated at the service
provider. */
    modified_time?: number,
    /** The name of the SCIM resource. */
    name?: string,
    /** The supported protocol for the SCIM resource. E.g., <code>SAML</code>,
<code>OIDC</code>, or <code>OAuth2</code>. */
    protocol_name?: string,
    /** Maximum number of requests allowed by the SCIM resource within a specified time
frame to avoid throttling. */
    rate_limit?: number,
    /** SCIM provides a schema for representing groups, identified using the following
schema URI: <code>urn:ietf:params:scim:schemas:core:2.0:Group</code> as defined
in <a target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc7643'>RFC-7634</a>. This
attribute will capture key-value pairs for the scheme implemented in a SCIM
resource. */
    scim_group_schema?: string,
    /** SCIM provides a resource type for user resources. The core schema for user is
identified using the following schema URI:
<code>urn:ietf:params:scim:schemas:core:2.0:User</code> as defined in <a
target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc7643'>RFC-7634</a>. his
attribute will capture key-value pairs for the scheme implemented in a SCIM
resource. This object is inclusive of both the basic and Enterprise User Schema
Extension. */
    scim_user_schema?: string,
    /** The provisioning state of the SCIM resource, normalized to the caption of the
<code>state_id</code> value. In the case of <code>Other</code>, it is defined
by the event source. */
    state?: string,
    /** The normalized state ID of the SCIM resource to reflect its activation status. */
    state_id?: string,
    /** A unique identifier for a SCIM resource as defined by the service provider. */
    uid?: string,
    /** A String that is an identifier for the resource as defined by the provisioning
client. The <code>externalId</code> may simplify identification of a resource
between the provisioning client and the service provider by allowing the client
to use a filter to locate the resource with an identifier from the provisioning
domain, obviating the need to store a local mapping between the provisioning
domain's identifier of the resource and the identifier used by the service
provider. */
    uid_alt?: string,
    /** The primary URL for SCIM API requests. */
    url_string?: string,
    /** Name of the vendor or service provider implementing SCIM. E.g.,
<code>Okta</code>, <code>Auth0</code>, <code>Microsoft</code>. */
    vendor_name?: string,
    /** SCIM protocol version supported e.g., <code>SCIM 2.0</code>. */
    version?: string,
}


/**
 * The Script object describes a script or command that can be executed by a
shell, script engine, or interpreter. Examples include Bash, JavsScript,
PowerShell, Python, VBScript, etc. Note that the term <em>script</em> here
denotes not only a script contained within a file but also a script or command
typed interactively by a user, supplied on the command line, or provided by
some other file-less mechanism.
 */
export interface Script extends Object {
    /** Present if this script is associated with a file. Not present in the case of a
file-less script. */
    file?: File,
    /** An array of the script's cryptographic hashes. Note that these hashes are
calculated on the script in its original encoding, and not on the normalized
UTF-8 encoding found in the <code>script_content</code> attribute. */
    hashes?: Fingerprint[],
    /** Unique identifier for the script or macro, independent of the containing file,
used for tracking, auditing, and security analysis. */
    name?: string,
    /** This attribute relates a sub-script to a parent script having the matching
<code>uid</code> attribute. In the case of PowerShell, sub-script execution can
be identified by matching the activity correlation ID of the raw ETW events
provided by the OS. */
    parent_uid?: string,
    /** The script content, normalized to UTF-8 encoding irrespective of its original
encoding. When emitting this attribute, it may be appropriate to truncate large
scripts. When consuming this attribute, large scripts should be anticipated. */
    script_content: LongString,
    /** The script type, normalized to the caption of the <code>type_id</code> value.
In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The normalized script type ID. */
    type_id: string,
    /** Some script engines assign a unique ID to each individual execution of a given
script. This attribute captures that unique ID. In the case of PowerShell, the
unique ID corresponds to the <code>ScriptBlockId</code> in the raw ETW events
provided by the OS. */
    uid?: string,
}


/**
 * The Security State object describes the security related state of a managed
entity.
 */
export interface SecurityState extends Object {
    /** The security state, normalized to the caption of the state_id value. In the
case of 'Other', it is defined by the source. */
    state?: string,
    /** The security state of the managed entity. */
    state_id?: string,
}


/**
 * The Service Privilege Analysis object describes privilege analysis results for
a single cloud service or resource namespace. It provides metrics on privilege
usage, counts by type, and mappings to potential attack techniques.
 */
export interface ServicePrivilegeAnalysis extends Object {
    /** Indicates whether all privileges within this service are unused. */
    all_privileges_unused?: boolean,
    /** The total count of privileges analyzed within this service. */
    analyzed_privileges_count?: number,
    /** The count of execute-type privileges within this service. */
    execute_count?: number,
    /** The most recent time any privilege in this service was used. */
    last_used_time?: number,
    /** The service or namespace identifier. Examples: <code>s3</code>,
<code>ec2</code> (AWS); <code>Microsoft.Storage</code> (Azure);
<code>storage</code> (GCP). */
    name: string,
    /** The list of privilege-to-attack mappings for this service. */
    privilege_attack_info_list?: PrivilegeAttackInfo[],
    /** The count of read-type privileges within this service. */
    read_count?: number,
    /** The count of unused privileges within this service. */
    unused_privileges_count?: number,
    /** The count of write-type privileges within this service. */
    write_count?: number,
}


/**
 * The Session object describes details about an authenticated session. e.g.
Session Creation Time, Session Issuer.
 */
export interface Session extends Object {
    /** The number of identical sessions spawned from the same source IP, destination
IP, application, and content/threat type seen over a period of time. */
    count?: number,
    /** The time when the session was created. */
    created_time?: number,
    /** The unique identifier of the user's credential. For example, AWS Access Key ID. */
    credential_uid?: string,
    /** The reason which triggered the session expiration. */
    expiration_reason?: string,
    /** The session expiration time. */
    expiration_time?: number,
    /** Indicates whether Multi Factor Authentication was used during authentication. */
    is_mfa?: boolean,
    /** The indication of whether the session is remote. */
    is_remote?: boolean,
    /** The indication of whether the session is a VPN session. */
    is_vpn?: boolean,
    /** The identifier of the session issuer. */
    issuer?: string,
    /** The Pseudo Terminal associated with the session. Ex: the tty or pts value. */
    terminal?: string,
    /** The unique identifier of the session. */
    uid?: string,
    /** The alternate unique identifier of the session. e.g. AWS ARN -
<code>arn:aws:sts::123344444444:assumed-role/Admin/example-session</code>. */
    uid_alt?: string,
    /** The universally unique identifier of the session. */
    uuid?: string,
}


/**
 * The Software Component object describes characteristics of a software component
within a software package.
 */
export interface SoftwareComponent extends Object {
    /** The author(s) who published the software component. */
    author?: string,
    /** Cryptographic hash to identify the binary instance of a software component. */
    hash?: Fingerprint,
    /** The software license applied to this component. */
    license?: string,
    /** The software component name. */
    name: string,
    /** The Package URL (PURL) to identify the software component. This is a URL that
uniquely identifies the component, including the component's name, version, and
type. The URL is used to locate and retrieve the component's metadata and
content. */
    purl?: string,
    /** The package URL (PURL) of the component that this software component has a
relationship with. */
    related_component?: string,
    /** The relationship between two software components, normalized to the caption of
the <code>relationship_id</code> value. In the case of 'Other', it is defined
by the source. */
    relationship?: string,
    /** The normalized identifier of the relationship between two software components. */
    relationship_id?: string,
    /** The type of software component, normalized to the caption of the
<code>type_id</code> value. In the case of 'Other', it is defined by the
source. */
    type?: string,
    /** The type of software component. */
    type_id?: string,
    /** The software component version. */
    version: string,
}


/**
 * Represents a single unit of work or operation within a distributed trace. A
span typically tracks the execution of a request across a service, capturing
important details such as the operation, timestamps, and status. Spans help
break down the overall trace into smaller, manageable parts, enabling detailed
analysis of the performance and behavior of specific operations within the
system. They are crucial for understanding latency, dependencies, and
bottlenecks in complex distributed systems.
 */
export interface Span extends Object {
    /** The total time, in milliseconds, that the span represents, calculated as the
difference between start_time and end_time. It reflects the operation's
performance and latency, independent of event timestamps, and accounts for
normalized times used by observability tools to ensure consistency across
distributed systems. */
    duration?: number,
    /** The end timestamp of the span, essential for identifying latency and
performance bottlenecks. Like the start time, this timestamp is normalized
across the observability system to ensure consistency, even when events are
recorded across distributed services with unsynchronized clocks. Normalized
time allows for accurate duration calculations and helps observability tools
track performance across services, regardless of the individual system time
settings. */
    end_time: number,
    /** The message in a span (often referred to as a span event) serves as a way to
record significant moments or occurrences during the span's lifecycle. This
content typically manifests as log entries, annotations, or semi-structured
events as a string, providing additional granularity and context about what
happens at specific points during the execution of an operation. */
    message?: string,
    /** Describes an action performed in a span, such as API requests, database
queries, or computations. */
    operation?: string,
    /** The ID of the parent span for this span object, establishing its relationship
in the trace hierarchy. */
    parent_uid?: string,
    /** Identifies the service or component that generates the span, helping trace its
path through the distributed system. */
    service?: Service,
    /** The start timestamp of the span, essential for identifying latency and
performance bottlenecks. This timestamp is normalized across the observability
system, ensuring consistency even when events occur across distributed services
with potentially unsynchronized clocks. By using normalized time, observability
tools can provide accurate, uniform measurements of operation performance and
latency, regardless of where or when the events actually occur. */
    start_time: number,
    /** Indicates the outcome of the operation in the span, such as success, failure,
or error. Issues in a span typically refer to problems such as failed
operations, timeouts, service unavailability, or errors in processing that can
negatively impact the performance or reliability of the system. Tracking the
`status_code` helps pinpoint these issues, enabling quicker identification and
resolution of system inefficiencies or faults. */
    status_code?: string,
    /** The unique identifier for the span, used in distributed systems and
microservices architectures to track and correlate requests across different
components of an application. It enables tracing the flow of a request through
various services. */
    uid: string,
}


/**
 * The Single Sign-On (SSO) object provides a structure for normalizing SSO
attributes, configuration, and/or settings from Identity Providers.
 */
export interface Sso extends Object {
    /** The authorization protocol as defined by the caption of
<code>auth_protocol_id</code>. In the case of <code>Other</code>, it is defined
by the event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authentication protocol used by the SSO
resource. */
    auth_protocol_id?: string,
    /** Digital Signature associated with the SSO resource, e.g., SAML X.509
certificate details. */
    certificate?: Certificate,
    /** When the SSO resource was created. */
    created_time?: number,
    /** The duration (in minutes) for an SSO session, after which re-authentication is
required. */
    duration_mins?: number,
    /** Duration (in minutes) of allowed inactivity before Single Sign-On (SSO) session
expiration. */
    idle_timeout?: number,
    /** URL for initiating an SSO login request. */
    login_endpoint?: string,
    /** URL for initiating an SSO logout request, allowing sessions to be terminated
across applications. */
    logout_endpoint?: string,
    /** URL where metadata about the SSO configuration is available (e.g., for SAML
configurations). */
    metadata_endpoint?: string,
    /** The most recent time when the SSO resource was updated. */
    modified_time?: number,
    /** The name of the SSO resource. */
    name?: string,
    /** The supported protocol for the SSO resource. E.g., <code>SAML</code> or
<code>OIDC</code>. */
    protocol_name?: string,
    /** Scopes define the specific permissions or actions that the client is allowed to
perform on behalf of the user. Each scope represents a different set of
permissions, and the user can selectively grant or deny access to specific
scopes during the authorization process. */
    scopes?: string[],
    /** A unique identifier for a SSO resource. */
    uid?: string,
    /** Name of the vendor or service provider implementing SSO. E.g.,
<code>Okta</code>, <code>Auth0</code>, <code>Microsoft</code>. */
    vendor_name?: string,
}


/**
 * The startup item object describes an application component that has associated
startup criteria and configurations.
 */
export interface StartupItem extends OcsfObject {
    /** The startup item kernel driver resource. */
    driver?: KernelDriver,
    /** The startup item job resource. */
    job?: Job,
    /** The unique name of the startup item. */
    name: string,
    /** The startup item process resource. */
    process?: Process,
    /** The list of normalized identifiers that describe the startup items' properties
when it is running.  Use this field to capture extended information about the
process, which may depend on the type of startup item.  E.g., A Windows service
that interacts with the desktop. */
    run_mode_ids?: string,
    /** The list of run_modes, normalized to the captions of the run_mode_id values.
In the case of 'Other', they are defined by the event source. */
    run_modes?: string[],
    /** The run state of the startup item. */
    run_state?: string,
    /** The run state ID of the startup item. */
    run_state_id?: string,
    /** The start type of the startup item. */
    start_type?: string,
    /** The start type ID of the startup item. */
    start_type_id: string,
    /** The startup item type. */
    type?: string,
    /** The startup item type identifier. */
    type_id?: string,
}


/**
 * Threat actor is responsible for the observed malicious activity.
 */
export interface ThreatActor extends Object {
    /** The name of the threat actor. */
    name: string,
    /** The classification of the threat actor based on their motivations,
capabilities, or affiliations. Common types include nation-state actors,
cybercriminal groups, hacktivists, or insider threats. */
    type?: string,
    /** The normalized datastore resource type identifier. */
    type_id?: string,
}


/**
 * The Ticket object represents ticket in the customer's IT Service Management
(ITSM) systems like ServiceNow, Jira, etc.
 */
export interface Ticket extends Object {
    /** The url of a ticket in the ticket system. */
    src_url?: string,
    /** The status of the ticket normalized to the caption of the
<code>status_id</code> value. In the case of <code>99</code>, this value should
as defined by the source. */
    status?: string,
    /** A list of contextual descriptions of the <code>status, status_id</code> values. */
    status_details?: string[],
    /** The normalized identifier for the ticket status. */
    status_id?: string,
    /** The title of the ticket. */
    title?: string,
    /** The linked ticket type determines whether the ticket is internal or in an
external ticketing system. */
    type?: string,
    /** The normalized identifier for the ticket type. */
    type_id?: string,
    /** Unique identifier of the ticket. */
    uid?: string,
}


/**
 * The Time Span object represents different time period durations. If a timespan
is fractional, i.e. crosses one period, e.g. a week and 3 days, more than one
may be populated since each member is of integral type. In that case
<code>type_id</code> if present should be set to <code>Other.</code><P>A
timespan may also be defined by its time interval boundaries,
<code>start_time</code> and <code>end_time</code>.
 */
export interface Timespan extends Object {
    /** The duration of the time span in milliseconds. */
    duration?: number,
    /** The duration of the time span in days. */
    duration_days?: number,
    /** The duration of the time span in hours. */
    duration_hours?: number,
    /** The duration of the time span in minutes. */
    duration_mins?: number,
    /** The duration of the time span in months. */
    duration_months?: number,
    /** The duration of the time span in seconds. */
    duration_secs?: number,
    /** The duration of the time span in weeks. */
    duration_weeks?: number,
    /** The duration of the time span in years. */
    duration_years?: number,
    /** The end time or conclusion of the timespan's interval. */
    end_time?: number,
    /** The start time or beginning of the timespan's interval. */
    start_time?: number,
    /** The type of time span duration the object represents. */
    type?: string,
    /** The normalized identifier for the time span duration type. */
    type_id?: string,
}


/**
 * The Transport Layer Security (TLS) object describes the negotiated TLS protocol
used for secure communications over an establish network connection.
 */
export interface Tls extends Object {
    /** The integer value of TLS alert if present. The alerts are defined in the TLS
specification in <a target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc2246'>RFC-2246</a>. */
    alert?: number,
    /** The certificate object containing information about the digital certificate. */
    certificate?: Certificate,
    /** The Chain of Certificate Serial Numbers field provides a chain of Certificate
Issuer Serial Numbers leading to the Root Certificate Issuer. */
    certificate_chain?: string[],
    /** The negotiated cipher suite. */
    cipher?: string,
    /** The client cipher suites that were exchanged during the TLS handshake
negotiation. */
    client_ciphers?: string[],
    /** The list of TLS extensions. */
    extension_list?: TlsExtension[],
    /** The amount of total time for the TLS handshake to complete after the TCP
connection is established, including client-side delays, in milliseconds. */
    handshake_dur?: number,
    /** The MD5 hash of a JA3 string. */
    ja3_hash?: Fingerprint,
    /** The MD5 hash of a JA3S string. */
    ja3s_hash?: Fingerprint,
    /** The length of the encryption key. */
    key_length?: number,
    /** The list of subject alternative names that are secured by a specific
certificate. */
    sans?: San[],
    /** The server cipher suites that were exchanged during the TLS handshake
negotiation. */
    server_ciphers?: string[],
    /**  The Server Name Indication (SNI) extension sent by the client. */
    sni?: string,
    /** The list of TLS extensions. */
    tls_extension_list?: TlsExtension[],
    /** The TLS protocol version. */
    version: string,
}


/**
 * The TLS Extension object describes additional attributes that extend the base
Transport Layer Security (TLS) object.
 */
export interface TlsExtension extends Object {
    /** The data contains information specific to the particular extension type. */
    data?: string,
    /** The TLS extension type. For example: <code>Server Name</code>. */
    type?: string,
    /** The TLS extension type identifier. See <a target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc8446#page-35'>The Transport
Layer Security (TLS) extension page</a>. */
    type_id: string,
}


/**
 * The Token object is the base object for representing tokens, API keys, and
authentication credentials used across different contexts. This object provides
common attributes for all token types, including protocol-specific
authentication tokens (Kerberos, OIDC, SAML) and API/client tokens used for
service authentication. When to use this object: Use the base
<code>token</code> object directly in API activity events to represent API
tokens, client tokens, or API keys used to authenticate API requests. Examples
include: Okta API tokens, Microsoft Entra ID Application Registration client
secrets, Stripe API keys, AWS API keys. When NOT to use this object: Do NOT use
the base <code>token</code> object for protocol-specific authentication tokens
in authentication events - use <code>authentication_token</code> instead (which
extends this object). Do NOT use <code>token</code> for tracking credential
lifecycle and usage patterns - use <code>programmatic_credential</code>
instead.
 */
export interface Token extends Object {
    /** The time that the token was created. */
    created_time?: number,
    /** The expiration time of the token. */
    expiration_time?: number,
    /** Indicates whether the token is renewable. */
    is_renewable?: boolean,
    /** The last time the token was updated. */
    modified_time?: number,
    /** The human-friendly name of a token or key, if available, such as the
<code>name</code> from the Okta API Token API. */
    name?: string,
    /** The unique identifier of the tenant or organization that owns the token or key,
or the tenant context in which the token is authorized for use. This is
particularly relevant in multi-tenant Identity Provider scenarios where tokens
are scoped to specific tenants. */
    tenant_uid?: string,
    /** The type of the token, normalized to the caption of the <code>type_id</code>
value. This indicates whether the token is a Client Token, API Token, or one of
the protocol-specific token types. */
    type?: string,
    /** The normalized token type identifier. Valid values: 0 (Unknown), 1 (Ticket
Granting Ticket - Kerberos), 2 (Service Ticket - Kerberos), 3 (Identity Token -
OIDC), 4 (Refresh Token - OIDC), 5 (SAML Assertion), 6 (Client Token -
IdP-issued), 7 (API Token - generic API keys), 99 (Other). */
    type_id?: string,
    /** The unique ID of a token or key, if available, such as the <code>Secret
ID</code> of Entra ID Application Registration Client Secrets. */
    uid?: string,
    /** The network zone or geographic region that the token or key is authorized to be
used from. This may represent network-based access restrictions, geographic
limitations, or other zone-based authorization policies. Examples include
Okta's network zone restrictions or cloud provider region restrictions. */
    zone?: string,
}


/**
 * The trace object contains information about a distributed trace,  which is
crucial for observability. Traces are made up of one or more spans, which are
individual units of work in application activity. Traces track the journey of a
request as it moves through various services in a system, capturing key details
like timing, status, and dependencies at each step. Traces provide insights
into system performance, helping to identify latency, bottlenecks, and issues
in complex, distributed environments.
 */
export interface Trace extends Object {
    /** The total time, in milliseconds, that the trace covers, calculated as the
difference between start_time and end_time. This duration helps assess the
overall performance of a request as it travels across various services, and is
essential for identifying latency and potential bottlenecks within the
distributed system. The trace duration may differ from individual span
durations due to the propagation and processing times of the trace as it spans
multiple components. */
    duration?: number,
    /** The end timestamp of the trace, essential for identifying latency and
performance bottlenecks. Like the start time, this timestamp is normalized
across the trace system to ensure consistency, even when events are recorded
across distributed services with unsynchronized clocks. Normalized time allows
for accurate trace duration calculations and helps observability tools track
overall performance across services, regardless of the individual system time
settings. */
    end_time?: number,
    /** The flags associated with the trace, used to indicate specific properties or
behaviors, such as whether the trace is sampled or if it has special handling.
Flags help control how traces are processed, logged, and analyzed, providing
valuable context for tracing and observability tools in identifying trace
characteristics or specific tracking requirements. */
    flags?: string[],
    /** Identifies the service or component generating the trace, helping to track and
correlate the flow of requests through various parts of a distributed system.
This information is essential for understanding the role and performance of
specific services within the broader context of system operations and for
diagnosing issues across different components. */
    service?: Service,
    /** Represents a single unit of work or operation within a distributed trace. A
span typically tracks the execution of a request across a service, capturing
important details such as the operation, timestamps, and status. Spans help
break down the overall trace into smaller, manageable parts, enabling detailed
analysis of the performance and behavior of specific operations within the
system. They are crucial for understanding latency, dependencies, and
bottlenecks in complex distributed systems. */
    span?: Span,
    /** The start timestamp of the trace, essential for identifying latency and
performance bottlenecks. Like the end time, this timestamp is normalized across
the trace system to ensure consistency, even when events are recorded across
distributed services with unsynchronized clocks. Normalized time enables
accurate trace duration calculations and helps observability tools track
performance across services, regardless of the individual system time settings. */
    start_time?: number,
    /** The unique identifier of the trace used in distributed systems and
microservices architecture to track and correlate requests across various
components of an application. */
    uid: string,
}


/**
 * The Uniform Resource Locator (URL) object describes the characteristics of a
URL.
 */
export interface Url extends Object {
    /** The Website categorization names, as defined by <code>category_ids</code> enum
values. */
    categories?: string[],
    /** The Website categorization identifiers. */
    category_ids?: string,
    /** The domain portion of the URL. For example: <code>example.com</code> in
<code>https://sub.example.com</code>. */
    domain?: string,
    /** The URL host as extracted from the URL. For example:
<code>www.example.com</code> from
<code>www.example.com/download/trouble</code>. */
    hostname?: string,
    /** The URL path as extracted from the URL. For example:
<code>/download/trouble</code> from
<code>www.example.com/download/trouble</code>. */
    path?: string,
    /** The URL port. For example: <code>80</code>. */
    port?: number,
    /** The query portion of the URL. For example: the query portion of the URL
<code>http://www.example.com/search?q=bad&sort=date</code> is
<code>q=bad&sort=date</code>. */
    query_string?: string,
    /** The context in which a resource was retrieved in a web request. */
    resource_type?: string,
    /** The scheme portion of the URL. For example: <code>http</code>,
<code>https</code>, <code>ftp</code>, or <code>sftp</code>. */
    scheme?: string,
    /** The subdomain portion of the URL. For example: <code>sub</code> in
<code>https://sub.example.com</code> or <code>sub2.sub1</code> in
<code>https://sub2.sub1.example.com</code>. */
    subdomain?: string,
    /** The URL string. See RFC 1738. For example:
<code>http://www.example.com/download/trouble.exe</code>. Note: The URL path
should not populate the URL string. */
    url_string?: string,
}


/**
 * The Vendor Attributes object can be used to represent values of attributes
populated by the Vendor/Finding Provider. It can help distinguish between the
vendor-provided values and consumer-updated values, of key attributes like
<code>severity_id</code>.<br>The original finding producer should not populate
this object. It should be populated by consuming systems that support data
mutability.
 */
export interface VendorAttributes extends Object {
    /** The finding severity, as reported by the Vendor (Finding Provider). The value
should be normalized to the caption of the <code>severity_id</code> value. In
the case of 'Other', it is defined by the source. */
    severity?: string,
    /** The finding severity ID, as reported by the Vendor (Finding Provider). */
    severity_id?: string,
}


/**
 * The vulnerability is an unintended characteristic of a computing component or
system configuration that multiplies the risk of an adverse event or a loss
occurring either due to accidental exposure, deliberate attack, or conflict
with new system components.
 */
export interface Vulnerability extends Object {
    /** Detail about the security advisory, that is used to publicly disclose
cybersecurity vulnerabilities by a vendor. */
    advisory?: Advisory,
    /** List of Affected Code objects that describe details about code blocks
identified as vulnerable. */
    affected_code?: AffectedCode[],
    /** List of software packages identified as affected by a
vulnerability/vulnerabilities. */
    affected_packages?: AffectedPackage[],
    /** The category of a vulnerability or weakness, as reported by the source tool,
such as <code>Container Security</code> or <code>Open Source Security</code>. */
    category?: string,
    /** Describes the Common Vulnerabilities and Exposures <a target='_blank'
href='https://cve.mitre.org/'>(CVE)</a> details related to the vulnerability. */
    cve?: Cve,
    /** Describes the Common Weakness Enumeration <a target='_blank'
href='https://cwe.mitre.org/'>(CWE)</a> details related to the vulnerability. */
    cwe?: Cwe,
    /** Information about the chain of dependencies related to the issue as reported by
an Application Security or Vulnerability Management tool. E.g.,
<code>serverless-offline -> @serverless/utils -> memoizee -> es5-ext</code>. */
    dependency_chain?: string,
    /** The description of the vulnerability. */
    desc?: string,
    /** The time when the exploit was most recently observed. */
    exploit_last_seen_time?: number,
    /** The URL of the exploit code or Proof-of-Concept (PoC). */
    exploit_ref_url?: string,
    /** The requirement description related to any constraints around exploit
execution. */
    exploit_requirement?: string,
    /** The categorization or type of Exploit. E.g., <code>Network</code> or
<code>Physical</code>. */
    exploit_type?: string,
    /** The time when the vulnerability was first observed. */
    first_seen_time?: number,
    /** Indicates if a fix is available for the reported vulnerability. */
    fix_available?: boolean,
    /** The fix coverage, normalized to the caption of the <code>fix_coverage_id</code>
value. */
    fix_coverage?: string,
    /** The normalized identifier for fix coverage, applicable to this vulnerability.
Typically useful, when there are multiple affected packages but only a subset
have available fixes. */
    fix_coverage_id?: string,
    /** Indicates if an exploit or a PoC (proof-of-concept) is available for the
reported vulnerability. */
    is_exploit_available?: boolean,
    /** Indicates if a fix is available for the reported vulnerability. */
    is_fix_available?: boolean,
    /** A list of KB articles or patches related to an endpoint. A KB Article contains
metadata that describes the patch or an update. */
    kb_article_list?: KbArticle[],
    /** The KB article/s related to the entity. A KB Article contains metadata that
describes the patch or an update. */
    kb_articles?: string[],
    /** The time when the vulnerability was most recently observed. */
    last_seen_time?: number,
    /** List of vulnerable packages as identified by the security product */
    packages?: Package[],
    /** A list of reference URLs with additional information about the vulnerability. */
    references?: string[],
    /** List of vulnerability IDs (e.g. CVE ID) that are related to this vulnerability. */
    related_vulnerabilities?: string[],
    /** The remediation recommendations on how to mitigate the identified
vulnerability. */
    remediation?: Remediation,
    /** The vendor assigned severity of the vulnerability. */
    severity?: string,
    /** A title or a brief phrase summarizing the discovered vulnerability. */
    title?: string,
    /** The name of the vendor that identified the vulnerability. */
    vendor_name?: string,
}


/**
 * The resources of a WHOIS record for a given domain. This can include domain
names, IP address blocks, autonomous system information, and/or contact and
registration information for a domain.
 */
export interface Whois extends Object {
    /** The autonomous system information associated with a domain. */
    autonomous_system?: AutonomousSystem,
    /** When the domain was registered or WHOIS entry was created. */
    created_time?: number,
    /** The normalized value of dnssec_status_id. */
    dnssec_status?: string,
    /** Describes the normalized status of DNS Security Extensions (DNSSEC) for a
domain. */
    dnssec_status_id?: string,
    /** The domain name corresponding to the WHOIS record. */
    domain?: string,
    /** An array of <code>Domain Contact</code> objects. */
    domain_contacts?: DomainContact[],
    /** The email address for the registrar's abuse contact */
    email_addr?: string,
    /** The name of the Internet Service Provider (ISP). */
    isp?: string,
    /** The organization name of the Internet Service Provider (ISP). This represents
the parent organization or company that owns/operates the ISP. For example,
Comcast Corporation would be the ISP org for Xfinity internet service. This
attribute helps identify the ultimate provider when ISPs operate under
different brand names. */
    isp_org?: string,
    /** When the WHOIS record was last updated or seen at. */
    last_seen_time?: number,
    /** A collection of name servers related to a domain registration or other record. */
    name_servers?: string[],
    /** The phone number for the registrar's abuse contact */
    phone_number?: string,
    /** The domain registrar. */
    registrar?: string,
    /** The status of a domain and its ability to be transferred, e.g.,
<code>clientTransferProhibited</code>. */
    status?: string,
    /** An array of subdomain strings. Can be used to collect several subdomains such
as those from Domain Generation Algorithms (DGAs). */
    subdomains?: string[],
    /** The IP address block (CIDR) associated with a domain. */
    subnet?: string,
}


/**
 * The Domain Name System (DNS) object represents the shared information
associated with the DNS query and answer objects.
 */
export interface Dns extends Object {
    /** The class of resource records being queried. See <a target='_blank'
href='https://www.rfc-editor.org/rfc/rfc1035.txt'>RFC1035</a>. For example:
<code>IN</code>. */
    class_?: string,
    /** The DNS packet identifier assigned by the program that generated the query. The
identifier is copied to the response. */
    packet_uid?: number,
    /** The type of resource records being queried. See <a target='_blank'
href='https://www.rfc-editor.org/rfc/rfc1035.txt'>RFC1035</a>. For example: A,
AAAA, CNAME, MX, and NS. */
    type?: string,
}


/**
 * The Entity object is an unordered collection of attributes, with a name and
unique identifier. It serves as a base object that defines a set of attributes
and default constraints available in all objects that extend it.
 */
export interface Entity extends Object {
    /** The name of the entity. */
    name?: string,
    /** The unique identifier of the entity. */
    uid?: string,
}


/**
 * The Resource object contains attributes that provide information about a
particular resource. It serves as a base object, offering attributes that help
identify and classify the resource effectively.
 */
export interface Resource extends Entity, DataClassificationProfile {
    /** The time when the resource was created. */
    created_time?: number,
    /** Additional data describing the resource. */
    data?: string,
    /** The list of labels associated to the resource. */
    labels?: string[],
    /** The time when the resource was last modified. */
    modified_time?: number,
    /** The name of the resource. */
    name?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the resource. */
    tags?: KeyValueObject[],
    /** The resource type as defined by the event source. */
    type?: string,
    /** The unique identifier of the resource. */
    uid?: string,
    /** The alternative unique identifier of the resource. */
    uid_alt?: string,
}


/**
 * The Access Analysis Result object describes access relationships and pathways
between identities, resources, focusing on who can access what and through
which mechanisms. This evaluates access levels (read/write/admin), access types
(direct, cross-account, public, federated), and the conditions under which
access is granted. Use this for resource-centric security assessments such as
external access discovery, public exposure analysis, etc.
 */
export interface AccessAnalysisResult extends Object {
    /** The generalized access level or permission scope granted to the identity
through the analyzed policy configuration. Common examples include Read, Write,
List, Delete, Admin, or custom permission levels. */
    access_level?: string,
    /** The type or category of access being granted to the identity. This describes
the nature of the access relationship, such as cross-account access, public
access, federated access, or third-party integration access. Examples include
'Cross-Account', 'Public', 'Federated', 'Service-to-Service', etc. */
    access_type?: string,
    /** The identities that are granted access through the analyzed policy
configuration. This identifies the specific entity that can exercise the
permissions and helps assess the access relationship and potential security
implications. Examples include user accounts, service principals, roles,
account identifiers, or system identities. */
    accessors: User[],
    /** Details about supplementary restrictions and guardrails that may limit the
granted access, applied through additional policy types such as Resource
Control Policies (RCPs) and Service Control Policies (SCPs) in AWS, or other
policy constraints. */
    additional_restrictions?: AdditionalRestriction[],
    /** The condition keys and their values that constrain when and how the granted
access can be exercised. These conditions define the circumstances under which
the access relationship is valid and the privileges can be used. Examples: IP
address restrictions like 'aws:SourceIp:192.0.2.0/24', time-based constraints
like 'aws:RequestedRegion:us-east-1', MFA requirements like
'aws:MultiFactorAuthPresent:true', or custom conditions based on resource tags
and request context. */
    condition_keys?: KeyValueObject[],
    /** The specific privileges, actions, or permissions that are granted through the
analyzed access relationship. This includes the actual operations that the
accessor can perform on the target resource. Examples: AWS actions like
'sts:AssumeRole', 's3:GetObject', 'ec2:DescribeInstances'; Azure actions like
'Microsoft.Storage/storageAccounts/read'; or GCP permissions like
'storage.objects.get'. */
    granted_privileges?: string[],
}


/**
 * The Account object contains details about the account that initiated or
performed a specific activity within a system or application. Additionally, the
Account object refers to logical Cloud and Software-as-a-Service (SaaS) based
containers such as AWS Accounts, Azure Subscriptions, Oracle Cloud
Compartments, Google Cloud Projects, and otherwise.
 */
export interface Account extends Entity {
    /** Indicates if the account is disabled. */
    is_disabled?: boolean,
    /** Indicates if the account is locked. For example, due to the amount of failed
logins. */
    is_locked?: boolean,
    /** Indicates whether synchronization with an on-premises directory service is
enabled. For example, Microsoft Entra Connect. */
    is_on_premises_sync_enabled?: boolean,
    /** The list of labels associated to the account. */
    labels?: string[],
    /** The name of the account (e.g. <code> GCP Project name </code>, <code> Linux
Account name </code> or <code> AWS Account name</code>). */
    name?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the account. */
    tags?: KeyValueObject[],
    /** The account type, normalized to the caption of 'account_type_id'. In the case
of 'Other', it is defined by the event source. */
    type?: string,
    /** The normalized account type identifier. */
    type_id?: string,
    /** The unique identifier of the account (e.g. <code> AWS Account ID </code>,
<code> OCID </code>, <code> GCP Project ID </code>, <code> Azure Subscription
ID </code>, <code> Google Workspace Customer ID </code>, or <code> M365 Tenant
UID</code>). */
    uid?: string,
}


/**
 * The Actor object contains details about the user, role, application, service,
or process that initiated or performed a specific activity. Note that Actor is
not the threat actor of a campaign but may be part of a campaign.
 */
export interface Actor extends Object {
    /** The client application or service that initiated the activity. This can be in
conjunction with the <code>user</code> if present.  Note that
<code>app_name</code> is distinct from the <code>process</code> if present. */
    app_name?: string,
    /** The unique identifier of the client application or service that initiated the
activity. This can be in conjunction with the <code>user</code> if present.
Note that <code>app_name</code> is distinct from the <code>process.pid</code>
or <code>process.uid</code> if present. */
    app_uid?: string,
    /** Provides details about an authorization, such as authorization outcome, and any
associated policies related to the activity/event. */
    authorizations?: Authorization[],
    /** This object describes details about the Identity Provider used. */
    idp?: Idp,
    /** The name of the service that invoked the activity as described in the event. */
    invoked_by?: string,
    /** The process that initiated the activity. */
    process?: Process,
    /** The user session from which the activity was initiated. */
    session?: Session,
    /** The user that initiated the activity or the user context from which the
activity was initiated. */
    user?: User,
}


/**
 * The Additional Restriction object describes supplementary access controls and
guardrails that constrain or limit granted permissions beyond the primary
policy. These restrictions are typically applied through hierarchical policy
frameworks, organizational controls, or conditional access mechanisms. Examples
include AWS Service Control Policies (SCPs), Resource Control Policies (RCPs),
Azure Management Group policies, GCP Organization policies, conditional access
policies, IP restrictions, time-based constraints, and MFA requirements.
 */
export interface AdditionalRestriction extends Object {
    /** Detailed information about the policy document that defines this restriction,
including policy metadata, type, scope, and the specific rules or conditions
that implement the access control. */
    policy: Policy,
    /** The current status of the policy restriction, normalized to the caption of the
<code>status_id</code> enum value. */
    status?: string,
    /** The normalized status identifier indicating the applicability of this policy
restriction. */
    status_id?: string,
}


/**
 * The Advisory object represents publicly disclosed cybersecurity vulnerabilities
defined in a Security advisory. e.g. <code> Microsoft KB Article</code>,
<code>Apple Security Advisory</code>, or a <code>GitHub Security Advisory
(GHSA)</code>
 */
export interface Advisory extends Object {
    /** The average time to patch. */
    avg_timespan?: Timespan,
    /** The Advisory bulletin identifier. */
    bulletin?: string,
    /** The vendors classification of the Advisory. */
    classification?: string,
    /** The time when the Advisory record was created. */
    created_time?: number,
    /** A brief description of the Advisory Record. */
    desc?: string,
    /** The install state of the Advisory. */
    install_state?: string,
    /** The normalized install state ID of the Advisory. */
    install_state_id?: string,
    /** The Advisory has been replaced by another. */
    is_superseded?: boolean,
    /** The time when the Advisory record was last updated. */
    modified_time?: number,
    /** The operating system the Advisory applies to. */
    os?: Os,
    /** The product where the vulnerability was discovered. */
    product?: Product,
    /** A list of reference URLs with additional information about the vulnerabilities
disclosed in the Advisory. */
    references?: string[],
    /** A list of Common Vulnerabilities and Exposures <a target='_blank'
href='https://cve.mitre.org/'>(CVE)</a> identifiers related to the
vulnerabilities disclosed in the Advisory. */
    related_cves?: Cve[],
    /** A list of Common Weakness Enumeration <a target='_blank'
href='https://cwe.mitre.org/'>(CWE)</a> identifiers related to the
vulnerabilities disclosed in the Advisory. */
    related_cwes?: Cwe[],
    /** The size in bytes for the Advisory. Usually populated for a KB Article patch. */
    size?: number,
    /** The Advisory link from the source vendor. */
    src_url?: string,
    /** A title or a brief phrase summarizing the Advisory. */
    title?: string,
    /** The unique identifier assigned to the advisory or disclosed vulnerability, e.g,
<code>GHSA-5mrr-rgp6-x4gr</code>. */
    uid: string,
}


/**
 * The Affected Code object describes details about a code block identified as
vulnerable.
 */
export interface AffectedCode extends Object {
    /** The column number of the last part of the assessed code identified as
vulnerable. */
    end_column?: number,
    /** The line number of the last line of code block identified as vulnerable. */
    end_line?: number,
    /** Details about the file that contains the affected code block. */
    file: File,
    /** Details about the user that owns the affected file. */
    owner?: User,
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
    /** Details about the specific rule, e.g., those defined as part of a larger
<code>policy</code>, that triggered the finding. */
    rule?: Rule,
    /** The column number of the first part of the assessed code identified as
vulnerable. */
    start_column?: number,
    /** The line number of the first line of code block identified as vulnerable. */
    start_line?: number,
}


/**
 * The Affected Package object describes details about a software package
identified as affected by a vulnerability/vulnerabilities.
 */
export interface AffectedPackage extends Package {
    /** The software package version in which a reported vulnerability was
patched/fixed. */
    fixed_in_version?: string,
    /** The installation path of the affected package. */
    path?: string,
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
}


/**
 * An Agent (also known as a Sensor) is typically installed on an Operating System
(OS) and serves as a specialized software component that can be designed to
monitor, detect, collect, archive, or take action. These activities and
possible actions are defined by the upstream system controlling the Agent and
its intended purpose. For instance, an Agent can include Endpoint Detection &
Response (EDR) agents, backup/disaster recovery sensors, Application
Performance Monitoring or profiling sensors, and similar software.
 */
export interface Agent extends Object {
    /** The name of the agent or sensor. For example: <code>AWS SSM Agent</code>. */
    name?: string,
    /** Describes the various policies that may be applied or enforced by an agent or
sensor. E.g., Conditional Access, prevention, auto-update, tamper protection,
destination configuration, etc. */
    policies?: Policy[],
    /** The normalized caption of the type_id value for the agent or sensor. In the
case of 'Other' or 'Unknown', it is defined by the event source. */
    type?: string,
    /** The normalized representation of an agent or sensor. E.g., EDR, vulnerability
management, APM, backup & recovery, etc. */
    type_id?: string,
    /** The UID of the agent or sensor, sometimes known as a Sensor ID or
<code>aid</code>. */
    uid?: string,
    /** An alternative or contextual identifier for the agent or sensor, such as a
configuration, organization, or license UID. */
    uid_alt?: string,
    /** The company or author who created the agent or sensor. For example:
<code>Crowdstrike</code>. */
    vendor_name?: string,
    /** The semantic version of the agent or sensor, e.g., <code>7.101.50.0</code>. */
    version?: string,
}


/**
 * The AI Model object describes the characteristics of an AI/ML model. Examples
include language models like GPT-4, embedding models like
text-embedding-ada-002, and computer vision models like CLIP.
 */
export interface AiModel extends Entity {
    /** AI service provider or organization name. For example: <code>OpenAI</code>,
<code>Anthropic</code>, <code>Google</code>, or <code>Internal</code>. */
    ai_provider: string,
    /** Human-readable model name. For example: <code>gpt-4o</code>,
<code>claude-3-sonnet</code>, or <code>text-embedding-ada-002</code>. */
    name: string,
    /** The unique identifier of the AI model. */
    uid?: string,
    /** Model version identifier. For example: <code>2024-05-13</code>,
<code>v2.1.0</code>, or <code>beta</code>. */
    version?: string,
}


/**
 * The Aircraft object represents any aircraft or otherwise airborne asset such as
an unmanned system, airplane, balloon, spacecraft, or otherwise. The Aircraft
object is intended to normalized data captured or otherwise logged from active
radar, passive radar, multi-spectral systems, or the Automatic Dependant
Broadcast - Surveillance (ADS-B), and/or Mode S systems.
 */
export interface Aircraft extends Entity {
    /** The detailed geographical location usually associated with an IP address. */
    location?: Location,
    /** The model name of the aircraft or unmanned system. */
    model?: string,
    /** The name of the aircraft, such as the such as the flight name or callsign. */
    name?: string,
    /** The serial number of the aircraft. */
    serial_number?: string,
    /** Ground speed of flight. This value is provided in meters per second with a
minimum resolution of 0.25 m/s. Special Values: <code>Invalid</code>, <code>No
Value</code>, or <code>Unknown: 255 m/s</code>. */
    speed?: string,
    /** Provides quality/containment on horizontal ground speed. Measured in
meters/second. */
    speed_accuracy?: string,
    /** Direction of flight expressed as a “True North-based” ground track angle. This
value is provided in clockwise degrees with a minimum resolution of 1 degree.
If aircraft is not moving horizontally, use the “Unknown” value */
    track_direction?: string,
    /** The primary identification identifier for an aircraft, such as the 24-bit
International Civil Aviation Organization (ICAO) identifier of the aircraft, as
6 hex digits. */
    uid?: string,
    /** A secondary identification identifier for an aircraft, such as the 4-digit
squawk (octal representation). */
    uid_alt?: string,
    /** Vertical speed upward relative to the WGS-84 datum, measured in meters per
second. Special Values: <code>Invalid</code>, <code>No Value</code>, or
<code>Unknown: 63 m/s</code>. */
    vertical_speed?: string,
}


/**
 * The Analytic object contains details about the analytic technique used to
analyze and derive insights from the data or information that led to the
creation of a finding or conclusion.
 */
export interface Analytic extends Entity {
    /** The algorithm used by the underlying analytic to generate the finding. */
    algorithm?: string,
    /** The analytic category. */
    category?: string,
    /** The description of the analytic that generated the finding. */
    desc?: string,
    /** The name of the analytic that generated the finding. */
    name?: string,
    /** Other analytics related to this analytic. */
    related_analytics?: Analytic[],
    /** The Analytic state. */
    state?: string,
    /** The Analytic state identifier. */
    state_id?: string,
    /** The analytic type. */
    type?: string,
    /** The analytic type ID. */
    type_id: string,
    /** The unique identifier of the analytic that generated the finding. */
    uid?: string,
    /** The analytic version. For example: <code>1.1</code>. */
    version?: string,
}


/**
 * Describes an anomaly or deviation detected in a system. Anomalies are
unexpected activity patterns that could indicate potential issues needing
attention.
 */
export interface Anomaly extends Object {
    /** The specific parameter, metric or property where the anomaly was observed.
Examples include: CPU usage percentage, API response time in milliseconds, HTTP
error rate, memory utilization, network latency, transaction volume, etc. This
helps identify the exact aspect of the system exhibiting anomalous behavior. */
    observation_parameter: string,
    /** The type of analysis methodology used to detect the anomaly. This indicates how
the anomaly was identified through different analytical approaches. Common
types include: Frequency Analysis, Time Pattern Analysis, Volume Analysis,
Sequence Analysis, Distribution Analysis, etc. */
    observation_type?: string,
    /** Details about the observed anomaly or observations that were flagged as
anomalous compared to expected baseline behavior. */
    observations: Observation[],
    /** The specific pattern identified within the observation type. For Frequency
Analysis, this could be 'FREQUENT', 'INFREQUENT', 'RARE', or 'UNSEEN'. For Time
Pattern Analysis, this could be 'BUSINESS_HOURS', 'OFF_HOURS', or
'UNUSUAL_TIME'. For Volume Analysis, this could be 'NORMAL_VOLUME',
'HIGH_VOLUME', or 'SURGE'. The pattern values are specific to each observation
type and indicate how the observed behavior relates to the baseline. */
    observed_pattern?: string,
}


/**
 * The API, or Application Programming Interface, object represents  information
pertaining to an API request and response.
 */
export interface Api extends Object {
    /** The information pertaining to the API group. */
    group?: Group,
    /** Verb/Operation associated with the request */
    operation: string,
    /** Details pertaining to the API request. */
    request?: Request,
    /** Details pertaining to the API response. */
    response?: Response,
    /** The information pertaining to the API service. */
    service?: Service,
    /** The API or client token used to authenticate or authorize the API request. This
attribute contains the base <code>token</code> object that represents: (1)
IdP-issued client tokens (type_id: 6) such as Okta API tokens or Microsoft
Entra ID Application Registration client secrets, or (2) generic API
tokens/keys (type_id: 7) used for SaaS application authentication. Use this
attribute when the API request was authenticated using a token that should be
tracked as part of the API activity event. Note: Protocol-specific
authentication tokens (Kerberos, OIDC, SAML) should be represented using
<code>authentication_token</code> in authentication events, not in API activity
events. */
    token?: Token,
    /** The version of the API service. */
    version?: string,
}


/**
 * An Application describes the details for an inventoried application as reported
by an Application Security tool or other Developer-centric tooling.
Applications can be defined as Kubernetes resources, Containerized resources,
or application hosting-specific cloud sources such as AWS Elastic BeanStalk,
AWS Lightsail, or Azure Logic Apps.
 */
export interface ApplicationObject extends Object {
    /** The criticality of the application as defined by the event source. */
    criticality?: string,
    /** Additional data describing the application. */
    data?: string,
    /** A description or commentary for an application, usually retrieved from an
upstream system. */
    desc?: string,
    /** The name of the related application or associated resource group. */
    group?: Group,
    /** The fully qualified name of the application. */
    hostname?: string,
    /** The list of labels associated to the application. */
    labels?: string[],
    /** The name of the application. */
    name?: string,
    /** The identity of the service or user account that owns the application. */
    owner?: User,
    /** The cloud region of the resource. */
    region?: string,
    /** A graph representation showing how this application relates to and interacts
with other entities in the environment. This can include parent/child
relationships, dependencies, or other connections. */
    resource_relationship?: Graph,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: string,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** The Software Bill of Materials (SBOM) associated with the application */
    sbom?: Sbom,
    /** The list of tags; <code>{key:value}</code> pairs associated to the application. */
    tags?: KeyValueObject[],
    /** The type of application as defined by the event source, e.g.,
<code>GitHub</code>, <code>Azure Logic App</code>, or <code>Amazon Elastic
BeanStalk</code>. */
    type?: string,
    /** The unique identifier for the application. */
    uid?: string,
    /** An alternative or contextual identifier for the application, such as a
configuration, organization, or license UID. */
    uid_alt?: string,
    /** The URL of the application. */
    url?: Url,
    /** The semantic version of the application, e.g., <code>1.7.4</code>. */
    version?: string,
}


/**
 * The Assessment object describes a point-in-time assessment, check, or
evaluation of a specific configuration or signal against an asset, entity,
person, or otherwise. For example, this can encapsulate <code>os_signals</code>
from CrowdStrike Falcon Zero Trust Assessments, or account for
<code>Datastore</code> configurations from Cyera, or capture details of
Microsoft Intune configuration policies.
 */
export interface Assessment extends Entity {
    /** The category that the assessment is part of. For example:
<code>Prevention</code> or <code>Windows 10</code>. */
    category?: string,
    /** The description of the assessment criteria, or a description of the specific
configuration or signal the assessment is targeting. */
    desc?: string,
    /** Determines whether the assessment against the specific configuration or signal
meets the assessments criteria. For example, if the assessment checks if a
<code>Datastore</code> is encrypted or not, having encryption would be
evaluated as <code>true</code>. */
    meets_criteria: boolean,
    /** The name of the configuration or signal being assessed. For example:
<code>Kernel Mode Code Integrity (KMCI)</code> or
<code>publicAccessibilityState</code>. */
    name?: string,
    /** The details of any policy associated with an assessment. */
    policy?: Policy,
    /** The unique identifier of the configuration or signal being assessed. For
example: the <code>signal_id</code>. */
    uid?: string,
}


/**
 * The MITRE ATT&CK® & ATLAS™ object describes the tactic, technique,
sub-technique & mitigation associated to an attack.
 */
export interface Attack extends Object {
    /** The Mitigation object describes the MITRE ATT&CK® or ATLAS™ Mitigation ID
and/or name that is associated to an attack. */
    mitigation?: Mitigation,
    /** The Sub-technique object describes the MITRE ATT&CK® or ATLAS™ Sub-technique ID
and/or name associated to an attack. */
    sub_technique?: SubTechnique,
    /** The Tactic object describes the MITRE ATT&CK® or ATLAS™ Tactic ID and/or name
that is associated to an attack. */
    tactic?: Tactic,
    /** The Tactic object describes the tactic ID and/or tactic name that are
associated with the attack technique, as defined by <a target='_blank'
href='https://attack.mitre.org/wiki/ATT&CK_Matrix'>ATT&CK® Matrix</a>. */
    tactics?: Tactic[],
    /** The Technique object describes the MITRE ATT&CK® or ATLAS™ Technique ID and/or
name associated to an attack. */
    technique?: Technique,
    /** The ATT&CK® or ATLAS™ Matrix version. */
    version?: string,
}


/**
 * An Authentication Factor object describes a category of methods used for
identity verification in an authentication attempt.
 */
export interface AuthFactor extends Object {
    /** Device used to complete an authentication request. */
    device?: Device,
    /** The email address used in an email-based authentication factor. */
    email_addr?: string,
    /** The type of authentication factor used in an authentication attempt. */
    factor_type?: string,
    /** The normalized identifier for the authentication factor. */
    factor_type_id: string,
    /** Whether the authentication factor is an HMAC-based One-time Password (HOTP). */
    is_hotp?: boolean,
    /** Whether the authentication factor is a Time-based One-time Password (TOTP). */
    is_totp?: boolean,
    /** The phone number used for a telephony-based authentication request. */
    phone_number?: string,
    /** The name of provider for an authentication factor. */
    provider?: string,
    /** The question(s) provided to user for a question-based authentication factor. */
    security_questions?: string[],
}


/**
 * The Authentication Token object extends the base <code>token</code> object and
represents standardized authentication tokens, tickets, or assertions that
conform to established authentication protocols such as Kerberos, OIDC, and
SAML. This object inherits all attributes from <code>token</code> and adds
protocol-specific attributes (e.g., <code>kerberos_flags</code>,
<code>encryption_details</code>) for authentication events. Use this object in
authentication events to represent protocol-specific tokens: Kerberos Ticket
Granting Tickets (TGT) and Service Tickets (ST), OIDC Identity Tokens and
Refresh Tokens, and SAML Assertions. These tokens are issued by authentication
servers and identity providers and carry protocol-specific metadata, lifecycle
information, and security attributes defined by their respective
specifications. When to use this object: Use <code>authentication_token</code>
when representing protocol-specific authentication tokens (type_id values 1-5:
Kerberos TGT/ST, OIDC ID/Refresh tokens, SAML assertions) in authentication
events. When NOT to use this object: Do NOT use
<code>authentication_token</code> for API tokens or client tokens (type_id
values 6-7) used in API activity events - use the base <code>token</code>
object instead. Do NOT use <code>authentication_token</code> for generic API
keys - use the base <code>token</code> object instead.
 */
export interface AuthenticationToken extends Token {
    /** The time that the authentication token was created or issued. This corresponds
to the token issuance time, such as the <code>iat</code> (issued at) claim in
OIDC tokens, the issue instant in SAML assertions, or the ticket start time in
Kerberos tickets. */
    created_time?: number,
    /** The encryption details of the authentication token. */
    encryption_details?: EncryptionDetails,
    /** The expiration time of the authentication token. */
    expiration_time?: number,
    /** Indicates whether the authentication token is renewable. */
    is_renewable?: boolean,
    /** A bitmask, either in hexadecimal or decimal form, which encodes various
attributes or permissions associated with a Kerberos ticket. These flags
delineate specific characteristics of the ticket, such as its renewability or
forwardability. */
    kerberos_flags?: string,
    /** The type of the authentication token. */
    type?: string,
    /** The normalized authentication token type identifier. This attribute restricts
the base <code>token.type_id</code> enum to only protocol-specific
authentication token types (values 0, 1-5, 99). API tokens and client tokens
(values 6-7) are not valid for <code>authentication_token</code> - use the base
<code>token</code> object for those types. */
    type_id?: string,
}


/**
 * The Authorization Result object provides details about the authorization
outcome and associated policies related to activity.
 */
export interface Authorization extends Object {
    /** Authorization Result/outcome, e.g. allowed, denied. */
    decision?: string,
    /** Details about the Identity/Access management policies that are applicable. */
    policy?: Policy,
}


/**
 * An autonomous system (AS) is a collection of connected Internet Protocol (IP)
routing prefixes under the control of one or more network operators on behalf
of a single administrative entity or domain that presents a common, clearly
defined routing policy to the internet.
 */
export interface AutonomousSystem extends Object {
    /** Organization name for the Autonomous System. */
    name?: string,
    /** Unique number that the AS is identified by. */
    number?: number,
}


/**
 * Describes the baseline or expected behavior of a system, service, or component
based on historical observations and measurements. It establishes reference
points for comparison to detect anomalies, trends, and deviations from typical
patterns.
 */
export interface Baseline extends Object {
    /** The specific parameter or property being monitored. Examples include: CPU usage
percentage, API response time in milliseconds, HTTP error rate, memory
utilization, network latency, transaction volume, etc. */
    observation_parameter: string,
    /** The type of analysis being performed to establish baseline behavior. Common
types include: Frequency Analysis, Time Pattern Analysis, Volume Analysis,
Sequence Analysis, Distribution Analysis, etc. */
    observation_type?: string,
    /** Collection of actual measured values, data points and observations recorded for
this baseline. */
    observations: Observation[],
    /** The specific pattern identified within the observation type. For Frequency
Analysis, this could be 'FREQUENT', 'INFREQUENT', 'RARE', or 'UNSEEN'. For Time
Pattern Analysis, this could be 'BUSINESS_HOURS', 'OFF_HOURS', or
'UNUSUAL_TIME'. For Volume Analysis, this could be 'NORMAL_VOLUME',
'HIGH_VOLUME', or 'SURGE'. The pattern values are specific to each observation
type and indicate the baseline behavior. */
    observed_pattern?: string,
}


/**
 * Campaign represent organized efforts by threat actors to achieve malicious
objectives over a period, often characterized by shared tactics, techniques,
and procedures (TTPs).
 */
export interface Campaign extends Object {
    /** The name of a specific campaign associated with a cyber threat. */
    name: string,
}


/**
 * The Digital Certificate, also known as a Public Key Certificate, object
contains information about the ownership and usage of a public key. It serves
as a means to establish trust in the authenticity and integrity of the public
key and the associated entity.
 */
export interface Certificate extends Object {
    /** The time when the certificate was created. */
    created_time?: number,
    /** The expiration time of the certificate. */
    expiration_time?: number,
    /** The fingerprint list of the certificate. */
    fingerprints?: Fingerprint[],
    /** Denotes whether a digital certificate is self-signed or signed by a known
certificate authority (CA). */
    is_self_signed?: boolean,
    /** The certificate issuer distinguished name. */
    issuer: string,
    /** The list of subject alternative names that are secured by a specific
certificate. */
    sans?: San[],
    /** The serial number of the certificate used to create the digital signature. */
    serial_number: string,
    /** The certificate subject distinguished name. */
    subject?: string,
    /** The unique identifier of the certificate. */
    uid?: string,
    /** The certificate version. */
    version?: string,
}


/**
 * The check object defines a specific, testable compliance verification point
that evaluates a target device against a standard, framework, or custom
requirement. While checks are typically associated with formal standards (like
CIS, NIST, or ISO), they can also represent custom or organizational
requirements. When mapped to controls, checks can evaluate specific
control_parameters to determine compliance status, but neither the control
mapping nor control_parameters are required for a valid check.
 */
export interface Check extends Object {
    /** The detailed description of the compliance check, explaining the security
requirement, vulnerability, or configuration being assessed. For example, CIS:
<code>The cramfs filesystem type is a compressed read-only Linux filesystem.
Removing support for unneeded filesystem types reduces the local attack
surface.</code> or DISA STIG: <code>Unauthorized access to the information
system by foreign entities may result in loss or compromise of data.</code> */
    desc?: string,
    /** The name or title of the compliance check. For example, CIS: <code>Ensure
mounting of cramfs filesystems is disabled</code> or DISA STIG: <code>The
Ubuntu operating system must implement DoD-approved encryption to protect the
confidentiality of remote access sessions</code>. */
    name?: string,
    /** Describes details about the resource that this check evaluated. */
    resource?: ResourceDetails,
    /** The severity level as defined in the source document. For example CIS
Benchmarks, valid values are: <code>Level 1</code> (security-forward, essential
settings), <code>Level 2</code> (security-focused environment, more
restrictive), or <code>Scored/Not Scored</code> (whether compliance can be
automatically checked). For DISA STIG, valid values are: <code>CAT I</code>
(maps to severity_id 5/Critical), <code>CAT II</code> (maps to severity_id
4/High), or <code>CAT III</code> (maps to severity_id 3/Medium). */
    severity?: string,
    /** The normalized severity identifier that maps severity levels to standard
severity levels. For example CIS Benchmark: <code>Level 2</code> maps to
<code>4</code> (High), <code>Level 1</code> maps to <code>3</code> (Medium).
For DISA STIG: <code>CAT I</code> maps to <code>5</code> (Critical), <code>CAT
II</code> maps to <code>4</code> (High), and <code>CAT III</code> maps to
<code>3</code> (Medium). */
    severity_id?: string,
    /** The regulatory or industry standard this check is associated with. E.g.,
<code>PCI DSS 3.2.1</code>, <code>HIPAA Security Rule</code>, <code>NIST SP
800-53 Rev. 5</code>, or <code>ISO/IEC 27001:2013</code>. */
    standards?: string[],
    /** The resultant status of the compliance check normalized to the caption of the
<code>status_id</code> value. For example, CIS Benchmark: <code>Pass</code>
when all requirements are met, <code>Fail</code> when requirements are not met,
or DISA STIG: <code>NotAFinding</code> (maps to status_id 1/Pass),
<code>Open</code> (maps to status_id 3/Fail). */
    status?: string,
    /** The normalized status identifier of the compliance check. */
    status_id?: string,
    /** The unique identifier of the compliance check within its standard or framework.
For example, CIS Benchmark identifier <code>1.1.1.1</code>, DISA STIG
identifier <code>V-230234</code>, or NIST control identifier
<code>AC-17(2)</code>. */
    uid?: string,
    /** The check version. For example, CIS Benchmark: <code>1.1.0</code> for Amazon
Linux 2 or DISA STIG: <code>V2R1</code> for Windows 10. */
    version?: string,
}


/**
 * The CIS Benchmark object describes best practices for securely configuring IT
systems, software, networks, and cloud infrastructure as defined by the <a
target='_blank' href='https://www.cisecurity.org/cis-benchmarks/'>Center for
Internet Security</a>. See also <a target='_blank'
href='https://www.cisecurity.org/insights/blog/getting-to-know-the-cis-benchmarks'>Getting
to Know the CIS Benchmarks</a>.
 */
export interface CisBenchmark extends Object {
    /** The CIS Critical Security Controls is a prioritized set of actions to protect
your organization and data from cyber-attack vectors. */
    cis_controls?: CisControl[],
    /** The CIS Benchmark description. For example: <i>The cramfs filesystem type is a
compressed read-only Linux filesystem embedded in small footprint systems. A
cramfs image can be used without having to first decompress the image.</i> */
    desc?: string,
    /** The CIS Benchmark name. For example: <i>Ensure mounting of cramfs filesystems
is disabled.</i> */
    name: string,
}


/**
 * The CIS Benchmark Result object contains information as defined by the Center
for Internet Security (<a target='_blank'
href='https://www.cisecurity.org/cis-benchmarks/'>CIS</a>) benchmark result.
CIS Benchmarks are a collection of best practices for securely configuring IT
systems, software, networks, and cloud infrastructure.
 */
export interface CisBenchmarkResult extends Object {
    /** The CIS benchmark description. */
    desc?: string,
    /** The CIS benchmark name. */
    name: string,
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
    /** The CIS benchmark rule. */
    rule?: Rule,
}


/**
 * The CIS Control (aka Critical Security Control) object describes a prioritized
set of actions to protect your organization and data from cyber-attack vectors.
The <a target='_blank' href='https://www.cisecurity.org/controls'>CIS
Controls</a> are defined by the Center for Internet Security.
 */
export interface CisControl extends Object {
    /** The CIS Control description. For example: <i>Uninstall or disable unnecessary
services on enterprise assets and software, such as an unused file sharing
service, web application module, or service function.</i> */
    desc?: string,
    /** The CIS Control name. For example: <i>4.8 Uninstall or Disable Unnecessary
Services on Enterprise Assets and Software.</i> */
    name: string,
    /** The CIS Control version. For example: <i>v8</i>. */
    version?: string,
}


/**
 * The CIS Critical Security Control (CSC) contains information as defined by the
Center for Internet Security Critical Security Control <a target='_blank'
href='https://www.cisecurity.org/controls'>(CIS CSC)</a>. Prioritized set of
actions to protect your organization and data from cyber-attack vectors.
 */
export interface CisCsc extends Object {
    /** A Control is prescriptive, prioritized, and simplified set of best practices
that one can use to strengthen their cybersecurity posture. e.g. AWS
SecurityHub Controls, CIS Controls. */
    control: string,
    /** The CIS critical security control version. */
    version?: string,
}


/**
 * The Classifier Details object describes details about the classifier used for
data classification.
 */
export interface ClassifierDetails extends Object {
    /** The name of the classifier. */
    name?: string,
    /** The type of the classifier. */
    type: string,
    /** The unique identifier of the classifier. */
    uid?: string,
}


/**
 * The Cloud object describes the cloud computing environment where an event or
finding originated. It provides comprehensive context about the cloud
infrastructure, including the cloud service provider, account or subscription
details, organizational structure, geographic regions, availability zones, and
logical partitions.
 */
export interface Cloud extends Object {
    /** The Account object containing details about the cloud account, subscription, or
billing unit where the event or finding was created. This object includes
properties such as the account name, unique identifier, type, labels, and
tags.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong> Account
object with <code>name</code>, <code>uid</code> (Account ID),
<code>type</code>, and other account properties</li><li><strong>Azure:</strong>
Subscription object with <code>name</code>, <code>uid</code> (Subscription ID),
<code>type</code>, and subscription metadata</li><li><strong>GCP:</strong>
Project object with <code>name</code>, <code>uid</code> (Project ID),
<code>type</code>, and project attributes</li><li><strong>Oracle
Cloud:</strong> Compartment object with <code>name</code>, <code>uid</code>
(Tenancy OCID), <code>type</code>, and compartment details</li></ul> */
    account?: Account,
    /** The logical grouping or isolated segment within a cloud provider's
infrastructure where the event or finding was created, often used for
compliance, governance, or regional
separation.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong>
Partition where the event occurred (<code>aws</code>, <code>aws-cn</code>,
<code>aws-us-gov</code>)</li><li><strong>Azure:</strong> Cloud environment
where the event occurred (<code>AzureCloud</code>,
<code>AzureUSGovernment</code>, <code>AzureChinaCloud</code>)</li></ul> */
    cloud_partition?: string,
    /** The Organization object containing details about the organizational unit or
management structure that governs the account, subscription, or project where
the event or finding was created. This object includes properties such as the
organization name, unique identifier, type, and other organizational
metadata.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong>
Organization object with <code>name</code>, <code>uid</code> (Organization ID),
<code>type</code>, and other organizational
properties</li><li><strong>Azure:</strong> Management Group object with
<code>name</code>, <code>uid</code> (Management Group ID), <code>type</code>,
and management group metadata</li><li><strong>GCP:</strong> Organization object
with <code>name</code>, <code>uid</code> (Organization ID), <code>type</code>,
and organizational attributes</li><li><strong>Oracle Cloud:</strong> Tenancy
object with <code>name</code>, <code>uid</code> (Tenancy OCID),
<code>type</code>, and tenancy details</li></ul> */
    org?: Organization,
    /** The unique identifier of a Cloud project. */
    project_uid?: string,
    /** The unique name of the Cloud services provider where the event or finding was
created. Examples include AWS, Azure, GCP (Google Cloud Platform), Oracle
Cloud, IBM Cloud, Alibaba Cloud, or other public, private, or hybrid cloud
providers. */
    provider: string,
    /** The cloud region where the event or finding was created, as defined by the
cloud
provider.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong>
Region where the event occurred (<code>us-east-1</code>,
<code>eu-west-1</code>)</li><li><strong>Azure:</strong> Region where the event
occurred (<code>East US</code>, <code>West
Europe</code>)</li><li><strong>GCP:</strong> Region where the event occurred
(<code>us-central1</code>, <code>europe-west1</code>)</li><li><strong>Oracle
Cloud:</strong> Region where the event occurred (<code>us-ashburn-1</code>,
<code>uk-london-1</code>)</li></ul> */
    region?: string,
    /** The availability zone in the cloud region where the event or finding was
created, as defined by the cloud
provider.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong>
Availability zone where the event occurred (<code>us-east-1a</code>,
<code>us-east-1b</code>)</li><li><strong>Azure:</strong> Availability zone
where the event occurred (<code>1</code>, <code>2</code>, <code>3</code> within
a region)</li><li><strong>GCP:</strong> Availability zone where the event
occurred (<code>us-central1-a</code>,
<code>us-central1-b</code>)</li><li><strong>Oracle Cloud:</strong> Availability
zone where the event occurred (<code>AD-1</code>, <code>AD-2</code>,
<code>AD-3</code>)</li></ul> */
    zone?: string,
}


/**
 * The Compliance object contains information about Industry and Regulatory
Framework standards, controls and requirements or details about custom
assessments utilized in a compliance evaluation. Standards define broad
security frameworks, controls represent specific security requirements within
those frameworks, and checks are the testable verification points used to
determine if controls are properly implemented.
 */
export interface Compliance extends Object {
    /** A list of assessments associated with the compliance requirements evaluation. */
    assessments?: Assessment[],
    /** The category a control framework pertains to, as reported by the source tool,
such as <code>Asset Management</code> or <code>Risk Assessment</code>. */
    category?: string,
    /** A list of compliance checks associated with specific industry standards or
frameworks. Each check represents an individual rule or requirement that has
been evaluated against a target device. Checks typically include details such
as the check name (e.g., CIS: 'Ensure mounting of cramfs filesystems is
disabled' or DISA STIG descriptive titles), unique identifiers (such as CIS
identifier '1.1.1.1' or DISA STIG identifier 'V-230234'), descriptions
(detailed explanations of security requirements or vulnerability discussions),
and version information. */
    checks?: Check[],
    /** A list of reference KB articles that provide information to help organizations
understand, interpret, and implement compliance standards. They provide
guidance, best practices, and examples. */
    compliance_references?: KbArticle[],
    /** A list of established guidelines or criteria that define specific requirements
an organization must follow. */
    compliance_standards?: KbArticle[],
    /** A Control is a prescriptive, actionable set of specifications that strengthens
device posture. The control specifies required security measures, while the
specific implementation values are defined in control_parameters. E.g., CIS AWS
Foundations Benchmark 1.2.0 - Control 2.1 - Ensure CloudTrail is enabled in all
regions */
    control?: string,
    /** The list of control parameters evaluated in a Compliance check. E.g.,
parameters for CloudTrail configuration might include
<code>multiRegionTrailEnabled: true</code>, <code>logFileValidationEnabled:
true</code>, and <code>requiredRegions: [us-east-1, us-west-2]</code> */
    control_parameters?: KeyValueObject[],
    /** The description or criteria of a control. */
    desc?: string,
    /** The specific compliance requirements being evaluated. E.g., <code>PCI DSS
Requirement 8.2.3 - Passwords must meet minimum complexity requirements</code>
or <code>HIPAA Security Rule 164.312(a)(2)(iv) - Implement encryption and
decryption mechanisms</code> */
    requirements?: string[],
    /** The regulatory or industry standards being evaluated for compliance. */
    standards?: string[],
    /** The resultant status of the compliance check normalized to the caption of the
<code>status_id</code> value. In the case of 'Other', it is defined by the
event source. */
    status?: string,
    /** The resultant status code of the compliance check. */
    status_code?: string,
    /** The contextual description of the <code>status, status_code</code> values. */
    status_detail?: string,
    /** A list of contextual descriptions of the <code>status, status_code</code>
values. */
    status_details?: string[],
    /** The normalized status identifier of the compliance check. */
    status_id?: string,
}


/**
 * The Container object describes an instance of a specific container. A container
is a prepackaged, portable system image that runs isolated on an existing
system using a container runtime like containerd.
 */
export interface Container extends Object {
    /** Commit hash of image created for docker or the SHA256 hash of the container.
For example:
<code>13550340a8681c84c861aac2e5b440161c2b33a3e4f302ac680ca5b686de48de</code>. */
    hash?: Fingerprint,
    /** The container image used as a template to run the container. */
    image?: Image,
    /** The list of labels associated to the container. */
    labels?: string[],
    /** The container name. */
    name?: string,
    /** The network driver used by the container. For example, bridge, overlay, host,
none, etc. */
    network_driver?: string,
    /** The orchestrator managing the container, such as ECS, EKS, K8s, or OpenShift. */
    orchestrator?: string,
    /** The unique identifier of the pod (or equivalent) that the container is
executing on. */
    pod_uuid?: string,
    /** The backend running the container, such as containerd or cri-o. */
    runtime?: string,
    /** The size of the container image. */
    size?: number,
    /** The tag used by the container. It can indicate version, format, OS. */
    tag?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the container. */
    tags?: KeyValueObject[],
    /** The full container unique identifier for this instantiation of the container.
For example:
<code>ac2ea168264a08f9aaca0dfc82ff3551418dfd22d02b713142a6843caa2f61bf</code>. */
    uid?: string,
}


/**
 * The Common Vulnerabilities and Exposures (CVE) object represents publicly
disclosed cybersecurity vulnerabilities defined in CVE Program catalog (<a
target='_blank' href='https://cve.mitre.org/'>CVE</a>). There is one CVE Record
for each vulnerability in the catalog.
 */
export interface Cve extends Object {
    /** The Record Creation Date identifies when the CVE ID was issued to a CVE
Numbering Authority (CNA) or the CVE Record was published on the CVE List. Note
that the Record Creation Date does not necessarily indicate when this
vulnerability was discovered, shared with the affected vendor, publicly
disclosed, or updated in CVE. */
    created_time?: number,
    /** The CVSS object details Common Vulnerability Scoring System (<a target='_blank'
href='https://www.first.org/cvss/'>CVSS</a>) scores from the advisory that are
related to the vulnerability. */
    cvss?: Cvss[],
    /** The CWE object represents a weakness in a software system that can be exploited
by a threat actor to perform an attack. The CWE object is based on the <a
target='_blank' href='https://cwe.mitre.org/'>Common Weakness Enumeration
(CWE)</a> catalog. */
    cwe?: Cwe,
    /** The <a target='_blank' href='https://cwe.mitre.org/'>Common Weakness
Enumeration (CWE)</a> unique identifier. For example: <code>CWE-787</code>. */
    cwe_uid?: string,
    /** Common Weakness Enumeration (CWE) definition URL. For example:
<code>https://cwe.mitre.org/data/definitions/787.html</code>. */
    cwe_url?: string,
    /** A brief description of the CVE Record. */
    desc?: string,
    /** The Exploit Prediction Scoring System (EPSS) object describes the estimated
probability a vulnerability will be exploited. EPSS is a community-driven
effort to combine descriptive information about vulnerabilities (CVEs) with
evidence of actual exploitation in-the-wild. (<a target='_blank'
href='https://www.first.org/epss/'>EPSS</a>). */
    epss?: Epss,
    /** The Record Modified Date identifies when the CVE record was last updated. */
    modified_time?: number,
    /** The product where the vulnerability was discovered. */
    product?: Product,
    /** A list of reference URLs with additional information about the CVE Record. */
    references?: string[],
    /** Describes the Common Weakness Enumeration <a target='_blank'
href='https://cwe.mitre.org/'>(CWE)</a> details related to the CVE Record. */
    related_cwes?: Cwe[],
    /** A title or a brief phrase summarizing the CVE record. */
    title?: string,
    /** <p>The vulnerability type as selected from a large dropdown menu during CVE
refinement.</p>Most frequently used vulnerability types are: <code>DoS</code>,
<code>Code Execution</code>, <code>Overflow</code>, <code>Memory
Corruption</code>, <code>Sql Injection</code>, <code>XSS</code>,
<code>Directory Traversal</code>, <code>Http Response Splitting</code>,
<code>Bypass something</code>, <code>Gain Information</code>, <code>Gain
Privileges</code>, <code>CSRF</code>, <code>File Inclusion</code>. For more
information see <a target='_blank'
href='https://www.cvedetails.com/vulnerabilities-by-types.php'>Vulnerabilities
By Type</a> distributions. */
    type?: string,
    /** The Common Vulnerabilities and Exposures unique number assigned to a specific
computer vulnerability. A CVE Identifier begins with 4 digits representing the
year followed by a sequence of digits that acts as a unique identifier. For
example: <code>CVE-2021-12345</code>. */
    uid: string,
}


/**
 * The Common Vulnerability Scoring System (<a target='_blank'
href='https://www.first.org/cvss/'>CVSS</a>) object provides a way to capture
the principal characteristics of a vulnerability and produce a numerical score
reflecting its severity.
 */
export interface Cvss extends Object {
    /** The CVSS base score. For example: <code>9.1</code>. */
    base_score: number,
    /** The CVSS depth represents a depth of the equation used to calculate CVSS score. */
    depth?: string,
    /** The Common Vulnerability Scoring System metrics. This attribute contains
information on the CVE's impact. If the CVE has been analyzed, this attribute
will contain any CVSSv2 or CVSSv3 information associated with the
vulnerability. For example: <code>{ {"Access Vector", "Network"}, {"Access
Complexity", "Low"}, ...}</code>. */
    metrics?: Metric[],
    /** The CVSS overall score, impacted by base, temporal, and environmental metrics.
For example: <code>9.1</code>. */
    overall_score?: number,
    /** <p>The Common Vulnerability Scoring System (CVSS) Qualitative Severity Rating.
A textual representation of the numeric score.</p><strong>CVSS
v2.0</strong><ul><li>Low (0.0 – 3.9)</li><li>Medium (4.0 – 6.9)</li><li>High
(7.0 – 10.0)</li></ul></p><strong>CVSS v3.0</strong><ul><li>None
(0.0)</li><li>Low (0.1 - 3.9)</li><li>Medium (4.0 - 6.9)</li><li>High (7.0 -
8.9)</li><li>Critical (9.0 - 10.0)</li></ul> */
    severity?: string,
    /** The source URL for the CVSS score. For example:
<code>https://nvd.nist.gov/vuln/detail/CVE-2021-44228</code> */
    src_url?: string,
    /** The CVSS vector string is a text representation of a set of CVSS metrics. It is
commonly used to record or transfer CVSS metric information in a concise form.
For example: <code>3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:H</code>. */
    vector_string?: string,
    /** The vendor that provided the CVSS score. For example: <code>NVD, REDHAT</code>
etc. */
    vendor_name?: string,
    /** The CVSS version. For example: <code>3.1</code>. */
    version: string,
}


/**
 * The CWE object represents a weakness in a software system that can be exploited
by a threat actor to perform an attack. The CWE object is based on the <a
target='_blank' href='https://cwe.mitre.org/'>Common Weakness Enumeration
(CWE)</a> catalog.
 */
export interface Cwe extends Object {
    /** The caption assigned to the Common Weakness Enumeration unique identifier. */
    caption?: string,
    /** URL pointing to the CWE Specification. For more information see <a
target='_blank' href='https://cwe.mitre.org/'>CWE.</a> */
    src_url?: string,
    /** The Common Weakness Enumeration unique number assigned to a specific weakness.
A CWE Identifier begins "CWE" followed by a sequence of digits that acts as a
unique identifier. For example: <code>CWE-123</code>. */
    uid: string,
}


/**
 * The MITRE D3FEND™ Tactic object describes the tactic ID and/or name that is
associated to an attack.
 */
export interface D3fTactic extends Entity {
    /** The tactic name that is associated with the defensive technique. For example:
<code>Isolate</code>. */
    name?: string,
    /** The versioned permalink of the defensive tactic. For example:
<code>https://d3fend.mitre.org/tactic/d3f:Isolate/</code>. */
    src_url?: string,
    /** The unique identifier of the defensive tactic. */
    uid?: string,
}


/**
 * The MITRE D3FEND™ Technique object describes the leaf defensive technique ID
and/or name associated to a countermeasure.
 */
export interface D3fTechnique extends Entity {
    /** The name of the defensive technique. For example: <code>IO Port
Restriction</code>. */
    name?: string,
    /** The versioned permalink of the defensive technique. For example:
<code>https://d3fend.mitre.org/technique/d3f:IOPortRestriction/</code>. */
    src_url?: string,
    /** The unique identifier of the defensive technique. For example:
<code>D3-IOPR</code>. */
    uid?: string,
}


/**
 * The MITRE D3FEND™ object describes the tactic & technique associated with a
countermeasure.
 */
export interface D3fend extends Object {
    /** The Tactic object describes the tactic ID and/or name that is associated with a
countermeasure. */
    d3f_tactic?: D3fTactic,
    /** The Technique object describes the technique ID and/or name associated with a
countermeasure. */
    d3f_technique?: D3fTechnique,
    /** The D3FEND™ Matrix version. */
    version?: string,
}


/**
 * The Data Classification object includes information about data classification
levels and data category types.
 */
export interface DataClassification extends Object {
    /** The name of the data classification category that data matched into, e.g.
Financial, Personal, Governmental, etc. */
    category?: string,
    /** The normalized identifier of the data classification category. */
    category_id?: string,
    /** Describes details about the classifier used for data classification. */
    classifier_details?: ClassifierDetails,
    /** The file content confidentiality, normalized to the confidentiality_id value.
In the case of 'Other', it is defined by the event source. */
    confidentiality?: string,
    /** The normalized identifier of the file content confidentiality indicator. */
    confidentiality_id?: string,
    /** Details about the data discovered by classification job. */
    discovery_details?: DiscoveryDetails[],
    /** Details about the data policy that governs data handling and security measures
related to classification. */
    policy?: Policy,
    /** Size of the data classified. */
    size?: number,
    /** The source URL pointing towards the full classification job details. */
    src_url?: string,
    /** The resultant status of the classification job normalized to the caption of the
<code>status_id</code> value. In the case of 'Other', it is defined by the
event source. */
    status?: string,
    /** The contextual description of the <code>status, status_id</code> value. */
    status_details?: string[],
    /** The normalized status identifier of the classification job. */
    status_id?: string,
    /** The total count of discovered entities, by the classification job. */
    total?: number,
    /** The unique identifier of the classification job. */
    uid?: string,
}


/**
 * The Data Security object describes the characteristics, techniques and content
of a Data Loss Prevention (DLP), Data Loss Detection (DLD), Data
Classification, or similar tools' finding, alert, or detection mechanism(s).
 */
export interface DataSecurity extends DataClassification {
    /** The name of the stage or state that the data was in. E.g., Data-at-Rest,
Data-in-Transit, etc. */
    data_lifecycle_state?: string,
    /** The stage or state that the data was in when it was assessed or scanned by a
data security tool. */
    data_lifecycle_state_id?: string,
    /** Specific pattern, algorithm, fingerprint, or model used for detection. */
    detection_pattern?: string,
    /** The name of the type of data security tool or system that the finding,
detection, or alert originated from. E.g., Endpoint, Secure Email Gateway, etc. */
    detection_system?: string,
    /** The type of data security tool or system that the finding, detection, or alert
originated from. */
    detection_system_id?: string,
    /** A text, binary, file name, or datastore that matched against a detection rule. */
    pattern_match?: string,
    /** Details about the policy that triggered the finding. */
    policy?: Policy,
}


/**
 * The database object is used for databases which are typically datastore
services that contain an organized collection of structured and unstructured
data or a types of data.
 */
export interface Database extends Entity, DataClassificationProfile {
    /** The time when the database was known to have been created. */
    created_time?: number,
    /** The description of the database. */
    desc?: string,
    /** Model used for creating embeddings (if applicable). For example:
<code>text-embedding-ada-002</code> or <code>all-MiniLM-L6-v2</code>. */
    embedding_model?: string,
    /** The group names to which the database belongs. */
    groups?: Group[],
    /** The most recent time when any changes, updates, or modifications were made
within the database. */
    modified_time?: number,
    /** The database name, ordinarily as assigned by a database administrator. */
    name?: string,
    /** The size of the database in bytes. */
    size?: number,
    /** The database type. */
    type?: string,
    /** The normalized identifier of the database type. */
    type_id: string,
    /** The unique identifier of the database. */
    uid?: string,
}


/**
 * The databucket object is a basic container that holds data, typically organized
through the use of data partitions.
 */
export interface Databucket extends Resource, DataClassificationProfile, CloudProfile {
    /** A list of <code>agent</code> objects associated with a device, endpoint, or
resource. */
    agent_list?: Agent[],
    /** The logical grouping or isolated segment within a cloud provider's
infrastructure where the databucket is located. */
    cloud_partition?: string,
    /** The time when the databucket was known to have been created. */
    created_time?: number,
    /** The criticality of the databucket as defined by the event source. */
    criticality?: string,
    /** The description of the databucket. */
    desc?: string,
    /** The encryption details of the databucket. Should be populated if the databucket
is encrypted. */
    encryption_details?: EncryptionDetails,
    /** Details about the file/object within a databucket. */
    file?: File,
    /** The name of the related resource group. */
    group?: Group,
    /** The group names to which the databucket belongs. */
    groups?: Group[],
    /** The fully qualified hostname of the databucket. */
    hostname?: string,
    /** The IP address of the resource, in either IPv4 or IPv6 format. */
    ip?: string,
    /** Indicates whether the device or resource has a backup enabled, such as an
automated snapshot or a cloud backup. For example, this is indicated by the
<code>cloudBackupEnabled</code> value within JAMF Pro mobile devices or the
registration of an AWS ARN with the AWS Backup service. */
    is_backed_up?: boolean,
    /** Indicates if the databucket is encrypted. */
    is_encrypted?: boolean,
    /** Indicates if the databucket is publicly accessible. */
    is_public?: boolean,
    /** The most recent time when any changes, updates, or modifications were made
within the databucket. */
    modified_time?: number,
    /** The databucket name. */
    name?: string,
    /** The namespace is useful when similar entities exist that you need to keep
separate. */
    namespace?: string,
    /** The identity of the service or user account that owns the databucket. */
    owner?: User,
    /** The cloud region of the databucket. */
    region?: string,
    /** A graph representation showing how this databucket relates to and interacts
with other entities in the environment. This can include parent/child
relationships, dependencies, or other connections. */
    resource_relationship?: Graph,
    /** The size of the databucket in bytes. */
    size?: number,
    /** The databucket type. */
    type?: string,
    /** The normalized identifier of the databucket type. */
    type_id: string,
    /** The unique identifier of the databucket. */
    uid?: string,
    /** The version of the resource. For example <code>1.2.3</code>. */
    version?: string,
    /** The specific availability zone within a cloud region where the databucket is
located. */
    zone?: string,
}


/**
 * The DCE/RPC, or Distributed Computing Environment/Remote Procedure Call, object
describes the remote procedure call system for distributed computing
environments.
 */
export interface DceRpc extends Object {
    /** The request command (e.g. REQUEST, BIND). */
    command?: string,
    /** The reply to the request command (e.g. RESPONSE, BINDACK or FAULT). */
    command_response?: string,
    /** The list of interface flags. */
    flags: string[],
    /** An operation number used to identify a specific remote procedure call (RPC)
method or a method in an interface. */
    opnum?: number,
    /** The RPC Interface object describes the details pertaining to the remote
procedure call interface. */
    rpc_interface: RpcInterface,
}


/**
 * The Device Hardware Information object contains details and specifications of
the physical components that make up a device. This information provides an
overview of the hardware capabilities, configuration, and characteristics of
the device.
 */
export interface DeviceHwInfo extends Object {
    /** The BIOS date. For example: <code>03/31/16</code>. */
    bios_date?: string,
    /** The BIOS manufacturer. For example: <code>LENOVO</code>. */
    bios_manufacturer?: string,
    /** The BIOS version. For example: <code>LENOVO G5ETA2WW (2.62)</code>. */
    bios_ver?: string,
    /** The chassis type describes the system enclosure or physical form factor. Such
as the following examples for Windows <a target='_blank'
href='https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-systemenclosure'>Windows
Chassis Types</a> */
    chassis?: string,
    /** The CPU architecture, normalized to the caption of the
<code>cpu_architecture_id</code> value. In the case of <code>Other</code>, it
is defined by the source. */
    cpu_architecture?: string,
    /** The normalized identifier of the CPU architecture. */
    cpu_architecture_id?: string,
    /** The cpu architecture, the number of bits used for addressing in memory. For
example: <code>32</code> or <code>64</code>. */
    cpu_bits?: number,
    /** The number of processor cores in all installed processors. For Example:
<code>42</code>. */
    cpu_cores?: number,
    /** The number of physical processors on a system. For example: <code>1</code>. */
    cpu_count?: number,
    /** The speed of the processor in Mhz. For Example: <code>4200</code>. */
    cpu_speed?: number,
    /** The processor type. For example: <code>x86 Family 6 Model 37 Stepping 5</code>. */
    cpu_type?: string,
    /** The desktop display affiliated with the event */
    desktop_display?: Display,
    /** The number of GPU's on a system. For example: <code>1</code>. */
    gpu_count?: number,
    /** A list of GPU objects describing the hardware properties of each graphics
processor installed on the device. */
    gpu_info_list?: GpuInfo[],
    /** The keyboard detailed information. */
    keyboard_info?: KeyboardInfo,
    /** The total amount of installed RAM, in Megabytes. For example:
<code>2048</code>. */
    ram_size?: number,
    /** The device manufacturer serial number. */
    serial_number?: string,
    /** The device manufacturer assigned universally unique hardware identifier. For
SMBIOS compatible devices such as those running Linux and Windows, it is the
UUID member of the System Information structure in the SMBIOS information. For
macOS devices, it is the Hardware UUID (also known as IOPlatformUUID in the I/O
Registry). */
    uuid?: string,
    /** The device manufacturer. */
    vendor_name?: string,
}


/**
 * The Digital Signature object contains information about the cryptographic
mechanism used to verify the authenticity, integrity, and origin of the file or
application.
 */
export interface DigitalSignature extends Object {
    /** The digital signature algorithm used to create the signature, normalized to the
caption of 'algorithm_id'. In the case of 'Other', it is defined by the event
source. */
    algorithm?: string,
    /** The identifier of the normalized digital signature algorithm. */
    algorithm_id: string,
    /** The certificate object containing information about the digital certificate. */
    certificate?: Certificate,
    /** The time when the digital signature was created. */
    created_time?: number,
    /** The developer ID on the certificate that signed the file. */
    developer_uid?: string,
    /** The message digest attribute contains the fixed length message hash
representation and the corresponding hashing algorithm information. */
    digest?: Fingerprint,
    /** The digital signature state defines the signature state, normalized to the
caption of 'state_id'. In the case of 'Other', it is defined by the event
source. */
    state?: string,
    /** The normalized identifier of the signature state. */
    state_id?: string,
}


/**
 * The Discovery Details object describes results of a discovery task/job.
 */
export interface DiscoveryDetails extends Object {
    /** The number of discovered entities of the specified type. */
    count?: number,
    /** Details about where in the target entity, specified information was discovered.
Only the attributes, relevant to the target entity type should be populated. */
    occurrence_details?: OccurrenceDetails,
    /** Details about where in the target entity, specified information was discovered.
Only the attributes, relevant to the target entity type should be populated. */
    occurrences?: OccurrenceDetails[],
    /** The specific type of information that was discovered. e.g.<code> name,
phone_number, etc.</code> */
    type?: string,
    /** Optionally, the specific value of discovered information. */
    value?: string,
}


/**
 * The Display object contains information about the physical or virtual display
connected to a computer system.
 */
export interface Display extends Object {
    /** The numeric color depth. */
    color_depth?: number,
    /** The numeric physical height of display. */
    physical_height?: number,
    /** The numeric physical orientation of display. */
    physical_orientation?: number,
    /** The numeric physical width of display. */
    physical_width?: number,
    /** The numeric scale factor of display. */
    scale_factor?: number,
}


/**
 * The DNS Answer object represents a specific response provided by the Domain
Name System (DNS) when querying for information about a domain or performing a
DNS operation. It encapsulates the relevant details and data returned by the
DNS server in response to a query.
 */
export interface DnsAnswer extends Dns {
    /** The class of DNS data contained in this resource record. See <a target='_blank'
href='https://www.rfc-editor.org/rfc/rfc1035.txt'>RFC1035</a>. For example:
<code>IN</code>. */
    class_?: string,
    /** The list of DNS answer header flag IDs. */
    flag_ids?: string,
    /** The list of DNS answer header flags. */
    flags?: string[],
    /** The data describing the DNS resource. The meaning of this data depends on the
type and class of the resource record. */
    rdata: string,
    /** The time interval that the resource record may be cached. Zero value means that
the resource record can only be used for the transaction in progress, and
should not be cached. */
    ttl?: number,
    /** The type of data contained in this resource record. See <a target='_blank'
href='https://www.rfc-editor.org/rfc/rfc1035.txt'>RFC1035</a>. For example:
<code>CNAME</code>. */
    type?: string,
}


/**
 * The DNS query object represents a specific request made to the Domain Name
System (DNS) to retrieve information about a domain or perform a DNS operation.
This object encapsulates the necessary attributes and methods to construct and
send DNS queries, specify the query type (e.g., A, AAAA, MX).
 */
export interface DnsQuery extends Dns {
    /** The hostname or domain being queried. For example: <code>www.example.com</code> */
    hostname: string,
    /** The DNS opcode specifies the type of the query message. */
    opcode?: string,
    /** The DNS opcode ID specifies the normalized query message type as defined in <a
target='_blank'
href='https://www.rfc-editor.org/rfc/rfc5395.html'>RFC-5395</a>. */
    opcode_id?: string,
}


/**
 * The contact information related to a domain registration, e.g., registrant,
administrator, abuse, billing, or technical contact.
 */
export interface DomainContact extends Object {
    /** The user's primary email address. */
    email_addr?: string,
    /** Location details for the contract such as the city, state/province, country,
etc. */
    location?: Location,
    /** The individual or organization name for the contact. */
    name?: string,
    /** The number associated with the phone. */
    phone_number?: string,
    /** The Domain Contact type, normalized to the caption of the <code>type_id</code>
value. In the case of 'Other', it is defined by the source */
    type?: string,
    /** The normalized domain contact type ID. */
    type_id: string,
    /** The unique identifier of the contact information, typically provided in WHOIS
information. */
    uid?: string,
}


/**
 * Represents a connection or relationship between two nodes in a graph.
 */
export interface Edge extends Entity {
    /** Additional data about the edge such as weight, distance, or custom properties. */
    data?: string,
    /** Indicates whether the edge is (<code>true</code>) or undirected
(<code>false</code>). */
    is_directed?: boolean,
    /** The human-readable name or label for the edge. */
    name?: string,
    /** The type of relationship between nodes (e.g. is-attached-to , depends-on, etc). */
    relation?: string,
    /** The unique identifier of the node where the edge originates. */
    source: string,
    /** The unique identifier of the node where the edge terminates. */
    target: string,
    /** Unique identifier of the edge. */
    uid?: string,
}


/**
 * The Email object describes the email metadata such as sender, recipients, and
direction, and can include embedded URLs and files.
 */
export interface Email extends Object, DataClassificationProfile {
    /** The machine-readable email header Cc values, as defined by RFC 5322. For
example <code>example.user@usersdomain.com</code>. */
    cc?: string[],
    /** The human-readable email header Cc Mailbox values. For example <code>'Example
User &lt;example.user@usersdomain.com&gt;'</code>. */
    cc_mailboxes?: string[],
    /** The machine-readable <strong>Delivered-To</strong> email header field. For
example <code>example.user@usersdomain.com</code> */
    delivered_to?: string,
    /** The machine-readable <strong>Delivered-To</strong> email header values. For
example <code>example.user@usersdomain.com</code> */
    delivered_to_list?: string[],
    /** The files embedded or attached to the email. */
    files?: File[],
    /** The machine-readable email header From value, as defined by RFC 5322. For
example <code>example.user@usersdomain.com</code>. */
    from_?: string,
    /** The machine-readable email header From values. This array should contain the
value in <code>from</code>. For example
<code>example.user@usersdomain.com</code>. */
    from_list?: string[],
    /** The human-readable email header From Mailbox value. For example <code>'Example
User &lt;example.user@usersdomain.com&gt;'</code>. */
    from_mailbox?: string,
    /** The human-readable email header From Mailbox values. This array should contain
the value in <code>from_mailbox</code>. For example <code>'Example User
&lt;example.user@usersdomain.com&gt;'</code>. */
    from_mailboxes?: string[],
    /** Additional HTTP headers of an HTTP request or response. */
    http_headers?: HttpHeader[],
    /** The indication of whether the email has been read. */
    is_read?: boolean,
    /** The email header Message-ID value, as defined by RFC 5322. */
    message_uid?: string,
    /** The email authentication header. */
    raw_header?: string,
    /** The machine-readable email header Reply-To value, as defined by RFC 5322. For
example <code>example.user@usersdomain.com</code> */
    reply_to?: string,
    /** The machine-readable email header Reply-To values, as defined by RFC 5322. For
example <code>example.user@usersdomain.com</code> */
    reply_to_list?: string[],
    /** The human-readable email header Reply To Mailbox values. For example
<code>'Example User &lt;example.user@usersdomain.com&gt;'</code>. */
    reply_to_mailboxes?: string[],
    /** The address found in the 'Return-Path' header, which indicates where bounce
messages (non-delivery reports) should be sent. This address is often set by
the sending system and may differ from the 'From' or 'Sender' addresses. For
example, <code>mailer-daemon@senderserver.com</code>. */
    return_path?: string,
    /** The machine readable email address of the system or server that actually
transmitted the email message, extracted from the email headers per RFC 5322.
This differs from the <code>from</code> field, which shows the message author.
The sender field is most commonly used when multiple addresses appear in the
<code> from_list </code> field, or when the transmitting system is different
from the message author (such as when sending on behalf of someone else). */
    sender?: string,
    /** The human readable email address of the system or server that actually
transmitted the email message, extracted from the email headers per RFC 5322.
This differs from the <code>from_mailbox</code> field, which shows the message
author. The sender mailbox field is most commonly used when multiple addresses
appear in the <code> from_mailboxes </code> field, or when the transmitting
system is different from the message author (such as when sending on behalf of
someone else). */
    sender_mailbox?: string,
    /** The size in bytes of the email, including attachments. */
    size?: number,
    /** The value of the SMTP MAIL FROM command. */
    smtp_from?: string,
    /** The value of the SMTP envelope RCPT TO command. */
    smtp_to?: string[],
    /** The email header Subject value, as defined by RFC 5322. */
    subject?: string,
    /** The machine-readable email header To values, as defined by RFC 5322. For
example <code>example.user@usersdomain.com</code> */
    to?: string[],
    /** The human-readable email header To Mailbox values. For example <code>'Example
User &lt;example.user@usersdomain.com&gt;'</code>. */
    to_mailboxes?: string[],
    /** The unique identifier of the email thread. */
    uid?: string,
    /** The URLs embedded in the email. */
    urls?: Url[],
    /** The X-Originating-IP header identifying the emails originating IP address(es). */
    x_originating_ip?: string[],
}


/**
 * The Email Authentication object describes the Sender Policy Framework (SPF),
DomainKeys Identified Mail (DKIM) and Domain-based Message Authentication,
Reporting and Conformance (DMARC) attributes of an email.
 */
export interface EmailAuth extends Object {
    /** The DomainKeys Identified Mail (DKIM) status of the email. */
    dkim?: string,
    /** The DomainKeys Identified Mail (DKIM) signing domain of the email. */
    dkim_domain?: string,
    /** The DomainKeys Identified Mail (DKIM) signature used by the sending/receiving
system. */
    dkim_signature?: string,
    /** The Domain-based Message Authentication, Reporting and Conformance (DMARC)
status of the email. */
    dmarc?: string,
    /** The Domain-based Message Authentication, Reporting and Conformance (DMARC)
override action. */
    dmarc_override?: string,
    /** The Domain-based Message Authentication, Reporting and Conformance (DMARC)
policy status. */
    dmarc_policy?: string,
    /** The Sender Policy Framework (SPF) status of the email. */
    spf?: string,
}


/**
 * Details about the encryption methodology utilized.
 */
export interface EncryptionDetails extends Object {
    /** The encryption algorithm used, normalized to the caption of 'algorithm_id */
    algorithm?: string,
    /** The encryption algorithm used. */
    algorithm_id?: string,
    /** The length of the encryption key used. */
    key_length?: number,
    /** The unique identifier of the key used for encryption. For example, AWS KMS Key
ARN. */
    key_uid?: string,
    /** The type of the encryption used. */
    type?: string,
}


/**
 * The Endpoint object describes a physical or virtual device that connects to and
exchanges information with a computer network. Some examples of endpoints are
mobile devices, desktop computers, virtual machines, embedded devices, and
servers. Internet-of-Things devices—like cameras, lighting, refrigerators,
security systems, smart speakers, and thermostats—are also endpoints.
 */
export interface Endpoint extends Entity, ContainerProfile {
    /** A list of <code>agent</code> objects associated with a device, endpoint, or
resource. */
    agent_list?: Agent[],
    /** The name of the domain that the endpoint belongs to or that corresponds to the
endpoint. */
    domain?: string,
    /** The fully qualified name of the endpoint. */
    hostname?: string,
    /** The endpoint hardware information. */
    hw_info?: DeviceHwInfo,
    /** The unique identifier of a VM instance. */
    instance_uid?: string,
    /** The name of the network interface (e.g. eth2). */
    interface_name?: string,
    /** The unique identifier of the network interface. */
    interface_uid?: string,
    /** The IP address of the endpoint, in either IPv4 or IPv6 format. */
    ip?: string,
    /** The geographical location of the endpoint. */
    location?: Location,
    /** The Media Access Control (MAC) address of the endpoint. */
    mac?: string,
    /** The vendor or manufacturer of the endpoint's network interface controller
(NIC), as identified from the MAC address. */
    mac_vendor?: string,
    /** The short name of the endpoint. */
    name?: string,
    /** The endpoint operating system. */
    os?: Os,
    /** The identity of the service or user account that owns the endpoint or was last
logged into it. */
    owner?: User,
    /** The pool of desktops or virtual machines to which the endpoint belongs. */
    pool?: Group,
    /** The unique identifier of a virtual subnet. */
    subnet_uid?: string,
    /** The endpoint type. For example: <code>unknown</code>, <code>server</code>,
<code>desktop</code>, <code>laptop</code>, <code>tablet</code>,
<code>mobile</code>, <code>virtual</code>, <code>browser</code>, or
<code>other</code>. */
    type?: string,
    /** The endpoint type ID. */
    type_id?: string,
    /** The unique identifier of the endpoint. */
    uid?: string,
    /** The Virtual LAN identifier. */
    vlan_uid?: string,
    /** The unique identifier of the Virtual Private Cloud (VPC). */
    vpc_uid?: string,
    /** The network zone or LAN segment. */
    zone?: string,
}


/**
 * The Endpoint Connection object contains information detailing a connection
attempt to an endpoint.
 */
export interface EndpointConnection extends Object {
    /** A numerical response status code providing details about the connection. */
    code?: number,
    /** Provides characteristics of the network endpoint. */
    network_endpoint?: NetworkEndpoint,
}


/**
 * The Enrichment object provides inline enrichment data for specific attributes
of interest within an event. It serves as a mechanism to enhance or supplement
the information associated with the event by adding additional relevant details
or context.
 */
export interface Enrichment extends Object {
    /** The time when the enrichment data was generated. */
    created_time?: number,
    /** The enrichment data associated with the attribute and value. The meaning of
this data depends on the type the enrichment record. */
    data: string,
    /** A long description of the enrichment data. */
    desc?: string,
    /** The name of the attribute to which the enriched data pertains. */
    name: string,
    /** The enrichment data provider name. */
    provider?: string,
    /** The reputation of the enrichment data. */
    reputation?: Reputation,
    /** A short description of the enrichment data. */
    short_desc?: string,
    /** The URL of the source of the enrichment data. */
    src_url?: string,
    /** The enrichment type. For example: <code>location</code>. */
    type?: string,
    /** The value of the attribute to which the enriched data pertains. */
    value: string,
}


/**
 * An environment variable.
 */
export interface EnvironmentVariable extends Object {
    /** The name of the environment variable. */
    name: string,
    /** The value of the environment variable. */
    value: string,
}


/**
 * The Exploit Prediction Scoring System (EPSS) object describes the estimated
probability a vulnerability will be exploited. EPSS is a community-driven
effort to combine descriptive information about vulnerabilities (CVEs) with
evidence of actual exploitation in-the-wild. (<a target='_blank'
href='https://www.first.org/epss/'>EPSS</a>).
 */
export interface Epss extends Object {
    /** The timestamp indicating when the EPSS score was calculated. */
    created_time?: number,
    /** The EPSS score's percentile representing relative importance and ranking of the
score in the larger EPSS dataset. */
    percentile?: number,
    /** The EPSS score representing the probability [0-1] of exploitation in the wild
in the next 30 days (following score publication). */
    score: string,
    /** The version of the EPSS model used to calculate the score. */
    version?: string,
}


/**
 * A collection of evidence artifacts associated to the activity/activities that
triggered a security detection.
 */
export interface Evidences extends Entity {
    /** Describes details about the user/role/process that was the source of the
activity that triggered the detection. */
    actor?: Actor,
    /** Describes details about the API call associated to the activity that triggered
the detection. */
    api?: Api,
    /** Describes details about the network connection associated to the activity that
triggered the detection. */
    connection_info?: NetworkConnectionInfo,
    /** Describes details about the container associated to the activity that triggered
the detection. */
    container?: Container,
    /** Additional evidence data that is not accounted for in the specific evidence
attributes.<code> Use only when absolutely necessary.</code> */
    data?: string,
    /** Describes details about the database associated to the activity that triggered
the detection. */
    database?: Database,
    /** Describes details about the databucket associated to the activity that
triggered the detection. */
    databucket?: Databucket,
    /** An addressable device, computer system or host associated to the activity that
triggered the detection. */
    device?: Device,
    /** Describes details about the destination of the network activity that triggered
the detection. */
    dst_endpoint?: NetworkEndpoint,
    /** The email object associated to the activity that triggered the detection. */
    email?: Email,
    /** Describes details about the file associated to the activity that triggered the
detection. */
    file?: File,
    /** Describes details about the http request associated to the activity that
triggered the detection. */
    http_request?: HttpRequest,
    /** Describes details about the http response associated to the activity that
triggered the detection. */
    http_response?: HttpResponse,
    /** Describes details about the JA4+ fingerprints that triggered the detection. */
    ja4_fingerprint_list?: Ja4Fingerprint[],
    /** Describes details about the scheduled job that was associated with the activity
that triggered the detection. */
    job?: Job,
    /** The naming convention or type identifier of the evidence associated with the
security detection. For example, the <code>@odata.type</code> from Microsoft
Graph Alerts V2 or <code>display_name</code> from CrowdStrike Falcon Incident
Behaviors. */
    name?: string,
    /** Describes details about the process associated to the activity that triggered
the detection. */
    process?: Process,
    /** Describes details about the DNS query associated to the activity that triggered
the detection. */
    query?: DnsQuery,
    /** Describes details about the cloud resources directly related to activity that
triggered the detection. For resources impacted by the detection, use
<code>Affected Resources</code> at the top-level of the finding. */
    resources?: ResourceDetails[],
    /** Describes details about the script that was associated with the activity that
triggered the detection. */
    script?: Script,
    /** Describes details about the source of the network activity that triggered the
detection. */
    src_endpoint?: NetworkEndpoint,
    /** Describes details about the Transport Layer Security (TLS) activity that
triggered the detection. */
    tls?: Tls,
    /** The unique identifier of the evidence associated with the security detection.
For example, the <code>activity_id</code> from CrowdStrike Falcon Alerts or
<code>behavior_id</code> from CrowdStrike Falcon Incident Behaviors. */
    uid?: string,
    /** The URL object that pertains to the event or object associated to the activity
that triggered the detection. */
    url?: Url,
    /** Describes details about the user that was the target or somehow else associated
with the activity that triggered the detection. */
    user?: User,
    /** The normalized verdict of the evidence associated with the security detection. */
    verdict?: string,
    /** The normalized verdict (or status) ID of the evidence associated with the
security detection. For example, Microsoft Graph Security Alerts contain a
<code>verdict</code> enumeration for each type of <code>evidence</code>
associated with the Alert. This is typically set by an automated investigation
process or an analyst/investigator assigned to the finding. */
    verdict_id?: string,
}


/**
 * The OCSF Schema Extension object provides detailed information about the schema
extension used to construct the event. The schema extensions are registered in
the <a target='_blank'
href='https://github.com/ocsf/ocsf-schema/blob/main/extensions.md'>extensions.md</a>
file.
 */
export interface Extension extends Entity {
    /** The schema extension name. For example: <code>dev</code>. */
    name?: string,
    /** The schema extension unique identifier. For example: <code>999</code>. */
    uid?: string,
    /** The schema extension version. For example: <code>1.0.0-alpha.2</code>. */
    version: string,
}


/**
 * The Feature object provides information about the software product feature that
generated a specific event. It encompasses details related to the capabilities,
components, user interface (UI) design, and performance upgrades associated
with the feature.
 */
export interface Feature extends Entity {
    /** The name of the feature. */
    name?: string,
    /** The unique identifier of the feature. */
    uid?: string,
    /** The version of the feature. */
    version?: string,
}


/**
 * The File object represents the metadata associated with a file stored in a
computer system. It encompasses information about the file itself, including
its attributes, properties, and organizational details.
 */
export interface File extends Entity, DataClassificationProfile {
    /** The time when the file was last accessed. */
    accessed_time?: number,
    /** The name of the user who last accessed the object. */
    accessor?: User,
    /** The bitmask value that represents the file attributes. */
    attributes?: number,
    /** The name of the company that published the file. For example: <code>Microsoft
Corporation</code>. */
    company_name?: string,
    /** The file content confidentiality, normalized to the confidentiality_id value.
In the case of 'Other', it is defined by the event source. */
    confidentiality?: string,
    /** The normalized identifier of the file content confidentiality indicator. */
    confidentiality_id?: string,
    /** The time when the file was created. */
    created_time?: number,
    /** The user that created the file. */
    creator?: User,
    /** The description of the file, as returned by file system. For example: the
description as returned by the Unix file command or the Windows file type. */
    desc?: string,
    /** The drive type, normalized to the caption of the <code>drive_type_id</code>
value. In the case of <code>Other</code>, it is defined by the source. */
    drive_type?: string,
    /** Identifies the type of a disk drive, i.e. fixed, removable, etc. */
    drive_type_id?: string,
    /** The encryption details of the file. Should be populated if the file is
encrypted. */
    encryption_details?: EncryptionDetails,
    /** The extension of the file, excluding the leading dot. For example:
<code>exe</code> from <code>svchost.exe</code>, or <code>gz</code> from
<code>export.tar.gz</code>. */
    ext?: string,
    /** An array of hash attributes. */
    hashes?: Fingerprint[],
    /** A list of symbols imported by the executable file. */
    imported_symbols?: string[],
    /** The name of the file as identified within the file itself. This contrasts with
the name by which the file is known on disk. Where available, the internal name
is widely used by security practitioners and detection content because the
on-disk file name is not reliable. On the Windows OS, most PE files contain a
<a
href="https://learn.microsoft.com/en-us/windows/win32/menurc/versioninfo-resource">VERSIONINFO</a>
resource from which the internal name can be obtained. On macOS, binaries can
optionally embed a copy of the application's Info.plist file which in turn
contains the name of the executable. */
    internal_name?: string,
    /** Indicates if the file was deleted from the filesystem. */
    is_deleted?: boolean,
    /** Indicates if the file is encrypted. */
    is_encrypted?: boolean,
    /** Indicates if the file is publicly accessible. For example in an object's public
access in AWS S3 */
    is_public?: boolean,
    /** Indicates that the file cannot be modified. */
    is_readonly?: boolean,
    /** The indication of whether the object is part of the operating system. */
    is_system?: boolean,
    /** The Multipurpose Internet Mail Extensions (MIME) type of the file, if
applicable. */
    mime_type?: string,
    /** The time when the file was last modified. */
    modified_time?: number,
    /** The user that last modified the file. */
    modifier?: User,
    /** The name of the file. For example: <code>svchost.exe</code> */
    name: string,
    /** The user that owns the file/object. */
    owner?: User,
    /** The parent folder in which the file resides. For example:
<code>c:\windows\system32</code> */
    parent_folder?: string,
    /** The full path to the file. For example:
<code>c:\windows\system32\svchost.exe</code>. */
    path?: string,
    /** The product that created or installed the file. */
    product?: Product,
    /** The object security descriptor. */
    security_descriptor?: string,
    /** The digital signature of the file. */
    signature?: DigitalSignature,
    /** A collection of <code>Digital Signature</code> objects. */
    signatures?: DigitalSignature[],
    /** The size of data, in bytes. */
    size?: number,
    /** The storage class of the file. For example in AWS S3: <code>STANDARD,
STANDARD_IA, GLACIER</code>. */
    storage_class?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the file. */
    tags?: KeyValueObject[],
    /** The file type. */
    type?: string,
    /** The file type ID. Note the distinction between a <code>Regular File</code> and
an <code>Executable File</code>. If the distinction is not known, or not
indicated by the log, use <code>Regular File</code>. In this case, it should
not be assumed that a Regular File is not executable. */
    type_id: string,
    /** The unique identifier of the file as defined by the storage system, such the
file system file ID. */
    uid?: string,
    /** The file URI, such as those reporting by static analysis tools. E.g.,
<code>file:///C:/dev/sarif/sarif-tutorials/samples/Introduction/simple-example.js</code> */
    uri?: string,
    /** The URL of the file, when applicable. */
    url?: Url,
    /** The file version. For example: <code>8.0.7601.17514</code>. */
    version?: string,
    /** The volume on the storage device where the file is located. */
    volume?: string,
    /** An unordered collection of zero or more name/value pairs where each pair
represents a file or folder extended attribute.</p>For example: Windows
alternate data stream attributes (ADS stream name, ADS size, etc.),
user-defined or application-defined attributes, ACL, owner, primary group, etc.
Examples from DCS:
</p><ul><li><strong>ads_name</strong></li><li><strong>ads_size</strong></li><li><strong>dacl</strong></li><li><strong>owner</strong></li><li><strong>primary_group</strong></li><li><strong>link_name</strong>
- name of the link associated to the
file.</li><li><strong>hard_link_count</strong> - the number of links that are
associated to the file.</li></ul> */
    xattributes?: Object,
}


/**
 * The Finding object describes metadata related to a security finding generated
by a security tool or system.
 */
export interface FindingObject extends Object {
    /** The time when the finding was created. */
    created_time?: number,
    /** The description of the reported finding. */
    desc?: string,
    /** The time when the finding was first observed. */
    first_seen_time?: number,
    /** The time when the finding was most recently observed. */
    last_seen_time?: number,
    /** The time when the finding was last modified. */
    modified_time?: number,
    /** Details about the product that reported the finding. */
    product?: Product,
    /** The unique identifier of the product that reported the finding. */
    product_uid?: string,
    /** Describes events and/or other findings related to the finding as identified by
the security product. Note that these events may or may not be in OCSF. */
    related_events?: RelatedEvent[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
    /** The URL pointing to the source of the finding. */
    src_url?: string,
    /** Additional data supporting a finding as provided by security tool */
    supporting_data?: string,
    /** A title or a brief phrase summarizing the reported finding. */
    title: string,
    /** One or more types of the reported finding. */
    types?: string[],
    /** The unique identifier of the reported finding. */
    uid: string,
}


/**
 * The Finding Information object describes metadata related to a security finding
generated by a security tool or system.
 */
export interface FindingInfo extends Object {
    /** The analytic technique used to analyze and derive insights from the data or
information that led to the finding or conclusion. */
    analytic?: Analytic,
    /** An Attack Graph describes possible routes an attacker could take through an
environment. It describes relationships between resources and their findings,
such as malware detections, vulnerabilities, misconfigurations, and other
security actions. */
    attack_graph?: Graph,
    /** The <a target='_blank' href='https://attack.mitre.org'>MITRE ATT&CK®</a>
technique and associated tactics related to the finding. */
    attacks?: Attack[],
    /** The time when the finding was created. */
    created_time?: number,
    /** A list of data sources utilized in generation of the finding. */
    data_sources?: string[],
    /** The description of the reported finding. */
    desc?: string,
    /** The time when the finding was first observed. e.g. The time when a
vulnerability was first observed. <p>It can differ from the
<code>created_time</code> timestamp, which reflects the time this finding was
created.</p> */
    first_seen_time?: number,
    /** The <a target='_blank'
href='https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html'>Cyber
Kill Chain®</a> provides a detailed description of each phase and its
associated activities within the broader context of a cyber attack. */
    kill_chain?: KillChainPhase[],
    /** The time when the finding was most recently observed. e.g. The time when a
vulnerability was most recently observed. <p>It can differ from the
<code>modified_time</code> timestamp, which reflects the time this finding was
last modified.</p> */
    last_seen_time?: number,
    /** The time when the finding was last modified. */
    modified_time?: number,
    /** Details about the product that reported the finding. */
    product?: Product,
    /** The unique identifier of the product that reported the finding. */
    product_uid?: string,
    /** Other analytics related to this finding. */
    related_analytics?: Analytic[],
    /** Describes events and/or other findings related to the finding as identified by
the security product. Note that these events may or may not be in OCSF. */
    related_events?: RelatedEvent[],
    /** Number of related events or findings. */
    related_events_count?: number,
    /** The URL pointing to the source of the finding. */
    src_url?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated with the finding. */
    tags?: KeyValueObject[],
    /** A title or a brief phrase summarizing the reported finding. */
    title?: string,
    /** The list of key traits or characteristics extracted from the finding. */
    traits?: Trait[],
    /** One or more types of the reported finding. */
    types?: string[],
    /** The unique identifier of the reported finding. */
    uid: string,
    /** The alternative unique identifier of the reported finding. */
    uid_alt?: string,
}


/**
 * The Fingerprint object provides detailed information about a fingerprint, which
is a compact representation of data used to identify a longer piece of
information, such as a public key, file content, or application implementation.
It contains the algorithm or scheme and value of the fingerprint, enabling
efficient and reliable identification of the associated data.
 */
export interface Fingerprint extends Object {
    /** The algorithm or scheme used to create the fingerprint, normalized to the
caption of <code>algorithm_id</code>. In the case of <code>Other</code>, it is
defined by the event source. */
    algorithm?: string,
    /** The identifier of the normalized algorithm or scheme, which was used to create
the fingerprint. */
    algorithm_id: string,
    /** The fingerprint value.<p><b>Note:</b> This uses type <code>file_hash_t</code>
(&quot;Hash&quot;), which has been generalized for all fingerprints but retains
the same name and caption for backwards compatibility.</p> */
    value: string,
}


/**
 * The Function Invocation object provides details regarding the invocation of a
function.
 */
export interface FunctionInvocation extends Object {
    /** The error indication returned from the function. This may differ from the
return value (e.g. when <code>errno</code> is used). */
    error?: string,
    /** The parameters passed into a function invocation. */
    parameters?: Parameter[],
    /** The value returned from a function. */
    return_value?: string,
}


/**
 * The GPU information object contains attributes describing graphical processing
hardware.
 */
export interface GpuInfo extends Object {
    /** The attachment bus or interface standard, normalized to the caption of the
bus_type_id value. In the case of 'Other', it is defined by the event source. */
    bus_type?: string,
    /** The normalized identifier of the attachment bus or interface standard. */
    bus_type_id?: string,
    /** The number of processing cores or compute units for the component. */
    cores?: number,
    /** The model name of the GPU. For example: <code>GeForce RTX A6000</code>,
<code>Radeon PRO W7900</code>, or <code>Intel Data Center GPU Max 1550</code>. */
    model?: string,
    /** The name of the vendor of the GPU. For example: <code>NVIDIA</code>,
<code>AMD</code>, or <code>Intel</code>. */
    vendor_name?: string,
    /** The video memory attachment mode, indicating how the VRAM hardware is
integrated with the system (e.g., shared or dedicated), normalized to the
caption of the vram_mode_id value. For 'Other', the exact attachment mode is
defined by the event source. */
    vram_mode?: string,
    /** The normalized identifier of the video memory attachment mode. */
    vram_mode_id?: string,
    /** The total amount of installed video RAM. */
    vram_size?: number,
}


/**
 * A graph data structure representation with nodes and edges.
 */
export interface Graph extends Entity {
    /** The graph description - provides additional details about the graph's purpose
and contents. */
    desc?: string,
    /** The edges/connections between nodes in the graph - contains the collection of
<code>edge</code> objects defining relationships between nodes. */
    edges?: Edge[],
    /** Indicates if the graph is directed (<code>true</code>) or undirected
(<code>false</code>). */
    is_directed?: boolean,
    /** The graph name - a human readable identifier for the graph. */
    name?: string,
    /** The nodes/vertices of the graph - contains the collection of <code>node</code>
objects that make up the graph. */
    nodes: Node[],
    /** The graph query language, normalized to the caption of the
<code>query_language_id</code> value. */
    query_language?: string,
    /** The normalized identifier of a graph query language that can be used to
interact with the graph. */
    query_language_id?: string,
    /** The graph type. Typically useful to represent the specific type of graph that
is used. */
    type?: string,
    /** Unique identifier of the graph - a unique ID to reference this specific graph. */
    uid?: string,
}


/**
 * The Group object represents a collection or association of entities, such as
users, policies, or devices. It serves as a logical grouping mechanism to
organize and manage entities with similar characteristics or permissions within
a system or organization, including but not limited to purposes of access
control.
 */
export interface Group extends Entity {
    /** The group description. */
    desc?: string,
    /** The domain where the group is defined. For example: the LDAP or Active
Directory domain. */
    domain?: string,
    /** The group name. */
    name?: string,
    /** The group privileges. */
    privileges?: string[],
    /** The type of the group. */
    type?: string,
    /** The unique identifier of the group. For example, for Windows events this is the
security identifier (SID) of the group. Another example, pool id or desktop id
that the device belongs to. */
    uid?: string,
    /** The alternate unique identifier. */
    uid_alt?: string,
}


/**
 * The HASSH object contains SSH network fingerprinting values for specific
client/server implementations. It provides a standardized way of identifying
and categorizing SSH connections based on their unique characteristics and
behavior.
 */
export interface Hassh extends Object {
    /** The concatenation of key exchange, encryption, authentication and compression
algorithms (separated by ';'). NOTE: This is not the underlying algorithm for
the hash implementation. */
    algorithm?: string,
    /** The hash of the key exchange, encryption, authentication and compression
algorithms. */
    fingerprint: Fingerprint,
}


/**
 * The HTTP Cookie object, also known as a web cookie or browser cookie, contains
details and values pertaining to a small piece of data that a server sends to a
user's web browser. This data is then stored by the browser and sent back to
the server with subsequent requests, allowing the server to remember and track
certain information about the user's browsing session or preferences.
 */
export interface HttpCookie extends Object {
    /** The domain name for the server from which the http_cookie is served. */
    domain?: string,
    /** The expiration time of the HTTP cookie. */
    expiration_time?: number,
    /** A cookie attribute to make it inaccessible via JavaScript */
    http_only?: boolean,
    /** This attribute prevents the cookie from being accessed via JavaScript. */
    is_http_only?: boolean,
    /** The cookie attribute indicates that cookies are sent to the server only when
the request is encrypted using the HTTPS protocol. */
    is_secure?: boolean,
    /** The HTTP cookie name. */
    name: string,
    /** The path of the HTTP cookie. */
    path?: string,
    /** The cookie attribute that lets servers specify whether/when cookies are sent
with cross-site requests. Values are: Strict, Lax or None */
    samesite?: string,
    /** The cookie attribute to only send cookies to the server with an encrypted
request over the HTTPS protocol. */
    secure?: boolean,
    /** The HTTP cookie value. */
    value: string,
}


/**
 * The HTTP Header object represents the headers sent in an HTTP request or
response. HTTP headers are key-value pairs that convey additional information
about the HTTP message, including details about the content, caching,
authentication, encoding, and other aspects of the communication.
 */
export interface HttpHeader extends Object {
    /** The name of the HTTP header. */
    name: string,
    /** The value of the HTTP header. */
    value: string,
}


/**
 * The HTTP Request object represents the attributes of a request made to a web
server. It encapsulates the details and metadata associated with an HTTP
request, including the request method, headers, URL, query parameters, body
content, and other relevant information.
 */
export interface HttpRequest extends Object {
    /** The arguments sent along with the HTTP request. */
    args?: string,
    /** The actual length of the HTTP request body, in number of bytes, independent of
a potentially existing Content-Length header. */
    body_length?: number,
    /** Additional HTTP headers of an HTTP request or response. */
    http_headers?: HttpHeader[],
    /** The <a target='_blank'
href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods'>HTTP request
method</a> indicates the desired action to be performed for a given resource. */
    http_method?: string,
    /** The length of the entire HTTP request, in number of bytes. */
    length?: number,
    /** The request header that identifies the address of the previous web page, which
is linked to the current web page or resource being requested. */
    referrer?: string,
    /** The unique identifier of the http request. */
    uid?: string,
    /** The URL object that pertains to the request. */
    url?: Url,
    /** The request header that identifies the operating system and web browser. */
    user_agent?: string,
    /** The Hypertext Transfer Protocol (HTTP) version. */
    version?: string,
    /** The X-Forwarded-For header identifying the originating IP address(es) of a
client connecting to a web server through an HTTP proxy or a load balancer. */
    x_forwarded_for?: string[],
}


/**
 * The HTTP Response object contains detailed information about the response sent
from a web server to the requester. It encompasses attributes and metadata that
describe the response status, headers, body content, and other relevant
information.
 */
export interface HttpResponse extends Object {
    /** The actual length of the HTTP response body, in number of bytes, independent of
a potentially existing Content-Length header. */
    body_length?: number,
    /** The Hypertext Transfer Protocol (HTTP) status code returned from the web server
to the client. For example, 200. */
    code: number,
    /** The request header that identifies the original <a target='_blank'
href='https://www.iana.org/assignments/media-types/media-types.xhtml'>media
type </a> of the resource (prior to any content encoding applied for sending). */
    content_type?: string,
    /** Additional HTTP headers of an HTTP request or response. */
    http_headers?: HttpHeader[],
    /** The HTTP response latency measured in milliseconds. */
    latency?: number,
    /** The length of the entire HTTP response, in number of bytes. */
    length?: number,
    /** The description of the event/finding, as defined by the source. */
    message?: string,
    /** The response status. For example: A successful HTTP status of 'OK' which
corresponds to a code of 200. */
    status?: string,
}


/**
 * The Identity Activity Metrics object captures usage patterns, authentication
activity, credential usage and other metrics for identities across cloud and
on-premises environments. Example identities include AWS IAM Users, Roles,
Azure AD Principals, GCP Service Accounts, on-premises Active Directory
accounts.
 */
export interface IdentityActivityMetrics extends Object {
    /** The timestamp when this identity was first observed or created in the system.
This helps establish the identity's age and lifecycle stage for risk
assessment. */
    first_seen_time?: number,
    /** The timestamp when this identity last successfully authenticated to any system
or service. This differs from <code>last_seen_time</code> as it specifically
tracks authentication events rather than all activities. */
    last_authentication_time?: number,
    /** The timestamp of the most recent activity performed by this identity, including
authentication, resource access, or API calls. This is the most comprehensive
indicator of identity usage recency. */
    last_seen_time?: number,
    /** The timestamp when password-based authentication was last used by this
identity. This helps distinguish between password and other authentication
methods (MFA, SSO, certificates) and identify password-specific usage patterns. */
    password_last_used_time?: number,
    /** Details about the programmatic credentials associated with this identity, such
as API keys, service account keys, access tokens, and client certificates used
for automated access. */
    programmatic_credentials?: ProgrammaticCredential[],
}


/**
 * The Identity Provider object contains detailed information about a provider
responsible for creating, maintaining, and managing identity information while
offering authentication services to applications. An Identity Provider (IdP)
serves as a trusted authority that verifies the identity of users and issues
authentication tokens or assertions to enable secure access to applications or
services.
 */
export interface Idp extends Entity {
    /** The Authentication Factors object describes the different types of Multi-Factor
Authentication (MFA) methods and/or devices supported by the Identity Provider. */
    auth_factors?: AuthFactor[],
    /** The primary domain associated with the Identity Provider. */
    domain?: string,
    /** The fingerprint of the X.509 certificate used by the Identity Provider. */
    fingerprint?: Fingerprint,
    /** The Identity Provider enforces Multi Factor Authentication (MFA). */
    has_mfa?: boolean,
    /** The unique identifier (often a URL) used by the Identity Provider as its
issuer. */
    issuer?: string,
    /** The name of the Identity Provider. */
    name?: string,
    /** The supported protocol of the Identity Provider. E.g., <code>SAML</code>,
<code>OIDC</code>, or <code>OAuth2</code>. */
    protocol_name?: string,
    /** The System for Cross-domain Identity Management (SCIM) resource object provides
a structured set of attributes related to SCIM protocols used for identity
provisioning and management across cloud-based platforms. It standardizes user
and group provisioning details, enabling identity synchronization and lifecycle
management with compatible Identity Providers (IdPs) and applications. SCIM is
defined in <a target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc7643'>RFC-7634</a> */
    scim?: Scim,
    /** The Single Sign-On (SSO) object provides a structure for normalizing SSO
attributes, configuration, and/or settings from Identity Providers. */
    sso?: Sso,
    /** The configuration state of the Identity Provider, normalized to the caption of
the <code>state_id</code> value. In the case of <code>Other</code>, it is
defined by the event source. */
    state?: string,
    /** The normalized state ID of the Identity Provider to reflect its configuration
or activation status. */
    state_id?: string,
    /** The tenant ID associated with the Identity Provider. */
    tenant_uid?: string,
    /** The unique identifier of the Identity Provider. */
    uid?: string,
    /** The URL for accessing the configuration or metadata of the Identity Provider. */
    url_string?: string,
}


/**
 * The Image object provides a description of a specific Virtual Machine (VM) or
Container image.
 */
export interface Image extends Entity {
    /** The list of labels associated to the image. */
    labels?: string[],
    /** The image name. For example: <code>elixir</code>. */
    name?: string,
    /** The full path to the image file. */
    path?: string,
    /** The image tag. For example: <code>1.11-alpine</code>. */
    tag?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the image. */
    tags?: KeyValueObject[],
    /** The unique image ID. For example: <code>77af4d6b9913</code>. */
    uid: string,
}


/**
 * The JA4+ fingerprint object provides detailed fingerprint information about
various aspects of network traffic which is both machine and human readable.
 */
export interface Ja4Fingerprint extends Object {
    /** The 'a' section of the JA4 fingerprint. */
    section_a?: string,
    /** The 'b' section of the JA4 fingerprint. */
    section_b?: string,
    /** The 'c' section of the JA4 fingerprint. */
    section_c?: string,
    /** The 'd' section of the JA4 fingerprint. */
    section_d?: string,
    /** The JA4+ fingerprint type as defined by <a
href='https://blog.foxio.io/ja4+-network-fingerprinting
target='_blank'>FoxIO</a>, normalized to the caption of 'type_id'. In the case
of 'Other', it is defined by the event source. */
    type?: string,
    /** The identifier of the JA4+ fingerprint type. */
    type_id: string,
    /** The JA4+ fingerprint value. */
    value: string,
}


/**
 * The Job object provides information about a scheduled job or task, including
its name, command line, and state. It encompasses attributes that describe the
properties and status of the scheduled job.
 */
export interface Job extends Object {
    /** The job command line. */
    cmd_line?: string,
    /** The time when the job was created. */
    created_time?: number,
    /** The description of the job. */
    desc?: string,
    /** The file that pertains to the job. */
    file?: File,
    /** The time when the job was last run. */
    last_run_time?: number,
    /** The name of the job. */
    name: string,
    /** The time when the job will next be run. */
    next_run_time?: number,
    /** The run state of the job. */
    run_state?: string,
    /** The run state ID of the job. */
    run_state_id?: string,
    /** The user that created the job. */
    user?: User,
}


/**
 * The KB Article object contains metadata that describes the patch or update.
 */
export interface KbArticle extends Object {
    /** The average time to patch. */
    avg_timespan?: Timespan,
    /** The kb article bulletin identifier. */
    bulletin?: string,
    /** The vendors classification of the kb article. */
    classification?: string,
    /** The date the kb article was released by the vendor. */
    created_time?: number,
    /** The install state of the kb article. */
    install_state?: string,
    /** The normalized install state ID of the kb article. */
    install_state_id?: string,
    /** The kb article has been replaced by another. */
    is_superseded?: boolean,
    /** The operating system the kb article applies. */
    os?: Os,
    /** The product details the kb article applies. */
    product?: Product,
    /** The severity of the kb article. */
    severity?: string,
    /** The size in bytes for the kb article. */
    size?: number,
    /** The kb article link from the source vendor. */
    src_url?: string,
    /** The title of the kb article. */
    title?: string,
    /** The unique identifier for the kb article. */
    uid?: string,
}


/**
 * The Kernel Resource object provides information about a specific kernel
resource, including its name and type. It describes essential attributes
associated with a resource managed by the kernel of an operating system.
 */
export interface Kernel extends Object {
    /** The indication of whether the object is part of the operating system. */
    is_system?: boolean,
    /** The name of the kernel resource. */
    name: string,
    /** The full path of the kernel resource. */
    path?: string,
    /** The system call that was invoked. */
    system_call?: string,
    /** The type of the kernel resource. */
    type?: string,
    /** The type of the kernel resource. */
    type_id: string,
}


/**
 * The Kernel Extension object describes a kernel driver that has been loaded or
unloaded into the operating system (OS) kernel.
 */
export interface KernelDriver extends Object {
    /** The driver/extension file object. */
    file: File,
}


/**
 * A generic object allowing to define a <code>{key:value}</code> pair.
 */
export interface KeyValueObject extends Object {
    /** The name of the key. */
    name: string,
    /** The value associated to the key. */
    value?: string,
    /** Optional, the values associated to the key. You can populate this attribute,
when you have multiple values for the same key. */
    values?: string[],
}


/**
 * The Keyboard Information object contains details and attributes related to a
computer or device keyboard. It encompasses information that describes the
characteristics, capabilities, and configuration of the keyboard.
 */
export interface KeyboardInfo extends Object {
    /** The number of function keys on client keyboard. */
    function_keys?: number,
    /** The Input Method Editor (IME) file name. */
    ime?: string,
    /** The keyboard locale identifier name (e.g., en-US). */
    keyboard_layout?: string,
    /** The keyboard numeric code. */
    keyboard_subtype?: number,
    /** The keyboard type (e.g., xt, ico). */
    keyboard_type?: string,
}


/**
 * The Kill Chain Phase object represents a single phase of a cyber attack,
including the initial reconnaissance and planning stages up to the final
objective of the attacker. It provides a detailed description of each phase and
its associated activities within the broader context of a cyber attack. See <a
target='_blank'
href='https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html'>Cyber
Kill Chain®</a>.
 */
export interface KillChainPhase extends Object {
    /** The cyber kill chain phase. */
    phase?: string,
    /** The cyber kill chain phase identifier. */
    phase_id: string,
}


/**
 * The additional LDAP attributes that describe a person.
 */
export interface LdapPerson extends Object {
    /** The cost center associated with the user. */
    cost_center?: string,
    /** The timestamp when the user was created. */
    created_time?: number,
    /** The timestamp when the user was deleted. In Active Directory (AD), when a user
is deleted they are moved to a temporary container and then removed after 30
days. So, this field can be populated even after a user is deleted for the next
30 days. */
    deleted_time?: number,
    /** The name of the department in which the user works. */
    department?: string,
    /** The display name of the LDAP person. According to RFC 2798, this is the
preferred name of a person to be used when displaying entries. */
    display_name?: string,
    /** A list of additional email addresses for the user. */
    email_addrs?: string[],
    /** The employee identifier assigned to the user by the organization. */
    employee_uid?: string,
    /** The given or first name of the user. */
    given_name?: string,
    /** The timestamp when the user was or will be hired by the organization. */
    hire_time?: number,
    /** The user's job title. */
    job_title?: string,
    /** The labels associated with the user. For example in AD this could be the
<code>userType</code>, <code>employeeType</code>. For example: <code>Member,
Employee</code>. */
    labels?: string[],
    /** The last time when the user logged in. */
    last_login_time?: number,
    /** The LDAP and X.500 <code>commonName</code> attribute, typically the full name
of the person. For example, <code>John Doe</code>. */
    ldap_cn?: string,
    /** The X.500 Distinguished Name (DN) is a structured string that uniquely
identifies an entry, such as a user, in an X.500 directory service For example,
<code>cn=John Doe,ou=People,dc=example,dc=com</code>. */
    ldap_dn?: string,
    /** The timestamp when the user left or will be leaving the organization. */
    leave_time?: number,
    /** The geographical location associated with a user. This is typically the user's
usual work location. */
    location?: Location,
    /** The user's manager. This helps in understanding an org hierarchy. This should
only ever be populated once in an event. I.e. there should not be a manager's
manager in an event. */
    manager?: User,
    /** The timestamp when the user entry was last modified. */
    modified_time?: number,
    /** The primary office location associated with the user. This could be any string
and isn't a specific address. For example, <code>South East Virtual</code>. */
    office_location?: string,
    /** The telephone number of the user. Corresponds to the LDAP
<code>Telephone-Number</code> CN. */
    phone_number?: string,
    /** The last or family name for the user. */
    surname?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the user. */
    tags?: KeyValueObject[],
}


/**
 * The load balancer object describes the load balancer entity and contains
additional information regarding the distribution of traffic across a network.
 */
export interface LoadBalancer extends Entity {
    /** The request classification as defined by the load balancer. */
    classification?: string,
    /** The numeric response status code detailing the connection from the load
balancer to the destination target. */
    code?: number,
    /** The destination to which the load balancer is distributing traffic. */
    dst_endpoint?: NetworkEndpoint,
    /** An object detailing the load balancer connection attempts and responses. */
    endpoint_connections?: EndpointConnection[],
    /** The load balancer error message. */
    error_message?: string,
    /** The IP address of the load balancer node that handled the client request. Note:
the load balancer may have other IP addresses, and this is not an IP address of
the target/distribution endpoint - see <code>dst_endpoint</code>. */
    ip?: string,
    /** The load balancer message. */
    message?: string,
    /** General purpose metrics associated with the load balancer. */
    metrics?: Metric[],
    /** The name of the load balancer. */
    name?: string,
    /** The status detail contains additional status information about the load
balancer distribution event. */
    status_detail?: string,
    /** The unique identifier for the load balancer. */
    uid?: string,
}


/**
 * The Geo Location object describes a geographical location, usually associated
with an IP address.
 */
export interface Location extends Object {
    /** Expressed as either height above takeoff location or height above ground level
(AGL) for a UAS current location. This value is provided in meters and must
have a minimum resolution of 1 m. Special Values: <code>Invalid</code>,
<code>No Value</code>, or <code>Unknown: -1000 m</code>. */
    aerial_height?: string,
    /** The name of the city. */
    city?: string,
    /** The name of the continent. */
    continent?: string,
    /** A two-element array, containing a longitude/latitude pair. The format conforms
with <a target='_blank' href='https://geojson.org'>GeoJSON</a>. For example:
<code>[-73.983, 40.719]</code>. */
    coordinates?: number[],
    /** The ISO 3166-1 Alpha-2 country code.<p><b>Note:</b> The two letter country code
should be capitalized. For example: <code>US</code> or <code>CA</code>.</p> */
    country?: string,
    /** The description of the geographical location. */
    desc?: string,
    /** The aircraft distance above or below the ellipsoid as measured along a line
that passes through the aircraft and is normal to the surface of the WGS-84
ellipsoid. This value is provided in meters and must have a minimum resolution
of 1 m. Special Values: <code>Invalid</code>, <code>No Value</code>, or
<code>Unknown: -1000 m</code>. */
    geodetic_altitude?: string,
    /** Provides quality/containment on geodetic altitude. This is based on ADS-B
Geodetic Vertical Accuracy (GVA). Measured in meters. */
    geodetic_vertical_accuracy?: string,
    /** <p>Geohash of the geo-coordinates (latitude and longitude).</p><a
target='_blank' href='https://en.wikipedia.org/wiki/Geohash'>Geohashing</a> is
a geocoding system used to encode geographic coordinates in decimal degrees, to
a single string. */
    geohash?: string,
    /** Provides quality/containment on horizontal position. This is based on ADS-B
NACp. Measured in meters. */
    horizontal_accuracy?: string,
    /** Indicates whether the location is on-premises. */
    is_on_premises?: boolean,
    /** The name of the Internet Service Provider (ISP). */
    isp?: string,
    /** The geographical Latitude coordinate represented in Decimal Degrees (DD). For
example: <code>42.361145</code>. */
    lat?: number,
    /** The geographical Longitude coordinate represented in Decimal Degrees (DD). For
example: <code>-71.057083</code>. */
    long?: number,
    /** The postal code of the location. */
    postal_code?: string,
    /** The uncorrected barometric pressure altitude (based on reference standard 29.92
inHg, 1013.25 mb) provides a reference for algorithms that utilize 'altitude
deltas' between aircraft. This value is provided in meters and must have a
minimum resolution of 1 m.. Special Values: <code>Invalid</code>, <code>No
Value</code>, or <code>Unknown: -1000 m</code>. */
    pressure_altitude?: string,
    /** The provider of the geographical location data. */
    provider?: string,
    /** The alphanumeric code that identifies the principal subdivision (e.g. province
or state) of the country. For example, 'CH-VD' for the Canton of Vaud,
Switzerland */
    region?: string,
}


/**
 * The Logger object represents the device and product where events are stored
with times for receipt and transmission.  This may be at the source device
where the event occurred, a remote scanning device, intermediate hops, or the
ultimate destination.
 */
export interface Logger extends Entity {
    /** The device where the events are logged. */
    device?: Device,
    /** The unique identifier of the event assigned by the logger. */
    event_uid?: string,
    /** Indicates whether the OCSF event data has been truncated due to size
limitations. When <code>true</code>, some event data may have been omitted to
fit within system constraints. */
    is_truncated?: boolean,
    /** The format of data in the log. For example JSON, syslog or CSV. */
    log_format?: string,
    /** The level at which an event was logged. This can be log provider specific. For
example the audit level. */
    log_level?: string,
    /** The log name for the logging provider log, or the file name of the system log.
This may be an intermediate store-and-forward log or a vendor destination log.
For example /archive/server1/var/log/messages.0 or /var/log/. */
    log_name?: string,
    /** The logging provider or logging service that logged the event. This may be an
intermediate application store-and-forward log or a vendor destination log. */
    log_provider?: string,
    /** The event log schema version of the original event. For example the syslog
version or the Cisco Log Schema version */
    log_version?: string,
    /** <p>The time when the logging system collected and logged the event.</p>This
attribute is distinct from the event time in that event time typically contain
the time extracted from the original event. Most of the time, these two times
will be different. */
    logged_time?: number,
    /** The name of the logging product instance. */
    name?: string,
    /** The product logging the event.  This may be the event source product, a
management server product, a scanning product, a SIEM, etc. */
    product?: Product,
    /** The time when the event was transmitted from the logging device to it's next
destination. */
    transmit_time?: number,
    /** The unique identifier of the logging product instance. */
    uid?: string,
    /** The original size of the OCSF event data in kilobytes before any truncation
occurred. This field is typically populated when <code>is_truncated</code> is
<code>true</code> to indicate the full size of the original event. */
    untruncated_size?: number,
    /** The version of the logging provider. */
    version?: string,
}


/**
 * This object is a used to capture strings which may be truncated by a security
product due to their length.
 */
export interface LongString extends Object {
    /** Indicates that <code>value</code> has been truncated. May be omitted if
truncation has not occurred. */
    is_truncated?: boolean,
    /** The size in bytes of the string represented by <code>value</code> before
truncation. Should be omitted if truncation has not occurred. */
    untruncated_size?: number,
    /** The string value, truncated if <code>is_truncated</code> is <code>true</code>. */
    value: string,
}


/**
 * The Malware object describes the classification of known malicious software,
which is intentionally designed to cause damage to a computer, server, client,
or computer network.
 */
export interface Malware extends Entity {
    /** The list of normalized identifiers of the malware classifications. */
    classification_ids: string,
    /** The list of malware classifications, normalized to the captions of the
<code>classification_ids</code> values. In the case of 'Other', they are
defined by the event source. */
    classifications?: string[],
    /** The list of Common Vulnerabilities and Exposures (CVE) identifiers associated
with the malware. Reference: <a target='_blank'
href='https://cve.mitre.org/'>CVE</a> */
    cves?: Cve[],
    /** The list of file objects representing files that were identified as infected by
the malware. */
    files?: File[],
    /** The malware name, as reported by the detection engine. */
    name?: string,
    /** The number of files that were identified to be infected by the malware. */
    num_infected?: number,
    /** The filesystem path of the malware that was observed. */
    path?: string,
    /** The name or identifier of the security solution or service that provided the
malware detection information. */
    provider?: string,
    /** The severity of the malware, normalized to the captions of the
<code>severity_id</code> values. In the case of 'Other', they are defined by
the event source. */
    severity?: string,
    /** The normalized identifier of the malware severity. */
    severity_id?: string,
    /** A unique identifier for the specific malware instance, as assigned by the
detection engine (e.g., virus signature ID or IPS rule ID). */
    uid?: string,
}


/**
 * The Managed Entity object describes the type and version of an entity, such as
a user, device, or policy.  For types in the <code>type_id</code> enum list, an
associated attribute should be populated.  If the type of entity is not in the
<code>type_id</code> list, information can be put into the <code>data</code>
attribute, <code>type_id</code> should be 'Other' and the <code>type</code>
attribute should label the entity type.
 */
export interface ManagedEntity extends Entity {
    /** The managed entity content as a JSON object. */
    data?: string,
    /** An addressable device, computer system or host. */
    device?: Device,
    /** The email object. */
    email?: Email,
    /** The group object associated with an entity such as user, policy, or rule. */
    group?: Group,
    /** The detailed geographical location usually associated with an IP address. */
    location?: Location,
    /** The name of the managed entity. It should match the name of the specific entity
object's name if populated, or the name of the managed entity if the
<code>type_id</code> is 'Other'. */
    name?: string,
    /** The Organization object containing details about the managed organizational
entity. This object includes properties such as the organization name, unique
identifier, type, and other organizational metadata. This attribute should be
populated when <code>type_id</code> is <code>4</code> (Organization). */
    org?: Organization,
    /** Describes details of a managed policy. */
    policy?: Policy,
    /** The managed entity type. For example: <code>Policy</code>, <code>User</code>,
<code>Organization</code>, <code>Device</code>. */
    type?: string,
    /** The type of the Managed Entity. It is recommended to also populate the
<code>type</code> attribute with the associated label, or the source specific
name if <code>Other</code>. */
    type_id?: string,
    /** The identifier of the managed entity. It should match the <code>uid</code> of
the specific entity's object UID if populated, or the source specific ID if the
<code>type_id</code> is 'Other'. */
    uid?: string,
    /** The user that pertains to the event or object. */
    user?: User,
    /** The version of the managed entity. For example: <code>1.2.3</code>. */
    version?: string,
}


/**
 * Communication context for AI system interactions including protocols, roles,
clients, and session information for MCP and other AI communication systems.
 */
export interface MessageContext extends Entity {
    /** The normalized caption of the <code>ai_role_id</code>. */
    ai_role?: string,
    /** Specifies the functional role of the AI within the context of this message,
such as retrieving information, assisting reasoning, executing a tool, or
generating content. */
    ai_role_id?: string,
    /** The initiating client application. In AI systems, this represents the
client-side application or framework that initiates requests (e.g., LangChain
application, web browser, mobile app, SDK implementation). */
    application?: ApplicationObject,
    /** Number of tokens in the model's response/completion for this message. */
    completion_tokens?: number,
    /** The name or identifier of the message context. In AI systems, this could be the
conversation ID, session name, thread identifier, or interaction name (e.g.,
'user-session-123', 'conversation-abc', 'chat-thread-456'). */
    name?: string,
    /** Number of tokens in the input prompt for this message. */
    prompt_tokens?: number,
    /** The server or service handling the request. In AI systems, this represents the
AI service, API endpoint, or agent that processes and responds to requests
(e.g., OpenAI API service, Claude API service, internal AI model service). */
    service?: Service,
    /** Total number of tokens used for this message (prompt + completion). */
    total_tokens?: number,
    /** The unique identifier of the message context. This could be a session ID,
conversation ID, or other unique identifier that allows correlation of messages
within the same context. */
    uid?: string,
}


/**
 * The Metadata object describes the metadata associated with the event.
 */
export interface Metadata extends Object, DataClassificationProfile {
    /** A unique identifier used to correlate this OCSF event with other related OCSF
events, distinct from the event's <code>uid</code> value. This enables linking
multiple OCSF events that are part of the same activity, transaction, or
security incident across different systems or time periods. */
    correlation_uid?: string,
    /** Debug information about non-fatal issues with this OCSF event. Each issue is a
line in this string array. */
    debug?: string[],
    /** The identifier of the original event. For example the numerical Windows Event
Code or Cisco syslog code. */
    event_code?: string,
    /** The schema extension used to create the event. */
    extension?: Extension,
    /** The schema extensions used to create the event. */
    extensions?: Extension[],
    /** Indicates whether the OCSF event data has been truncated due to size
limitations. When <code>true</code>, some event data may have been omitted to
fit within system constraints. */
    is_truncated?: boolean,
    /** The list of labels attached to the event. For example: <code>["sample",
"dev"]</code> */
    labels?: string[],
    /** The format of data in the log where the data originated. For example CSV, XML,
Windows Multiline, JSON, syslog or Cisco Log Schema. */
    log_format?: string,
    /** The level at which an event was logged. This can be log provider specific. For
example the audit level. */
    log_level?: string,
    /** The event log name, typically for the consumer of the event. For example, the
storage bucket name, SIEM repository index name, etc. */
    log_name?: string,
    /** The logging provider or logging service that logged the event. For example AWS
CloudWatch or Splunk. */
    log_provider?: string,
    /** The log system or component where the data originated. For example, a file
path, syslog server name or a Windows hostname and logging subsystem such as
Security. */
    log_source?: string,
    /** The event log schema version of the original event. For example the syslog
version or the Cisco Log Schema version */
    log_version?: string,
    /** <p>The time when the logging system collected and logged the event.</p>This
attribute is distinct from the event time in that event time typically contain
the time extracted from the original event. Most of the time, these two times
will be different. */
    logged_time?: number,
    /** An array of Logger objects that describe the pipeline of devices and logging
products between the event source and its eventual destination. Note, this
attribute can be used when there is a complex end-to-end path of event flow
and/or to track the chain of custody of the data. */
    loggers?: Logger[],
    /** The time when the event was last modified or enriched. */
    modified_time?: number,
    /** The unique identifier assigned to the event in its original logging system
before transformation to OCSF format. This field preserves the source system's
native event identifier, enabling traceability back to the raw log entry. For
example, a Windows Event Record ID, a syslog message ID, a Splunk _cd value, or
a database transaction log sequence number. */
    original_event_uid?: string,
    /** The original event time as reported by the event source. For example, the time
in the original format from system event log such as Syslog on Unix/Linux and
the System event file on Windows. Omit if event is generated instead of
collected via logs. */
    original_time?: string,
    /** The event processed time, such as an ETL operation. */
    processed_time?: number,
    /** The product that reported the event. */
    product: Product,
    /** The list of profiles used to create the event.  Profiles should be referenced
by their <code>name</code> attribute for core profiles, or
<code>extension/name</code> for profiles from extensions. */
    profiles?: string[],
    /** The entity from which the event or finding was first reported. */
    reporter?: Reporter,
    /** Sequence number of the event. The sequence number is a value available in some
events, to make the exact ordering of events unambiguous, regardless of the
event time precision. */
    sequence?: number,
    /** The source of the event or finding. This can be any distinguishing name for the
logical origin of the data — for example, 'CloudTrail Events', or a use case
like 'Attack Simulations' or 'Vulnerability Scans'. */
    source?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the event. */
    tags?: KeyValueObject[],
    /** The unique tenant identifier. */
    tenant_uid?: string,
    /** The amount of time an event spent in a queue awaiting processing. In this case,
the value is the difference between <code>processed_time</code> and
<code>logged_time</code>. This duration is inclusive of all queues between the
originator of the event and the intended long-term storage destination of the
event. */
    total_queued_duration?: Timespan,
    /** An array of transformation info that describes the mappings or transforms
applied to the data. */
    transformation_info_list?: TransformationInfo[],
    /** The time when the event was transmitted from the logging device to it's next
destination. */
    transmit_time?: number,
    /** The type of the event or finding as a subset of the <code>source</code> of the
event. This can be any distinguishing characteristic of the data. For example
'Management Events' or 'Device Penetration Test'. */
    type?: string,
    /** A unique identifier assigned to the OCSF event. This ID is specific to the OCSF
event itself and is distinct from the original event identifier in the source
system (see <code>original_event_uid</code>). */
    uid?: string,
    /** The original size of the OCSF event data in kilobytes before any truncation
occurred. This field is typically populated when <code>is_truncated</code> is
<code>true</code> to indicate the full size of the original event. */
    untruncated_size?: number,
    /** The version of the OCSF schema, using Semantic Versioning Specification (<a
target='_blank' href='https://semver.org'>SemVer</a>). For example:
<code>1.0.0.</code> Event consumers use the version to determine the available
event attributes. */
    version: string,
}


/**
 * The Metric object defines a simple name/value pair entity for a metric.
 */
export interface Metric extends Object {
    /** The name of the metric. */
    name: string,
    /** The value of the metric. */
    value: string,
}


/**
 * The MITRE Mitigation object describes the ATT&CK® or ATLAS™ Mitigation ID
and/or name that is associated to an attack.
 */
export interface Mitigation extends Entity {
    /** The D3FEND countermeasures that are associated with the attack technique. For
example: ATT&CK Technique <code>T1003</code> is addressed by Mitigation
<code>M1027</code>, and D3FEND Technique <code>D3-OTP</code>. */
    countermeasures?: D3fend[],
    /** The Mitigation name that is associated with the attack technique. For example:
<code>Password Policies</code>, or <code>Code Signing</code>. */
    name?: string,
    /** The versioned permalink of the Mitigation. For example:
<code>https://attack.mitre.org/versions/v14/mitigations/M1027</code>. */
    src_url?: string,
    /** The Mitigation ID that is associated with the attack technique. For example:
<code>M1027</code>, or <code>AML.M0013</code>. */
    uid?: string,
}


/**
 * The Module object describes the attributes of a module.
 */
export interface Module extends Object {
    /** The memory address where the module was loaded. */
    base_address?: string,
    /** The module file object. */
    file?: File,
    /** Details about the invocation of the function given in
<code>function_name</code>. */
    function_invocation?: FunctionInvocation,
    /** The invoked function in the module. For load and unload events, this is the
entry-point function of the module. The system calls the entry-point function
whenever a process or thread loads or unloads the module. */
    function_name?: string,
    /** The load type, normalized to the caption of the load_type_id value. In the case
of 'Other', it is defined by the event source. */
    load_type?: string,
    /** The normalized identifier for how the module was loaded in memory. */
    load_type_id?: string,
    /** The start address of the execution. */
    start_address?: string,
    /** The module type. */
    type?: string,
}


/**
 * The Network Connection Information object describes characteristics of an OSI
Transport Layer communication, including TCP and UDP.
 */
export interface NetworkConnectionInfo extends Object {
    /** The boundary of the connection, normalized to the caption of 'boundary_id'. In
the case of 'Other', it is defined by the event source. <p> For cloud
connections, this translates to the traffic-boundary(same VPC, through IGW,
etc.). For traditional networks, this is described as Local, Internal, or
External.</p> */
    boundary?: string,
    /** <p>The normalized identifier of the boundary of the connection. </p><p> For
cloud connections, this translates to the traffic-boundary (same VPC, through
IGW, etc.). For traditional networks, this is described as Local, Internal, or
External.</p> */
    boundary_id?: string,
    /** The Community ID of the network connection. */
    community_uid?: string,
    /** The direction of the initiated connection, traffic, or email, normalized to the
caption of the direction_id value. In the case of 'Other', it is defined by the
event source. */
    direction?: string,
    /** The normalized identifier of the direction of the initiated connection,
traffic, or email. */
    direction_id: string,
    /** The Connection Flag History summarizes events in a network connection. For
example flags <code> ShAD </code> representing SYN, SYN/ACK, ACK and Data
exchange. */
    flag_history?: string,
    /** The IP protocol name in lowercase, as defined by the Internet Assigned Numbers
Authority (IANA). For example: <code>tcp</code> or <code>udp</code>. */
    protocol_name?: string,
    /** The IP protocol number, as defined by the Internet Assigned Numbers Authority
(IANA). For example: <code>6</code> for TCP and <code>17</code> for UDP. */
    protocol_num?: number,
    /** The Internet Protocol version. */
    protocol_ver?: string,
    /** The Internet Protocol version identifier. */
    protocol_ver_id?: string,
    /** The authenticated user or service session. */
    session?: Session,
    /** The network connection TCP header flags (i.e., control bits). */
    tcp_flags?: number,
    /** The unique identifier of the connection. */
    uid?: string,
}


/**
 * The Network Endpoint object describes characteristics of a network endpoint.
These can be a source or destination of a network connection.
 */
export interface NetworkEndpoint extends Endpoint {
    /** The Autonomous System details associated with an IP address. */
    autonomous_system?: AutonomousSystem,
    /** Fingerprints that identify the specific application implementation on this
endpoint, such as Cisco NPF or HASSH. */
    fingerprints?: Fingerprint[],
    /** The intermediate IP Addresses. For example, the IP addresses in the HTTP
X-Forwarded-For header. */
    intermediate_ips?: string[],
    /** The name of the Internet Service Provider (ISP). */
    isp?: string,
    /** The organization name of the Internet Service Provider (ISP). This represents
the parent organization or company that owns/operates the ISP. For example,
Comcast Corporation would be the ISP org for Xfinity internet service. This
attribute helps identify the ultimate provider when ISPs operate under
different brand names. */
    isp_org?: string,
    /** Indicates whether the endpoint resides inside the customer’s network, outside
on the Internet, or if its location relative to the customer’s network cannot
be determined. The value is normalized to the caption of the
<code>network_scope_id</code>. */
    network_scope?: string,
    /** The normalized identifier of the endpoint’s network scope. The normalized
network scope identifier indicates whether the endpoint resides inside the
customer’s network, outside on the Internet, or if its location relative to the
customer’s network cannot be determined. */
    network_scope_id?: string,
    /** The port used for communication within the network connection. */
    port?: number,
    /** The network proxy information pertaining to a specific endpoint. This can be
used to describe information pertaining to network address translation (NAT). */
    proxy_endpoint?: NetworkProxy,
    /** The service name in service-to-service connections. For example, AWS VPC logs
the pkt-src-aws-service and pkt-dst-aws-service fields identify the connection
is coming from or going to an AWS service. */
    svc_name?: string,
    /** The network endpoint type. For example: <code>unknown</code>,
<code>server</code>, <code>desktop</code>, <code>laptop</code>,
<code>tablet</code>, <code>mobile</code>, <code>virtual</code>,
<code>browser</code>, or <code>other</code>. */
    type?: string,
    /** The network endpoint type ID. */
    type_id?: string,
    /** The unique identifier of the endpoint. */
    uid?: string,
}


/**
 * The Network Interface object describes the type and associated attributes of a
physical or virtual network interface.
 */
export interface NetworkInterface extends Entity {
    /** The hostname associated with the network interface. */
    hostname?: string,
    /** The IP address associated with the network interface. */
    ip?: string,
    /** The MAC address of the network interface. */
    mac?: string,
    /** The name of the network interface. */
    name?: string,
    /** The namespace is useful in merger or acquisition situations. For example, when
similar entities exist that you need to keep separate. */
    namespace?: string,
    /** The list of open ports on a network interface, including port numbers and
associated protocol information. */
    open_ports?: PortInfo[],
    /** The subnet prefix length determines the number of bits used to represent the
network part of the IP address. The remaining bits are reserved for identifying
individual hosts within that subnet. */
    subnet_prefix?: number,
    /** The type of network interface. */
    type?: string,
    /** The network interface type identifier. */
    type_id?: string,
    /** The unique identifier for the network interface. */
    uid?: string,
}


/**
 * The network proxy endpoint object describes a proxy server, which acts as an
intermediary between a client requesting a resource and the server providing
that resource.
 */
export interface NetworkProxy extends NetworkEndpoint {
}


/**
 * The Network Traffic object describes characteristics of network traffic over a
time period. The metrics represent network data transferred between source and
destination during an observation window.
 */
export interface NetworkTraffic extends Object {
    /** The total number of bytes transferred in both directions (sum of bytes_in and
bytes_out). */
    bytes?: number,
    /** The number of bytes sent from the destination to the source (inbound
direction). */
    bytes_in?: number,
    /** The number of bytes that were missed during observation, typically due to
packet loss or sampling limitations. */
    bytes_missed?: number,
    /** The number of bytes sent from the source to the destination (outbound
direction). */
    bytes_out?: number,
    /** The total number of chunks transferred in both directions (sum of chunks_in and
chunks_out). */
    chunks?: number,
    /** The number of chunks sent from the destination to the source (inbound
direction). */
    chunks_in?: number,
    /** The number of chunks sent from the source to the destination (outbound
direction). */
    chunks_out?: number,
    /** The end time of the observation or reporting period. */
    end_time?: number,
    /** The total number of packets transferred in both directions (sum of packets_in
and packets_out). */
    packets?: number,
    /** The number of packets sent from the destination to the source (inbound
direction). */
    packets_in?: number,
    /** The number of packets sent from the source to the destination (outbound
direction). */
    packets_out?: number,
    /** The start time of the observation or reporting period. */
    start_time?: number,
    /** The time span object representing the duration of the observation or reporting
period. */
    timespan?: Timespan,
}


/**
 * Represents a node or a vertex in a graph structure.
 */
export interface Node extends Object {
    /** Additional data about the node stored as key-value pairs. Can include custom
properties specific to the node. */
    data?: string,
    /** A human-readable description of the node's purpose or meaning in the graph. */
    desc?: string,
    /** A human-readable name or label for the node. Should be descriptive and unique
within the graph context. */
    name?: string,
    /** Categorizes the node into a specific class or type. Useful for grouping and
filtering nodes. */
    type?: string,
    /** A unique string or numeric identifier that distinguishes this node from all
others in the graph. Must be unique across all nodes. */
    uid: string,
}


/**
 * The Organization object describes characteristics of an organization or company
and its division if any. Additionally, it also describes cloud and
Software-as-a-Service (SaaS) logical hierarchies such as AWS Organizations,
Google Cloud Organizations, Oracle Cloud Tenancies, and similar constructs.
 */
export interface Organization extends Entity {
    /** The name of the organization, Oracle Cloud Tenancy, Google Cloud Organization,
or AWS Organization. For example, <code> Widget, Inc. </code> or the <code> AWS
Organization name </code>. */
    name?: string,
    /** The name of an organizational unit, Google Cloud Folder, or AWS Org Unit. For
example, the <code> GCP Project Name </code>, or <code> Dev_Prod_OU </code>. */
    ou_name?: string,
    /** The unique identifier of an organizational unit, Google Cloud Folder, or AWS
Org Unit. For example, an  <code> Oracle Cloud Tenancy ID </code>, <code> AWS
OU ID </code>, or <code> GCP Folder ID </code>. */
    ou_uid?: string,
    /** The unique identifier of the organization, Oracle Cloud Tenancy, Google Cloud
Organization, or AWS Organization. For example, an <code> AWS Org ID </code> or
<code> Oracle Cloud Domain ID </code>. */
    uid?: string,
}


/**
 * The peripheral device object describes the properties of external, connectable,
and detachable hardware.
 */
export interface PeripheralDevice extends Entity {
    /** The class of the peripheral device. */
    class_?: string,
    /** The peripheral device model. */
    model?: string,
    /** The name of the peripheral device. */
    name: string,
    /** The peripheral device serial number. */
    serial_number?: string,
    /** The Peripheral Device type, normalized to the caption of the
<code>type_id</code> value. In the case of 'Other', it is defined by the
source. */
    type?: string,
    /** The normalized peripheral device type ID. */
    type_id?: string,
    /** The unique identifier of the peripheral device. */
    uid?: string,
    /** The list of vendor IDs for the peripheral device. */
    vendor_id_list?: string[],
    /** The primary vendor name for the peripheral device. */
    vendor_name?: string,
}


/**
 * The Policy object describes the policies that are applicable. <p>Policy
attributes provide traceability to the operational state of the security
product at the time that the event was captured, facilitating forensics,
troubleshooting, and policy tuning/adjustments.</p>
 */
export interface Policy extends Entity {
    /** Additional data about the policy such as the underlying JSON policy itself or
other details. */
    data?: string,
    /** The description of the policy. */
    desc?: string,
    /** The policy group. */
    group?: Group,
    /** A determination if the content of a policy was applied to a target or request,
or not. */
    is_applied?: boolean,
    /** The policy name. For example: <code>AdministratorAccess Policy</code>. */
    name?: string,
    /** The policy type. For example: <code>Identity Policy, Resource Policy, Service
Control Policy, etc.</code>. */
    type?: string,
    /** A unique identifier of the policy instance. */
    uid?: string,
    /** The policy version number. */
    version?: string,
}


/**
 * The Process Entity object provides critical fields for referencing a process.
 */
export interface ProcessEntity extends Entity {
    /** The full command line used to launch an application, service, process, or job.
For example: <code>ssh user@10.0.0.10</code>. If the command line is
unavailable or missing, the empty string <code>''</code> is to be used. */
    cmd_line?: string,
    /** A unique process identifier that can be assigned deterministically by multiple
system data producers. */
    cpid?: string,
    /** The time when the process was created/started. */
    created_time?: number,
    /** The friendly name of the process, for example: <code>Notepad++</code>. */
    name?: string,
    /** The process file path. */
    path?: string,
    /** The process identifier, as reported by the operating system. Process ID (PID)
is a number used by the operating system to uniquely identify an active
process. */
    pid?: number,
    /** A unique identifier for this process assigned by the producer (tool).
Facilitates correlation of a process event with other events for that process. */
    uid?: string,
}


/**
 * The Product object describes characteristics of a software product.
 */
export interface Product extends Entity, DataClassificationProfile {
    /** The Common Platform Enumeration (CPE) name as described by (<a target='_blank'
href='https://nvd.nist.gov/products/cpe'>NIST</a>) For example:
<code>cpe:/a:apple:safari:16.2</code>. */
    cpe_name?: string,
    /** The feature that reported the event. */
    feature?: Feature,
    /** The two letter lower case language codes, as defined by <a target='_blank'
href='https://en.wikipedia.org/wiki/ISO_639-1'>ISO 639-1</a>. For example:
<code>en</code> (English), <code>de</code> (German), or <code>fr</code>
(French). */
    lang?: string,
    /** The name of the product. */
    name?: string,
    /** The installation path of the product. */
    path?: string,
    /** The unique identifier of the product. */
    uid?: string,
    /** The URL pointing towards the product. */
    url_string?: string,
    /** The name of the vendor of the product. */
    vendor_name?: string,
    /** The version of the product, as defined by the event source. For example:
<code>2013.1.3-beta</code>. */
    version?: string,
}


/**
 * The query info object holds information related to data access within a
datastore. To access, manipulate, delete, or retrieve data from a datastore, a
query must be written using a specific syntax.
 */
export interface QueryInfo extends Entity {
    /** The size of the data returned from the query. */
    bytes?: number,
    /** The data returned from the query execution. */
    data?: string,
    /** The query name for a saved or scheduled query. */
    name?: string,
    /** A string representing the query code being run. For example: <code>SELECT *
FROM my_table</code> */
    query_string: string,
    /** The time when the query was run. */
    query_time?: number,
    /** The unique identifier of the query. */
    uid?: string,
}


/**
 * The entity from which an event or finding was reported.
 */
export interface Reporter extends Entity {
    /** The hostname of the entity from which the event or finding was reported. */
    hostname?: string,
    /** The IP address of the entity from which the event or finding was reported. */
    ip?: string,
    /** The name of the entity from which the event or finding was reported. */
    name?: string,
    /** The organization properties of the entity that reported the event or finding. */
    org?: Organization,
    /** The unique identifier of the entity from which the event or finding was
reported. */
    uid?: string,
}


/**
 * The Resource Details object describes details about resources that were
affected by the activity/event.
 */
export interface ResourceDetails extends Resource, CloudProfile {
    /** A list of <code>agent</code> objects associated with a device, endpoint, or
resource. */
    agent_list?: Agent[],
    /** The logical grouping or isolated segment within a cloud provider's
infrastructure where the resource is located. Examples include AWS partitions
(aws, aws-cn, aws-us-gov), Azure cloud environments (AzureCloud,
AzureUSGovernment, AzureChinaCloud), or similar logical divisions in other
cloud providers. */
    cloud_partition?: string,
    /** The criticality of the resource as defined by the event source. */
    criticality?: string,
    /** The name of the related resource group. */
    group?: Group,
    /** The fully qualified name of the resource. */
    hostname?: string,
    /** The IP address of the resource, in either IPv4 or IPv6 format. */
    ip?: string,
    /** Indicates whether the device or resource has a backup enabled, such as an
automated snapshot or a cloud backup. For example, this is indicated by the
<code>cloudBackupEnabled</code> value within JAMF Pro mobile devices or the
registration of an AWS ARN with the AWS Backup service. */
    is_backed_up?: boolean,
    /** The name of the resource. */
    name?: string,
    /** The namespace is useful when similar entities exist that you need to keep
separate. */
    namespace?: string,
    /** The details of the entity that owns the resource. This object includes
properties such as the owner's name, unique identifier, type, domain, and other
relevant attributes that help identify the resource owner within the
environment. */
    owner?: User,
    /** The cloud service provider that hosts or manages the resource. This field is
typically used when the resource is managed by a different provider than the
one generating the event or finding. Examples include AWS, Azure, GCP (Google
Cloud Platform), Oracle Cloud, IBM Cloud, Alibaba Cloud, or other public,
private, or hybrid cloud providers. */
    provider?: string,
    /** The cloud region where the resource is hosted, as defined by the cloud
provider. This represents the physical or logical geographic area containing
the infrastructure supporting the resource. Examples include AWS regions
(us-east-1, eu-west-1), Azure regions (East US, West Europe), GCP regions
(us-central1, europe-west1), or Oracle Cloud regions (us-ashburn-1,
uk-london-1). */
    region?: string,
    /** A graph representation showing how this resource relates to and interacts with
other entities in the environment. This can include parent/child relationships,
dependencies, or other connections. */
    resource_relationship?: Graph,
    /** The role of the resource in the context of the event or finding, normalized to
the caption of the role_id value. In the case of 'Other', it is defined by the
event source. */
    role?: string,
    /** The normalized identifier of the resource's role in the context of the event or
finding. */
    role_id?: string,
    /** The version of the resource. For example <code>1.2.3</code>. */
    version?: string,
    /** The availability zone within a cloud region where the resource is located.
Examples include AWS availability zones (us-east-1a, us-east-1b), Azure
availability zones (1, 2, 3 within a region), GCP zones (us-central1-a,
us-central1-b), or Oracle Cloud availability domains (AD-1, AD-2, AD-3). */
    zone?: string,
}


/**
 * The Rule object describes characteristics of a rule associated with a policy or
an event.
 */
export interface Rule extends Entity {
    /** The rule category. */
    category?: string,
    /** The description of the rule that generated the event. */
    desc?: string,
    /** The name of the rule that generated the event. */
    name?: string,
    /** The rule type. */
    type?: string,
    /** The unique identifier of the rule that generated the event. */
    uid?: string,
    /** The rule version. For example: <code>1.1</code>. */
    version?: string,
}


/**
 * The Scan object describes characteristics of a proactive scan.
 */
export interface Scan extends Entity {
    /** The administrator-supplied or application-generated name of the scan. For
example: "Home office weekly user database scan", "Scan folders for viruses",
"Full system virus scan" */
    name?: string,
    /** The type of scan. */
    type?: string,
    /** The type id of the scan. */
    type_id: string,
    /** The application-defined unique identifier assigned to an instance of a scan. */
    uid?: string,
}


/**
 * The Service object describes characteristics of a service, <code> e.g. AWS EC2.
</code>
 */
export interface Service extends Entity {
    /** The list of labels associated with the service. */
    labels?: string[],
    /** The name of the service. */
    name?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the service. */
    tags?: KeyValueObject[],
    /** The unique identifier of the service. */
    uid?: string,
    /** The version of the service. */
    version?: string,
}


/**
 * The MITRE Sub-technique object describes the ATT&CK® or ATLAS™ Sub-technique ID
and/or name associated to an attack.
 */
export interface SubTechnique extends Entity {
    /** The name of the attack sub-technique. For example: <code>Scanning IP
Blocks</code> or <code>User Execution: Unsafe ML Artifacts</code>. */
    name?: string,
    /** The versioned permalink of the attack sub-technique. For example:
<code>https://attack.mitre.org/versions/v14/techniques/T1595/001/</code>. */
    src_url?: string,
    /** The unique identifier of the attack sub-technique. For example:
<code>T1595.001</code> or <code>AML.T0011.000</code>. */
    uid?: string,
}


/**
 * The table object represents a table within a structured relational database or
datastore, which contains columns and rows of data that are able to be create,
updated, deleted and queried.
 */
export interface Table extends Entity {
    /** The time when the table was known to have been created. */
    created_time?: number,
    /** The description of the table. */
    desc?: string,
    /** The group names to which the table belongs. */
    groups?: Group[],
    /** The most recent time when any changes, updates, or modifications were made
within the table. */
    modified_time?: number,
    /** The table name, ordinarily as assigned by a database administrator. */
    name?: string,
    /** The size of the data table in bytes. */
    size?: number,
    /** The unique identifier of the table. */
    uid?: string,
}


/**
 * The MITRE Tactic object describes the ATT&CK® or ATLAS™ Tactic ID and/or name
that is associated to an attack.
 */
export interface Tactic extends Entity {
    /** The Tactic name that is associated with the attack technique. For example:
<code>Reconnaissance</code> or <code>ML Model Access</code>. */
    name?: string,
    /** The versioned permalink of the Tactic. For example:
<code>https://attack.mitre.org/versions/v14/tactics/TA0043/</code>. */
    src_url?: string,
    /** The Tactic ID that is associated with the attack technique. For example:
<code>TA0043</code>, or <code>AML.TA0000</code>. */
    uid?: string,
}


/**
 * The MITRE Technique object describes the ATT&CK® or ATLAS™ Technique ID and/or
name associated to an attack.
 */
export interface Technique extends Entity {
    /** The name of the attack technique. For example: <code>Active Scanning</code> or
<code>AI Model Inference API Access</code>. */
    name?: string,
    /** The versioned permalink of the attack technique. For example:
<code>https://attack.mitre.org/versions/v14/techniques/T1595/</code>. */
    src_url?: string,
    /** The unique identifier of the attack technique. For example: <code>T1595</code>
or <code>AML.T0040</code>. */
    uid?: string,
}


/**
 * Describes a characteristic or feature of an entity that was observed. For
example, this object can be used to represent specific characteristics derived
from events or findings that can be surfaced as distinguishing traits of the
entity in question.
 */
export interface Trait extends Entity {
    /** The high-level grouping or classification this trait belongs to. */
    category?: string,
    /** The name of the trait. */
    name?: string,
    /** The type of the trait. For example, this can be used to indicate if the trait
acts as a contributing factor (increases risk/severity) or a mitigating factor
(decreases risk/severity), in the context of the related finding. */
    type?: string,
    /** The unique identifier of the trait. */
    uid?: string,
    /** The values of the trait. */
    values?: string[],
}


/**
 * The transformation_info object represents the mapping or transformation used.
 */
export interface TransformationInfo extends Entity {
    /** The transformation language used to transform the data. */
    lang?: string,
    /** The name of the transformation or mapping. */
    name?: string,
    /** The product or instance used to make the transformation */
    product?: Product,
    /** Time of the transformation. */
    time?: number,
    /** The unique identifier of the mapping or transformation. */
    uid?: string,
    /** The Uniform Resource Locator String where the mapping or transformation exists. */
    url_string?: string,
}


/**
 * The Unmanned Aerial System object describes the characteristics, Position
Location Information (PLI), and other metadata of Unmanned Aerial Systems (UAS)
and other unmanned and drone systems used in Remote ID. Remote ID is defined in
the Standard Specification for Remote ID and Tracking (ASTM Designation:
F3411-22a) <a target='_blank'
href='https://cdn.standards.iteh.ai/samples/112830/71297057ac42432880a203654f213709/ASTM-F3411-22a.pdf'>ASTM
F3411-22a</a>.
 */
export interface UnmannedAerialSystem extends Aircraft {
    /** The endpoint hardware information. */
    hw_info?: DeviceHwInfo,
    /** The detailed geographical location usually associated with an IP address. */
    location?: Location,
    /** The name of the unmanned system as reported by tracking or sensing hardware. */
    name?: string,
    /** The serial number of the unmanned system. This is expressed in
<code>CTA-2063-A</code> format. */
    serial_number?: string,
    /** The type of the UAS. For example, Helicopter, Gyroplane, Rocket, etc. */
    type?: string,
    /** The UAS type identifier. */
    type_id?: string,
    /** The primary identification identifier for an unmanned system. This can be a
Serial Number (in <code>CTA-2063-A</code> format, the Registration ID (provided
by the <code>CAA</code>, a UTM, or a unique Session ID. */
    uid?: string,
    /** A secondary identification identifier for an unmanned system. This can be a
Serial Number (in <code>CTA-2063-A</code> format, the Registration ID (provided
by the <code>CAA</code>, a UTM, or a unique Session ID. */
    uid_alt?: string,
    /** The Unmanned Aircraft System Traffic Management (UTM) provided universal unique
ID (UUID) traceable to a non-obfuscated ID where this UTM UUID acts as a
'session id' to protect exposure of operationally sensitive information. */
    uuid?: string,
}


/**
 * The Unmanned System Operating Area object describes details about a precise
area of operations for a UAS flight or mission.
 */
export interface UnmannedSystemOperatingArea extends Location {
    /** Maximum altitude (WGS-84 HAE) for a group or an Intent-Based Network
Participant. Measured in meters. Special Values: <code>Invalid</code>, <code>No
Value</code>, or <code>Unknown: -1000 m</code>. */
    altitude_ceiling?: string,
    /** Minimum altitude (WGS-84 HAE) for a group or an Intent-Based Network
Participant. Measured in meters. Special Values: <code>Invalid</code>, <code>No
Value</code>, or <code>Unknown: -1000 m</code>. */
    altitude_floor?: string,
    /** Indicates the number of UAS in the operating area. */
    count?: number,
    /** The date and time at which a group or an Intent-Based Network Participant
operation ends. (This field is only applicable to Network Remote ID.) */
    end_time?: number,
    /** A list of Position Location Information (PLI) (latitude/longitude pairs)
defining the area where a group or Intent-Based Network Participant operation
is taking place. (This field is only applicable to Network Remote ID.) */
    locations?: Location[],
    /** Farthest horizontal distance from the reported location at which any UA in a
group may be located (meters). Also allows defining the area where an
Intent-Based Network Participant operation is taking place. Default: 0 m. */
    radius?: string,
    /** The date and time at which a group or an Intent-Based Network Participant
operation starts. (This field is only applicable to Network Remote ID.) */
    start_time?: number,
    /** The type of operating area. For example, <code>Takeoff Location</code>,
<code>Fixed Location</code>, <code>Dynamic Location</code>. */
    type?: string,
    /** The operating area type identifier. */
    type_id?: string,
}


/**
 * The User object describes the characteristics of a user/person or a security
principal.
 */
export interface User extends Entity {
    /** The user's account or the account associated with the user. */
    account?: Account,
    /** The unique identifier of the user's credential. For example, AWS Access Key ID. */
    credential_uid?: string,
    /** The display name of the user, as reported by the product. */
    display_name?: string,
    /** The domain where the user is defined. For example: the LDAP or Active Directory
domain. */
    domain?: string,
    /** The user's primary email address. */
    email_addr?: string,
    /** The user's forwarding email address. */
    forward_addr?: string,
    /** The full name of the user, as reported by the product. */
    full_name?: string,
    /** The administrative groups to which the user belongs. */
    groups?: Group[],
    /** The user has a multi-factor or secondary-factor device assigned. */
    has_mfa?: boolean,
    /** The additional LDAP attributes that describe a person. */
    ldap_person?: LdapPerson,
    /** The username. For example, <code>janedoe1</code>. */
    name?: string,
    /** Organization and org unit related to the user. */
    org?: Organization,
    /** The telephone number of the user. */
    phone_number?: string,
    /** Details about the programmatic credential (API keys, access tokens,
certificates, etc) associated to the user. */
    programmatic_credentials?: ProgrammaticCredential[],
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: string,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** The type of the user. For example, System, AWS IAM User, etc. */
    type?: string,
    /** The account type identifier. */
    type_id?: string,
    /** The unique user identifier. For example, the Windows user SID, ActiveDirectory
DN or AWS user ARN. */
    uid?: string,
    /** The alternate user identifier. For example, the Active Directory user GUID or
AWS user Principal ID. */
    uid_alt?: string,
}


/**
 * The Web Resource object describes characteristics of a web resource that was
affected by the activity/event.
 */
export interface WebResource extends Resource {
    /** Details of the web resource, e.g, <code>file</code> details,
<code>search</code> results or application-defined resource. */
    data?: string,
    /** Description of the web resource. */
    desc?: string,
    /** The name of the web resource. */
    name?: string,
    /** The web resource type as defined by the event source. */
    type?: string,
    /** The unique identifier of the web resource. */
    uid?: string,
    /** The URL pointing towards the source of the web resource. */
    url_string?: string,
}


/**
 * The Device object represents an addressable computer system or host, which is
typically connected to a computer network and participates in the transmission
or processing of data within the computer network.
 */
export interface Device extends Endpoint {
    /** The unique identifier of the cloud autoscale configuration. */
    autoscale_uid?: string,
    /** The time the system was booted. */
    boot_time?: number,
    /** A unique identifier of the device that changes after every reboot. For example,
the value of <code>/proc/sys/kernel/random/boot_id</code> from Linux's procfs. */
    boot_uid?: string,
    /** The time when the device was known to have been created. */
    created_time?: number,
    /** The description of the device, ordinarily as reported by the operating system. */
    desc?: string,
    /** The network domain where the device resides. For example:
<code>work.example.com</code>. */
    domain?: string,
    /** An Embedded Identity Document, is a unique serial number that identifies an
eSIM-enabled device. */
    eid?: string,
    /** The initial discovery time of the device. */
    first_seen_time?: number,
    /** The group names to which the device belongs. For example: <code>["Windows
Laptops", "Engineering"]</code>. */
    groups?: Group[],
    /** The device hostname. */
    hostname?: string,
    /** The name of the hypervisor running on the device. For example,
<code>Xen</code>, <code>VMware</code>, <code>Hyper-V</code>,
<code>VirtualBox</code>, etc. */
    hypervisor?: string,
    /** The Integrated Circuit Card Identification of a mobile device. Typically it is
a unique 18 to 22 digit number that identifies a SIM card. */
    iccid?: string,
    /** The image used as a template to run the virtual machine. */
    image?: Image,
    /** The International Mobile Equipment Identity that is associated with the device. */
    imei?: string,
    /** The International Mobile Equipment Identity values that are associated with the
device. */
    imei_list?: string[],
    /** The device IP address, in either IPv4 or IPv6 format. */
    ip?: string,
    /** Indicates whether the device or resource has a backup enabled, such as an
automated snapshot or a cloud backup. For example, this is indicated by the
<code>cloudBackupEnabled</code> value within JAMF Pro mobile devices or the
registration of an AWS ARN with the AWS Backup service. */
    is_backed_up?: boolean,
    /** The event occurred on a compliant device. */
    is_compliant?: boolean,
    /** The event occurred on a managed device. */
    is_managed?: boolean,
    /** Indicates whether the device has an active mobile account. For example, this is
indicated by the <code>itunesStoreAccountActive</code> value within JAMF Pro
mobile devices. */
    is_mobile_account_active?: boolean,
    /** The event occurred on a personal device. */
    is_personal?: boolean,
    /** The event occurred on a shared device. */
    is_shared?: boolean,
    /** The event occurred on a supervised device. Devices that are supervised are
typically mobile devices managed by a Mobile Device Management solution and are
restricted from specific behaviors such as Apple AirDrop. */
    is_supervised?: boolean,
    /** The event occurred on a trusted device. */
    is_trusted?: boolean,
    /** The most recent discovery time of the device. */
    last_seen_time?: number,
    /** The geographical location of the device. */
    location?: Location,
    /** The Mobile Equipment Identifier. It's a unique number that identifies a Code
Division Multiple Access (CDMA) mobile device. */
    meid?: string,
    /** The model of the device. For example <code>ThinkPad X1 Carbon</code>. */
    model?: string,
    /** The time when the device was last known to have been modified. */
    modified_time?: number,
    /** The alternate device name, ordinarily as assigned by an administrator.
<p><b>Note:</b> The <b>Name</b> could be any other string that helps to
identify the device, such as a phone number; for example
<code>310-555-1234</code>.</p> */
    name?: string,
    /** The physical or virtual network interfaces that are associated with the device,
one for each unique MAC address/IP address/hostname/name
combination.<p><b>Note:</b> The first element of the array is the network
information that pertains to the event.</p> */
    network_interfaces?: NetworkInterface[],
    /** Organization and org unit related to the device. */
    org?: Organization,
    /** The operating system assigned Machine ID. In Windows, this is the value stored
at the registry path:
<code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography\MachineGuid</code>. In
Linux, this is stored in the file: <code>/etc/machine-id</code>. */
    os_machine_uuid?: string,
    /** The region where the virtual machine is located. For example, an AWS Region. */
    region?: string,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: string,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** The subnet mask. */
    subnet?: string,
    /** The device type. For example: <code>unknown</code>, <code>server</code>,
<code>desktop</code>, <code>laptop</code>, <code>tablet</code>,
<code>mobile</code>, <code>virtual</code>, <code>browser</code>, or
<code>other</code>. */
    type?: string,
    /** The device type ID. */
    type_id: string,
    /** The Apple assigned Unique Device Identifier (UDID). For iOS, iPadOS, tvOS,
watchOS and visionOS devices, this is the UDID. For macOS devices, it is the
Provisioning UDID. For example: <code>00008020-008D4548007B4F26</code> */
    udid?: string,
    /** The unique identifier of the device. For example the Windows TargetSID or AWS
EC2 ARN. */
    uid?: string,
    /** An alternate unique identifier of the device if any. For example the
ActiveDirectory DN. */
    uid_alt?: string,
    /** The vendor for the device. For example <code>Dell</code> or
<code>Lenovo</code>. */
    vendor_name?: string,
}


/**
 * The Firewall Rule object represents a specific rule within a firewall policy or
event. It contains information about a rule's configuration, properties, and
associated actions that define how network traffic is handled by the firewall.
 */
export interface FirewallRule extends Rule {
    /** The rule trigger condition for the rule. For example: SQL_INJECTION. */
    condition?: string,
    /** The rule response time duration, usually used for challenge completion time. */
    duration?: number,
    /** The data in a request that rule matched. For example: '["10","and","1"]'. */
    match_details?: string[],
    /** The location of the matched data in the source which resulted in the triggered
firewall rule. For example: HEADER. */
    match_location?: string,
    /** The rate limit for a rate-based rule. */
    rate_limit?: number,
    /** The sensitivity of the firewall rule in the matched event. For example: HIGH. */
    sensitivity?: string,
}


/**
 * The malware scan information object describes characteristics, metadata of a
malware scanning job.
 */
export interface MalwareScanInfo extends Scan {
    /** The timestamp indicating when the scan job completed execution. */
    end_time?: number,
    /** The total number of files analyzed during the scan. */
    num_files?: number,
    /** The total number of files identified as infected with malware during the scan. */
    num_infected?: number,
    /** The total number of storage volumes examined during the malware scan. */
    num_volumes?: number,
    /** The total size in bytes of all files that were scanned. */
    size?: number,
    /** The timestamp indicating when the scan job began execution. */
    start_time?: number,
    /** The number of unique malware detected across all infected files. */
    unique_malware_count?: number,
}


/**
 * The Process object describes a running instance of a launched program.
 */
export interface Process extends ProcessEntity, ContainerProfile {
    /** An array of Process Entities describing the extended parentage of this process
object. Direct parent information should be expressed through the
<code>parent_process</code> attribute. The first array element is the direct
parent of this process object. Subsequent list elements go up the process
parentage hierarchy. That is, the array is sorted from newest to oldest
process. It is recommended to only populate this field for the top-level
process object. */
    ancestry?: ProcessEntity[],
    /** Environment variables associated with the process. */
    environment_variables?: EnvironmentVariable[],
    /** The process file object. */
    file?: File,
    /** The process integrity level, normalized to the caption of the integrity_id
value. In the case of 'Other', it is defined by the event source (Windows
only). */
    integrity?: string,
    /** The normalized identifier of the process integrity level (Windows only). */
    integrity_id?: string,
    /** The lineage of the process, represented by a list of paths for each ancestor
process. For example: <code>['/usr/sbin/sshd', '/usr/bin/bash',
'/usr/bin/whoami']</code>. */
    lineage?: string[],
    /** The list of loaded module names. */
    loaded_modules?: string[],
    /** The parent process of this process object. It is recommended to only populate
this field for the top-level process object, to prevent deep nesting.
Additional ancestry information can be supplied in the <code>ancestry</code>
attribute. */
    parent_process?: Process,
    /** The identifier of the process thread associated with the event, as returned by
the operating system. */
    ptid?: number,
    /** The name of the containment jail (i.e., sandbox). For example, hardened_ps,
high_security_ps, oracle_ps, netsvcs_ps, or default_ps. */
    sandbox?: string,
    /** The user session under which this process is running. */
    session?: Session,
    /** The time when the process was terminated. */
    terminated_time?: number,
    /** The identifier of the thread associated with the event, as returned by the
operating system. */
    tid?: number,
    /** The user under which this process is running. */
    user?: User,
    /** The working directory of a process. */
    working_directory?: string,
    /** An unordered collection of zero or more name/value pairs that represent a
process extended attribute. */
    xattributes?: Object,
}


/**
 * AI-specific attributes for model operations, retrieval systems, and agent
activities. e.g. model_name, total_token_counts etc.
 */
export interface AiOperationProfile {
    /** The AI Model object describes the characteristics of an AI/ML model. Examples
include language models like GPT-4, embedding models like
text-embedding-ada-002, and computer vision models like CLIP. */
    ai_model?: AiModel,
    /** Communication context for AI system interactions including protocols, roles,
clients, and session information for MCP and other AI communication systems. */
    message_context?: MessageContext,
}


/**
 * The attributes that describe information specific to Cloud
services/applications.
 */
export interface CloudProfile {
    /** Describes details about a typical API (Application Programming Interface) call. */
    api?: Api,
    /** Describes details about the Cloud environment where the event or finding was
created. */
    cloud: Cloud,
}


/**
 * The container context for a process.
 */
export interface ContainerProfile {
    /** The information describing an instance of a container. A container is a
prepackaged, portable system image that runs isolated on an existing system
using a container runtime like containerd. */
    container?: Container,
    /** If running under a process namespace (such as in a container), the process
identifier within that process namespace. */
    namespace_pid?: number,
}


/**
 * The Data Classification profile adds attributes to specific resource objects,
allowing users to describe information about classifiers & data classification
results.
 */
export interface DataClassificationProfile {
    /** The Data Classification object includes information about data classification
levels and data category types. */
    data_classification?: DataClassification,
    /** A list of Data Classification objects, that include information about data
classification levels and data category types, identified by a classifier. */
    data_classifications?: DataClassification[],
}


/**
 * This profile defines date/time attributes as defined in RFC-3339. For example
1985-04-12T23:20:50.52Z.
 */
export interface DatetimeProfile {
}


/**
 * The attributes that identify host/device attributes.
 */
export interface HostProfile {
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor?: Actor,
    /** An addressable device, computer system or host. */
    device?: Device,
}


/**
 * The attributes that add incident handling semantics to a Finding.
 */
export interface IncidentProfile {
    /** The details of the user assigned to an Incident. */
    assignee?: User,
    /** The details of the group assigned to an Incident. */
    assignee_group?: Group,
    /** The impact , normalized to the caption of the impact_id value. In the case of
'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the
magnitude of harm that can be expected to result from the consequences of
unauthorized disclosure, modification, destruction, or loss of information or
information system availability. */
    impact_id?: string,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** A determination based on analytics as to whether a potential breach was found. */
    is_suspected_breach?: boolean,
    /** The priority, normalized to the caption of the priority_id value. In the case
of 'Other', it is defined by the event source. */
    priority?: string,
    /** The normalized priority. Priority identifies the relative importance of the
incident or finding. It is a measurement of urgency. */
    priority_id?: string,
    /** A Url link used to access the original incident. */
    src_url?: string,
    /** The linked ticket in the ticketing system. */
    ticket?: Ticket,
    /** The associated ticket(s) in the ticketing system. Each ticket contains details
like ticket ID, status, etc. */
    tickets?: Ticket[],
    /** The verdict assigned to an Incident finding. */
    verdict?: string,
    /** The normalized verdict of an Incident. */
    verdict_id?: string,
}


/**
 * The attributes that describe information specific to load balancers.
 */
export interface LoadBalancerProfile {
    /** The Load Balancer object contains information related to the device that is
distributing incoming traffic to specified destinations. */
    load_balancer?: LoadBalancer,
}


/**
 * The attributes that identify network proxy attributes.
 */
export interface NetworkProxyProfile {
    /** The connection information from the proxy server to the remote server. */
    proxy_connection_info?: NetworkConnectionInfo,
    /** The proxy (server) in a network connection. */
    proxy_endpoint?: NetworkProxy,
    /** The HTTP Request from the proxy server to the remote server. */
    proxy_http_request?: HttpRequest,
    /** The HTTP Response from the remote server to the proxy server. */
    proxy_http_response?: HttpResponse,
    /** The TLS protocol negotiated between the proxy server and the remote server. */
    proxy_tls?: Tls,
    /** The network traffic refers to the amount of data moving across a network, from
proxy to remote server at a given point of time. */
    proxy_traffic?: NetworkTraffic,
}


/**
 * The OSINT (Open Source Intelligence) profile contains one or more indicators
and associated analysis and details, such as registrar (WHOIS) information and
commentary about a hostname, or information about a digital certificate and its
usage within a campaign. This information can be used to further enrich a
detection or finding by providing decisioning support to other analysts and
engineers within the profile itself.
 */
export interface OsintProfile {
    /** The OSINT (Open Source Intelligence) object contains details related to an
indicator such as the indicator itself, related indicators, geolocation,
registrar information, subdomains, analyst commentary, and other contextual
information. This information can be used to further enrich a detection or
finding by providing decisioning support to other analysts and engineers. */
    osint: Osint[],
}


/**
 * The attributes including disposition that represent the outcome of a security
control including but not limited to access control, malware or policy
violation, network proxy, intrusion detection, firewall, or data control.  The
profile is intended to augment activities or findings with an outcome when a
security control has observed or intervened. If the control detected a security
violation, and the <code>disposition_id</code> or <code>action_id</code> is an
alertable outcome or action, the <code>is_alert</code> flag may be set to
<code>true</code>.
 */
export interface SecurityControlProfile {
    /** The normalized caption of <code>action_id</code>. */
    action?: string,
    /** The action taken by a control or other policy-based system leading to an
outcome or disposition. An unknown action may still correspond to a known
disposition. Refer to <code>disposition_id</code> for the outcome of the
action. */
    action_id?: string,
    /** An array of MITRE ATT&CK® objects describing identified tactics, techniques &
sub-techniques. The objects are compatible with MITRE ATLAS™ tactics,
techniques & sub-techniques. */
    attacks?: Attack[],
    /** Provides details about an authorization, such as authorization outcome, and any
associated policies related to the activity/event. */
    authorizations?: Authorization[],
    /** The confidence, normalized to the caption of the confidence_id value. In the
case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the rule that created the
finding. A rule with a low confidence means that the finding scope is wide and
may create finding reports that may not be malicious in nature. */
    confidence_id?: string,
    /** The confidence score as reported by the event source. */
    confidence_score?: number,
    /** The disposition name, normalized to the caption of the disposition_id value. In
the case of 'Other', it is defined by the event source. */
    disposition?: string,
    /** Describes the outcome or action taken by a security control, such as access
control checks, malware detections or various types of policy violations. */
    disposition_id?: string,
    /** The firewall rule that pertains to the control that triggered the event, if
applicable. */
    firewall_rule?: FirewallRule,
    /** Indicates that the event is considered to be an alertable signal. Should be set
to <code>true</code> if <code>disposition_id = Alert</code> among other
dispositions, and/or <code>risk_level_id</code> or <code>severity_id</code> of
the event is elevated. Not all control events will be alertable, for example if
<code>disposition_id = Exonerated</code> or <code>disposition_id =
Allowed</code>. */
    is_alert?: boolean,
    /** A list of Malware objects, describing details about the identified malware. */
    malware?: Malware[],
    /** Describes details about the scan job that identified malware on the target
system. */
    malware_scan_info?: MalwareScanInfo,
    /** The policy that pertains to the control that triggered the event, if
applicable. For example the name of an anti-malware policy or an access control
policy. */
    policy?: Policy,
    /** Describes the risk associated with the finding. */
    risk_details?: string,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: string,
    /** The risk score as reported by the event source. */
    risk_score?: number,
}


/**
 * The Trace Profile extends the OCSF framework to capture and standardize
observability events, specifically targeting trace-level data. This profile
enables integration and normalization of distributed tracing information,
allowing OCSF events to retain essential trace context such as trace IDs, span
relationships, and service dependencies.
 */
export interface TraceProfile {
    /** The trace object contains information about distributed traces which are
critical to observability and describe how requests move through a system,
capturing each step's timing and status. */
    trace?: Trace,
}


/**
 * The base event is a generic and concrete event. It also defines a set of
attributes available in most event classes. As a generic event that does not
belong to any event category, it could be used to log events that are not
otherwise defined by the schema.
 */
export interface BaseEvent extends CloudProfile, DatetimeProfile, HostProfile, OsintProfile, SecurityControlProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The event activity name, as defined by the activity_id. */
    activity_name?: string,
    /** The event category name, as defined by category_uid value. */
    category_name?: string,
    /** The category unique identifier of the event. */
    category_uid: string,
    /** The event class name, as defined by class_uid value. */
    class_name?: string,
    /** The unique identifier of a class. A class describes the attributes available in
an event. */
    class_uid: string,
    /** The number of times that events in the same logical group occurred during the
event <strong>Start Time</strong> to <strong>End Time</strong> period. */
    count?: number,
    /** The event duration or aggregate time, the amount of time the event covers from
<code>start_time</code> to <code>end_time</code> in milliseconds. */
    duration?: number,
    /** The end time of a time period, or the time of the most recent event included in
the aggregate event. */
    end_time?: number,
    /** The additional information from an external data source, which is associated
with the event or a finding. For example add location information for the IP
address in the DNS answers:</p><code>[{"name": "answers.ip", "value":
"92.24.47.250", "type": "location", "data": {"city": "Socotra", "continent":
"Asia", "coordinates": [-25.4153, 17.0743], "country": "YE", "desc":
"Yemen"}}]</code> */
    enrichments?: Enrichment[],
    /** The description of the event/finding, as defined by the source. */
    message?: string,
    /** The metadata associated with the event or a finding. */
    metadata: Metadata,
    /** The observables associated with the event or a finding. */
    observables?: Observable[],
    /** The raw event/finding data as received from the source. */
    raw_data?: string,
    /** The hash, which describes the content of the raw_data field. */
    raw_data_hash?: Fingerprint,
    /** The size of the raw data which was transformed into an OCSF event, in bytes. */
    raw_data_size?: number,
    /** The event/finding severity, normalized to the caption of the
<code>severity_id</code> value. In the case of 'Other', it is defined by the
source. */
    severity?: string,
    /** <p>The normalized identifier of the event/finding severity.</p>The normalized
severity is a measurement the effort and expense required to manage and resolve
an event or incident. Smaller numerical values represent lower impact events,
and larger numerical values represent higher impact events. */
    severity_id: string,
    /** The start time of a time period, or the time of the least recent event included
in the aggregate event. */
    start_time?: number,
    /** The event status, normalized to the caption of the status_id value. In the case
of 'Other', it is defined by the event source. */
    status?: string,
    /** The event status code, as reported by the event source.<br /><br />For example,
in a Windows Failed Authentication event, this would be the value of 'Failure
Code', e.g. 0x18. */
    status_code?: string,
    /** The status detail contains additional information about the event/finding
outcome. */
    status_detail?: string,
    /** The normalized identifier of the event status. */
    status_id?: string,
    /** The normalized event occurrence time or the finding creation time. */
    time: number,
    /** The number of minutes that the reported event <code>time</code> is ahead or
behind UTC, in the range -1,080 to +1,080. */
    timezone_offset?: number,
    /** The event/finding type name, as defined by the type_uid. */
    type_name?: string,
    /** The event/finding type ID. It identifies the event's semantics and structure.
The value is calculated by the logging system as: <code>class_uid * 100 +
activity_id</code>. */
    type_uid: number,
    /** The attributes that are not mapped to the event schema. The names and values of
those attributes are specific to the event source. */
    unmapped?: Object,
}



export interface ApplicationEvent extends BaseEvent {
}


/**
 * API events describe general CRUD (Create, Read, Update, Delete) API activities,
e.g. (AWS Cloudtrail)
 */
export interface ApiActivity extends ApplicationEvent, TraceProfile, AiOperationProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor: Actor,
    /** Describes details about a typical API (Application Programming Interface) call. */
    api: Api,
    /** The network destination endpoint. */
    dst_endpoint?: NetworkEndpoint,
    /** Details about the underlying http request. */
    http_request?: HttpRequest,
    /** Details about the underlying http response. */
    http_response?: HttpResponse,
    /** Details about resources that were affected by the activity/event. */
    resources?: ResourceDetails[],
    /** Details about the source of the activity. */
    src_endpoint: NetworkEndpoint,
}


/**
 * Application Error events describe issues with an applications. The error
message should be put in the event's <code>message</code> attribute. The
<code>metadata.product</code> attribute can be used to capture the originating
application information. The <code>host</code> profile can used to include the
generating device information. This class is helpful for applications that
generate or handle OCSF events and can also be used for errors in upstream
products and services.
 */
export interface ApplicationError extends ApplicationEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The error message as reported by the application. */
    message?: string,
}


/**
 * Application Lifecycle events report installation, removal, start, stop of an
application or service.
 */
export interface ApplicationLifecycle extends ApplicationEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The application that was affected by the lifecycle event.  This also applies to
self-updating application systems. */
    app: Product,
}


/**
 * Datastore events describe general activities (Read, Update, Query, Delete,
etc.) which affect datastores or data within those datastores, e.g. (AWS RDS,
AWS S3).
 */
export interface DatastoreActivity extends ApplicationEvent, AiOperationProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor: Actor,
    /** The database object is used for databases which are typically datastore
services that contain an organized collection of structured and unstructured
data or a types of data. */
    database?: Database,
    /** The data bucket object is a basic container that holds data, typically
organized through the use of data partitions. */
    databucket?: Databucket,
    /** Details about the endpoint hosting the datastore application or service. */
    dst_endpoint?: NetworkEndpoint,
    /** Details about the underlying http request. */
    http_request?: HttpRequest,
    /** Details about the underlying http response. */
    http_response?: HttpResponse,
    /** The query info object holds information related to data access within a
datastore. To access, manipulate, delete, or retrieve data from a datastore, a
database query must be written using a specific syntax. */
    query_info?: QueryInfo,
    /** Details about the source of the activity. */
    src_endpoint: NetworkEndpoint,
    /** The table object represents a table within a structured relational database or
datastore, which contains columns and rows of data that are able to be create,
updated, deleted and queried. */
    table?: Table,
    /** The datastore resource type (e.g. database, datastore, or table). */
    type?: string,
    /** The normalized datastore resource type identifier. */
    type_id?: string,
}


/**
 * File Hosting Activity events report the actions taken by file management
applications, including file sharing servers like Sharepoint and services such
as Box, MS OneDrive, Google Drive, or network file share services.
 */
export interface FileHosting extends ApplicationEvent {
    /** The list of requested access rights. */
    access_list?: string[],
    /** The sum of hexadecimal values of requested access rights. */
    access_mask?: number,
    /** The list of access check results. */
    access_result?: string,
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the target file. */
    actor: Actor,
    /** The network connection information. */
    connection_info?: NetworkConnectionInfo,
    /** The endpoint that received the activity on the target file. */
    dst_endpoint?: NetworkEndpoint,
    /** The share expiration time. */
    expiration_time?: number,
    /** The file that is the target of the activity. */
    file: File,
    /** The resulting file object when the activity was allowed and successful. */
    file_result?: File,
    /** Details about the underlying HTTP request. */
    http_request?: HttpRequest,
    /** Details about the HTTP response, if available. */
    http_response?: HttpResponse,
    /** The share name. */
    share?: string,
    /** The share type, normalized to the caption of the share_type_id value. In the
case of 'Other', it is defined by the event source. */
    share_type?: string,
    /** The normalized identifier of the share type. */
    share_type_id?: string,
    /** The endpoint that performed the activity on the target file. */
    src_endpoint: NetworkEndpoint,
}


/**
 * Scan events report the start, completion, and results of a scan job. The scan
event includes the number of items that were scanned and the number of
detections that were resolved.
 */
export interface ScanActivity extends ApplicationEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The command identifier that is associated with this scan event.  This ID
uniquely identifies the proactive scan command, e.g., if remotely initiated. */
    command_uid?: string,
    /** The duration of the scan */
    duration?: number,
    /** The end time of the scan job. */
    end_time?: number,
    /** The number of detections. */
    num_detections?: number,
    /** The number of files scanned. */
    num_files?: number,
    /** The number of folders scanned. */
    num_folders?: number,
    /** The number of network items scanned. */
    num_network_items?: number,
    /** The number of processes scanned. */
    num_processes?: number,
    /** The number of registry items scanned. */
    num_registry_items?: number,
    /** The number of items that were resolved. */
    num_resolutions?: number,
    /** The number of skipped items. */
    num_skipped_items?: number,
    /** The number of trusted items. */
    num_trusted_items?: number,
    /** The policy associated with this Scan event; required if the scan was initiated
by a policy. */
    policy?: Policy,
    /** The Scan object describes characteristics of the scan job. */
    scan: Scan,
    /** The unique identifier of the schedule associated with a scan job. */
    schedule_uid?: string,
    /** The start time of the scan job. */
    start_time?: number,
    /** The total number of items that were scanned; zero if no items were scanned. */
    total?: number,
}


/**
 * Web Resource Access Activity events describe successful/failed attempts to
access a web resource over HTTP.
 */
export interface WebResourceAccessActivity extends ApplicationEvent, NetworkProxyProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** Details about the underlying HTTP request. */
    http_request: HttpRequest,
    /** Details about the HTTP response, if available. */
    http_response?: HttpResponse,
    /** Details about the proxy service, if available. */
    proxy?: NetworkProxy,
    /** Details about the source endpoint of the request. */
    src_endpoint?: NetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes, if available. */
    tls?: Tls,
    /** Details about the resource that is the target of the activity. */
    web_resources: WebResource[],
}


/**
 * Web Resources Activity events describe actions executed on a set of Web
Resources.
 */
export interface WebResourcesActivity extends ApplicationEvent, NetworkProxyProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** Details about server providing the web resources. */
    dst_endpoint?: NetworkEndpoint,
    /** Details about the underlying HTTP request. */
    http_request?: HttpRequest,
    /** Details about the HTTP response, if available. */
    http_response?: HttpResponse,
    /** Details about the endpoint from which the request originated. */
    src_endpoint?: NetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes, if available. */
    tls?: Tls,
    /** Describes details about web resources that were affected by an activity/event. */
    web_resources: WebResource[],
    /** The results of the activity on web resources. It should contain the new values
of the changed attributes of the web resources. */
    web_resources_result?: WebResource[],
}


/**
 * The Discovery event is a generic event that defines a set of attributes
available in Discovery category events. As a generic event, it could be used to
log events that are not otherwise defined by the Discovery specific event
classes.
 */
export interface DiscoveryEvent extends BaseEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
}


/**
 * Admin Group Query events report information about administrative groups.
 */
export interface AdminGroupQuery extends DiscoveryResult {
    /** The administrative group. */
    group: Group,
    /** The users that belong to the administrative group. */
    users?: User[],
}


/**
 * Cloud Resources Inventory Info events report cloud asset inventory data. This
data can be either logged or proactively collected. For example, use this event
class when creating an inventory of cloud resource information from a
Configuration Management Database (CMDB), Cyber Asset Attack Surface Management
(CAASM), direct public cloud service provider APIs, Software-as-a-Service
(SaaS) APIs, or otherwise.
 */
export interface CloudResourcesInventoryInfo extends DiscoveryEvent {
    /** Cloud service provider or SaaS platform metadata about the cloud resource(s)
that are being discovered by an inventory process. */
    cloud: Cloud,
    /** A cloud-based container image or running container discovered by an inventory
process. */
    container?: Container,
    /** A cloud-based database discovered by an inventory process. */
    database?: Database,
    /** A cloud-based data bucket or other object storage discovered by an inventory
process. */
    databucket?: Databucket,
    /** The Identity Provider that is being discovered by an inventory process, or that
is related to the cloud resource(s) being discovered by an inventory process. */
    idp?: Idp,
    /** The cloud region where the resource is located, e.g.,
<code>us-isof-south-1</code>, <code>eastus2</code>, <code>us-central1</code>,
etc. */
    region?: string,
    /** The cloud resource(s) that are being discovered by an inventory process. Use
this object if there is not a direct object match in the class. */
    resources?: ResourceDetails[],
    /** A cloud-based database table discovered by an inventory process. */
    table?: Table,
}


/**
 * Device Config State events report device configuration data, device
assessments, and/or CIS Benchmark results.
 */
export interface ConfigState extends DiscoveryEvent {
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor?: Actor,
    /** A list of assessments associated with the device. */
    assessments?: Assessment[],
    /** The CIS Benchmark Result object captures results generated from benchmark
evaluations as defined by the Center for Internet Security (<a target='_blank'
href='https://www.cisecurity.org/cis-benchmarks/'>CIS</a>). */
    cis_benchmark_result?: CisBenchmarkResult,
    /** The device that is being discovered by an inventory process. */
    device: Device,
}


/**
 * Device Config State Change events report state changes that impact the security
of the device.
 */
export interface DeviceConfigStateChange extends DiscoveryEvent {
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor?: Actor,
    /** The device that is impacted by the state change. */
    device: Device,
    /** The previous security level of the entity */
    prev_security_level?: string,
    /** The previous security level of the entity */
    prev_security_level_id?: string,
    /** The previous security states of the device. */
    prev_security_states?: SecurityState[],
    /** The current security level of the entity */
    security_level?: string,
    /** The current security level of the entity */
    security_level_id?: string,
    /** The current security states of the device. */
    security_states?: SecurityState[],
    /** The Config Change Stat, normalized to the caption of the state_id value. In the
case of 'Other', it is defined by the source. */
    state?: string,
    /** The Config Change State of the managed entity. */
    state_id?: string,
}


/**
 * Discovery Result events report the results of a discovery request.
 */
export interface DiscoveryResult extends BaseEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The search details associated with the query request. */
    query_info?: QueryInfo,
    /** The result of the query. */
    query_result?: string,
    /** The normalized identifier of the query result. */
    query_result_id: string,
}


/**
 * Data collected directly from devices that represents forensic information
pulled, queried, or discovered from devices that may indicate malicious
activity. It contains a number of child objects, each representing a distinct
evidence domain (network connections, file artifacts, registry entries, etc.).
When mapping raw telemetry data users should select Query Evidence and then the
appropriate child object that best matches the evidence type.
 */
export interface EvidenceInfo extends DiscoveryResult {
    /** An addressable device, computer system or host from which evidence was
collected. */
    device: Device,
    /** The specific resulting evidence information that was queried or discovered
based on the query type. Contains various child objects corresponding to the
query_type_id values. */
    query_evidence: QueryEvidence,
}


/**
 * File Query events report information about files that are present on the
system.
 */
export interface FileQuery extends DiscoveryResult {
    /** The file that is the target of the query. */
    file: File,
}


/**
 * Folder Query events report information about folders that are present on the
system.
 */
export interface FolderQuery extends DiscoveryResult {
    /** The folder that is the target of the query. */
    folder: File,
}


/**
 * Device Inventory Info events report device inventory data that is either logged
or proactively collected. For example, when collecting device information from
a CMDB or running a network sweep of connected devices.
 */
export interface InventoryInfo extends DiscoveryEvent {
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor?: Actor,
    /** The device that is being discovered by an inventory process. */
    device: Device,
}


/**
 * Job Query events report information about scheduled jobs.
 */
export interface JobQuery extends DiscoveryResult {
    /** The job object that pertains to the event. */
    job: Job,
}


/**
 * Kernel Object Query events report information about discovered kernel
resources.
 */
export interface KernelObjectQuery extends DiscoveryResult {
    /** The kernel object that pertains to the event. */
    kernel: Kernel,
}


/**
 * Module Query events report information about loaded modules.
 */
export interface ModuleQuery extends DiscoveryResult {
    /** The module that pertains to the event. */
    module: Module,
    /** The process that loaded the module. */
    process: Process,
}


/**
 * Network Connection Query events report information about active network
connections.
 */
export interface NetworkConnectionQuery extends DiscoveryResult {
    /** The network connection information. */
    connection_info: NetworkConnectionInfo,
    /** The process that owns the socket. */
    process: Process,
    /** The state of the socket, normalized to the caption of the state_id value. In
the case of 'Other', it is defined by the event source. */
    state?: string,
    /** The state of the socket. */
    state_id: string,
}


/**
 * Networks Query events report information about network adapters.
 */
export interface NetworksQuery extends DiscoveryResult {
    /** The physical or virtual network interfaces that are associated with the device,
one for each unique MAC address/IP address/hostname/name
combination.<p><b>Note:</b> The first element of the array is the network
information that pertains to the event.</p> */
    network_interfaces: NetworkInterface[],
}


/**
 * OSINT Inventory Info events report open source intelligence or threat
intelligence inventory data that is either logged or proactively collected. For
example, when collecting OSINT information from Threat Intelligence Platforms
(TIPs) or Extended Detection and Response (XDR) platforms, or collecting data
from OSINT or other generic threat intelligence and enrichment feeds such as
APIs and datastores.
 */
export interface OsintInventoryInfo extends DiscoveryEvent {
    /** The actor describes the process that was the source of the inventory activity.
In the case of OSINT inventory data, that could be a particular process or
script that is run to scrape the OSINT or threat intelligence data. For
example, it could be a Python process that runs to pull data from a MISP or
Shodan API. */
    actor?: Actor,
    /** The OSINT that is being discovered by an inventory process. */
    osint: Osint[],
}


/**
 * Operating System Patch State reports the installation of an OS patch to a
device and any associated knowledgebase articles.
 */
export interface PatchState extends DiscoveryEvent {
    /** An addressable device, computer system or host. */
    device: Device,
    /** A list of KB articles or patches related to an endpoint. A KB Article contains
metadata that describes the patch or an update. */
    kb_article_list?: KbArticle[],
}


/**
 * Peripheral Device Query events report information about peripheral devices.
 */
export interface PeripheralDeviceQuery extends DiscoveryResult {
    /** The peripheral device that triggered the event. */
    peripheral_device: PeripheralDevice,
}


/**
 * Process Query events report information about running processes.
 */
export interface ProcessQuery extends DiscoveryResult {
    /** The process object. */
    process: Process,
}


/**
 * Service Query events report information about running services.
 */
export interface ServiceQuery extends DiscoveryResult {
    /** The service that pertains to the event. */
    service: Service,
}


/**
 * User Session Query events report information about existing user sessions.
 */
export interface SessionQuery extends DiscoveryResult {
    /** The authenticated user or service session. */
    session: Session,
}


/**
 * Software Inventory Info events report device software inventory data that is
either logged or proactively collected. For example, when collecting device
information from a CMDB or running a network sweep of connected devices.
 */
export interface SoftwareInfo extends DiscoveryEvent {
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor?: Actor,
    /** The device that is being discovered by an inventory process. */
    device: Device,
    /** The device software that is being discovered by an inventory process. */
    package?: Package,
    /** Additional product attributes that have been discovered or enriched from a
catalog or other external source. */
    product?: Product,
    /** The Software Bill of Materials (SBOM) of the device software that is being
discovered by an inventory process. */
    sbom?: Sbom,
}


/**
 * Startup Item Query events report information about discovered items, e.g.,
application components that are generally configured to run automatically.
 */
export interface StartupItemQuery extends DiscoveryResult {
    /** The startup item object describes an application component that has associated
startup criteria and configurations. */
    startup_item: StartupItem,
}


/**
 * User Inventory Info events report user inventory data that is either logged or
proactively collected. For example, when collecting user information from
Active Directory entries.
 */
export interface UserInventory extends DiscoveryEvent {
    /** The actor describes the process that was the source of the inventory activity.
In the case of user inventory data, that could be a particular process or
script that is run to scrape the user data. For example, it could be a
powershell process that runs to pull data from the Azure AD graph API. */
    actor?: Actor,
    /** The user that is being discovered by an inventory process. */
    user: User,
}


/**
 * User Query events report user data that have been discovered, queried, polled
or searched. This event differs from User Inventory as it describes the result
of a targeted search by filtering a subset of user attributes.
 */
export interface UserQuery extends DiscoveryResult {
    /** The user that pertains to the event or object. */
    user: User,
}


/**
 * The Application Security Posture Finding event is a notification about any bug,
defect, deficiency, exploit, vulnerability, weakness or any other issue with
software and related systems. Application Security Posture Findings typically
involve reporting on the greater context including compliance, impacted
resources, remediation guidance, specific code defects, and/or vulnerability
metadata. Application Security Posture Findings can be reported by Threat &
Vulnerability Management (TVM) tools, Application Security Posture Management
(ASPM) tools, or other similar tools. Note: if the event producer is a security
control, the <code>security_control</code> profile should be applied and its
<code>attacks</code> information, if present, should be duplicated into the
<code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is
an incident, i.e. requires incident workflow, also apply the
<code>incident</code> profile or aggregate this finding into an <code>Incident
Finding</code>.
 */
export interface ApplicationSecurityPostureFinding extends Finding, IncidentProfile {
    /** An Application describes the details for an inventoried application as reported
by an Application Security tool or other Developer-centric tooling.
Applications can be defined as Kubernetes resources, Containerized resources,
or application hosting-specific cloud sources such as AWS Elastic BeanStalk,
AWS Lightsail, or Azure Logic Apps. */
    application?: ApplicationObject,
    /** Provides compliance context to vulnerabilities and other weaknesses that are
reported as part of an Application Security or Vulnerability Management tool's
built-in compliance framework mapping. */
    compliance?: Compliance,
    /** Describes the recommended remediation steps to address identified
vulnerabilities or weaknesses. */
    remediation?: Remediation,
    /** Describes details about the resource/resources that are affected by the
vulnerability/vulnerabilities. */
    resources?: ResourceDetails[],
    /** This object describes vulnerabilities reported in a security finding. */
    vulnerabilities?: Vulnerability[],
}


/**
 * Compliance Finding events describe results of evaluations performed against
resources, to check compliance with various Industry Frameworks or Security
Standards such as <code>NIST SP 800-53, CIS AWS Foundations Benchmark v1.4.0,
ISO/IEC 27001</code> etc. Note: if the event producer is a security control,
the <code>security_control</code> profile should be applied and its
<code>attacks</code> information, if present, should be duplicated into the
<code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is
an incident, i.e. requires incident workflow, also apply the
<code>incident</code> profile or aggregate this finding into an <code>Incident
Finding</code>.
 */
export interface ComplianceFinding extends Finding {
    /** The compliance object provides context to compliance findings (e.g., a check
against a specific regulatory or best practice framework such as CIS, NIST
etc.) and contains compliance related details. */
    compliance: Compliance,
    /** Describes various evidence artifacts associated with the compliance finding. */
    evidences?: Evidences[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
    /** Describes details about the resource that is the subject of the compliance
check. */
    resource?: ResourceDetails,
    /** Describes details about the resource/resources that are the subject of the
compliance check. */
    resources?: ResourceDetails[],
}


/**
 * A Data Security Finding describes detections or alerts generated by various
data security products such as Data Loss Prevention (DLP), Data Classification,
Secrets Management, Digital Rights Management (DRM), Data Security Posture
Management (DSPM), and similar tools. These detections or alerts can be created
using fingerprinting, statistical analysis, machine learning or other
methodologies. The finding describes the actors and endpoints who accessed or
own the sensitive data, as well as the resources which store the sensitive
data. Note: if the event producer is a security control, the
<code>security_control</code> profile should be applied and its
<code>attacks</code> information, if present, should be duplicated into the
<code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is
an incident, i.e. requires incident workflow, also apply the
<code>incident</code> profile  or aggregate this finding into an <code>Incident
Finding</code>.
 */
export interface DataSecurityFinding extends Finding {
    /** The normalized identifier of the Data Security Finding activity. */
    activity_id: string,
    /** The Data Security finding activity name, as defined by the
<code>activity_id</code>. */
    activity_name?: string,
    /** Describes details about the actor implicated in the data security finding.
Either an actor that owns a particular digital file or information store, or an
actor which accessed classified or sensitive data. */
    actor?: Actor,
    /** The confidence, normalized to the caption of the confidence_id value. In the
case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the rule that created the
finding. A rule with a low confidence means that the finding scope is wide and
may create finding reports that may not be malicious in nature. */
    confidence_id?: string,
    /** The confidence score as reported by the event source. */
    confidence_score?: number,
    /** The Data Security object describes the characteristics, techniques and content
of a Data Loss Prevention (DLP), Data Loss Detection (DLD), Data
Classification, or similar tools' finding, alert, or detection mechanism(s). */
    data_security?: DataSecurity,
    /** Describes the database where classified or sensitive data is stored in, or was
accessed from. Databases are typically datastore services that contain an
organized collection of structured and/or semi-structured data. */
    database?: Database,
    /** Describes the databucket where classified or sensitive data is stored in, or
was accessed from. The data bucket object is a basic container that holds data,
typically organized through the use of data partitions. */
    databucket?: Databucket,
    /** Describes the device where classified or sensitive data is stored in, or was
accessed from. */
    device?: Device,
    /** Describes the endpoint where classified or sensitive data is stored in, or was
accessed from. */
    dst_endpoint?: NetworkEndpoint,
    /** Describes a file that contains classified or sensitive data. */
    file?: File,
    /** The impact , normalized to the caption of the impact_id value. In the case of
'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the
magnitude of harm that can be expected to result from the consequences of
unauthorized disclosure, modification, destruction, or loss of information or
information system availability. */
    impact_id?: string,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** Indicates that the event is considered to be an alertable signal. For example,
an <code>activity_id</code> of 'Create' could constitute an alertable signal
and the value would be <code>true</code>, while 'Close' likely would not and
either omit the attribute or set its value to <code>false</code>.  Note that
other events with the <code>security_control</code> profile may also be deemed
alertable signals and may also carry <code>is_alert = true</code> attributes. */
    is_alert?: boolean,
    /** Describes details about additional resources, where classified or sensitive
data is stored in, or was accessed from. <p> You can populate this object, if
the specific resource type objects available in the class (<code>database,
databucket, table, file</code>) aren't sufficient; OR <br> You can also choose
to duplicate <code>uid, name</code> of the specific resources objects, for a
consistent access to resource uids across all findings. */
    resources?: ResourceDetails[],
    /** Describes the risk associated with the finding. */
    risk_details?: string,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: string,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** Details about the source endpoint where classified or sensitive data was
accessed from. */
    src_endpoint?: NetworkEndpoint,
    /** Describes the table where classified or sensitive data is stored in, or was
accessed from. The table object represents a table within a structured
relational database, warehouse, lake, or similar. */
    table?: Table,
}


/**
 * A Detection Finding describes detections or alerts generated by security
products using correlation engines, detection engines or other methodologies.
Note: if the event producer is a security control, the
<code>security_control</code> profile should be applied and its
<code>attacks</code> information, if present, should be duplicated into the
<code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is
an incident, i.e. requires incident workflow, also apply the
<code>incident</code> profile  or aggregate this finding into an <code>Incident
Finding</code>.
 */
export interface DetectionFinding extends Finding {
    /** Describes baseline information about normal activity patterns, along with any
detected deviations or anomalies that triggered this finding. */
    anomaly_analyses?: AnomalyAnalysis[],
    /** The confidence, normalized to the caption of the confidence_id value. In the
case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the rule that created the
finding. A rule with a low confidence means that the finding scope is wide and
may create finding reports that may not be malicious in nature. */
    confidence_id?: string,
    /** The confidence score as reported by the event source. */
    confidence_score?: number,
    /** Describes various evidence artifacts associated to the activity/activities that
triggered a security detection. */
    evidences?: Evidences[],
    /** The impact , normalized to the caption of the impact_id value. In the case of
'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the
magnitude of harm that can be expected to result from the consequences of
unauthorized disclosure, modification, destruction, or loss of information or
information system availability. */
    impact_id?: string,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** Indicates that the event is considered to be an alertable signal. For example,
an <code>activity_id</code> of 'Create' could constitute an alertable signal
and the value would be <code>true</code>, while 'Close' likely would not and
either omit the attribute or set its value to <code>false</code>.  Note that
other events with the <code>security_control</code> profile may also be deemed
alertable signals and may also carry <code>is_alert = true</code> attributes. */
    is_alert?: boolean,
    /** Describes malware reported in a Detection Finding. */
    malware?: Malware[],
    /** Describes details about malware scan job that triggered this Detection Finding. */
    malware_scan_info?: MalwareScanInfo,
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
    /** Describes details about resources that were the target of the activity that
triggered the finding. */
    resources?: ResourceDetails[],
    /** Describes the risk associated with the finding. */
    risk_details?: string,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: string,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** Describes vulnerabilities reported in a Detection Finding. */
    vulnerabilities?: Vulnerability[],
}


/**
 * The Finding event is a generic event that defines a set of attributes available
in the Findings category.
 */
export interface Finding extends BaseEvent, IncidentProfile {
    /** The normalized identifier of the finding activity. */
    activity_id: string,
    /** The finding activity name, as defined by the <code>activity_id</code>. */
    activity_name?: string,
    /** A user provided comment about the finding. */
    comment?: string,
    /** The confidence, normalized to the caption of the confidence_id value. In the
case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the rule that created the
finding. A rule with a low confidence means that the finding scope is wide and
may create finding reports that may not be malicious in nature. */
    confidence_id?: string,
    /** The confidence score as reported by the event source. */
    confidence_score?: number,
    /** Describes the affected device/host. If applicable, it can be used in
conjunction with <code>Resource(s)</code>. <p> e.g. Specific details about an
AWS EC2 instance, that is affected by the Finding.</p> */
    device?: Device,
    /** The time of the most recent event included in the finding. */
    end_time?: number,
    /** Describes the supporting information about a generated finding. */
    finding_info: FindingInfo,
    /** The time of the least recent event included in the finding. */
    start_time?: number,
    /** The normalized status of the Finding set by the consumer normalized to the
caption of the status_id value. In the case of 'Other', it is defined by the
source. */
    status?: string,
    /** The normalized status identifier of the Finding, set by the consumer. */
    status_id?: string,
    /** The Vendor Attributes object can be used to represent values of attributes
populated by the Vendor/Finding Provider. It can help distinguish between the
vendor-provided values and consumer-updated values, of key attributes like
<code>severity_id</code>.<br>The original finding producer should not populate
this object. It should be populated by consuming systems that support data
mutability. */
    vendor_attributes?: VendorAttributes,
}


/**
 * This finding represents an IAM analysis result, which evaluates IAM policies,
access patterns, and IAM configurations for potential security risks. The
analysis can focus on either an identity (user, role, service account) or a
resource to assess permissions, access patterns, and security posture within
the IAM domain. <br><strong>Note:</strong> Use
<code>permission_analysis_results</code> for identity-centric analysis
(evaluating what an identity can do) and <code>access_analysis_result</code>
for resource-centric analysis (evaluating who can access a resource). These
complement each other for comprehensive IAM security
assessment.<br><strong>Note:</strong> If the Finding is an incident, i.e.
requires incident workflow, also apply the <code>incident</code> profile or
aggregate this finding into an <code>Incident Finding</code>.
 */
export interface IamAnalysisFinding extends Finding {
    /** Describes access relationships and pathways between identities, resources,
focusing on who can access what and through which mechanisms. This evaluates
access levels (read/write/admin), access types (direct, cross-account, public,
federated), and the conditions under which access is granted. Use this for
resource-centric security assessments such as external access discovery, public
exposure analysis, etc. */
    access_analysis_result?: AccessAnalysisResult,
    /** Details about applications, services, or systems that are accessible based on
the IAM analysis. For identity-centric analysis, this represents applications
the identity can access. For resource-centric analysis, this represents
applications that can access the resource. */
    applications?: ApplicationObject[],
    /** Describes usage activity and other metrics of an Identity i.e. AWS IAM User,
GCP IAM Principal, etc. */
    identity_activity_metrics?: IdentityActivityMetrics,
    /** Describes analysis results of permissions, policies directly associated with an
identity (user, role, or service account). This evaluates what permissions an
identity has been granted through attached policies, which privileges are
actively used versus unused, and identifies potential over-privileged access.
Use this for identity-centric security assessments such as privilege audits,
dormant permission discovery, and least-privilege compliance analysis. */
    permission_analysis_results?: PermissionAnalysisResult[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
    /** Details about resources involved in the IAM analysis. For identity-centric
analysis, this represents resources the identity can access. For
resource-centric analysis, this represents the resource being analyzed and
related resources in the access chain. */
    resources?: ResourceDetails[],
    /** Details about the identity (user, role, service account, or other principal)
that is the subject of the IAM analysis. This provides context about the
identity being evaluated for security risks and access patterns. */
    user?: User,
}


/**
 * An Incident Finding reports the creation, update, or closure of security
incidents as a result of detections and/or analytics. <br><strong>Note:
</strong><code>Incident Finding</code> implicitly includes the
<code>incident</code> profile and it should be added to the
<code>metadata.profiles[]</code> array.
 */
export interface IncidentFinding extends BaseEvent, IncidentProfile {
    /** The normalized identifier of the Incident activity. */
    activity_id: string,
    /** The Incident activity name, as defined by the <code>activity_id</code>. */
    activity_name?: string,
    /** The details of the user assigned to an Incident. */
    assignee?: User,
    /** The details of the group assigned to an Incident. */
    assignee_group?: Group,
    /** An array of <a target='_blank' href='https://attack.mitre.org'>MITRE
ATT&CK®</a> objects describing the tactics, techniques & sub-techniques
associated to the Incident. */
    attacks?: Attack[],
    /** Additional user supplied details for updating or closing the incident. */
    comment?: string,
    /** The confidence, normalized to the caption of the confidence_id value. In the
case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the rule that created the
finding. A rule with a low confidence means that the finding scope is wide and
may create finding reports that may not be malicious in nature. */
    confidence_id?: string,
    /** The confidence score as reported by the event source. */
    confidence_score?: number,
    /** The short description of the Incident. */
    desc?: string,
    /** The time of the most recent event included in the incident. */
    end_time?: number,
    /** A list of <code>finding_info</code> objects associated to an incident. */
    finding_info_list: FindingInfo[],
    /** The impact , normalized to the caption of the impact_id value. In the case of
'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the
magnitude of harm that can be expected to result from the consequences of
unauthorized disclosure, modification, destruction, or loss of information or
information system availability. */
    impact_id?: string,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** A determination based on analytics as to whether a potential breach was found. */
    is_suspected_breach?: boolean,
    /** The priority, normalized to the caption of the priority_id value. In the case
of 'Other', it is defined by the event source. */
    priority?: string,
    /** The normalized priority. Priority identifies the relative importance of the
incident or finding. It is a measurement of urgency. */
    priority_id?: string,
    /** A Url link used to access the original incident. */
    src_url?: string,
    /** The time of the least recent event included in the incident. */
    start_time?: number,
    /** The normalized status of the Incident normalized to the caption of the
status_id value. In the case of 'Other', it is defined by the source. */
    status?: string,
    /** The normalized status identifier of the Incident. */
    status_id: string,
    /** The linked ticket in the ticketing system. */
    ticket?: Ticket,
    /** The associated ticket(s) in the ticketing system. Each ticket contains details
like ticket ID, status, etc. */
    tickets?: Ticket[],
    /** The Vendor Attributes object can be used to represent values of attributes
populated by the Vendor/Finding Provider. It can help distinguish between the
vendor-provided values and consumer-updated values, of key attributes like
<code>severity_id</code>.<br>The original finding producer should not populate
this object. It should be populated by consuming systems that support data
mutability. */
    vendor_attributes?: VendorAttributes,
    /** The verdict assigned to an Incident finding. */
    verdict?: string,
    /** The normalized verdict of an Incident. */
    verdict_id?: string,
}


/**
 * Security Finding events describe findings, detections, anomalies, alerts and/or
actions performed by security products
 */
export interface SecurityFinding extends BaseEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The analytic technique used to analyze and derive insights from the data or
information that led to the finding or conclusion. */
    analytic?: Analytic,
    /** An array of <a target='_blank' href='https://attack.mitre.org'>MITRE
ATT&CK®</a> objects describing the tactics, techniques & sub-techniques
associated to the Finding. */
    attacks?: Attack[],
    /** The CIS Critical Security Controls is a list of top 20 actions and practices an
organization’s security team can take on such that cyber attacks or malware,
are minimized and prevented. */
    cis_csc?: CisCsc[],
    /** The compliance object provides context to compliance findings (e.g., a check
against a specific regulatory or best practice framework such as CIS, NIST
etc.) and contains compliance related details. */
    compliance?: Compliance,
    /** The confidence, normalized to the caption of the confidence_id value. In the
case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the rule that created the
finding. A rule with a low confidence means that the finding scope is wide and
may create finding reports that may not be malicious in nature. */
    confidence_id?: string,
    /** The confidence score as reported by the event source. */
    confidence_score?: number,
    /** A list of data sources utilized in generation of the finding. */
    data_sources?: string[],
    /** The data the finding exposes to the analyst. */
    evidence?: string,
    /** The Finding object provides details about a finding/detection generated by a
security tool. */
    finding: FindingObject,
    /** The impact , normalized to the caption of the impact_id value. In the case of
'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the
magnitude of harm that can be expected to result from the consequences of
unauthorized disclosure, modification, destruction, or loss of information or
information system availability. */
    impact_id?: string,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** The <a target='_blank'
href='https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html'>Cyber
Kill Chain®</a> provides a detailed description of each phase and its
associated activities within the broader context of a cyber attack. */
    kill_chain?: KillChainPhase[],
    /** A list of Malware objects, describing details about the identified malware. */
    malware?: Malware[],
    /** The NIST Cybersecurity Framework recommendations for managing the cybersecurity
risk. */
    nist?: string[],
    /** The process object. */
    process?: Process,
    /** Describes details about resources that were affected by the activity/event. */
    resources?: ResourceDetails[],
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: string,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** The normalized state of a security finding. */
    state?: string,
    /** The normalized state identifier of a security finding. */
    state_id: string,
    /** This object describes vulnerabilities reported in a security finding. */
    vulnerabilities?: Vulnerability[],
}


/**
 * The Vulnerability Finding event is a notification about weakness in an
information system, system security procedures, internal controls, or
implementation that could be exploited or triggered by a threat source. Note:
if the event producer is a security control, the <code>security_control</code>
profile should be applied and its <code>attacks</code> information, if present,
should be duplicated into the <code>finding_info</code> object.
<br><strong>Note: </strong>If the Finding is an incident, i.e. requires
incident workflow, also apply the <code>incident</code> profile  or aggregate
this finding into an <code>Incident Finding</code>.
 */
export interface VulnerabilityFinding extends Finding {
    /** Describes details about the resource that is affected by the
vulnerability/vulnerabilities. */
    resource?: ResourceDetails,
    /** Describes details about the resource/resources that are affected by the
vulnerability/vulnerabilities. */
    resources?: ResourceDetails[],
    /** This object describes vulnerabilities reported in a security finding. */
    vulnerabilities: Vulnerability[],
}


/**
 * The Identity & Access Management event is a generic event that defines a set of
attributes available in the access control events. As a generic event, it could
be used to log events that are not otherwise defined by the IAM category.
 */
export interface IamEvent extends BaseEvent {
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor?: Actor,
    /** Details about the underlying HTTP request. */
    http_request?: HttpRequest,
    /** Details about the underlying HTTP response. */
    http_response?: HttpResponse,
    /** Details about the source of the IAM activity. */
    src_endpoint?: NetworkEndpoint,
}


/**
 * Account Change events report when specific user account management tasks are
performed, such as a user/role being created, changed, deleted, renamed,
disabled, enabled, locked out or unlocked.
 */
export interface AccountChange extends IamEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** Details about the authentication factors associated with the MFA Factor
Enable/Disable activities. */
    auth_factors?: AuthFactor[],
    /** Details about the IAM policies associated with the Attach/Detach Policy
activities. */
    policies?: Policy[],
    /** Details about the IAM policy associated to the Attach/Detach Policy activities. */
    policy?: Policy,
    /** The user that was a target of an activity. */
    user: User,
    /** The result of the user account change. It should contain the new values of the
changed attributes. */
    user_result?: User,
}


/**
 * Authentication events report authentication session activities, including user
attempts to log on or log off, regardless of success, as well as other key
stages within the authentication process. These events are typically generated
by authentication services, such as Kerberos, OIDC, or SAML, and may include
information about the user, the authentication method used, and the status of
the authentication attempt.
 */
export interface Authentication extends IamEvent {
    /** The account switch method, normalized to the caption of the
account_switch_type_id value. In the case of 'Other', it is defined by the
event source. */
    account_switch_type?: string,
    /** The normalized identifier of the account switch method. */
    account_switch_type_id?: string,
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** Describes a category of methods used for identity verification in an
authentication attempt. */
    auth_factors?: AuthFactor[],
    /** The authentication protocol as defined by the caption of
<code>auth_protocol_id</code>. In the case of <code>Other</code>, it is defined
by the event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authentication protocol used to create the
user session. */
    auth_protocol_id?: string,
    /** The authentication token, ticket, or assertion, e.g. <code>Kerberos</code>,
<code>OIDC</code>, <code>SAML</code>. */
    authentication_token?: AuthenticationToken,
    /** The certificate associated with the authentication or pre-authentication
(Kerberos). */
    certificate?: Certificate,
    /** The endpoint to which the authentication was targeted. */
    dst_endpoint?: NetworkEndpoint,
    /** Indicates whether the credentials were passed in clear text.<p><b>Note:</b>
True if the credentials were passed in a clear text protocol such as FTP or
TELNET, or if Windows detected that a user's logon password was passed to the
authentication package in clear text.</p> */
    is_cleartext?: boolean,
    /** Indicates whether Multi Factor Authentication was used during authentication. */
    is_mfa?: boolean,
    /** Indicates logon is from a device not seen before or a first time account logon. */
    is_new_logon?: boolean,
    /** The attempted authentication is over a remote connection. */
    is_remote?: boolean,
    /** The trusted process that validated the authentication credentials. */
    logon_process?: Process,
    /** The logon type, normalized to the caption of the logon_type_id value. In the
case of 'Other', it is defined by the event source. */
    logon_type?: string,
    /** The normalized logon type identifier. */
    logon_type_id?: string,
    /** The service or gateway to which the user or process is being authenticated */
    service?: Service,
    /** The authenticated user or service session. */
    session?: Session,
    /** The details about the authentication request. For example, possible details for
Windows logon or logoff events
are:<ul><li>Success</li><ul><li>LOGOFF_USER_INITIATED</li><li>LOGOFF_OTHER</li></ul><li>Failure</li><ul><li>USER_DOES_NOT_EXIST</li><li>INVALID_CREDENTIALS</li><li>ACCOUNT_DISABLED</li><li>ACCOUNT_LOCKED_OUT</li><li>PASSWORD_EXPIRED</li></ul></ul> */
    status_detail?: string,
    /** The subject (user/role or account) to authenticate. */
    user: User,
}


/**
 * Authorize Session events report privileges or groups assigned to a new user
session, usually at login time.
 */
export interface AuthorizeSession extends IamEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The Endpoint for which the user session was targeted. */
    dst_endpoint?: NetworkEndpoint,
    /** Group that was assigned to the new user session. */
    group?: Group,
    /** The list of sensitive privileges, assigned to the new user session. */
    privileges?: string[],
    /** The user session with the assigned privileges. */
    session?: Session,
    /** The user to which new privileges were assigned. */
    user: User,
}


/**
 * Entity Management events report activity by a managed client, a micro service,
or a user at a management console. The activity can be a create, read, update,
and delete operation on a managed entity.
 */
export interface EntityManagement extends IamEvent {
    /** The list of requested access rights. */
    access_list?: string[],
    /** The access mask in a platform-native format. */
    access_mask?: number,
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The user provided comment about why the entity was changed. */
    comment?: string,
    /** The managed entity that is being acted upon. */
    entity: ManagedEntity,
    /** The updated managed entity. */
    entity_result?: ManagedEntity,
}


/**
 * Group Management events report management updates to a group, including updates
to membership and permissions.
 */
export interface GroupManagement extends IamEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** Group that was the target of the event. */
    group: Group,
    /** A list of privileges assigned to the group. */
    privileges?: string[],
    /** Resource that the privileges give access to. */
    resource?: ResourceDetails,
    /** A subgroup that was added to or removed from the group. */
    subgroup?: Group,
    /** A user that was added to or removed from the group. */
    user?: User,
}


/**
 * User Access Management events report management updates to a user's privileges.
 */
export interface UserAccess extends IamEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** List of privileges assigned to a user. */
    privileges: string[],
    /** Resource that the privileges give access to. */
    resource?: ResourceDetails,
    /** Resources that the privileges give access to. */
    resources?: ResourceDetails[],
    /** User to which privileges were assigned. */
    user: User,
}


/**
 * Network event is a generic event that defines a set of attributes available in
the Network category.
 */
export interface NetworkEvent extends BaseEvent, NetworkProxyProfile, LoadBalancerProfile {
    /** The network application name identified by tools such as NBAR or App ID (e.g.,
youtube, facebook, webex). This represents a specific network application that
uses standard protocols (such as https or quic) to deliver its service. */
    app_name?: string,
    /** The application-layer (Layer 7) protocol name identified by deep packet inspection or packet parsing (e.g., <code>https</code>, <code>quic</code>, <code>ssh</code>, <code>dns</code>), expressed as an IANA-registered service name from the IANA Service Name and Transport Protocol Port Number Registry.

<p><b>Note:</b> Port numbers alone are not always a reliable indicator of the actual application protocol in use.</p> */
    app_protocol_name?: string,
    /** The network connection information. */
    connection_info?: NetworkConnectionInfo,
    /** The cumulative (running total) network traffic aggregated from the start of a
flow or session. Use when reporting: (1) total accumulated bytes/packets since
flow initiation, (2) combined aggregation models where both incremental deltas
and running totals are reported together (populate both <code>traffic</code>
for the delta and this attribute for the cumulative total), or (3) final
summary metrics when a long-lived connection closes. This represents the sum of
all activity from flow start to the current observation, not a delta or
point-in-time value. */
    cumulative_traffic?: NetworkTraffic,
    /** The responder (server) in a network connection. */
    dst_endpoint?: NetworkEndpoint,
    /** A list of the JA4+ network fingerprints. */
    ja4_fingerprint_list?: Ja4Fingerprint[],
    /** The network endpoint that observes or inspects network traffic as a third-party
system, used when the observer is neither the source nor the destination of the
communication (when <code>observation_point_id</code> = 3). Examples include
network taps, span ports, inline security devices, or packet capture systems
that monitor traffic between other endpoints. */
    network_observation_point?: NetworkEndpoint,
    /** Indicates whether the source network endpoint, destination network endpoint, or
neither served as the observation point for the activity. The value is
normalized to the caption of the <code>observation_point_id</code>. */
    observation_point?: string,
    /** The normalized identifier of the observation point. The observation point
identifier indicates whether the source network endpoint, destination network
endpoint, or neither served as the observation point for the activity. */
    observation_point_id?: string,
    /** The list of packet objects describing captured network packets. */
    packet_list?: Packet[],
    /** The proxy (server) in a network connection. */
    proxy?: NetworkProxy,
    /** The initiator (client) of the network connection. */
    src_endpoint?: NetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes. */
    tls?: Tls,
    /** The network traffic for this observation period. Use when reporting: (1) delta
values (bytes/packets transferred since the last observation), (2)
instantaneous measurements at a specific point in time, or (3) standalone
single-event metrics. This attribute represents a point-in-time measurement or
incremental change, not a running total. For accumulated totals across multiple
observations or the lifetime of a flow, use <code>cumulative_traffic</code>
instead. */
    traffic?: NetworkTraffic,
}


/**
 * DHCP Activity events report MAC to IP assignment via DHCP from a client or
server.
 */
export interface DhcpActivity extends NetworkEvent, CloudProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The responder (server) of the DHCP connection. */
    dst_endpoint?: NetworkEndpoint,
    /** Indicates whether this is a lease/session renewal event. */
    is_renewal?: boolean,
    /** This represents the length of the DHCP lease in seconds. This is present in
DHCP Ack events. */
    lease_dur?: number,
    /** The network relay that is associated with the event. */
    relay?: NetworkInterface,
    /** The initiator (client) of the DHCP connection. */
    src_endpoint?: NetworkEndpoint,
    /** The unique identifier of the transaction. This is typically a random number
generated from the client to associate a dhcp request/response pair. */
    transaction_uid?: string,
}


/**
 * DNS Activity events report DNS queries and answers as seen on the network.
 */
export interface DnsActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The Domain Name System (DNS) answers. */
    answers?: DnsAnswer[],
    /** The network connection information. */
    connection_info?: NetworkConnectionInfo,
    /** The responder (server) in a network connection. */
    dst_endpoint?: NetworkEndpoint,
    /** The Domain Name System (DNS) query. */
    query?: DnsQuery,
    /** The Domain Name System (DNS) query time. */
    query_time?: number,
    /** The DNS server response code, normalized to the caption of the rcode_id value.
In the case of 'Other', it is defined by the event source. */
    rcode?: string,
    /** The normalized identifier of the DNS server response code. See <a
target='_blank'
href='https://datatracker.ietf.org/doc/html/rfc6895'>RFC-6895</a>. */
    rcode_id?: string,
    /** The Domain Name System (DNS) response time. */
    response_time?: number,
    /** The network traffic for this observation period. Use when reporting: (1) delta
values (bytes/packets transferred since the last observation), (2)
instantaneous measurements at a specific point in time, or (3) standalone
single-event metrics. This attribute represents a point-in-time measurement or
incremental change, not a running total. For accumulated totals across multiple
observations or the lifetime of a flow, use <code>cumulative_traffic</code>
instead. */
    traffic?: NetworkTraffic,
}


/**
 * Email Activity events report SMTP protocol and email activities including those
with embedded URLs and files. See the <code>Email</code> object for details.
 */
export interface EmailActivity extends BaseEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The attempt number for attempting to deliver the email. */
    attempt?: number,
    /** The initial connection response that a messaging server receives after it
connects to an email server. */
    banner?: string,
    /** The command issued by the initiator (client), such as SMTP HELO or EHLO. */
    command?: string,
    /** The direction of the email, as defined by the <code>direction_id</code> value. */
    direction?: string,
    /** <p>The direction of the email relative to the scanning host or
organization.</p>Email scanned at an internet gateway might be characterized as
inbound to the organization from the Internet, outbound from the organization
to the Internet, or internal within the organization. Email scanned at a
workstation might be characterized as inbound to, or outbound from the
workstation. */
    direction_id: string,
    /** The responder (server) receiving the email. */
    dst_endpoint?: NetworkEndpoint,
    /** The email object. */
    email: Email,
    /** The SPF, DKIM and DMARC attributes of an email. */
    email_auth?: EmailAuth,
    /** The sender address from the transmission envelope. This reflects the actual
sending party and may differ from the 'From' header in the message. */
    from_?: string,
    /** The identifier that tracks a message that travels through multiple points of a
messaging service. */
    message_trace_uid?: string,
    /** The Protocol Name specifies the email communication protocol, such as SMTP,
IMAP, or POP3. */
    protocol_name?: string,
    /** The value of the SMTP HELO or EHLO command sent by the initiator (client). */
    smtp_hello?: string,
    /** The initiator (client) sending the email. */
    src_endpoint?: NetworkEndpoint,
    /** The recipient address from the transmission envelope. This may differ from the
'To' header and represents where the message was actually delivered. */
    to?: string[],
}


/**
 * Email File Activity events report files within emails.
 */
export interface EmailFileActivity extends BaseEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The unique identifier of the email, used to correlate related email alert and
activity events. */
    email_uid: string,
    /** The email file attachment. */
    file: File,
}


/**
 * Email URL Activity events report URLs within an email.
 */
export interface EmailUrlActivity extends BaseEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The unique identifier of the email, used to correlate related email alert and
activity events. */
    email_uid: string,
    /** The URL included in the email content. */
    url: Url,
}


/**
 * File Transfer Protocol (FTP) Activity events report file transfers between a
server and a client as seen on the network.
 */
export interface FtpActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The list of return codes to the FTP command. */
    codes?: number[],
    /** The FTP command. */
    command?: string,
    /** The list of responses to the FTP command. */
    command_responses?: string[],
    /** The file that is the target of the FTP activity. */
    file?: File,
    /** The name of the data affiliated with the command. */
    name?: string,
    /** The dynamic port established for impending data transfers. */
    port?: number,
    /** The type of FTP network connection (e.g. active, passive). */
    type?: string,
}


/**
 * HTTP Activity events report HTTP connection and traffic information.
 */
export interface HttpActivity extends NetworkEvent, TraceProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The file that is the target of the HTTP activity. */
    file?: File,
    /** The cookies object describes details about HTTP cookies */
    http_cookies?: HttpCookie[],
    /** The HTTP Request Object documents attributes of a request made to a web server. */
    http_request?: HttpRequest,
    /** The HTTP Response from a web server to a requester. */
    http_response?: HttpResponse,
    /** The Hypertext Transfer Protocol (HTTP) <a target='_blank'
href='https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml'>status
code</a> returned to the client. */
    http_status?: number,
}


/**
 * Network Activity events report network connection and traffic activity.
 */
export interface NetworkActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The destination endpoint of the network activity — typically the responder. In
bi-flow or asymmetric flow scenarios, this endpoint may represent the true
initiator of the original communication. Use <code>initiator_id</code> to
determine which endpoint actually initiated the communication. */
    dst_endpoint?: NetworkEndpoint,
    /** The endpoint that initiated the network communication, normalized to the
caption of <code>initiator_id</code>. In the case of <code>Other</code>, it is
defined by the event source. */
    initiator?: string,
    /** The normalized identifier of the endpoint that initiated the network
communication. Use this field to disambiguate source and destination roles in
bi-directional or asymmetric flow scenarios. */
    initiator_id?: string,
    /** <code>true</code> denotes that <code>src_endpoint</code> and
<code>dst_endpoint</code> correctly identify the initiator and responder
respectively. <code>false</code> denotes that the event source has arbitrarily
assigned one peer to <code>src_endpoint</code> and the other to
<code>dst_endpoint</code>, in other words that initiator and responder are not
being asserted. This can occur, for example, when the event source is a network
appliance that has not observed the initiation of a given connection. In the
absence of this attribute, interpretation of the initiator and responder is
implementation-specific. */
    is_src_dst_assignment_known?: boolean,
    /** The source endpoint of the network activity — typically the initiator. In
bi-flow or asymmetric flow scenarios, this endpoint may represent the response
side of communication originally initiated by the destination. Use
<code>initiator_id</code> to determine which endpoint actually initiated the
communication. */
    src_endpoint?: NetworkEndpoint,
    /** The URL details relevant to the network traffic. */
    url?: Url,
}


/**
 * Network File Activity events report file activities traversing the network,
including file storage services such as Box, MS OneDrive, or Google Drive.
 */
export interface NetworkFileActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the target file. */
    actor: Actor,
    /** The network connection information. */
    connection_info?: NetworkConnectionInfo,
    /** The endpoint that received the activity on the target file. */
    dst_endpoint?: NetworkEndpoint,
    /** The share expiration time. */
    expiration_time?: number,
    /** The file that is the target of the activity. */
    file: File,
    /** The endpoint that performed the activity on the target file. */
    src_endpoint: NetworkEndpoint,
}


/**
 * The Network Time Protocol (NTP) Activity events report instances of remote
clients synchronizing their clocks with an NTP server, as observed on the
network.
 */
export interface NtpActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The total round-trip delay to the reference clock in milliseconds. */
    delay?: number,
    /** The dispersion in the NTP protocol is the estimated time error or uncertainty
relative to the reference clock in milliseconds. */
    dispersion?: number,
    /** The NTP precision quantifies a clock's accuracy and stability in log2 seconds,
as defined in RFC-5905. */
    precision?: number,
    /** The stratum level of the NTP server's time source, normalized to the caption of
the stratum_id value. */
    stratum?: string,
    /** The normalized identifier of the stratum level, as defined in <a
target='_blank'
href='https://www.rfc-editor.org/rfc/rfc5905.html'>RFC-5905</a>. */
    stratum_id?: string,
    /** The version number of the NTP protocol. */
    version: string,
}


/**
 * Remote Desktop Protocol (RDP) Activity events report post-authentication remote
client connections between clients and servers over the network.
 */
export interface RdpActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** A list of RDP capabilities. */
    capabilities?: string[],
    /** The list of observed certificates in an RDP TLS connection. */
    certificate_chain?: string[],
    /** The remote desktop connection details, either connection-based or
connectionless. */
    connection_info?: NetworkConnectionInfo,
    /** The device instigating the RDP connection. */
    device?: Device,
    /** The file that is the target of the RDP activity. */
    file?: File,
    /** The client identifier cookie during client/server exchange. */
    identifier_cookie?: string,
    /** The keyboard detailed information. */
    keyboard_info?: KeyboardInfo,
    /** The Remote Desktop Protocol version. */
    protocol_ver?: string,
    /** The remote display affiliated with the event */
    remote_display?: Display,
    /** The client request in an RDP network connection. */
    request?: Request,
    /** The server response in an RDP network connection. */
    response?: Response,
    /** The target user associated with the RDP activity. */
    user?: User,
}


/**
 * Server Message Block (SMB) Protocol Activity events report client/server
connections sharing resources within the network.
 */
export interface SmbActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The list of SMB dialects that the client speaks. */
    client_dialects?: string[],
    /** The command name (e.g. SMB2_COMMAND_CREATE, SMB1_COMMAND_WRITE_ANDX). */
    command?: string,
    /** The DCE/RPC object describes the remote procedure call system for distributed
computing environments. */
    dce_rpc?: DceRpc,
    /** The negotiated protocol dialect. */
    dialect?: string,
    /** The file that is the target of the SMB activity. */
    file?: File,
    /** Indicates how the file was opened (e.g. normal, delete on close). */
    open_type?: string,
    /** The server response in an SMB network connection. */
    response?: Response,
    /** The SMB share name. */
    share?: string,
    /** The SMB share type, normalized to the caption of the share_type_id value. In
the case of 'Other', it is defined by the event source. */
    share_type?: string,
    /** The normalized identifier of the SMB share type. */
    share_type_id?: string,
    /** The tree id is a unique SMB identifier which represents an open connection to a
share. */
    tree_uid?: string,
}


/**
 * SSH Activity events report remote client connections to a server using the
Secure Shell (SSH) Protocol.
 */
export interface SshActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The SSH authentication type, normalized to the caption of 'auth_type_id'. In
the case of 'Other', it is defined by the event source. */
    auth_type?: string,
    /** The normalized identifier of the SSH authentication type. */
    auth_type_id?: string,
    /** The Client HASSH fingerprinting object. */
    client_hassh?: Hassh,
    /** The file that is the target of the SSH activity. */
    file?: File,
    /** The Secure Shell Protocol version. */
    protocol_ver?: string,
    /** The Server HASSH fingerprinting object. */
    server_hassh?: Hassh,
}


/**
 * Tunnel Activity events report secure tunnel establishment (such as VPN),
teardowns, renewals, and other network tunnel specific actions.
 */
export interface TunnelActivity extends NetworkEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The tunnel connection information. */
    connection_info?: NetworkConnectionInfo,
    /** The device that reported the event. */
    device?: Device,
    /** The server responding to the tunnel connection. */
    dst_endpoint?: NetworkEndpoint,
    /** The networking protocol associated with the tunnel. E.g. <code>IPSec</code>,
<code>SSL</code>, <code>GRE</code>. */
    protocol_name?: string,
    /** The session associated with the tunnel. */
    session?: Session,
    /** The initiator (client) of the tunnel connection. */
    src_endpoint?: NetworkEndpoint,
    /** Traffic refers to the amount of data moving across the tunnel at a given point
of time. Ex: <code>bytes_in</code> and <code>bytes_out</code>. */
    traffic?: NetworkTraffic,
    /** The information about the virtual tunnel interface, e.g. <code>utun0</code>.
This is usually associated with the private (rfc-1918) ip of the tunnel. */
    tunnel_interface?: NetworkInterface,
    /** The type of tunnel configuration, normalized to the caption of the
<code>tunnel_type_id</code> value, indicating the scope of traffic routed
through the connection. Example: <code>Split Tunnel</code> or <code>Full
Tunnel</code>. */
    tunnel_type?: string,
    /** The normalized identifier for the type of tunnel configuration, indicating the
scope of traffic routed through the connection. Example: <code>1 (Split
Tunnel)</code> or <code>2 (Full Tunnel)</code>. */
    tunnel_type_id?: string,
    /** The user associated with the tunnel activity. */
    user?: User,
}


/**
 * File Remediation Activity events report on attempts at remediating files. It
follows the MITRE countermeasures defined by the D3FEND™ <a target='_blank'
href='https://d3fend.mitre.org/'>Matrix</a>. Sub-techniques will include File,
such as File Removal or Restore File.
 */
export interface FileRemediationActivity extends RemediationActivity {
    /** The file that pertains to the remediation event. */
    file: File,
}


/**
 * Network Remediation Activity events report on attempts at remediating computer
networks. It follows the MITRE countermeasures defined by the D3FEND™ <a
target='_blank' href='https://d3fend.mitre.org/'>Matrix</a>. Techniques and
Sub-techniques will include Network, such as Network Isolation or Network
Traffic Filtering.
 */
export interface NetworkRemediationActivity extends RemediationActivity {
    /** The network connection that pertains to the remediation event. */
    connection_info: NetworkConnectionInfo,
}


/**
 * Process Remediation Activity events report on attempts at remediating
processes. It follows the MITRE countermeasures defined by the D3FEND™ <a
target='_blank' href='https://d3fend.mitre.org/'>Matrix</a>. Sub-techniques
will include Process, such as Process Termination or Kernel-based Process
Isolation.
 */
export interface ProcessRemediationActivity extends RemediationActivity {
    /** The process that pertains to the remediation event. */
    process: Process,
}


/**
 * Remediation Activity events report on attempts at remediating a compromised
device or computer network. It follows the MITRE countermeasures defined by the
D3FEND™ <a target='_blank' href='https://d3fend.mitre.org/'>Matrix</a>.
 */
export interface RemediationActivity extends BaseEvent {
    /** Matches the MITRE D3FEND™ Tactic. Note: the Model and Detect Tactics are not
supported as remediations by the OCSF Remediation event class. */
    activity_id: string,
    /** The unique identifier of the remediation command that pertains to this event. */
    command_uid: string,
    /** The MITRE D3FEND™ Matrix Countermeasures associated with a remediation. */
    countermeasures?: D3fend[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: Remediation,
    /** The remediation scan that pertains to this event. */
    scan?: Scan,
    /** The normalized identifier of the event status. */
    status_id?: string,
}


/**
 * The System Activity event is a generic event that defines a set of attributes
available in the system activity events. As a generic event, it could be used
to log events that are not otherwise defined by the System Activity category.
 */
export interface SystemEvent extends BaseEvent {
    /** The actor object describes details about the user/role/process that was the
source of the activity. Note that this is not the threat actor of a campaign
but may be part of a campaign. */
    actor: Actor,
    /** An addressable device, computer system or host. */
    device: Device,
}


/**
 * Event Log Activity events report actions pertaining to the system's event
logging service(s), such as disabling logging or clearing the log data.
 */
export interface EventLogActvity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity. */
    actor: Actor,
    /** The device that reported the event. */
    device: Device,
    /** The <p style='display:inline;color:red'>targeted</p> endpoint for the event log
activity. */
    dst_endpoint?: NetworkEndpoint,
    /** The file <p style='display:inline;color:red'>targeted by</p> the activity.
Example: <code>/var/log/audit.log</code> */
    file?: File,
    /** The name of the event log <p style='display:inline;color:red'>targeted by</p>
the activity. Example: Windows <code>Security</code>. */
    log_name?: string,
    /** The logging provider or logging service <p
style='display:inline;color:red'>targeted by</p> the activity.<br />Example:
<code>Microsoft-Windows-Security-Auditing</code>, <code>Auditd</code>, or
<code>Syslog</code>. */
    log_provider?: string,
    /** The log type, normalized to the caption of the <code>log_type_id</code> value.
In the case of 'Other', it is defined by the event source. */
    log_type?: string,
    /** The normalized log type identifier. */
    log_type_id?: string,
    /** The source endpoint for the event log activity. */
    src_endpoint?: NetworkEndpoint,
    /** The event status code, as reported by the event source.<br />Example:
<code>0</code>, <code>8</code>, or <code>21</code> for <a target='_blank'
href='https://learn.microsoft.com/en-us/previous-versions/windows/desktop/eventlogprov/cleareventlog-method-in-class-win32-nteventlogfile'>Windows
ClearEventLog</a>. */
    status_code?: string,
    /** The status detail contains additional information about the event outcome.<br
/>Example: <code>Success</code>, <code>Privilege Missing</code>, or
<code>Invalid Parameter</code> for <a target='_blank'
href='https://learn.microsoft.com/en-us/previous-versions/windows/desktop/eventlogprov/cleareventlog-method-in-class-win32-nteventlogfile'>Windows
ClearEventLog</a>. */
    status_detail?: string,
}


/**
 * File System Activity events report when a process performs an action on a file
or folder.
 */
export interface FileActivity extends SystemEvent {
    /** The access mask in a platform-native format. */
    access_mask?: number,
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the <code>file</code> object */
    actor: Actor,
    /** <p>The name or relative pathname of a sub-component of the data object, if
applicable. </p>For example: <code>attachment.doc</code>,
<code>attachment.zip/bad.doc</code>, or
<code>part.mime/part.cab/part.uue/part.doc</code>. */
    component?: string,
    /** The network connection identifier. */
    connection_uid?: string,
    /** The original Windows mask that is required to create the object. */
    create_mask?: string,
    /** The file that is the target of the activity. */
    file: File,
    /** File content differences used for change detection. For example, a common use
case is to identify itemized changes within INI or configuration/property
setting values. */
    file_diff?: string,
    /** The resulting file object when the activity was allowed and successful. */
    file_result?: File,
}


/**
 * Kernel Activity events report when an process creates, reads, or deletes a
kernel resource.
 */
export interface KernelActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The target kernel resource. */
    kernel: Kernel,
}


/**
 * Kernel Extension events report when a driver/extension is loaded or unloaded
into the kernel
 */
export interface KernelExtensionActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor process that loaded or unloaded the driver/extension. */
    actor: Actor,
    /** The driver that was loaded/unloaded into the kernel */
    driver: KernelDriver,
}


/**
 * Memory Activity events report when a process has memory allocated,
read/modified, or other manipulation activities - such as a buffer overflow or
turning off data execution protection (DEP).
 */
export interface MemoryActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The permissions that were granted to access memory. */
    actual_permissions?: number,
    /** The memory address that was access or requested. */
    base_address?: string,
    /** The process that had memory allocated, read/written, or had other manipulation
activities performed on it. */
    process: Process,
    /** The permissions mask that was requested to access memory. */
    requested_permissions?: number,
    /** The memory size that was access or requested. */
    size?: number,
}


/**
 * Module Activity events report when an endpoint process acts on a
<code>module</code>.
 */
export interface ModuleActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the target <code>module</code>. For
example, the process that loaded a module into memory. */
    actor: Actor,
    /** The module that was loaded, unloaded, or invoked. */
    module: Module,
}


/**
 * Peripheral Activity events log a system's interactions with external,
connectable, and detachable hardware. These events provide visibility into the
external devices connected to and used by a system.
 */
export interface PeripheralActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The peripheral device that is the subject of the activity. */
    peripheral_device: PeripheralDevice,
}


/**
 * Process Activity events report when a process launches, injects, opens or
terminates another process, successful or otherwise.
 */
export interface ProcessActivity extends SystemEvent, AiOperationProfile {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the target <code>process</code>. For
example, the process that started a new process or injected code into another
process. */
    actor: Actor,
    /** The permissions that were granted to the process in a platform-native format. */
    actual_permissions?: number,
    /** The exit code reported by a process when it terminates. The convention is that
zero indicates success and any non-zero exit code indicates that some error
occurred. */
    exit_code?: number,
    /** The process injection method, normalized to the caption of the
injection_type_id value. In the case of 'Other', it is defined by the event
source. */
    injection_type?: string,
    /** The normalized identifier of the process injection method. */
    injection_type_id?: string,
    /** The specific type of <code>Launch</code> activity, normalized to the caption of
the <code>launch_type_id</code> value. In the case of <code>Other</code> it is
defined by the event source. */
    launch_type?: string,
    /** The normalized identifier for the specific type of <code>Launch</code>
activity. */
    launch_type_id?: string,
    /** The module that was injected by the actor process. */
    module?: Module,
    /** The process that was launched, injected into, opened, or terminated. */
    process: Process,
    /** The permissions mask that was requested by the process. */
    requested_permissions?: number,
}


/**
 * Scheduled Job Activity events report activities related to scheduled jobs or
tasks.
 */
export interface ScheduledJobActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the <code>job</code> object. */
    actor: Actor,
    /** The job object that pertains to the event. */
    job: Job,
}


/**
 * Script Activity events report when a process executes a script.
 */
export interface ScriptActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The script that was the target of the activity. */
    script: Script,
}


/**
 * The Unmanned Systems event is a generic event that defines a set of attributes
available in the Unmanned Systems category.
 */
export interface UnmannedSystemsEvent extends BaseEvent {
    /** The network connection information. */
    connection_info?: NetworkConnectionInfo,
    /** The destination network endpoint of the Unmanned Aerial System (UAS), Counter
Unmanned Aerial System (CUAS) platform, or other unmanned systems monitoring
and/or sensing infrastructure. */
    dst_endpoint: NetworkEndpoint,
    /** The proxy (server) in a network connection. */
    proxy_endpoint?: NetworkProxy,
    /** The source network endpoint of the Unmanned Aerial System (UAS), Counter
Unmanned Aerial System (CUAS) platform, or other unmanned systems monitoring
and/or sensing infrastructure. */
    src_endpoint?: NetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes. */
    tls?: Tls,
    /** The network traffic refers to the amount of data moving across a network at a
given point of time. Intended to be used alongside Network Connection. */
    traffic?: NetworkTraffic,
}


/**
 * Airborne Broadcast Activity events report the activity of any aircraft or
unmanned system as reported and tracked by Automatic Dependent Surveillance -
Broadcast (ADS-B) receivers. Based on the ADS-B standards described in <a
target='_blank'
href='https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91#91.225'>Code
of Federal Regulations (CFR) Title 14 Chapter I Subchapter F Part 91</a> and in
other general Federal Aviation Administration (FAA) supplemental orders and
guidance described <a target='_blank'
href='https://www.faa.gov/about/office_org/headquarters_offices/avs/offices/afx/afs/afs400/afs410/ads-b'>here</a>.
 */
export interface AirborneBroadcastActivity extends UnmannedSystemsEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The Aircraft object represents any aircraft or otherwise airborne asset such as
an unmanned system, airplane, balloon, spacecraft, or otherwise. The Aircraft
object is intended to normalized data captured or otherwise logged from active
radar, passive radar, multi-spectral systems, or the Automatic Dependant
Broadcast - Surveillance (ADS-B), and/or Mode S systems. */
    aircraft?: Aircraft,
    /** The destination network endpoint for the ADS-B system, if telemetry is being
remotely broadcasted. */
    dst_endpoint: NetworkEndpoint,
    /** The specific protocol associated with the ADS-B system. E.g. <code>ADS-B
UAT</code> or <code>ADS-B ES</code>. */
    protocol_name?: string,
    /** Recent average RSSI (signal power) measured in dbFS. This value will always be
negative, e.g., <code>-87.13</code>. */
    rssi?: number,
    /** The source network endpoint for the ADS-B system. */
    src_endpoint?: NetworkEndpoint,
    /** Traffic refers to the amount of data transmitted from a ADS-B remote monitoring
system at a given point of time. Ex: <code>bytes_in</code> and
<code>bytes_out</code>. */
    traffic?: NetworkTraffic,
    /** The Unmanned Aerial System object describes the characteristics, Position
Location Information (PLI), and other metadata of Unmanned Aerial Systems (UAS)
and other unmanned and drone systems used in Remote ID. Remote ID is defined in
the Standard Specification for Remote ID and Tracking (ASTM Designation:
F3411-22a) <a target='_blank'
href='https://cdn.standards.iteh.ai/samples/112830/71297057ac42432880a203654f213709/ASTM-F3411-22a.pdf'>ASTM
F3411-22a</a>. */
    unmanned_aerial_system: UnmannedAerialSystem,
    /** The UAS Operating Area object describes details about a precise area of
operations for a UAS flight or mission. */
    unmanned_system_operating_area?: UnmannedSystemOperatingArea,
    /** The human or machine operator of an Unmanned System. */
    unmanned_system_operator: User,
}


/**
 * Drone Flights Activity events report the activity of Unmanned Aerial Systems
(UAS), their Operators, and mission-planning and authorization metadata as
reported by the UAS platforms themselves, by Counter-UAS (CUAS) systems, or
other remote monitoring or sensing infrastructure. Based on the Remote ID
defined in Standard Specification for Remote ID and Tracking (ASTM Designation:
F3411-22a) <a target='_blank'
href='https://cdn.standards.iteh.ai/samples/112830/71297057ac42432880a203654f213709/ASTM-F3411-22a.pdf'>ASTM
F3411-22a</a>
 */
export interface DroneFlightsActivity extends UnmannedSystemsEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The authentication type as defined by the caption of
<code>auth_protocol_id</code>. In the case of 'Other', it is defined by the
event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authentication type used to authorize a flight
plan or mission. */
    auth_protocol_id?: string,
    /** UA Classification - Allows a region to classify UAS in a regional specific
manner. The format may differ from region to region. */
    classification?: string,
    /** This optional, free-text field enables the operator to describe the purpose of
a flight, if so desired. */
    comment?: string,
    /** The networking protocol associated with the Remote ID device or beacon. E.g.
<code>BLE</code>, <code>LTE</code>, <code>802.11</code>. */
    protocol_name?: string,
    /** The source network endpoint of the Unmanned Aerial System (UAS), Counter
Unmanned Aerial System (CUAS) platform, or other unmanned systems monitoring
and/or sensing infrastructure. */
    src_endpoint?: NetworkEndpoint,
    /** The normalized Operational status for the Unmanned Aerial System (UAS)
normalized to the caption of the <code>status_id</code> value. In the case of
'Other', it is defined by the source. */
    status?: string,
    /** The normalized Operational status identifier for the Unmanned Aerial System
(UAS). */
    status_id?: string,
    /** Traffic refers to the amount of data transmitted from a Unmanned Aerial System
(UAS) or Counter Unmanned Aerial System (UAS) (CUAS) system at a given point of
time. Ex: <code>bytes_in</code> and <code>bytes_out</code>. */
    traffic?: NetworkTraffic,
    /** The Unmanned Aerial System object describes the characteristics, Position
Location Information (PLI), and other metadata of Unmanned Aerial Systems (UAS)
and other unmanned and drone systems used in Remote ID. Remote ID is defined in
the Standard Specification for Remote ID and Tracking (ASTM Designation:
F3411-22a) <a target='_blank'
href='https://cdn.standards.iteh.ai/samples/112830/71297057ac42432880a203654f213709/ASTM-F3411-22a.pdf'>ASTM
F3411-22a</a>. */
    unmanned_aerial_system: UnmannedAerialSystem,
    /** The UAS Operating Area object describes details about a precise area of
operations for a UAS flight or mission. */
    unmanned_system_operating_area?: UnmannedSystemOperatingArea,
    /** The human or machine operator of an Unmanned System. */
    unmanned_system_operator: User,
}


/**
 * The attributes that Linux uses to identify user information.
 */
export interface LinuxUsersProfile {
    /** The audit user assigned at login by the audit subsystem. */
    auid?: number,
    /** The effective group under which this process is running. */
    egid?: number,
    /** The effective user under which this process is running. */
    euid?: number,
    /** The group under which this process is running. */
    group?: Group,
}


/**
 * Extends the process object to add Linux specific fields
 */
export interface LinuxProcess extends Process, LinuxUsersProfile {
}


/**
 * The attributes that macOS uses to identify user information.
 */
export interface MacosUsersProfile {
    /** The effective group under which this process is running. */
    egid?: number,
    /** The effective user under which this process is running. */
    euid?: number,
}


/**
 * Extends the process object to add macOS specific fields
 */
export interface MacosProcess extends Process, MacosUsersProfile {
}


/**
 * Extends the evidences object to add Windows specific fields
 */
export interface WindowsEvidences extends Evidences {
    /** Describes details about the registry key that triggered the detection. */
    reg_key?: RegKey,
    /** Describes details about the registry value that triggered the detection. */
    reg_value?: RegValue,
    /** Describes details about the Windows service that triggered the detection. */
    win_service?: WinService,
}


/**
 * Extends the process object to add Windows specific fields.
 */
export interface WindowsProcess extends Process {
    /** The Windows services that this process is hosting. */
    hosted_services?: WinService[],
}


/**
 * The resulting evidence information that was queried.
 */
export interface WindowsQueryEvidence extends QueryEvidence {
    /** The registry key object describes a Windows registry key. */
    reg_key?: RegKey,
    /** The registry key object describes a Windows registry value. */
    reg_value?: RegValue,
}


/**
 * The registry key object describes a Windows registry key.
 */
export interface RegKey extends Object {
    /** The indication of whether the object is part of the operating system. */
    is_system?: boolean,
    /** The time when the registry key was last modified. */
    modified_time?: number,
    /** The full path to the registry key. */
    path: string,
    /** The security descriptor of the registry key. */
    security_descriptor?: string,
}


/**
 * The registry value object describes a Windows registry value.
 */
export interface RegValue extends Object {
    /** The data of the registry value. Where the value type is known, implementers
should instead use a type-specific attribute, i.e.
<code>reg_binary_data</code>, <code>reg_integer_data</code>,
<code>reg_string_data</code>, or <code>reg_string_list_data</code>. */
    data?: string,
    /** The indication of whether the value is from a default value name. For example,
the value name could be missing. */
    is_default?: boolean,
    /** The indication of whether the object is part of the operating system. */
    is_system?: boolean,
    /** The time when the registry value was last modified. */
    modified_time?: number,
    /** The name of the registry value. */
    name: string,
    /** The full path to the registry key, where the value is located. */
    path: string,
    /** The data of the registry value when <code>type_id</code> is
<code>REG_BINARY</code> or <code>REG_NONE</code>. */
    reg_binary_data?: string,
    /** The data of the registry value when <code>type_id</code> is
<code>REG_DWORD</code>, <code>REG_DWORD_BIG_ENDIAN</code>, or
<code>REG_QWORD</code>. */
    reg_integer_data?: number,
    /** The data of the registry value when <code>type_id</code> is
<code>REG_SZ</code>, <code>REG_EXPAND_SZ</code>, or <code>REG_LINK</code>. */
    reg_string_data?: string,
    /** The data of the registry value when <code>type_id</code> is
<code>REG_MULTI_SZ</code>. */
    reg_string_list_data?: string[],
    /** A string representation of the value type as specified in <a target='_blank'
href='https://learn.microsoft.com/en-us/windows/win32/sysinfo/registry-value-types'>Registry
Value Types</a>. */
    type?: string,
    /** The value type ID. */
    type_id?: string,
}


/**
 * The startup item object describes an application component that has associated
startup criteria and configurations.
 */
export interface WindowsStartupItem extends StartupItem {
    /** The startup item Windows service resource. */
    win_service?: WinService,
}


/**
 * The Windows resource object describes a resource object managed by Windows,
such as mutant or timer.
 */
export interface WinResource extends Resource {
    /** The string detailing the attributes of the resource object. */
    details?: string,
    /** The name of the resource object. */
    name?: string,
    /** The Windows service acting as the object server for the resource object, such
as Security or Security Account Manager. */
    svc_name?: string,
    /** The type of the Windows resource object. */
    type?: string,
    /** The normalized type identifier of the Windows resource object accessed. */
    type_id: string,
    /** The Windows provided handle identifier for the resource object */
    uid?: string,
}


/**
 * The Windows Service object describes a Windows service.
 */
export interface WinService extends Service {
    /** The full command line used to launch the service. */
    cmd_line?: string,
    /** The process that is hosting this service. */
    hosting_process?: ProcessEntity,
    /** The name of the load ordering group of which this service is a member. */
    load_order_group?: string,
    /** The unique name of the service. */
    name: string,
    /** The service category, normalized to the caption of the service_category_id
value. In the case of 'Other', it is defined by the event source. */
    service_category?: string,
    /** The normalized identifier of the service category. */
    service_category_id?: string,
    /** The names of other services upon which this service has a dependency. */
    service_dependencies?: string[],
    /** For a shared user mode service (<code>service_type_id</code> is 4) this is the
DLL that gets loaded by the generic service host process (e.g.
<code>svchost.exe</code>) to implement the service. */
    service_dll_file?: File,
    /** The service error control, normalized to the caption of the
<code>service_error_control_id</code> value. In the case of 'Other', it is
defined by the event source. */
    service_error_control?: string,
    /** The normalized identifier of the service error control. */
    service_error_control_id?: string,
    /** For a user mode service (<code>service_type_id</code> 3 or 4) this is the
executable program that the SCM launches as the service process.<br>For a
kernel mode driver (<code>service_type_id</code> 1 or 2) this is the driver
file loaded into the kernel at the request of the SCM. */
    service_file?: File,
    /** For a user mode service, this attribute represents the name of the account
under which the service is run. For a kernel mode driver, this attribute
represents the object name used to load the driver. */
    service_start_name?: string,
    /** The service start type, normalized to the caption of the
<code>service_start_type_id</code> value. In the case of 'Other', it is defined
by the event source. */
    service_start_type?: string,
    /** The normalized identifier of the service start type. */
    service_start_type_id?: string,
    /** The service type, normalized to the caption of the service_type_id value. In
the case of 'Other', it is defined by the event source. */
    service_type?: string,
    /** The normalized identifier of the service type. */
    service_type_id?: string,
}


/**
 * Prefetch Query events report information about Windows prefetch files.
 */
export interface PrefetchQuery extends DiscoveryResult {
    /** The prefetch file last run time. */
    last_run_time?: number,
    /** The name of the prefetch file that is the target of the query. */
    name: string,
    /** The prefetch file run count. */
    run_count?: number,
}


/**
 * Registry Key Activity events report when a process performs an action on a
Windows registry key.
 */
export interface RegistryKeyActivity extends SystemEvent {
    /** The access mask in a platform-native format. */
    access_mask?: number,
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the <code>reg_key</code> object. */
    actor: Actor,
    /** The original Windows mask that is required to create the object. */
    create_mask?: string,
    /** The Windows options needed to open a registry key. */
    open_mask?: number,
    /** The registry key before the mutation */
    prev_reg_key?: RegKey,
    /** The registry key. */
    reg_key: RegKey,
}


/**
 * Registry Key Query events report information about discovered Windows registry
keys.
 */
export interface RegistryKeyQuery extends DiscoveryResult {
    /** The registry key that pertains to the event. */
    reg_key: RegKey,
}


/**
 * Registry Value Activity events reports when a process performs an action on a
Windows registry value.
 */
export interface RegistryValueActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The actor that performed the activity on the <code>reg_value</code> object. */
    actor: Actor,
    /** The registry value before the mutation */
    prev_reg_value?: RegValue,
    /** The registry value. */
    reg_value: RegValue,
}


/**
 * Registry Value Query events report information about discovered Windows
registry values.
 */
export interface RegistryValueQuery extends DiscoveryResult {
    /** The registry value that pertains to the event. */
    reg_value: RegValue,
}


/**
 * Windows Resource Activity events report when a process accesses a Windows
managed resource object, successful or otherwise.
 */
export interface WindowsResourceActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The Windows resource object that was accessed, such as a mutant or timer. */
    win_resource: WinResource,
}


/**
 * Windows Service Activity events report when a process interacts with the
Service Control Manager.
 */
export interface WindowsServiceActivity extends SystemEvent {
    /** The normalized identifier of the activity that triggered the event. */
    activity_id: string,
    /** The Windows service. */
    win_service: WinService,
}



