/**
* The values OCSF lists for depth.
*/
export enum OcsfDepth {
    
    Base = "Base",
    Environmental = "Environmental",
    Temporal = "Temporal",
};
/**
* The values OCSF lists for http_method.
*/
export enum OcsfHttpMethod {
    
    /** The ACL method modifies the access control list of the specified resource. */
    ACL = "ACL",
    /** The BASELINE-CONTROL method places the specified collection resource under baseline control. */
    Baseline_Control = "BASELINE-CONTROL",
    /** The BIND method adds a binding to the specified collection resource. */
    Bind = "BIND",
    /** The CHECKIN method creates a new version from a checked-out version-controlled resource. */
    Check_In = "CHECKIN",
    /** The CHECKOUT method prepares a version-controlled resource for modification. */
    Check_Out = "CHECKOUT",
    /** The CONNECT method establishes a tunnel to the server identified by the target resource. */
    Connect = "CONNECT",
    /** The COPY method duplicates the specified resource. */
    Copy = "COPY",
    /** The DELETE method deletes the specified resource. */
    Delete = "DELETE",
    /** The GET method requests a representation of the specified resource. Requests using GET should only retrieve data. */
    Get = "GET",
    /** The HEAD method asks for a response identical to a GET request, but without the response body. */
    Head = "HEAD",
    /** The LABEL method adds, sets, or removes labels on a version-controlled resource. */
    Label = "LABEL",
    /** The LINK method establishes one or more links between resources. */
    Link = "LINK",
    /** The LOCK method acquires or refreshes a lock on the specified resource. */
    Lock = "LOCK",
    /** The MERGE method merges changes from another resource into the specified resource. */
    Merge = "MERGE",
    /** The MKACTIVITY method creates a new activity resource. */
    Make_Activity = "MKACTIVITY",
    /** The MKCALENDAR method creates a new calendar collection resource. */
    Make_Calendar = "MKCALENDAR",
    /** The MKCOL method creates a new collection resource. */
    Make_Collection = "MKCOL",
    /** The MKREDIRECTREF method creates a new redirect reference resource. */
    Make_Redirect_Reference = "MKREDIRECTREF",
    /** The MKWORKSPACE method creates a new workspace resource. */
    Make_Workspace = "MKWORKSPACE",
    /** The MOVE method atomically duplicates and deletes the specified resource. */
    Move = "MOVE",
    /** The OPTIONS method describes the communication options for the target resource. */
    Options = "OPTIONS",
    /** The ORDERPATCH method changes the ordering of members in an ordered collection. */
    Order_Patch = "ORDERPATCH",
    /** The PATCH method applies partial modifications to a resource. */
    Patch = "PATCH",
    /** The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server. */
    Post = "POST",
    /** The PRI method appears in the HTTP/2 connection preface to confirm the protocol. */
    PRI = "PRI",
    /** The PROPFIND method retrieves properties defined on the specified resource. */
    Property_Find = "PROPFIND",
    /** The PROPPATCH method sets and/or removes properties defined on the specified resource. */
    Property_Patch = "PROPPATCH",
    /** The PUT method replaces all current representations of the target resource with the request payload. */
    Put = "PUT",
    /** The QUERY method performs a safe query request that can include a request body. */
    Query = "QUERY",
    /** The REBIND method moves a binding from one collection to another. */
    Rebind = "REBIND",
    /** The REPORT method retrieves a report about the specified resource. */
    Report = "REPORT",
    /** The SEARCH method searches a resource or collection using the request payload. */
    Search = "SEARCH",
    /** The TRACE method performs a message loop-back test along the path to the target resource. */
    Trace = "TRACE",
    /** The UNBIND method removes a binding from the specified collection resource. */
    Unbind = "UNBIND",
    /** The UNCHECKOUT method cancels a checkout and restores the resource to its previous state. */
    Un_Check_Out = "UNCHECKOUT",
    /** The UNLINK method removes one or more links between resources. */
    Unlink = "UNLINK",
    /** The UNLOCK method releases a lock on the specified resource. */
    Unlock = "UNLOCK",
    /** The UPDATE method updates a version-controlled resource to match a specified version. */
    Update = "UPDATE",
    /** The UPDATEREDIRECTREF method changes the target of a redirect reference resource. */
    Update_Redirect_Reference = "UPDATEREDIRECTREF",
    /** The VERSION-CONTROL method places the specified resource under version control. */
    Version_Control = "VERSION-CONTROL",
};
/**
* The values OCSF lists for tlp.
*/
export enum OcsfTlp {
    
    /** TLP:AMBER is for limited disclosure, recipients can only spread this on a need-to-know basis within their organization and its clients. Note that TLP:AMBER+STRICT restricts sharing to the organization only. Sources may use TLP:AMBER when information requires support to be effectively acted upon, yet carries risk to privacy, reputation, or operations if shared outside of the organizations involved. Recipients may share TLP:AMBER information with members of their own organization and its clients, but only on a need-to-know basis to protect their organization and its clients and prevent further harm. Note: if the source wants to restrict sharing to the organization only, they must specify TLP:AMBER+STRICT. */
    TLPCOLONAMBER = "AMBER",
    /** TLP:AMBER is for limited disclosure, recipients can only spread this on a need-to-know basis within their organization and its clients. Note that TLP:AMBER+STRICT restricts sharing to the organization only. Sources may use TLP:AMBER when information requires support to be effectively acted upon, yet carries risk to privacy, reputation, or operations if shared outside of the organizations involved. Recipients may share TLP:AMBER information with members of their own organization and its clients, but only on a need-to-know basis to protect their organization and its clients and prevent further harm. Note: if the source wants to restrict sharing to the organization only, they must specify TLP:AMBER+STRICT. */
    TLPCOLONAMBERPLUS_SIGNSTRICT = "AMBER STRICT",
    /** TLP:CLEAR denotes that recipients can spread this to the world, there is no limit on disclosure. Sources may use TLP:CLEAR when information carries minimal or no foreseeable risk of misuse, in accordance with applicable rules and procedures for public release. Subject to standard copyright rules, TLP:CLEAR information may be shared without restriction. */
    TLPCOLONCLEAR = "CLEAR",
    /** TLP:GREEN is for limited disclosure, recipients can spread this within their community. Sources may use TLP:GREEN when information is useful to increase awareness within their wider community. Recipients may share TLP:GREEN information with peers and partner organizations within their community, but not via publicly accessible channels. TLP:GREEN information may not be shared outside of the community. Note: when “community” is not defined, assume the cybersecurity/defense community. */
    TLPCOLONGREEN = "GREEN",
    /** TLP:RED is for the eyes and ears of individual recipients only, no further disclosure. Sources may use TLP:RED when information cannot be effectively acted upon without significant risk for the privacy, reputation, or operations of the organizations involved. Recipients may therefore not share TLP:RED information with anyone else. In the context of a meeting, for example, TLP:RED information is limited to those present at the meeting. */
    TLPCOLONRED = "RED",
    /** TLP:WHITE and TLP:CLEAR may be used interchangeably, TLP:WHITE is the most up to date (as of TLP 2.0) usage. */
    TLPCOLONWHITE = "WHITE",
};


/**
 * What an annotation states about an OCSF element where the metamodel has no slot for it. No data holds this class: it declares the annotation keys, and each annotated element names it through instantiates.
 */
export interface OcsfFacts {
    /** The item's key in OCSF, scoped by its extension where it has one. */
    ocsf_key?: string,
    /** The event class's category, by OCSF's key. */
    ocsf_category?: string,
    /** The category's number, on the subset that stands for it. */
    ocsf_category_uid?: string,
    /** The extension that defines the element. */
    ocsf_extension?: string,
    /** The extension's number, on the subset that stands for it. */
    ocsf_extension_uid?: string,
    /** An attribute's group: classification, context, occurrence or primary. */
    ocsf_group?: string,
    /** The profiles behind an element, by OCSF's key and space separated. An event holds an attribute that names any only if metadata.profiles lists one of them. On a class, they are every profile OCSF lists for it, its nested objects' included. */
    ocsf_profiles?: string,
    /** OCSF's requirement on an attribute a profile brings, which applies only when the event lists the profile. */
    ocsf_requirement?: string,
    /** The string attribute that holds the label of an enumerated one. */
    ocsf_sibling?: string,
    /** OCSF's observable type id for the element. */
    ocsf_observable?: string,
    /** OCSF's note on where an attribute comes from. */
    ocsf_source_note?: string,
    /** The convention checks OCSF turns off for an attribute. */
    ocsf_suppress_checks?: string,
    /** OCSF's longest allowed value of a data type, in characters. */
    ocsf_max_len?: string,
    /** A class's at_least_one and just_one constraints, as JSON. */
    ocsf_constraints?: string,
    /** A class's associations between attributes, as JSON. */
    ocsf_associations?: string,
    /** The OCSF version that deprecated the element. */
    ocsf_deprecated_since?: string,
    /** What OCSF names as the replacement, space separated. */
    ocsf_superseded_by?: string,
}


/**
 * Embedded JSON value. A value can be a string, or a number, or true or false or null, or an object or an array. These structures can be nested.
 */
export interface OcsfJsonValue {
}


/**
 * An unordered collection of attributes. It defines a set of attributes available in all objects. It can be also used as a generic object to log objects that are not otherwise defined by the schema.
 */
export interface OcsfObject {
}


/**
 * The abstract parent of the objects that extend OCSF's object, which adds no attribute of its own. OCSF's object itself is OcsfObject, which stays open.
 */
export interface OcsfObjectBase {
}


/**
 * AI-specific attributes for model operations, retrieval systems, and agent activities. e.g. model_name, total_token_counts etc.
 */
export interface OcsfAiOperationProfile {
    /** The autonomous AI agent that performed this operation. Carries model identity via <code>ai_agent.ai_model</code>. Populate when the action was performed by an agent rather than a direct model call. */
    ai_agent?: OcsfAiAgent,
    /** The AI model involved in this operation. Use for direct model invocations where no autonomous agent is involved. For agent-mediated operations, model identity is carried within <code>ai_agent.ai_model</code> instead. */
    ai_model?: OcsfAiModel,
    /** The delegation under whose authority this AI operation was performed. Links the event to a durable authorization context independent of traces and sessions, enabling correlation of all events executed under the same delegated authority. */
    delegation?: OcsfDelegation,
    /** Communication context for AI system interactions including protocols, roles, clients, and session information for MCP and other AI communication systems. */
    message_context?: OcsfMessageContext,
}


/**
 * The attributes that describe information specific to Cloud services/applications.
 */
export interface OcsfCloudProfile {
    /** Describes details about a typical API (Application Programming Interface) call. */
    api?: OcsfApi,
    /** Describes details about the Cloud environment where the event or finding was created. */
    cloud?: OcsfCloud,
}


/**
 * The container context for a process.
 */
export interface OcsfContainerProfile {
    /** The information describing an instance of a container. A container is a prepackaged, portable system image that runs isolated on an existing system using a container runtime like containerd. */
    container?: OcsfContainer,
    /** If running under a process namespace (such as in a container), the process identifier within that process namespace. */
    namespace_pid?: number,
}


/**
 * The Data Classification profile adds attributes to specific resource objects, allowing users to describe information about classifiers & data classification results.
 */
export interface OcsfDataClassificationProfile {
    /** The Data Classification object includes information about data classification levels and data category types. */
    data_classification?: OcsfDataClassification,
    /** A list of Data Classification objects, that include information about data classification levels and data category types, identified by a classifier. */
    data_classifications?: OcsfDataClassification[],
}


/**
 * When applied, this profile adds a sibling attribute of data type <code>datetime_t</code> (RFC-3339 string) wherever a <code>timestamp_t</code> attribute appears in the event class. This provides human-readable date/time representations alongside the epoch-millisecond timestamps. For example, <code>time</code> (<code>timestamp_t</code>) would gain a <code>time_dt</code> (<code>datetime_t</code>) sibling such as <code>"1985-04-12T23:20:50.52Z"</code>.
 */
export interface OcsfDatetimeProfile {
}


/**
 * Adds host and actor context to event classes. Apply this profile when the event originates from or is observed on a specific host or device, and when the initiating user, process, or service is known. All event classes include this profile by default through the base event.
 */
export interface OcsfHostProfile {
    /** The user, process, or service that initiated the activity on the host. For system-level events this is typically a process; for IAM events it is typically a user or role. */
    actor?: OcsfActor,
    /** The host or device where the activity was observed. Populate with details such as hostname, IP address, OS, and hardware identifiers when available from the source. */
    device?: OcsfDevice,
}


/**
 * The attributes that add incident handling semantics to a Finding.
 */
export interface OcsfIncidentProfile {
    /** The details of the user assigned to an Incident. */
    assignee?: OcsfUser,
    /** The details of the group assigned to an Incident. */
    assignee_group?: OcsfGroup,
    /** The confidence, normalized to the caption of the confidence_id value. In the case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the analytics that produced the alert or finding. See specific usage. */
    confidence_id?: number,
    /** The impact , normalized to the caption of the impact_id value. In the case of 'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the magnitude of harm that can be expected to result from the consequences of unauthorized disclosure, modification, destruction, or loss of information or information system availability. */
    impact_id?: number,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** A determination based on analytics as to whether a potential breach was found. */
    is_suspected_breach?: boolean,
    /** The priority, normalized to the caption of the priority_id value. In the case of 'Other', it is defined by the event source. */
    priority?: string,
    /** The normalized priority. Priority identifies the relative importance of the incident or finding. It is a measurement of urgency. */
    priority_id?: number,
    /** A Url link used to access the original incident. */
    src_url?: string,
    /** The linked ticket in the ticketing system. */
    ticket?: OcsfTicket,
    /** The associated ticket(s) in the ticketing system. Each ticket contains details like ticket ID, status, etc. */
    tickets?: OcsfTicket[],
    /** The verdict assigned to an Incident finding. */
    verdict?: string,
    /** The normalized verdict of an Incident. */
    verdict_id?: number,
}


/**
 * The attributes that Linux uses to identify user information.
 */
export interface OcsfLinuxUsersProfile {
    /** The audit user assigned at login by the audit subsystem. */
    auid?: number,
    /** The effective group under which this process is running. */
    egid?: number,
    /** The effective user under which this process is running. */
    euid?: number,
    /** The group under which this process is running. */
    group?: OcsfGroup,
}


/**
 * The attributes that describe information specific to load balancers.
 */
export interface OcsfLoadBalancerProfile {
    /** The Load Balancer object contains information related to the device that is distributing incoming traffic to specified destinations. */
    load_balancer?: OcsfLoadBalancer,
}


/**
 * The attributes that macOS uses to identify user information.
 */
export interface OcsfMacosUsersProfile {
    /** The effective group under which this process is running. */
    egid?: number,
    /** The effective user under which this process is running. */
    euid?: number,
}


/**
 * The attributes that identify network proxy attributes.
 */
export interface OcsfNetworkProxyProfile {
    /** The connection information from the proxy server to the remote server. */
    proxy_connection_info?: OcsfNetworkConnectionInfo,
    /** The proxy (server) in a network connection. */
    proxy_endpoint?: OcsfNetworkProxy,
    /** The HTTP Request from the proxy server to the remote server. */
    proxy_http_request?: OcsfHttpRequest,
    /** The HTTP Response from the remote server to the proxy server. */
    proxy_http_response?: OcsfHttpResponse,
    /** The TLS protocol negotiated between the proxy server and the remote server. */
    proxy_tls?: OcsfTls,
    /** The network traffic refers to the amount of data moving across a network, from proxy to remote server at a given point of time. */
    proxy_traffic?: OcsfNetworkTraffic,
}


/**
 * The OSINT (Open Source Intelligence) profile contains one or more indicators and associated analysis and details, such as registrar (WHOIS) information and commentary about a hostname, or information about a digital certificate and its usage within a campaign. This information can be used to further enrich a detection or finding by providing decisioning support to other analysts and engineers within the profile itself.
 */
export interface OcsfOsintProfile {
    /** The OSINT (Open Source Intelligence) object contains details related to an indicator such as the indicator itself, related indicators, geolocation, registrar information, subdomains, analyst commentary, and other contextual information. This information can be used to further enrich a detection or finding by providing decisioning support to other analysts and engineers. */
    osint?: OcsfOsint[],
}


/**
 * The Record Integrity profile adds one or more cryptographic attestations over the event itself, providing integrity, authenticity, and non-repudiation independent of any domain-specific content. It is domain-agnostic and may be applied to any event class. Each attestation is computed over a canonical serialization of the event; independent attesters over the same event each contribute a separate entry in <code>attestation_list</code>, while multiple signers of a single attestation, such as a producer plus a co-signature, notary, or witness, are carried in that attestation's <code>signatures</code> array, and a sequence of events may form a tamper-evident hash chain.
 */
export interface OcsfRecordIntegrityProfile {
    /** One or more cryptographic <code>attestation</code> objects over an event, each providing integrity, authenticity, and non-repudiation. Independent attesters over the same event — for example a producer at write time and a downstream processor at ingest — each contribute a separate attestation, distinct from co-signers on a single attestation, which share its <code>signatures</code> array. Carried on the <code>record_integrity</code> profile; the object itself is domain-agnostic. */
    attestation_list?: OcsfAttestation[],
}


/**
 * The attributes including disposition that represent the outcome of a security control including but not limited to access control, malware or policy violation, network proxy, intrusion detection, firewall, or data control.  The profile is intended to augment activities or findings with an outcome when a security control has observed or intervened. If the control detected a security violation, and the <code>disposition_id</code> or <code>action_id</code> is an alertable outcome or action, the <code>is_alert</code> flag may be set to <code>true</code>.
 */
export interface OcsfSecurityControlProfile {
    /** The normalized caption of <code>action_id</code>. */
    action?: string,
    /** The action taken by a control or other policy-based system leading to an outcome or disposition. An unknown action may still correspond to a known disposition. Refer to <code>disposition_id</code> for the outcome of the action. */
    action_id?: number,
    /** An array of MITRE ATT&CK® objects describing identified tactics, techniques & sub-techniques. The objects are compatible with MITRE ATLAS™ tactics, techniques & sub-techniques. */
    attacks?: OcsfAttack[],
    /** Provides details about an authorization, such as authorization outcome, and any associated policies related to the activity/event. */
    authorizations?: OcsfAuthorization[],
    /** The confidence, normalized to the caption of the confidence_id value. In the case of 'Other', it is defined by the event source. */
    confidence?: string,
    /** The normalized confidence refers to the accuracy of the security control or alert. An analytic with a low confidence means that the alerts may be noisy or may not be malicious in nature. */
    confidence_id?: number,
    /** The confidence score as reported by the event source. If <code>confidence_id</code> is 99 'Other', it should be the same as <code>confidence</code> if both are populated. */
    confidence_score?: number,
    /** The disposition name, normalized to the caption of the disposition_id value. In the case of 'Other', it is defined by the event source. */
    disposition?: string,
    /** Describes the outcome or action taken by a security control, such as access control checks, malware detections or various types of policy violations. */
    disposition_id?: number,
    /** The firewall rule that pertains to the control that triggered the event, if applicable. */
    firewall_rule?: OcsfFirewallRule,
    /** Indicates that the event is considered to be an alertable signal. Should be set to <code>true</code> if <code>disposition_id = Alert</code> among other dispositions, and/or <code>risk_level_id</code> or <code>severity_id</code> of the event is elevated. Not all control events will be alertable, for example if <code>disposition_id = Exonerated</code> or <code>disposition_id = Allowed</code>. */
    is_alert?: boolean,
    /** A list of Malware objects, describing details about the identified malware. */
    malware?: OcsfMalware[],
    /** Describes details about the scan job that identified malware on the target system. */
    malware_scan_info?: OcsfMalwareScanInfo,
    /** The policy that pertains to the control that triggered the event, if applicable. For example the name of an anti-malware policy or an access control policy. */
    policy?: OcsfPolicy,
    /** Describes the risk associated with the finding. */
    risk_details?: string,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: number,
    /** The risk score as reported by the event source. */
    risk_score?: number,
}


/**
 * The Trace Profile extends the OCSF framework to capture and standardize observability events, specifically targeting trace-level data. This profile enables integration and normalization of distributed tracing information, allowing OCSF events to retain essential trace context such as trace IDs, span relationships, and service dependencies.
 */
export interface OcsfTraceProfile {
    /** The trace object contains information about distributed traces which are critical to observability and describe how requests move through a system, capturing each step's timing and status. */
    trace?: OcsfTrace,
}


/**
 * The Entity object is an unordered collection of attributes, with a name and unique identifier. It serves as a base object that defines a set of attributes and default constraints available in all objects that extend it.
 */
export interface OcsfEntity extends OcsfObjectBase {
    /** The name of the entity. */
    name?: string,
    /** The unique identifier of the entity. */
    uid?: string,
    /** The <code>uid</code> attribute in numeric form where applicable.<br><strong>Note:</strong> Producers may populate <code>uid_numeric</code> only in addition to <code>uid</code> and not as an alternative to it. */
    uid_numeric?: number,
}


/**
 * The Resource object contains attributes that provide information about a particular resource. It serves as a base object, offering attributes that help identify and classify the resource effectively.
 */
export interface OcsfResource extends OcsfEntity, OcsfDataClassificationProfile {
    /** The time when the resource was created. */
    created_time?: number,
    /** Additional data describing the resource. */
    data?: string,
    /** The list of labels associated to the resource. */
    labels?: string[],
    /** The time when the resource was last modified. */
    modified_time?: number,
    /** The list of tags; <code>{key:value}</code> pairs associated to the resource. */
    tags?: OcsfKeyValueObject[],
    /** The resource type as defined by the event source. */
    type?: string,
    /** The alternative unique identifier of the resource. */
    uid_alt?: string,
}


/**
 * The Access Analysis Result object describes access relationships and pathways between identities, resources, focusing on who can access what and through which mechanisms. This evaluates access levels (read/write/admin), access types (direct, cross-account, public, federated), and the conditions under which access is granted. Use this for resource-centric security assessments such as external access discovery, public exposure analysis, etc.
 */
export interface OcsfAccessAnalysisResult extends OcsfObjectBase {
    /** The generalized access level or permission scope granted to the identity through the analyzed policy configuration. Common examples include Read, Write, List, Delete, Admin, or custom permission levels. */
    access_level?: string,
    /** The type or category of access being granted to the identity. This describes the nature of the access relationship, such as cross-account access, public access, federated access, or third-party integration access. Examples include 'Cross-Account', 'Public', 'Federated', 'Service-to-Service', etc. */
    access_type?: string,
    /** The identities that are granted access through the analyzed policy configuration. This identifies the specific entity that can exercise the permissions and helps assess the access relationship and potential security implications. Examples include user accounts, service principals, roles, account identifiers, or system identities. */
    accessors: OcsfUser[],
    /** Details about supplementary restrictions and guardrails that may limit the granted access, applied through additional policy types such as Resource Control Policies (RCPs) and Service Control Policies (SCPs) in AWS, or other policy constraints. */
    additional_restrictions?: OcsfAdditionalRestriction[],
    /** The condition keys and their values that constrain when and how the granted access can be exercised. These conditions define the circumstances under which the access relationship is valid and the privileges can be used. Examples: IP address restrictions like 'aws:SourceIp:192.0.2.0/24', time-based constraints like 'aws:RequestedRegion:us-east-1', MFA requirements like 'aws:MultiFactorAuthPresent:true', or custom conditions based on resource tags and request context. */
    condition_keys?: OcsfKeyValueObject[],
    /** The specific privileges, actions, or permissions that are granted through the analyzed access relationship. This includes the actual operations that the accessor can perform on the target resource. Examples: AWS actions like 'sts:AssumeRole', 's3:GetObject', 'ec2:DescribeInstances'; Azure actions like 'Microsoft.Storage/storageAccounts/read'; or GCP permissions like 'storage.objects.get'. */
    granted_privileges?: string[],
}


/**
 * The Account object contains details about the account that initiated or performed a specific activity within a system or application. Additionally, the Account object refers to logical Cloud and Software-as-a-Service (SaaS) based containers such as AWS Accounts, Azure Subscriptions, Oracle Cloud Compartments, Google Cloud Projects, and otherwise.
 */
export interface OcsfAccount extends OcsfEntity {
    /** Indicates if the account is disabled. */
    is_disabled?: boolean,
    /** Indicates if the account is locked. For example, due to the amount of failed logins. */
    is_locked?: boolean,
    /** Indicates whether synchronization with an on-premises directory service is enabled. For example, Microsoft Entra Connect. */
    is_on_premises_sync_enabled?: boolean,
    /** The list of labels associated to the account. */
    labels?: string[],
    /** The list of tags; <code>{key:value}</code> pairs associated to the account. */
    tags?: OcsfKeyValueObject[],
    /** The account type, normalized to the caption of 'account_type_id'. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The normalized account type identifier. */
    type_id?: number,
}


/**
 * The Actor object contains details about the user, role, application, service, or process that initiated or performed a specific activity. Note that Actor is not the threat actor of a campaign but may be part of a campaign. When the initiator of the activity is an autonomous AI agent, apply the <code>ai_operation</code> profile and populate <code>ai_operation.ai_agent</code> rather than describing the agent here.
 */
export interface OcsfActor extends OcsfObjectBase {
    /** The client application or service that initiated the activity. This can be in conjunction with the <code>user</code> if present.  Note that <code>app_name</code> is distinct from the <code>process</code> if present. */
    app_name?: string,
    /** The unique identifier of the client application or service that initiated the activity. This can be in conjunction with the <code>user</code> if present. Note that <code>app_name</code> is distinct from the <code>process.pid</code> or <code>process.uid</code> if present. */
    app_uid?: string,
    /** The client application or service that initiated the activity. This can be in conjunction with the <code>user</code> if present. Note that <code>application</code> is distinct from the <code>process</code> if present. */
    application?: OcsfApplication,
    /** Provides details about an authorization, such as authorization outcome, and any associated policies related to the activity/event. */
    authorizations?: OcsfAuthorization[],
    /** The actor's role, or as an alternative to <code>user</code> or <code>process</code> when the role is serving as a security principal for the operation that initiated the activity. */
    iam_role?: OcsfIamRole,
    /** This object describes details about the Identity Provider used. */
    idp?: OcsfIdp,
    /** The name of the service that invoked the activity as described in the event. */
    invoked_by?: string,
    /** The process that initiated the activity. */
    process?: OcsfProcess,
    /** The user session from which the activity was initiated. */
    session?: OcsfSession,
    /** The user that initiated the activity or the user context from which the activity was initiated. */
    user?: OcsfUser,
}


/**
 * The Additional Restriction object describes supplementary access controls and guardrails that constrain or limit granted permissions beyond the primary policy. These restrictions are typically applied through hierarchical policy frameworks, organizational controls, or conditional access mechanisms. Examples include AWS Service Control Policies (SCPs), Resource Control Policies (RCPs), Azure Management Group policies, GCP Organization policies, conditional access policies, IP restrictions, time-based constraints, and MFA requirements.
 */
export interface OcsfAdditionalRestriction extends OcsfObjectBase {
    /** Detailed information about the policy document that defines this restriction, including policy metadata, type, scope, and the specific rules or conditions that implement the access control. */
    policy: OcsfPolicy,
    /** The current status of the policy restriction, normalized to the caption of the <code>status_id</code> enum value. */
    status?: string,
    /** The normalized status identifier indicating the applicability of this policy restriction. */
    status_id?: number,
}


/**
 * The Advisory object represents publicly disclosed cybersecurity vulnerabilities defined in a Security advisory. e.g. <code> Microsoft KB Article</code>, <code>Apple Security Advisory</code>, or a <code>GitHub Security Advisory (GHSA)</code>
 */
export interface OcsfAdvisory extends OcsfObjectBase {
    /** The average time to patch. */
    avg_timespan?: OcsfTimespan,
    /** The Advisory bulletin identifier. */
    bulletin?: string,
    /** The vendors classification of the Advisory. */
    classification?: string,
    /** The time when the Advisory record was created. */
    created_time?: number,
    /** The time when the Advisory record was created. */
    created_time_dt?: string,
    /** A brief description of the Advisory Record. */
    desc?: string,
    /** The install state of the Advisory. */
    install_state?: string,
    /** The normalized install state ID of the Advisory. */
    install_state_id?: number,
    /** The Advisory has been replaced by another. */
    is_superseded?: boolean,
    /** The time when the Advisory record was last updated. */
    modified_time?: number,
    /** The time when the Advisory record was last updated. */
    modified_time_dt?: string,
    /** The operating system the Advisory applies to. */
    os?: OcsfOs,
    /** The product where the vulnerability was discovered. */
    product?: OcsfProduct,
    /** A list of reference URLs with additional information about the vulnerabilities disclosed in the Advisory. */
    references?: string[],
    /** A list of Common Vulnerabilities and Exposures (CVE) identifiers related to the vulnerabilities disclosed in the Advisory. */
    related_cves?: OcsfCve[],
    /** A list of Common Weakness Enumeration (CWE) identifiers related to the vulnerabilities disclosed in the Advisory. */
    related_cwes?: OcsfCwe[],
    /** The size in bytes for the Advisory. Usually populated for a KB Article patch. */
    size?: number,
    /** The Advisory link from the source vendor. */
    src_url?: string,
    /** A title or a brief phrase summarizing the Advisory. */
    title?: string,
    /** The unique identifier assigned to the advisory or disclosed vulnerability, e.g, <code>GHSA-5mrr-rgp6-x4gr</code>. */
    uid: string,
}


/**
 * The Affected Code object describes details about a code block identified as vulnerable.
 */
export interface OcsfAffectedCode extends OcsfObjectBase {
    /** The column number of the last part of the assessed code identified as vulnerable. */
    end_column?: number,
    /** The line number of the last line of code block identified as vulnerable. */
    end_line?: number,
    /** Details about the file that contains the affected code block. */
    file: OcsfFile,
    /** Details about the user that owns the affected file. */
    owner?: OcsfUser,
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
    /** Details about the specific rule, e.g., those defined as part of a larger <code>policy</code>, that triggered the finding. */
    rule?: OcsfRule,
    /** The column number of the first part of the assessed code identified as vulnerable. */
    start_column?: number,
    /** The line number of the first line of code block identified as vulnerable. */
    start_line?: number,
}


/**
 * The Software Package object describes details about a software package.
 */
export interface OcsfPackage extends OcsfObjectBase {
    /** Architecture is a shorthand name describing the type of computer hardware the packaged software is meant to run on. */
    architecture?: string,
    /** The Common Platform Enumeration (CPE) name. For example: <code>cpe:/a:apple:safari:16.2</code>. */
    cpe_name?: string,
    /** The software package epoch. Epoch is a way to define weighted dependencies based on version numbers. */
    epoch?: number,
    /** Cryptographic hash to identify the binary instance of a software component. This can include any component such file, package, or library. */
    hash?: OcsfFingerprint,
    /** The software license applied to this package. */
    license?: string,
    /** The URL pointing to the license applied on package or software. This is typically a <code>LICENSE.md</code> file within a repository. */
    license_url?: string,
    /** The software package name. */
    name: string,
    /** The software packager manager utilized to manage a package on a system, e.g. npm, yum, dpkg etc. */
    package_manager?: string,
    /** The URL of the package or library at the package manager, or the specific URL or URI of an internal package manager link such as <code>AWS CodeArtifact</code> or <code>Artifactory</code>. */
    package_manager_url?: string,
    /** A purl is a URL string used to identify and locate a software package in a mostly universal and uniform way across programming languages, package managers, packaging conventions, tools, APIs and databases. */
    purl?: string,
    /** Release is the number of times a version of the software has been packaged. */
    release?: string,
    /** The link to the specific library or package such as within <code>GitHub</code>, this is different from the link to the package manager where the library or package is hosted. */
    src_url?: string,
    /** The type of software package, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the source. */
    type?: string,
    /** The type of software package. */
    type_id?: number,
    /** A unique identifier for the package or library reported by the source tool. E.g., the <code>libId</code> within the <code>sbom</code> field of an OX Security Issue or the SPDX <code>components.*.bom-ref</code>. */
    uid?: string,
    /** The name of the vendor who published the software package. */
    vendor_name?: string,
    /** The software package version. */
    version: string,
}


/**
 * The Affected Package object describes details about a software package identified as affected by a vulnerability/vulnerabilities.
 */
export interface OcsfAffectedPackage extends OcsfPackage {
    /** The software package version in which a reported vulnerability was patched/fixed. */
    fixed_in_version?: string,
    /** The installation path of the affected package. */
    path?: string,
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
}


/**
 * An Agent (also known as a Sensor) is typically installed on an Operating System (OS) and serves as a specialized software component that can be designed to monitor, detect, collect, archive, or take action. These activities and possible actions are defined by the upstream system controlling the Agent and its intended purpose. For instance, an Agent can include Endpoint Detection & Response (EDR) agents, backup/disaster recovery sensors, Application Performance Monitoring or profiling sensors, and similar software.
 */
export interface OcsfAgent extends OcsfObjectBase {
    /** The name of the agent or sensor. For example: <code>AWS SSM Agent</code>. */
    name?: string,
    /** Describes the various policies that may be applied or enforced by an agent or sensor. E.g., Conditional Access, prevention, auto-update, tamper protection, destination configuration, etc. */
    policies?: OcsfPolicy[],
    /** The normalized caption of the type_id value for the agent or sensor. In the case of 'Other' or 'Unknown', it is defined by the event source. */
    type?: string,
    /** The normalized representation of an agent or sensor. E.g., EDR, vulnerability management, APM, backup & recovery, etc. */
    type_id?: number,
    /** The UID of the agent or sensor, sometimes known as a Sensor ID or <code>aid</code>. */
    uid?: string,
    /** An alternative or contextual identifier for the agent or sensor, such as a configuration, organization, or license UID. */
    uid_alt?: string,
    /** The company or author who created the agent or sensor. For example: <code>Crowdstrike</code>. */
    vendor_name?: string,
    /** The semantic version of the agent or sensor, e.g., <code>7.101.50.0</code>. */
    version?: string,
}


/**
 * An autonomous AI agent that performs tasks under delegated authority. Distinguished from the OCSF agent object (which describes security sensors such as EDR and DLP tools) and from human principals. An AI agent has a stable logical identity across runs and a restart-sensitive instance identity. The agent owns its model; the ai_model attribute captures which model was backing the agent at the time of action.
 */
export interface OcsfAiAgent extends OcsfEntity {
    /** The AI model backing this agent at the time of the recorded event. An agent's model may change across instances or versions; this captures the model in use for the specific logged activity or delegation. */
    ai_model?: OcsfAiModel,
    /** A document that defines an AI agent's durable role, responsibilities, constraints, and operating boundaries. When available, populate <code>hashes</code> on the file for content integrity and <code>signatures</code> for provenance. Integrity of the event that reports this agent is provided separately by the <code>record_integrity</code> profile. */
    charter?: OcsfFile,
    /** Identifier for a specific running instance or session of the agent, distinct from the stable logical <code>uid</code>. An instance is a single materialization of the agent: a conversation, session, or run. It may persist across restarts (a session that is suspended and later resumed keeps the same <code>instance_uid</code>) and may span multiple cooperating runtime components, so several events can share one <code>instance_uid</code>. Enables attribution of actions to a particular instance of the agent rather than to the agent generally. */
    instance_uid?: string,
    /** The agent framework, normalized to the caption of the <code>type_id</code> value. */
    type?: string,
    /** The normalized identifier for the agent framework. Different agent frameworks have different identity, tool-call, and delegation semantics, so recording the framework enables cross-framework normalization. Communication protocols (e.g., MCP, A2A) are a property of individual operations rather than the agent itself, and are surfaced on the relevant operation rather than here. */
    type_id?: number,
    /** The version of the agent: the agent's own code or configuration revision (e.g., <code>1.4.2</code>), distinct from the version of the model backing it (carried on <code>ai_model.version</code>). Enables correlation of behavioral changes with charter or configuration revisions across agent versions. */
    version?: string,
}


/**
 * The AI Model object describes the characteristics of an AI/ML model. Examples include language models like GPT-4, embedding models like text-embedding-ada-002, and computer vision models like CLIP.
 */
export interface OcsfAiModel extends OcsfEntity {
    /** AI service provider or organization name. For example: <code>OpenAI</code>, <code>Anthropic</code>, <code>Google</code>, or <code>Internal</code>. */
    ai_provider: string,
    /** Model version identifier. For example: <code>2024-05-13</code>, <code>v2.1.0</code>, or <code>beta</code>. */
    version?: string,
}


/**
 * The Aircraft object represents any aircraft or otherwise airborne asset such as an unmanned system, airplane, balloon, spacecraft, or otherwise. The Aircraft object is intended to normalized data captured or otherwise logged from active radar, passive radar, multi-spectral systems, or the Automatic Dependant Broadcast - Surveillance (ADS-B), and/or Mode S systems.
 */
export interface OcsfAircraft extends OcsfEntity {
    /** The detailed geographical location usually associated with an IP address. */
    location?: OcsfLocation,
    /** The model name of the aircraft or unmanned system. */
    model?: string,
    /** The serial number of the aircraft. */
    serial_number?: string,
    /** Ground speed of flight. This value is provided in meters per second with a minimum resolution of 0.25 m/s. Special Values: <code>Invalid</code>, <code>No Value</code>, or <code>Unknown: 255 m/s</code>. */
    speed?: string,
    /** Provides quality/containment on horizontal ground speed. Measured in meters/second. */
    speed_accuracy?: string,
    /** Direction of flight expressed as a “True North-based” ground track angle. This value is provided in clockwise degrees with a minimum resolution of 1 degree. If aircraft is not moving horizontally, use the “Unknown” value */
    track_direction?: string,
    /** A secondary identification identifier for an aircraft, such as the 4-digit squawk (octal representation). */
    uid_alt?: string,
    /** Vertical speed upward relative to the WGS-84 datum, measured in meters per second. Special Values: <code>Invalid</code>, <code>No Value</code>, or <code>Unknown: 63 m/s</code>. */
    vertical_speed?: string,
}


/**
 * The analysis target defines the scope of monitored activities, specifying what entity, system or process is analyzed for activity patterns.
 */
export interface OcsfAnalysisTarget {
    /** The specific name or identifier of the analysis target, such as the username of a User Account, the name of a Kubernetes Cluster, the identifier of a Network Namespace, or the name of an Application Component. */
    name: string,
    /** The category of the analysis target, such as User Account, Kubernetes Cluster, Network Namespace, or Application Component. */
    type?: string,
}


/**
 * The Analytic object contains details about the analytic technique used to analyze and derive insights from the data or information that led to the creation of a finding or conclusion.
 */
export interface OcsfAnalytic extends OcsfEntity {
    /** The algorithm used by the underlying analytic to generate the finding. */
    algorithm?: string,
    /** The analytic category. */
    category?: string,
    /** The description of the analytic that generated the finding. */
    desc?: string,
    /** Other analytics related to this analytic. */
    related_analytics?: OcsfAnalytic[],
    /** An array of <code>sensor_info</code> objects, each describing a sensor control point analyzed or correlated by the analytic. Each element typically represents a source of <code>related_events</code> that contributed to the finding. An individual sensor control point may also directly originate the finding, though more commonly it emits alerts that a downstream consumer treats as findings. */
    sensor_info_list?: OcsfSensorInfo[],
    /** The Analytic state. */
    state?: string,
    /** The Analytic state identifier. */
    state_id?: number,
    /** The analytic type. */
    type?: string,
    /** The analytic type ID. */
    type_id: number,
    /** The analytic version. For example: <code>1.1</code>. */
    version?: string,
}


/**
 * Describes an anomaly or deviation detected in a system. Anomalies are unexpected activity patterns that could indicate potential issues needing attention.
 */
export interface OcsfAnomaly extends OcsfObjectBase {
    /** The specific parameter, metric or property where the anomaly was observed. Examples include: CPU usage percentage, API response time in milliseconds, HTTP error rate, memory utilization, network latency, transaction volume, etc. This helps identify the exact aspect of the system exhibiting anomalous behavior. */
    observation_parameter: string,
    /** The type of analysis methodology used to detect the anomaly. This indicates how the anomaly was identified through different analytical approaches. Common types include: Frequency Analysis, Time Pattern Analysis, Volume Analysis, Sequence Analysis, Distribution Analysis, etc. */
    observation_type?: string,
    /** Details about the observed anomaly or observations that were flagged as anomalous compared to expected baseline behavior. */
    observations: OcsfObservation[],
    /** The specific pattern identified within the observation type. For Frequency Analysis, this could be 'FREQUENT', 'INFREQUENT', 'RARE', or 'UNSEEN'. For Time Pattern Analysis, this could be 'BUSINESS_HOURS', 'OFF_HOURS', or 'UNUSUAL_TIME'. For Volume Analysis, this could be 'NORMAL_VOLUME', 'HIGH_VOLUME', or 'SURGE'. The pattern values are specific to each observation type and indicate how the observed behavior relates to the baseline. */
    observed_pattern?: string,
}


/**
 * Describes the analysis of activity patterns and anomalies of target entities to identify potential security threats, performance issues, or other deviations from established baselines. This includes monitoring and analyzing user interactions, API usage, resource utilization, access patterns and other measured indicators.
 */
export interface OcsfAnomalyAnalysis {
    /** The analysis targets define the scope of monitored activities, specifying what entities, systems or processes are analyzed for activity patterns. */
    analysis_targets: OcsfAnalysisTarget[],
    /** List of detected activities that significantly deviate from the established baselines. This can include unusual access patterns, unexpected user-agents, abnormal API usage, suspicious traffic spikes, unauthorized access attempts, and other activities that may indicate potential security threats or system issues. */
    anomalies: OcsfAnomaly[],
    /** List of established patterns representing normal activity that serve as reference points for anomaly detection. This includes typical user interaction patterns like common user-agents, expected API access frequencies and patterns, standard resource utilization levels, and regular traffic flows. These baselines help establish what constitutes 'normal' activity in the system. */
    baselines?: OcsfBaseline[],
}


/**
 * The API, or Application Programming Interface, object represents  information pertaining to an API request and response.
 */
export interface OcsfApi extends OcsfObjectBase {
    /** The information pertaining to the API group. */
    group?: OcsfGroup,
    /** Verb/Operation associated with the request */
    operation: string,
    /** Details pertaining to the API request. */
    request?: OcsfRequest,
    /** Details pertaining to the API response. */
    response?: OcsfResponse,
    /** The information pertaining to the API service. */
    service?: OcsfService,
    /** The API or client token used to authenticate or authorize the API request. This attribute contains the base <code>token</code> object that represents: (1) IdP-issued client tokens (type_id: 6) such as Okta API tokens or Microsoft Entra ID Application Registration client secrets, or (2) generic API tokens/keys (type_id: 7) used for SaaS application authentication. Use this attribute when the API request was authenticated using a token that should be tracked as part of the API activity event. Note: Protocol-specific authentication tokens (Kerberos, OIDC, SAML) should be represented using <code>authentication_token</code> in authentication events, not in API activity events. */
    token?: OcsfToken,
    /** The version of the API service. */
    version?: string,
}


/**
 * An Application describes the details for an inventoried application as reported by an Application Security tool or other Developer-centric tooling. Applications can be defined as Kubernetes resources, Containerized resources, or application hosting-specific cloud sources such as AWS Elastic BeanStalk, AWS Lightsail, or Azure Logic Apps.
 */
export interface OcsfApplication extends OcsfObjectBase {
    /** The criticality of the application as defined by the event source. */
    criticality?: string,
    /** Additional data describing the application. */
    data?: string,
    /** A description or commentary for an application, usually retrieved from an upstream system. */
    desc?: string,
    /** The name of the related application or associated resource group. */
    group?: OcsfGroup,
    /** The fully qualified name of the application. */
    hostname?: string,
    /** The list of labels associated to the application. */
    labels?: string[],
    /** The name of the application. */
    name?: string,
    /** The identity of the service or user account that owns the application. */
    owner?: OcsfUser,
    /** The software product that this application is an instance of, carrying product identity such as <code>vendor_name</code>, <code>cpe_name</code>, and canonical <code>version</code>. */
    product?: OcsfProduct,
    /** The cloud region of the resource. */
    region?: string,
    /** A graph representation showing how this application relates to and interacts with other entities in the environment. This can include parent/child relationships, dependencies, or other connections. */
    resource_relationship?: OcsfGraph,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: number,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** The Software Bill of Materials (SBOM) associated with the application */
    sbom?: OcsfSbom,
    /** The list of tags; <code>{key:value}</code> pairs associated to the application. */
    tags?: OcsfKeyValueObject[],
    /** The type of application as defined by the event source, e.g., <code>GitHub</code>, <code>Azure Logic App</code>, or <code>Amazon Elastic BeanStalk</code>. */
    type?: string,
    /** The unique identifier for the application. */
    uid?: string,
    /** An alternative or contextual identifier for the application, such as a configuration, organization, or license UID. */
    uid_alt?: string,
    /** The URL of the application. */
    url?: OcsfUrl,
    /** The semantic version of the application, e.g., <code>1.7.4</code>. */
    version?: string,
}


/**
 * The Assessment object describes a point-in-time assessment, check, or evaluation of a specific configuration or signal against an asset, entity, person, or otherwise. For example, this can encapsulate <code>os_signals</code> from CrowdStrike Falcon Zero Trust Assessments, or account for <code>Datastore</code> configurations from Cyera, or capture details of Microsoft Intune configuration policies.
 */
export interface OcsfAssessment extends OcsfEntity {
    /** The category that the assessment is part of. For example: <code>Prevention</code> or <code>Windows 10</code>. */
    category?: string,
    /** The description of the assessment criteria, or a description of the specific configuration or signal the assessment is targeting. */
    desc?: string,
    /** Determines whether the assessment against the specific configuration or signal meets the assessments criteria. For example, if the assessment checks if a <code>Datastore</code> is encrypted or not, having encryption would be evaluated as <code>true</code>. */
    meets_criteria: boolean,
    /** The details of any policy associated with an assessment. */
    policy?: OcsfPolicy,
}


/**
 * The Attack object describes the tactic, technique, sub-technique & mitigation associated to an attack.
 */
export interface OcsfAttack extends OcsfObjectBase {
    /** The Mitigation object describes the MITRE ATT&CK® or ATLAS™ Mitigation ID and/or name that is associated to an attack. */
    mitigation?: OcsfMitigation,
    /** The Sub-technique object describes the MITRE ATT&CK® or ATLAS™ Sub-technique ID and/or name associated to an attack. */
    sub_technique?: OcsfSubTechnique,
    /** The Tactic object describes the Tactic ID and/or name associated to an attack. */
    tactic?: OcsfTactic,
    /** The Tactics associated with the attack technique. */
    tactics?: OcsfTactic[],
    /** The Technique object describes the MITRE ATT&CK® or ATLAS™ Technique ID and/or name associated to an attack. */
    technique?: OcsfTechnique,
    /** The ATT&CK® or ATLAS™ Matrix version. */
    version?: string,
}


/**
 * A cryptographic attestation that an event has not been altered since it was produced and was produced by the holder of a verifiable identity, providing integrity, authenticity, and non-repudiation. The attestation is computed over a canonical serialization of the event: the entire event, including the attestation's own <code>authority_uid</code>, <code>chain_uid</code>, and <code>prev_event</code> attributes, and excluding only the attestation's <code>fingerprint</code> and <code>signatures</code>. Because <code>prev_event</code> is inside the serialized content, deleting or altering an event in a chain breaks the fingerprint and signatures of the event that references it. An attestation may carry more than one signature (for example, a co-signature, notary, or witness over the same event). The verifiable identity is a technical credential, such as a key or certificate, and is not an attribution of any person, organization, or state.
 */
export interface OcsfAttestation extends OcsfObjectBase {
    /** Unique identifier of the authority that produced this attestation. When the attestation has a signature, <code>authority_uid</code> ties the signing credential to a known party: because signing credentials rotate and expire, a verifier uses this identifier to confirm that the credential belongs to the expected authority, rather than to a different holder of some otherwise-valid credential. Where multiple <code>signatures</code> are present, it identifies the authority that produced the attestation; the identity of each co-signer is carried within its own <code>digital_signature</code> object. Included in the canonical serialization. */
    authority_uid?: string,
    /** Identifier of the append-only chain, such as a forensic or audit log, that this event belongs to. It groups a sequence of attestations so that an independent verifier can locate and validate them in order; it identifies the chain itself and is not a reference to any event outside of this one. Stable for the lifetime of the chain. For example, every attestation produced during a single agent session shares one <code>chain_uid</code>, so querying events whose <code>attestation.chain_uid</code> matches retrieves the full chain, including its newest entry, while each event links to its predecessor through <code>prev_event</code>. */
    chain_uid?: string,
    /** The fingerprint of this event's canonical serialization. If <code>signatures</code> are present, each signature is computed over this fingerprint. Without signatures, the fingerprint alone still detects accidental alteration or corruption of the event. The next event in a chain references this value through its own <code>prev_event.fingerprint</code>. */
    fingerprint?: OcsfFingerprint,
    /** Reference to the previous event in a tamper-evident chain, carrying that event's fingerprint together with locator attributes for retrieval. Absent on the first, or genesis, event of a chain. */
    prev_event?: OcsfPrevEvent,
    /** One or more digital signatures, each computed over this event's <code>fingerprint</code> and thereby over the event's canonical serialization, each bound to a verifiable identity. The first entry is typically the producer; additional entries carry co-signatures such as a notary or witness over the same event. The signing algorithm, certificate or public-key material, and signing time are carried within each <code>digital_signature</code> object. */
    signatures?: OcsfDigitalSignature[],
    /** Unique identifier of this attestation. It distinguishes an individual attestation, such as a single entry within a tamper-evident chain, from the chain as a whole. See <code>chain_uid</code> for the identifier of the chain itself. */
    uid?: string,
}


/**
 * An Authentication Factor object describes a category of methods used for identity verification in an authentication attempt.
 */
export interface OcsfAuthFactor extends OcsfObjectBase {
    /** Device used to complete an authentication request. */
    device?: OcsfDevice,
    /** The email address used in an email-based authentication factor. */
    email_addr?: string,
    /** The type of authentication factor used in an authentication attempt. */
    factor_type?: string,
    /** The normalized identifier for the authentication factor. */
    factor_type_id: number,
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
 * The Token object is the base object for representing tokens, API keys, and authentication credentials used across different contexts. This object provides common attributes for all token types, including protocol-specific authentication tokens (Kerberos, OIDC, SAML) and API/client tokens used for service authentication. When to use this object: Use the base <code>token</code> object directly in API activity events to represent API tokens, client tokens, or API keys used to authenticate API requests. Examples include: Okta API tokens, Microsoft Entra ID Application Registration client secrets, Stripe API keys, AWS API keys. When NOT to use this object: Do NOT use the base <code>token</code> object for protocol-specific authentication tokens in authentication events - use <code>authentication_token</code> instead (which extends this object). Do NOT use <code>token</code> for tracking credential lifecycle and usage patterns - use <code>programmatic_credential</code> instead.
 */
export interface OcsfToken extends OcsfObjectBase {
    /** The time that the token was created. */
    created_time?: number,
    /** The time that the token was created. */
    created_time_dt?: string,
    /** The expiration time of the token. */
    expiration_time?: number,
    /** The expiration time of the token. */
    expiration_time_dt?: string,
    /** Indicates whether the token is renewable. */
    is_renewable?: boolean,
    /** The last time the token was updated. */
    modified_time?: number,
    /** The last time the token was updated. */
    modified_time_dt?: string,
    /** The human-friendly name of a token or key, if available, such as the <code>name</code> from the Okta API Token API. */
    name?: string,
    /** The unique identifier of the tenant or organization that owns the token or key, or the tenant context in which the token is authorized for use. This is particularly relevant in multi-tenant Identity Provider scenarios where tokens are scoped to specific tenants. */
    tenant_uid?: string,
    /** The type of the token, normalized to the caption of the <code>type_id</code> value. This indicates whether the token is a Client Token, API Token, or one of the protocol-specific token types. */
    type?: string,
    /** The normalized token type identifier. Valid values: 0 (Unknown), 1 (Ticket Granting Ticket - Kerberos), 2 (Service Ticket - Kerberos), 3 (Identity Token - OIDC), 4 (Refresh Token - OIDC), 5 (SAML Assertion), 6 (Client Token - IdP-issued), 7 (API Token - generic API keys), 99 (Other). */
    type_id?: number,
    /** The unique ID of a token or key, if available, such as the <code>Secret ID</code> of Entra ID Application Registration Client Secrets. */
    uid?: string,
    /** The network zone or geographic region that the token or key is authorized to be used from. This may represent network-based access restrictions, geographic limitations, or other zone-based authorization policies. Examples include Okta's network zone restrictions or cloud provider region restrictions. */
    zone?: string,
}


/**
 * The Authentication Token object extends the base <code>token</code> object and represents standardized authentication tokens, tickets, or assertions that conform to established authentication protocols such as Kerberos, OIDC, and SAML. This object inherits all attributes from <code>token</code> and adds protocol-specific attributes (e.g., <code>kerberos_flags</code>, <code>encryption_details</code>) for authentication events. Use this object in authentication events to represent protocol-specific tokens: Kerberos Ticket Granting Tickets (TGT) and Service Tickets (ST), OIDC Identity Tokens and Refresh Tokens, and SAML Assertions. These tokens are issued by authentication servers and identity providers and carry protocol-specific metadata, lifecycle information, and security attributes defined by their respective specifications. When to use this object: Use <code>authentication_token</code> when representing protocol-specific authentication tokens (type_id values 1-5: Kerberos TGT/ST, OIDC ID/Refresh tokens, SAML assertions) in authentication events. When NOT to use this object: Do NOT use <code>authentication_token</code> for API tokens or client tokens (type_id values 6-7) used in API activity events - use the base <code>token</code> object instead. Do NOT use <code>authentication_token</code> for generic API keys - use the base <code>token</code> object instead.
 */
export interface OcsfAuthenticationToken extends OcsfToken {
    /** The encryption details of the authentication token. */
    encryption_details?: OcsfEncryptionDetails,
    /** A bitmask, either in hexadecimal or decimal form, which encodes various attributes or permissions associated with a Kerberos ticket. These flags delineate specific characteristics of the ticket, such as its renewability or forwardability. */
    kerberos_flags?: string,
}


/**
 * The Authorization Result object provides details about the authorization outcome and associated policies related to activity.
 */
export interface OcsfAuthorization extends OcsfObjectBase {
    /** Authorization Result/outcome, e.g. allowed, denied. */
    decision?: string,
    /** Details about the Identity/Access management policies that are applicable. */
    policy?: OcsfPolicy,
}


/**
 * An autonomous system (AS) is a collection of connected Internet Protocol (IP) routing prefixes under the control of one or more network operators on behalf of a single administrative entity or domain that presents a common, clearly defined routing policy to the internet.
 */
export interface OcsfAutonomousSystem extends OcsfObjectBase {
    /** Organization name for the Autonomous System. */
    name?: string,
    /** Unique number that the AS is identified by. */
    number?: number,
}


/**
 * Describes the baseline or expected behavior of a system, service, or component based on historical observations and measurements. It establishes reference points for comparison to detect anomalies, trends, and deviations from typical patterns.
 */
export interface OcsfBaseline extends OcsfObjectBase {
    /** The specific parameter or property being monitored. Examples include: CPU usage percentage, API response time in milliseconds, HTTP error rate, memory utilization, network latency, transaction volume, etc. */
    observation_parameter: string,
    /** The type of analysis being performed to establish baseline behavior. Common types include: Frequency Analysis, Time Pattern Analysis, Volume Analysis, Sequence Analysis, Distribution Analysis, etc. */
    observation_type?: string,
    /** Collection of actual measured values, data points and observations recorded for this baseline. */
    observations: OcsfObservation[],
    /** The specific pattern identified within the observation type. For Frequency Analysis, this could be 'FREQUENT', 'INFREQUENT', 'RARE', or 'UNSEEN'. For Time Pattern Analysis, this could be 'BUSINESS_HOURS', 'OFF_HOURS', or 'UNUSUAL_TIME'. For Volume Analysis, this could be 'NORMAL_VOLUME', 'HIGH_VOLUME', or 'SURGE'. The pattern values are specific to each observation type and indicate the baseline behavior. */
    observed_pattern?: string,
}


/**
 * Campaign represent organized efforts by threat actors to achieve malicious objectives over a period, often characterized by shared tactics, techniques, and procedures (TTPs).
 */
export interface OcsfCampaign extends OcsfObjectBase {
    /** The name of a specific campaign associated with a cyber threat. */
    name: string,
}


/**
 * The Digital Certificate, also known as a Public Key Certificate, object contains information about the ownership and usage of a public key. It serves as a means to establish trust in the authenticity and integrity of the public key and the associated entity.
 */
export interface OcsfCertificate extends OcsfObjectBase {
    /** The time when the certificate was created. */
    created_time?: number,
    /** The time when the certificate was created. */
    created_time_dt?: string,
    /** The expiration time of the certificate. */
    expiration_time?: number,
    /** The expiration time of the certificate. */
    expiration_time_dt?: string,
    /** The fingerprint list of the certificate. */
    fingerprints?: OcsfFingerprint[],
    /** Denotes whether a digital certificate is self-signed or signed by a known certificate authority (CA). */
    is_self_signed?: boolean,
    /** The certificate issuer distinguished name. */
    issuer: string,
    /** The list of subject alternative names that are secured by a specific certificate. */
    sans?: OcsfSan[],
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
 * The check object defines a specific, testable compliance verification point that evaluates a target device against a standard, framework, or custom requirement. While checks are typically associated with formal standards (like CIS, NIST, or ISO), they can also represent custom or organizational requirements. When mapped to controls, checks can evaluate specific control_parameters to determine compliance status, but neither the control mapping nor control_parameters are required for a valid check.
 */
export interface OcsfCheck extends OcsfObjectBase {
    /** The detailed description of the compliance check, explaining the security requirement, vulnerability, or configuration being assessed. For example, CIS: <code>The cramfs filesystem type is a compressed read-only Linux filesystem. Removing support for unneeded filesystem types reduces the local attack surface.</code> or DISA STIG: <code>Unauthorized access to the information system by foreign entities may result in loss or compromise of data.</code> */
    desc?: string,
    /** The name or title of the compliance check. For example, CIS: <code>Ensure mounting of cramfs filesystems is disabled</code> or DISA STIG: <code>The Ubuntu operating system must implement DoD-approved encryption to protect the confidentiality of remote access sessions</code>. */
    name?: string,
    /** Describes details about the resource that this check evaluated. */
    resource?: OcsfResourceDetails,
    /** The severity level as defined in the source document. For example CIS Benchmarks, valid values are: <code>Level 1</code> (security-forward, essential settings), <code>Level 2</code> (security-focused environment, more restrictive), or <code>Scored/Not Scored</code> (whether compliance can be automatically checked). For DISA STIG, valid values are: <code>CAT I</code> (maps to severity_id 5/Critical), <code>CAT II</code> (maps to severity_id 4/High), or <code>CAT III</code> (maps to severity_id 3/Medium). */
    severity?: string,
    /** The normalized severity identifier that maps severity levels to standard severity levels. For example CIS Benchmark: <code>Level 2</code> maps to <code>4</code> (High), <code>Level 1</code> maps to <code>3</code> (Medium). For DISA STIG: <code>CAT I</code> maps to <code>5</code> (Critical), <code>CAT II</code> maps to <code>4</code> (High), and <code>CAT III</code> maps to <code>3</code> (Medium). */
    severity_id?: number,
    /** The regulatory or industry standard this check is associated with. E.g., <code>PCI DSS 3.2.1</code>, <code>HIPAA Security Rule</code>, <code>NIST SP 800-53 Rev. 5</code>, or <code>ISO/IEC 27001:2013</code>. */
    standards?: string[],
    /** The resultant status of the compliance check normalized to the caption of the <code>status_id</code> value. For example, CIS Benchmark: <code>Pass</code> when all requirements are met, <code>Fail</code> when requirements are not met, or DISA STIG: <code>NotAFinding</code> (maps to status_id 1/Pass), <code>Open</code> (maps to status_id 3/Fail). */
    status?: string,
    /** The normalized status identifier of the compliance check. */
    status_id?: number,
    /** The unique identifier of the compliance check within its standard or framework. For example, CIS Benchmark identifier <code>1.1.1.1</code>, DISA STIG identifier <code>V-230234</code>, or NIST control identifier <code>AC-17(2)</code>. */
    uid?: string,
    /** The check version. For example, CIS Benchmark: <code>1.1.0</code> for Amazon Linux 2 or DISA STIG: <code>V2R1</code> for Windows 10. */
    version?: string,
}


/**
 * The CIS Benchmark object describes best practices for securely configuring IT systems, software, networks, and cloud infrastructure as defined by the Center for Internet Security. See also Getting to Know the CIS Benchmarks.
 */
export interface OcsfCisBenchmark extends OcsfObjectBase {
    /** The CIS Critical Security Controls is a prioritized set of actions to protect your organization and data from cyber-attack vectors. */
    cis_controls?: OcsfCisControl[],
    /** The CIS Benchmark description. For example: <i>The cramfs filesystem type is a compressed read-only Linux filesystem embedded in small footprint systems. A cramfs image can be used without having to first decompress the image.</i> */
    desc?: string,
    /** The CIS Benchmark name. For example: <i>Ensure mounting of cramfs filesystems is disabled.</i> */
    name: string,
}


/**
 * The CIS Benchmark Result object contains information as defined by the Center for Internet Security (CIS) benchmark result. CIS Benchmarks are a collection of best practices for securely configuring IT systems, software, networks, and cloud infrastructure.
 */
export interface OcsfCisBenchmarkResult extends OcsfObjectBase {
    /** The CIS benchmark description. */
    desc?: string,
    /** The CIS benchmark name. */
    name: string,
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
    /** The CIS benchmark rule. */
    rule?: OcsfRule,
}


/**
 * The CIS Control (aka Critical Security Control) object describes a prioritized set of actions to protect your organization and data from cyber-attack vectors. The CIS Controls are defined by the Center for Internet Security.
 */
export interface OcsfCisControl extends OcsfObjectBase {
    /** The CIS Control description. For example: <i>Uninstall or disable unnecessary services on enterprise assets and software, such as an unused file sharing service, web application module, or service function.</i> */
    desc?: string,
    /** The CIS Control name. For example: <i>4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software.</i> */
    name: string,
    /** The CIS Control version. For example: <i>v8</i>. */
    version?: string,
}


/**
 * The CIS Critical Security Control (CSC) contains information as defined by the Center for Internet Security Critical Security Controls (CIS CSC). Prioritized set of actions to protect your organization and data from cyber-attack vectors.
 */
export interface OcsfCisCsc extends OcsfObjectBase {
    /** A Control is prescriptive, prioritized, and simplified set of best practices that one can use to strengthen their cybersecurity posture. e.g. AWS SecurityHub Controls, CIS Controls. */
    control: string,
    /** The CIS critical security control version. */
    version?: string,
}


/**
 * The Classifier Details object describes details about the classifier used for data classification.
 */
export interface OcsfClassifierDetails extends OcsfObjectBase {
    /** The name of the classifier. */
    name?: string,
    /** The type of the classifier. */
    type: string,
    /** The unique identifier of the classifier. */
    uid?: string,
}


/**
 * The Clipboard object represents an endpoint clipboard and its contents.
 */
export interface OcsfClipboard extends OcsfObjectBase {
    /** The data items written to, or read from, the clipboard. */
    contents?: OcsfClipboardItem[],
    /** The name of the clipboard on systems with named clipboards. For example: <code>General</code> or <code>Drag</code>. */
    name?: string,
}


/**
 * A piece of data on the system clipboard.
 */
export interface OcsfClipboardItem extends OcsfObjectBase {
    /** The item's data in binary form, used when the clipboard content cannot be represented as text or when preserving the exact binary representation is required. */
    binary_data?: string,
    /** The type of the item's data, in an operating specific form. For example: <code>CF_TEXT</code> or <code>public.utf8-plain-text</code>. */
    clipboard_native_type?: string,
    /** The Multipurpose Internet Mail Extensions (MIME) type of the item's data. For example: <code>text/plain</code>. */
    mime_type: string,
    /** The item's data if it can be represented as a UTF-8 string. */
    string_data?: string,
}


/**
 * The Cloud object describes the cloud computing environment where an event or finding originated. It provides comprehensive context about the cloud infrastructure, including the cloud service provider, account or subscription details, organizational structure, geographic regions, availability zones, and logical partitions.
 */
export interface OcsfCloud extends OcsfObjectBase {
    /** The Account object containing details about the cloud account, subscription, or billing unit where the event or finding was created. This object includes properties such as the account name, unique identifier, type, labels, and tags.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong> Account object with <code>name</code>, <code>uid</code> (Account ID), <code>type</code>, and other account properties</li><li><strong>Azure:</strong> Subscription object with <code>name</code>, <code>uid</code> (Subscription ID), <code>type</code>, and subscription metadata</li><li><strong>GCP:</strong> Project object with <code>name</code>, <code>uid</code> (Project ID), <code>type</code>, and project attributes</li><li><strong>Oracle Cloud:</strong> Compartment object with <code>name</code>, <code>uid</code> (Tenancy OCID), <code>type</code>, and compartment details</li></ul> */
    account?: OcsfAccount,
    /** The logical grouping or isolated segment within a cloud provider's infrastructure where the event or finding was created, often used for compliance, governance, or regional separation.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong> Partition where the event occurred (<code>aws</code>, <code>aws-cn</code>, <code>aws-us-gov</code>)</li><li><strong>Azure:</strong> Cloud environment where the event occurred (<code>AzureCloud</code>, <code>AzureUSGovernment</code>, <code>AzureChinaCloud</code>)</li></ul> */
    cloud_partition?: string,
    /** The Organization object containing details about the organizational unit or management structure that governs the account, subscription, or project where the event or finding was created. This object includes properties such as the organization name, unique identifier, type, and other organizational metadata.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong> Organization object with <code>name</code>, <code>uid</code> (Organization ID), <code>type</code>, and other organizational properties</li><li><strong>Azure:</strong> Management Group object with <code>name</code>, <code>uid</code> (Management Group ID), <code>type</code>, and management group metadata</li><li><strong>GCP:</strong> Organization object with <code>name</code>, <code>uid</code> (Organization ID), <code>type</code>, and organizational attributes</li><li><strong>Oracle Cloud:</strong> Tenancy object with <code>name</code>, <code>uid</code> (Tenancy OCID), <code>type</code>, and tenancy details</li></ul> */
    org?: OcsfOrganization,
    /** The unique identifier of a Cloud project. */
    project_uid?: string,
    /** The unique name of the Cloud services provider where the event or finding was created. Examples include AWS, Azure, GCP (Google Cloud Platform), Oracle Cloud, IBM Cloud, Alibaba Cloud, or other public, private, or hybrid cloud providers. */
    provider: string,
    /** The cloud region where the event or finding was created, as defined by the cloud provider.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong> Region where the event occurred (<code>us-east-1</code>, <code>eu-west-1</code>)</li><li><strong>Azure:</strong> Region where the event occurred (<code>East US</code>, <code>West Europe</code>)</li><li><strong>GCP:</strong> Region where the event occurred (<code>us-central1</code>, <code>europe-west1</code>)</li><li><strong>Oracle Cloud:</strong> Region where the event occurred (<code>us-ashburn-1</code>, <code>uk-london-1</code>)</li></ul> */
    region?: string,
    /** The availability zone in the cloud region where the event or finding was created, as defined by the cloud provider.<br/><br/><strong>Examples:</strong><ul><li><strong>AWS:</strong> Availability zone where the event occurred (<code>us-east-1a</code>, <code>us-east-1b</code>)</li><li><strong>Azure:</strong> Availability zone where the event occurred (<code>1</code>, <code>2</code>, <code>3</code> within a region)</li><li><strong>GCP:</strong> Availability zone where the event occurred (<code>us-central1-a</code>, <code>us-central1-b</code>)</li><li><strong>Oracle Cloud:</strong> Availability zone where the event occurred (<code>AD-1</code>, <code>AD-2</code>, <code>AD-3</code>)</li></ul> */
    zone?: string,
}


/**
 * The Compliance object contains information about Industry and Regulatory Framework standards, controls and requirements or details about custom assessments utilized in a compliance evaluation. Standards define broad security frameworks, controls represent specific security requirements within those frameworks, and checks are the testable verification points used to determine if controls are properly implemented.
 */
export interface OcsfCompliance extends OcsfObjectBase {
    /** A list of assessments associated with the compliance requirements evaluation. */
    assessments?: OcsfAssessment[],
    /** The category a control framework pertains to, as reported by the source tool, such as <code>Asset Management</code> or <code>Risk Assessment</code>. */
    category?: string,
    /** A list of compliance checks associated with specific industry standards or frameworks. Each check represents an individual rule or requirement that has been evaluated against a target device. Checks typically include details such as the check name (e.g., CIS: 'Ensure mounting of cramfs filesystems is disabled' or DISA STIG descriptive titles), unique identifiers (such as CIS identifier '1.1.1.1' or DISA STIG identifier 'V-230234'), descriptions (detailed explanations of security requirements or vulnerability discussions), and version information. */
    checks?: OcsfCheck[],
    /** A list of reference KB articles that provide information to help organizations understand, interpret, and implement compliance standards. They provide guidance, best practices, and examples. */
    compliance_references?: OcsfKbArticle[],
    /** A list of established guidelines or criteria that define specific requirements an organization must follow. */
    compliance_standards?: OcsfKbArticle[],
    /** A Control is a prescriptive, actionable set of specifications that strengthens device posture. The control specifies required security measures, while the specific implementation values are defined in control_parameters. E.g., CIS AWS Foundations Benchmark 1.2.0 - Control 2.1 - Ensure CloudTrail is enabled in all regions */
    control?: string,
    /** The list of control parameters evaluated in a Compliance check. E.g., parameters for CloudTrail configuration might include <code>multiRegionTrailEnabled: true</code>, <code>logFileValidationEnabled: true</code>, and <code>requiredRegions: [us-east-1, us-west-2]</code> */
    control_parameters?: OcsfKeyValueObject[],
    /** The description or criteria of a control. */
    desc?: string,
    /** The specific compliance requirements being evaluated. E.g., <code>PCI DSS Requirement 8.2.3 - Passwords must meet minimum complexity requirements</code> or <code>HIPAA Security Rule 164.312(a)(2)(iv) - Implement encryption and decryption mechanisms</code> */
    requirements?: string[],
    /** The regulatory or industry standards being evaluated for compliance. */
    standards?: string[],
    /** The resultant status of the compliance check normalized to the caption of the <code>status_id</code> value. In the case of 'Other', it is defined by the event source. */
    status?: string,
    /** The resultant status code of the compliance check. */
    status_code?: string,
    /** The contextual description of the <code>status, status_code</code> values. */
    status_detail?: string,
    /** A list of contextual descriptions of the <code>status, status_code</code> values. */
    status_details?: string[],
    /** The normalized status identifier of the compliance check. */
    status_id?: number,
}


/**
 * The Container object describes an instance of a specific container. A container is a prepackaged, portable system image that runs isolated on an existing system using a container runtime like containerd.
 */
export interface OcsfContainer extends OcsfObjectBase {
    /** Commit hash of image created for docker or the SHA256 hash of the container. For example: <code>13550340a8681c84c861aac2e5b440161c2b33a3e4f302ac680ca5b686de48de</code>. */
    hash?: OcsfFingerprint,
    /** The container image used as a template to run the container. */
    image?: OcsfImage,
    /** The list of labels associated to the container. */
    labels?: string[],
    /** The container name. */
    name?: string,
    /** The network driver used by the container. For example, bridge, overlay, host, none, etc. */
    network_driver?: string,
    /** The orchestrator managing the container, such as ECS, EKS, K8s, or OpenShift. */
    orchestrator?: string,
    /** The unique identifier of the pod (or equivalent) that the container is executing on. */
    pod_uuid?: string,
    /** The backend running the container, such as containerd or cri-o. */
    runtime?: string,
    /** The size of the container image. */
    size?: number,
    /** The tag used by the container. It can indicate version, format, OS. */
    tag?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the container. */
    tags?: OcsfKeyValueObject[],
    /** The full container unique identifier for this instantiation of the container. For example: <code>ac2ea168264a08f9aaca0dfc82ff3551418dfd22d02b713142a6843caa2f61bf</code>. */
    uid?: string,
}


/**
 * The CPU information object contains attributes describing a physical CPU package installed in the device.
 */
export interface OcsfCpuInfo extends OcsfObjectBase {
    /** The number of processing cores or compute units for the component. */
    cores?: number,
    /** The CPU architecture, normalized to the caption of the <code>cpu_architecture_id</code> value. In the case of <code>Other</code>, it is defined by the source. */
    cpu_architecture?: string,
    /** The normalized identifier of the CPU architecture. */
    cpu_architecture_id?: number,
    /** The number of bits used by the CPU for memory addressing. */
    cpu_bits?: number,
    /** The model name of the CPU. For example: <code>Intel Xeon Gold 6348</code>, <code>AMD EPYC 7763</code>, or <code>Apple M3 Max</code>. */
    model?: string,
    /** The nominal clock speed of the unit, expressed in megahertz. */
    speed_mhz?: number,
    /** The name of the vendor of the CPU. For example: <code>Intel</code>, <code>AMD</code>, or <code>Apple</code>. */
    vendor_name?: string,
}


/**
 * The Common Vulnerabilities and Exposures (CVE) object represents publicly disclosed cybersecurity vulnerabilities defined in CVE Program catalog (CVE). There is one CVE Record for each vulnerability in the catalog.
 */
export interface OcsfCve extends OcsfObjectBase {
    /** The Record Creation Date identifies when the CVE ID was issued to a CVE Numbering Authority (CNA) or the CVE Record was published on the CVE List. Note that the Record Creation Date does not necessarily indicate when this vulnerability was discovered, shared with the affected vendor, publicly disclosed, or updated in CVE. */
    created_time?: number,
    /** The Record Creation Date identifies when the CVE ID was issued to a CVE Numbering Authority (CNA) or the CVE Record was published on the CVE List. Note that the Record Creation Date does not necessarily indicate when this vulnerability was discovered, shared with the affected vendor, publicly disclosed, or updated in CVE. */
    created_time_dt?: string,
    /** The CVSS object details Common Vulnerability Scoring System scores from the advisory that are related to the vulnerability. */
    cvss?: OcsfCvss[],
    /** The CWE object represents a weakness in a software system that can be exploited by a threat actor to perform an attack. The CWE object is based on the Common Weakness Enumeration (CWE) catalog. */
    cwe?: OcsfCwe,
    /** The Common Weakness Enumeration (CWE) unique identifier. For example: <code>CWE-787</code>. */
    cwe_uid?: string,
    /** Common Weakness Enumeration (CWE) definition URL. For example: <code>https://cwe.mitre.org/data/definitions/787.html</code>. */
    cwe_url?: string,
    /** A brief description of the CVE Record. */
    desc?: string,
    /** The Exploit Prediction Scoring System (EPSS) object describes the estimated probability a vulnerability will be exploited. EPSS is a community-driven effort to combine descriptive information about vulnerabilities (CVEs) with evidence of actual exploitation in-the-wild. */
    epss?: OcsfEpss,
    /** The Record Modified Date identifies when the CVE record was last updated. */
    modified_time?: number,
    /** The Record Modified Date identifies when the CVE record was last updated. */
    modified_time_dt?: string,
    /** The product where the vulnerability was discovered. */
    product?: OcsfProduct,
    /** A list of reference URLs with additional information about the CVE Record. */
    references?: string[],
    /** Describes the Common Weakness Enumeration details related to the CVE Record. */
    related_cwes?: OcsfCwe[],
    /** A title or a brief phrase summarizing the CVE record. */
    title?: string,
    /** <p>The vulnerability type as classified in the CVE catalog.</p>Most frequently used vulnerability types are: <code>DoS</code>, <code>Code Execution</code>, <code>Overflow</code>, <code>Memory Corruption</code>, <code>Sql Injection</code>, <code>XSS</code>, <code>Directory Traversal</code>, <code>Http Response Splitting</code>, <code>Bypass something</code>, <code>Gain Information</code>, <code>Gain Privileges</code>, <code>CSRF</code>, <code>File Inclusion</code>. For more information see Vulnerabilities By Type distributions. */
    type?: string,
    /** The Common Vulnerabilities and Exposures unique number assigned to a specific computer vulnerability. A CVE Identifier begins with 4 digits representing the year followed by a sequence of digits that acts as a unique identifier. For example: <code>CVE-2021-12345</code>. */
    uid: string,
}


/**
 * The Common Vulnerability Scoring System (CVSS) object provides a way to capture the principal characteristics of a vulnerability and produce a numerical score reflecting its severity.
 */
export interface OcsfCvss extends OcsfObjectBase {
    /** The CVSS base score. For example: <code>9.1</code>. */
    base_score: number,
    /** The CVSS depth represents a depth of the equation used to calculate CVSS score. */
    depth?: string,
    /** The Common Vulnerability Scoring System metrics. This attribute contains information on the CVE's impact. If the CVE has been analyzed, this attribute will contain any CVSSv2 or CVSSv3 information associated with the vulnerability. For example: <code>{ {"Access Vector", "Network"}, {"Access Complexity", "Low"}, ...}</code>. */
    metrics?: OcsfMetric[],
    /** The CVSS overall score, impacted by base, temporal, and environmental metrics. For example: <code>9.1</code>. */
    overall_score?: number,
    /** <p>The Common Vulnerability Scoring System (CVSS) Qualitative Severity Rating. A textual representation of the numeric score.</p><strong>CVSS v2.0</strong><ul><li>Low (0.0 – 3.9)</li><li>Medium (4.0 – 6.9)</li><li>High (7.0 – 10.0)</li></ul></p><strong>CVSS v3.0</strong><ul><li>None (0.0)</li><li>Low (0.1 - 3.9)</li><li>Medium (4.0 - 6.9)</li><li>High (7.0 - 8.9)</li><li>Critical (9.0 - 10.0)</li></ul> */
    severity?: string,
    /** The source URL for the CVSS score. For example: <code>https://nvd.nist.gov/vuln/detail/CVE-2021-44228</code> */
    src_url?: string,
    /** The CVSS vector string is a text representation of a set of CVSS metrics. It is commonly used to record or transfer CVSS metric information in a concise form. For example: <code>3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:H</code>. */
    vector_string?: string,
    /** The vendor that provided the CVSS score. For example: <code>NVD, REDHAT</code> etc. */
    vendor_name?: string,
    /** The CVSS version. For example: <code>3.1</code>. */
    version: string,
}


/**
 * The CWE object represents a weakness in a software system that can be exploited by a threat actor to perform an attack. The CWE object is based on the Common Weakness Enumeration (CWE) catalog.
 */
export interface OcsfCwe extends OcsfObjectBase {
    /** The caption assigned to the Common Weakness Enumeration unique identifier. */
    caption?: string,
    /** URL pointing to the CWE Specification. For more information see <a target='_blank' href='https://cwe.mitre.org/'>CWE.</a> */
    src_url?: string,
    /** The Common Weakness Enumeration unique number assigned to a specific weakness. A CWE Identifier begins "CWE" followed by a sequence of digits that acts as a unique identifier. For example: <code>CWE-123</code>. */
    uid: string,
}


/**
 * The Defensive Tactic object describes the tactic ID and/or name that is associated to an attack.
 */
export interface OcsfD3fTactic extends OcsfEntity {
    /** The versioned permalink of the defensive tactic. For example: <code>https://d3fend.mitre.org/tactic/d3f:Isolate/</code> */
    src_url?: string,
}


/**
 * The Defensive Technique object describes the leaf defensive technique ID and/or name associated to a countermeasure.
 */
export interface OcsfD3fTechnique extends OcsfEntity {
    /** The versioned permalink of the defensive technique. For example: <code>https://d3fend.mitre.org/technique/d3f:IOPortRestriction/</code> */
    src_url?: string,
}


/**
 * The Defensive Countermeasure object describes the tactic & technique associated with a countermeasure.
 */
export interface OcsfD3fend extends OcsfObjectBase {
    /** The Tactic object describes the tactic ID and/or name that is associated with a countermeasure. */
    d3f_tactic?: OcsfD3fTactic,
    /** The Technique object describes the technique ID and/or name associated with a countermeasure. */
    d3f_technique?: OcsfD3fTechnique,
    /** The D3FEND™ Matrix version. */
    version?: string,
}


/**
 * The Data Classification object includes information about data classification levels and data category types.
 */
export interface OcsfDataClassification extends OcsfObjectBase {
    /** The name of the data classification category that data matched into, e.g. Financial, Personal, Governmental, etc. */
    category?: string,
    /** The normalized identifier of the data classification category. */
    category_id?: number,
    /** Describes details about the classifier used for data classification. */
    classifier_details?: OcsfClassifierDetails,
    /** The file content confidentiality, normalized to the confidentiality_id value. In the case of 'Other', it is defined by the event source. */
    confidentiality?: string,
    /** The normalized identifier of the file content confidentiality indicator. */
    confidentiality_id?: number,
    /** Details about the data discovered by classification job. */
    discovery_details?: OcsfDiscoveryDetails[],
    /** Details about the data policy that governs data handling and security measures related to classification. */
    policy?: OcsfPolicy,
    /** Size of the data classified. */
    size?: number,
    /** The source URL pointing towards the full classification job details. */
    src_url?: string,
    /** The resultant status of the classification job normalized to the caption of the <code>status_id</code> value. In the case of 'Other', it is defined by the event source. */
    status?: string,
    /** The contextual description of the <code>status, status_id</code> value. */
    status_details?: string[],
    /** The normalized status identifier of the classification job. */
    status_id?: number,
    /** The total count of discovered entities, by the classification job. */
    total?: number,
    /** The unique identifier of the classification job. */
    uid?: string,
}


/**
 * The Data Security object describes the characteristics, techniques and content of a Data Loss Prevention (DLP), Data Loss Detection (DLD), Data Classification, or similar tools' finding, alert, or detection mechanism(s).
 */
export interface OcsfDataSecurity extends OcsfDataClassification {
    /** The name of the stage or state that the data was in. E.g., Data-at-Rest, Data-in-Transit, etc. */
    data_lifecycle_state?: string,
    /** The stage or state that the data was in when it was assessed or scanned by a data security tool. */
    data_lifecycle_state_id?: number,
    /** Specific pattern, algorithm, fingerprint, or model used for detection. */
    detection_pattern?: string,
    /** The data security tool or system that the finding, detection, or alert originated from, normalized to the caption of <code>detection_system_id</code>. E.g., Endpoint, Secure Email Gateway, etc. */
    detection_system?: string,
    /** The normalized identifier of the data security tool or system type from which the finding, detection, or alert originated. When the type is not listed, use <code>99</code> (Other) and populate <code>detection_system</code> with the source-specific label. */
    detection_system_id?: number,
    /** A text, binary, file name, or datastore that matched against a detection rule. */
    pattern_match?: string,
}


/**
 * The database object is used for databases which are typically datastore services that contain an organized collection of structured and unstructured data or a types of data.
 */
export interface OcsfDatabase extends OcsfEntity, OcsfDataClassificationProfile {
    /** The time when the database was known to have been created. */
    created_time?: number,
    /** The time when the database was known to have been created. */
    created_time_dt?: string,
    /** The description of the database. */
    desc?: string,
    /** Model used for creating embeddings (if applicable). For example: <code>text-embedding-ada-002</code> or <code>all-MiniLM-L6-v2</code>. */
    embedding_model?: string,
    /** The group names to which the database belongs. */
    groups?: OcsfGroup[],
    /** The most recent time when any changes, updates, or modifications were made within the database. */
    modified_time?: number,
    /** The most recent time when any changes, updates, or modifications were made within the database. */
    modified_time_dt?: string,
    /** The size of the database in bytes. */
    size?: number,
    /** The database type. */
    type?: string,
    /** The normalized identifier of the database type. */
    type_id: number,
}


/**
 * The databucket object is a basic container that holds data, typically organized through the use of data partitions.
 */
export interface OcsfDatabucket extends OcsfResource, OcsfDataClassificationProfile {
    /** A list of <code>agent</code> objects associated with a device, endpoint, or resource. */
    agent_list?: OcsfAgent[],
    /** The logical grouping or isolated segment within a cloud provider's infrastructure where the databucket is located. */
    cloud_partition?: string,
    /** The time when the databucket was known to have been created. */
    created_time_dt?: string,
    /** The criticality of the databucket as defined by the event source. */
    criticality?: string,
    /** The description of the databucket. */
    desc?: string,
    /** The encryption details of the databucket. Should be populated if the databucket is encrypted. */
    encryption_details?: OcsfEncryptionDetails,
    /** Details about the file/object within a databucket. */
    file?: OcsfFile,
    /** The name of the related resource group. */
    group?: OcsfGroup,
    /** The group names to which the databucket belongs. */
    groups?: OcsfGroup[],
    /** The fully qualified hostname of the databucket. */
    hostname?: string,
    /** The IP address of the resource, in either IPv4 or IPv6 format. */
    ip?: string,
    /** Indicates whether the device or resource has a backup enabled, such as an automated snapshot or a cloud backup. For example, this is indicated by the <code>cloudBackupEnabled</code> value within JAMF Pro mobile devices or the registration of an AWS ARN with the AWS Backup service. */
    is_backed_up?: boolean,
    /** Indicates if the databucket is encrypted. */
    is_encrypted?: boolean,
    /** Indicates if the databucket is publicly accessible. */
    is_public?: boolean,
    /** The most recent time when any changes, updates, or modifications were made within the databucket. */
    modified_time_dt?: string,
    /** The namespace is useful when similar entities exist that you need to keep separate. */
    namespace?: string,
    /** The identity of the service or user account that owns the databucket. */
    owner?: OcsfUser,
    /** The cloud region of the databucket. */
    region?: string,
    /** A graph representation showing how this databucket relates to and interacts with other entities in the environment. This can include parent/child relationships, dependencies, or other connections. */
    resource_relationship?: OcsfGraph,
    /** The size of the databucket in bytes. */
    size?: number,
    /** The normalized identifier of the databucket type. */
    type_id: number,
    /** The version of the resource. For example <code>1.2.3</code>. */
    version?: string,
    /** The specific availability zone within a cloud region where the databucket is located. */
    zone?: string,
}


/**
 * The DCE/RPC, or Distributed Computing Environment/Remote Procedure Call, object describes the remote procedure call system for distributed computing environments.
 */
export interface OcsfDceRpc extends OcsfObjectBase {
    /** The request command (e.g. REQUEST, BIND). */
    command?: string,
    /** The reply to the request command (e.g. RESPONSE, BINDACK or FAULT). */
    command_response?: string,
    /** The list of interface flags. */
    flags: string[],
    /** An operation number used to identify a specific remote procedure call (RPC) method or a method in an interface. */
    opnum?: number,
    /** The RPC Interface object describes the details pertaining to the remote procedure call interface. */
    rpc_interface: OcsfRpcInterface,
}


/**
 * A durable authorization context that a principal issues to a delegate (e.g., an application, automated process, service account, or AI agent), representing delegated authority to act on the principal's behalf. Persists independently of any single trace, session, or workflow instance, so the same delegation can be referenced across many events. The principal and delegate themselves are identified by the other objects on the event carrying this delegation, such as <code>actor.user</code> or <code>actor.iam_role</code> for the principal and <code>ai_operation.ai_agent</code> for an AI delegate. The <code>delegation</code> object itself only carries the durable identifiers used to correlate across those events. Delegations reference a parent via <code>parent_uid</code>, forming a directed acyclic graph (DAG) of re-delegations that supports lineage queries across the chain of authority. This authority graph is distinct from any agent instantiation or orchestration hierarchy, which may or may not coincide with it.
 */
export interface OcsfDelegation extends OcsfObjectBase {
    /** The time when the delegation was issued by the issuing authority. */
    created_time?: number,
    /** The time when the delegation was issued by the issuing authority. */
    created_time_dt?: string,
    /** The unique identifier of the trusted issuing authority (e.g., an OAuth authorization server, cloud STS, IAM broker, orchestration gateway, or SDK wrapper) that generated this delegation. Enables verification that delegation IDs were issued by an authorized component rather than self-asserted by the delegate. */
    issuer_uid?: string,
    /** The delegation identifier of the parent delegation, if this delegation was created by re-delegating authority to another party (e.g., a downstream service or automated process). This creates a parent-child relationship that enables tracking the complete chain of delegation ancestry. Does not indicate that the delegate was instantiated or spawned by the parent's delegate; that relationship, if any, is tracked separately. */
    parent_uid?: string,
    /** Unique identifier for this delegation context. Must be stable across the lifetime of the delegation and generated by a trusted issuing authority (e.g., an OAuth authorization server, cloud STS, IAM broker, or orchestration gateway) rather than self-asserted by the delegate. All events executed under this delegation share this identifier. */
    uid: string,
}


/**
 * The Endpoint object describes a physical or virtual device that connects to and exchanges information with a computer network. Some examples of endpoints are mobile devices, desktop computers, virtual machines, embedded devices, and servers. Internet-of-Things devices—like cameras, lighting, refrigerators, security systems, smart speakers, and thermostats—are also endpoints.
 */
export interface OcsfEndpoint extends OcsfEntity, OcsfContainerProfile {
    /** A list of <code>agent</code> objects associated with a device, endpoint, or resource. */
    agent_list?: OcsfAgent[],
    /** The name of the domain that the endpoint belongs to or that corresponds to the endpoint. */
    domain?: string,
    /** The fully qualified name of the endpoint. */
    hostname?: string,
    /** The endpoint hardware information. */
    hw_info?: OcsfDeviceHwInfo,
    /** The unique identifier of a VM instance. */
    instance_uid?: string,
    /** The name of the network interface (e.g. eth2). */
    interface_name?: string,
    /** The unique identifier of the network interface. */
    interface_uid?: string,
    /** The IP address of the endpoint, in either IPv4 or IPv6 format. */
    ip?: string,
    /** The geographical location of the endpoint. */
    location?: OcsfLocation,
    /** The Media Access Control (MAC) address of the endpoint. */
    mac?: string,
    /** The vendor or manufacturer of the endpoint's network interface controller (NIC), as identified from the MAC address. */
    mac_vendor?: string,
    /** The endpoint operating system. */
    os?: OcsfOs,
    /** The identity of the service or user account that owns the endpoint or was last logged into it. */
    owner?: OcsfUser,
    /** The pool of desktops or virtual machines to which the endpoint belongs. */
    pool?: OcsfGroup,
    /** The unique identifier of a virtual subnet. */
    subnet_uid?: string,
    /** The endpoint type. For example: <code>unknown</code>, <code>server</code>, <code>desktop</code>, <code>laptop</code>, <code>tablet</code>, <code>mobile</code>, <code>virtual</code>, <code>browser</code>, or <code>other</code>. */
    type?: string,
    /** The endpoint type ID. */
    type_id?: number,
    /** The Virtual LAN identifier. */
    vlan_uid?: string,
    /** The unique identifier of the Virtual Private Cloud (VPC). */
    vpc_uid?: string,
    /** The network zone or LAN segment. */
    zone?: string,
}


/**
 * The Device object represents an addressable computer system or host, which is typically connected to a computer network and participates in the transmission or processing of data within the computer network.
 */
export interface OcsfDevice extends OcsfEndpoint {
    /** The unique identifier of the cloud autoscale configuration. */
    autoscale_uid?: string,
    /** The time the system was booted. */
    boot_time?: number,
    /** The time the system was booted. */
    boot_time_dt?: string,
    /** A unique identifier of the device that changes after every reboot. For example, the value of <code>/proc/sys/kernel/random/boot_id</code> from Linux's procfs. */
    boot_uid?: string,
    /** The time when the device was known to have been created. */
    created_time?: number,
    /** The time when the device was known to have been created. */
    created_time_dt?: string,
    /** The description of the device, ordinarily as reported by the operating system. */
    desc?: string,
    /** An Embedded Identity Document, is a unique serial number that identifies an eSIM-enabled device. */
    eid?: string,
    /** The initial discovery time of the device. */
    first_seen_time?: number,
    /** The initial discovery time of the device. */
    first_seen_time_dt?: string,
    /** The group names to which the device belongs. For example: <code>["Windows Laptops", "Engineering"]</code>. */
    groups?: OcsfGroup[],
    /** The name of the hypervisor running on the device. For example, <code>Xen</code>, <code>VMware</code>, <code>Hyper-V</code>, <code>VirtualBox</code>, etc. */
    hypervisor?: string,
    /** The Integrated Circuit Card Identification of a mobile device. Typically it is a unique 18 to 22 digit number that identifies a SIM card. */
    iccid?: string,
    /** The image used as a template to run the virtual machine. */
    image?: OcsfImage,
    /** The International Mobile Equipment Identity that is associated with the device. */
    imei?: string,
    /** The International Mobile Equipment Identity values that are associated with the device. */
    imei_list?: string[],
    /** Indicates whether the device or resource has a backup enabled, such as an automated snapshot or a cloud backup. For example, this is indicated by the <code>cloudBackupEnabled</code> value within JAMF Pro mobile devices or the registration of an AWS ARN with the AWS Backup service. */
    is_backed_up?: boolean,
    /** The event occurred on a compliant device. */
    is_compliant?: boolean,
    /** The event occurred on a managed device. */
    is_managed?: boolean,
    /** Indicates whether the device has an active mobile account. For example, this is indicated by the <code>itunesStoreAccountActive</code> value within JAMF Pro mobile devices. */
    is_mobile_account_active?: boolean,
    /** The event occurred on a personal device. */
    is_personal?: boolean,
    /** The event occurred on a shared device. */
    is_shared?: boolean,
    /** The event occurred on a supervised device. Devices that are supervised are typically mobile devices managed by a Mobile Device Management solution and are restricted from specific behaviors such as Apple AirDrop. */
    is_supervised?: boolean,
    /** The event occurred on a trusted device. */
    is_trusted?: boolean,
    /** The most recent discovery time of the device. */
    last_seen_time?: number,
    /** The most recent discovery time of the device. */
    last_seen_time_dt?: string,
    /** The Mobile Equipment Identifier. It's a unique number that identifies a Code Division Multiple Access (CDMA) mobile device. */
    meid?: string,
    /** The model of the device. For example <code>ThinkPad X1 Carbon</code>. */
    model?: string,
    /** The time when the device was last known to have been modified. */
    modified_time?: number,
    /** The time when the device was last known to have been modified. */
    modified_time_dt?: string,
    /** The physical or virtual network interfaces that are associated with the device, one for each unique MAC address/IP address/hostname/name combination.<p><b>Note:</b> The first element of the array is the network information that pertains to the event.</p> */
    network_interfaces?: OcsfNetworkInterface[],
    /** Organization and org unit related to the device. */
    org?: OcsfOrganization,
    /** The operating system assigned Machine ID. In Windows, this is the value stored at the registry path: <code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography\MachineGuid</code>. In Linux, this is stored in the file: <code>/etc/machine-id</code>. */
    os_machine_uuid?: string,
    /** The peripheral devices that are attached or connected to the device. */
    peripheral_devices?: OcsfPeripheralDevice[],
    /** The region where the virtual machine is located. For example, an AWS Region. */
    region?: string,
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: number,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** The subnet mask. */
    subnet?: string,
    /** The Apple assigned Unique Device Identifier (UDID). For iOS, iPadOS, tvOS, watchOS and visionOS devices, this is the UDID. For macOS devices, it is the Provisioning UDID. For example: <code>00008020-008D4548007B4F26</code> */
    udid?: string,
    /** An alternate unique identifier of the device if any. For example the ActiveDirectory DN. */
    uid_alt?: string,
    /** The vendor for the device. For example <code>Dell</code> or <code>Lenovo</code>. */
    vendor_name?: string,
}


/**
 * The Device Hardware Information object contains details and specifications of the physical components that make up a device. This information provides an overview of the hardware capabilities, configuration, and characteristics of the device.
 */
export interface OcsfDeviceHwInfo extends OcsfObjectBase {
    /** The BIOS date. For example: <code>03/31/16</code>. */
    bios_date?: string,
    /** The BIOS manufacturer. For example: <code>LENOVO</code>. */
    bios_manufacturer?: string,
    /** The BIOS version. For example: <code>LENOVO G5ETA2WW (2.62)</code>. */
    bios_ver?: string,
    /** The chassis type describes the system enclosure or physical form factor. For example, as described for a Windows chassis type. */
    chassis?: string,
    /** The total number of processor cores across all installed CPUs on the system. For per-CPU core detail, use <code>cpu_info_list</code>. */
    cores?: number,
    /** The CPU architecture, normalized to the caption of the <code>cpu_architecture_id</code> value. In the case of <code>Other</code>, it is defined by the source. */
    cpu_architecture?: string,
    /** The normalized identifier of the CPU architecture. */
    cpu_architecture_id?: number,
    /** The cpu architecture, the number of bits used for addressing in memory. For example: <code>32</code> or <code>64</code>. */
    cpu_bits?: number,
    /** The number of processor cores in all installed processors. For Example: <code>42</code>. */
    cpu_cores?: number,
    /** The number of physical processors on a system. For per-CPU detail, use <code>cpu_info_list</code>. */
    cpu_count?: number,
    /** A list of <code>cpu_info</code> objects, each describing a physical CPU package installed in the device. Use with <code>cpu_count</code>. */
    cpu_info_list?: OcsfCpuInfo[],
    /** The speed of the processor in Mhz. For Example: <code>4200</code>. */
    cpu_speed?: number,
    /** The processor type. For example: <code>x86 Family 6 Model 37 Stepping 5</code>. */
    cpu_type?: string,
    /** The desktop display affiliated with the event */
    desktop_display?: OcsfDisplay,
    /** The number of graphics processors on a system. For per-GPU detail, use <code>gpu_info_list</code>. */
    gpu_count?: number,
    /** A list of GPU objects describing the hardware properties of each graphics processor installed on the device. Use with <code>gpu_count</code>. */
    gpu_info_list?: OcsfGpuInfo[],
    /** The keyboard detailed information. */
    keyboard_info?: OcsfKeyboardInfo,
    /** The total amount of installed RAM, in Megabytes. For example: <code>2048</code>. */
    ram_size?: number,
    /** The device manufacturer serial number. */
    serial_number?: string,
    /** The device manufacturer assigned universally unique hardware identifier. For SMBIOS compatible devices such as those running Linux and Windows, it is the UUID member of the System Information structure in the SMBIOS information. For macOS devices, it is the Hardware UUID (also known as IOPlatformUUID in the I/O Registry). */
    uuid?: string,
    /** The device manufacturer. */
    vendor_name?: string,
}


/**
 * The Digital Signature object contains information about the cryptographic mechanism used to verify the authenticity, integrity, and origin of the file or application.
 */
export interface OcsfDigitalSignature extends OcsfObjectBase {
    /** The digital signature algorithm used to create the signature, normalized to the caption of 'algorithm_id'. In the case of 'Other', it is defined by the event source. */
    algorithm?: string,
    /** The identifier of the normalized digital signature algorithm. */
    algorithm_id: number,
    /** The certificate object containing information about the digital certificate. */
    certificate?: OcsfCertificate,
    /** The time when the digital signature was created. */
    created_time?: number,
    /** The time when the digital signature was created. */
    created_time_dt?: string,
    /** The developer ID on the certificate that signed the file. */
    developer_uid?: string,
    /** The message digest attribute contains the fixed length message hash representation and the corresponding hashing algorithm information. */
    digest?: OcsfFingerprint,
    /** The canonical serialization or signing-envelope scheme used to produce the deterministic byte sequence that was signed, normalized to the caption of <code>serialization_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    serialization?: string,
    /** The identifier of the normalized canonical serialization or signing-envelope scheme used to produce the deterministic byte sequence that was signed. A verifier must apply the same scheme to reproduce the signing input. Use <code>Flat</code> where the signed data is an opaque byte sequence, such as file content, to which no canonical serialization was applied. Distinct from <code>algorithm_id</code>, which identifies how the resulting bytes were signed; some signing formats (e.g. <code>Authenticode</code>) define their own canonicalization and populate both fields. */
    serialization_id?: number,
    /** The digital signature state defines the signature state, normalized to the caption of 'state_id'. In the case of 'Other', it is defined by the event source. */
    state?: string,
    /** The normalized identifier of the signature state. */
    state_id?: number,
}


/**
 * The Discovery Details object describes results of a discovery task/job. Each result may be due to the violation of a <code>rule</code> associated with a <code>policy</code> and have multiple <code>occurrences</code>.
 */
export interface OcsfDiscoveryDetails extends OcsfObjectBase {
    /** The number of discovered entities of the specified type. */
    count?: number,
    /** Details about where in the target entity, specified information was discovered. Only the attributes, relevant to the target entity type should be populated. */
    occurrence_details?: OcsfOccurrenceDetails,
    /** Details about where in the target entity, specified information was discovered. Only the attributes, relevant to the target entity type should be populated. */
    occurrences?: OcsfOccurrenceDetails[],
    /** The rule associated with this discovery, usually part of the higher level <code>policy</code> from an enclosing class or object. */
    rule?: OcsfRule,
    /** The specific type of information that was discovered. e.g.<code> name, phone_number, etc.</code> */
    type?: string,
    /** Optionally, the specific value of discovered information. */
    value?: string,
}


/**
 * The Display object contains information about the physical or virtual display connected to a computer system.
 */
export interface OcsfDisplay extends OcsfObjectBase {
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
 * The DNS Resource Record object represents a single resource record as defined in RFC 1035. It is used in the Answer, Authority, and Additional sections of a DNS message.
 */
export interface OcsfDnsResourceRecord extends OcsfObjectBase {
    /** The class of DNS data contained in this resource record. See RFC 1035. For example: <code>IN</code>. */
    class?: string,
    /** The owner name of the resource record. For example: <code>www.example.com</code>. */
    hostname?: string,
    /** The data describing the DNS resource. The meaning of this data depends on the type and class of the resource record. */
    rdata: string,
    /** The time interval that the resource record may be cached. Zero value means that the resource record can only be used for the transaction in progress, and should not be cached. */
    ttl?: number,
    /** The type of data contained in this resource record. See RFC 1035. For example: <code>CNAME</code>. */
    type?: string,
}


/**
 * The DNS Answer object represents a specific response provided by the Domain Name System (DNS) when querying for information about a domain or performing a DNS operation. It encapsulates the relevant details and data returned by the DNS server in response to a query.
 */
export interface OcsfDnsAnswer extends OcsfDnsResourceRecord {
    /** The list of DNS answer header flag IDs. */
    flag_ids?: number[],
    /** The list of DNS answer header flags. */
    flags?: string[],
    /** The DNS packet identifier assigned by the program that generated the query. The identifier is copied to the response. */
    packet_uid?: number,
}


/**
 * The DNS Query object represents a specific request made to the Domain Name System (DNS) to retrieve information about a domain or perform a DNS operation.
 */
export interface OcsfDnsQuery extends OcsfObjectBase {
    /** The class of resource records being queried. See RFC 1035. For example: <code>IN</code>. */
    class?: string,
    /** The hostname or domain being queried. For example: <code>www.example.com</code> */
    hostname: string,
    /** The DNS opcode specifies the type of the query message. */
    opcode?: string,
    /** The DNS opcode ID specifies the normalized query message type as defined in RFC 5395. */
    opcode_id?: number,
    /** The DNS packet identifier assigned by the program that generated the query. The identifier is copied to the response. */
    packet_uid?: number,
    /** The type of resource records being queried. See RFC 1035. For example: A, AAAA, CNAME, MX, and NS. */
    type?: string,
}


/**
 * The DNS Section object represents a DNS message section that carries supplementary resource records alongside an optional TSIG record. It is used for both the client Additional section (<code>query_additional</code>) and the server Additional section (<code>response_additional</code>) of a DNS message. A DNS message has at most one TSIG record, which authenticates the entire message.
 */
export interface OcsfDnsSection extends OcsfObjectBase {
    /** The resource records contained in this DNS section. */
    records: OcsfDnsResourceRecord[],
    /** The TSIG (Transaction Signature) record present in this DNS section, used to authenticate the entire DNS message. Per RFC 2845, at most one TSIG record is permitted per DNS message. */
    tsig?: OcsfTsig,
}


/**
 * The contact information related to a domain registration, e.g., registrant, administrator, abuse, billing, or technical contact.
 */
export interface OcsfDomainContact extends OcsfObjectBase {
    /** The user's primary email address. */
    email_addr?: string,
    /** Location details for the contract such as the city, state/province, country, etc. */
    location?: OcsfLocation,
    /** The individual or organization name for the contact. */
    name?: string,
    /** The number associated with the phone. */
    phone_number?: string,
    /** The Domain Contact type, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the source */
    type?: string,
    /** The normalized domain contact type ID. */
    type_id: number,
    /** The unique identifier of the contact information, typically provided in WHOIS information. */
    uid?: string,
}


/**
 * The Download Info object contains metadata pertaining to a downloaded file.
 */
export interface OcsfDownloadInfo extends OcsfObjectBase {
    /** The URL that referred to <code>src_url</code>. This is typically the URL of a web page containing a download link. */
    referrer?: string,
    /** Information about the network endpoint from which the file was downloaded. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** The URL from which the file was downloaded. */
    src_url?: string,
    /** The download type, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The download type ID. The values correspond to the five permitted values of the <code>ZoneId</code> property in the Mark of the Web metadata of a downloaded file on Windows. Note however that each numeric value is 1 greater than its <code>ZoneId</code> equivalent. */
    type_id?: number,
}


/**
 * Represents a connection or relationship between two nodes in a graph.
 */
export interface OcsfEdge extends OcsfEntity {
    /** Additional data about the edge such as weight, distance, or custom properties. */
    data?: string,
    /** Indicates whether the edge is (<code>true</code>) or undirected (<code>false</code>). */
    is_directed?: boolean,
    /** The type of relationship between nodes (e.g. is-attached-to , depends-on, etc). */
    relation?: string,
    /** The unique identifier of the node where the edge originates. */
    source: string,
    /** The unique identifier of the node where the edge terminates. */
    target: string,
}


/**
 * The Email object describes the email metadata such as sender, recipients, and direction, and can include embedded URLs and files.
 */
export interface OcsfEmail extends OcsfObjectBase, OcsfDataClassificationProfile {
    /** The machine-readable email header Bcc values, as defined by RFC 5322. For example <code>example.user@usersdomain.com</code>. */
    bcc?: string[],
    /** The human-readable email header Bcc Mailbox values. For example <code>'Example User &lt;example.user@usersdomain.com&gt;'</code>. */
    bcc_mailboxes?: string[],
    /** The machine-readable email header Cc values, as defined by RFC 5322. For example <code>example.user@usersdomain.com</code>. */
    cc?: string[],
    /** The human-readable email header Cc Mailbox values. For example <code>'Example User &lt;example.user@usersdomain.com&gt;'</code>. */
    cc_mailboxes?: string[],
    /** The machine-readable <strong>Delivered-To</strong> email header field. For example <code>example.user@usersdomain.com</code> */
    delivered_to?: string,
    /** The machine-readable <strong>Delivered-To</strong> email header values. For example <code>example.user@usersdomain.com</code> */
    delivered_to_list?: string[],
    /** The files embedded or attached to the email. */
    files?: OcsfFile[],
    /** The machine-readable email header From value, as defined by RFC 5322. For example <code>example.user@usersdomain.com</code>. */
    from?: string,
    /** The machine-readable email header From values. This array should contain the value in <code>from</code>. For example <code>example.user@usersdomain.com</code>. */
    from_list?: string[],
    /** The human-readable email header From Mailbox value. For example <code>'Example User &lt;example.user@usersdomain.com&gt;'</code>. */
    from_mailbox?: string,
    /** The human-readable email header From Mailbox values. This array should contain the value in <code>from_mailbox</code>. For example <code>'Example User &lt;example.user@usersdomain.com&gt;'</code>. */
    from_mailboxes?: string[],
    /** Additional HTTP headers of an HTTP request or response. */
    http_headers?: OcsfHttpHeader[],
    /** The indication of whether the email has been read. */
    is_read?: boolean,
    /** The email header Message-ID value, as defined by RFC 5322. */
    message_uid?: string,
    /** The email authentication header. */
    raw_header?: string,
    /** The machine-readable email header Reply-To value, as defined by RFC 5322. For example <code>example.user@usersdomain.com</code> */
    reply_to?: string,
    /** The machine-readable email header Reply-To values, as defined by RFC 5322. For example <code>example.user@usersdomain.com</code> */
    reply_to_list?: string[],
    /** The human-readable email header Reply To Mailbox values. For example <code>'Example User &lt;example.user@usersdomain.com&gt;'</code>. */
    reply_to_mailboxes?: string[],
    /** The address found in the 'Return-Path' header, which indicates where bounce messages (non-delivery reports) should be sent. This address is often set by the sending system and may differ from the 'From' or 'Sender' addresses. For example, <code>mailer-daemon@senderserver.com</code>. */
    return_path?: string,
    /** The machine readable email address of the system or server that actually transmitted the email message, extracted from the email headers per RFC 5322. This differs from the <code>from</code> field, which shows the message author. The sender field is most commonly used when multiple addresses appear in the <code> from_list </code> field, or when the transmitting system is different from the message author (such as when sending on behalf of someone else). */
    sender?: string,
    /** The human readable email address of the system or server that actually transmitted the email message, extracted from the email headers per RFC 5322. This differs from the <code>from_mailbox</code> field, which shows the message author. The sender mailbox field is most commonly used when multiple addresses appear in the <code> from_mailboxes </code> field, or when the transmitting system is different from the message author (such as when sending on behalf of someone else). */
    sender_mailbox?: string,
    /** The size in bytes of the email, including attachments. */
    size?: number,
    /** The value of the SMTP MAIL FROM command. */
    smtp_from?: string,
    /** The value of the SMTP envelope RCPT TO command. */
    smtp_to?: string[],
    /** The email header Subject value, as defined by RFC 5322. */
    subject?: string,
    /** The machine-readable email header To values, as defined by RFC 5322. For example <code>example.user@usersdomain.com</code> */
    to?: string[],
    /** The human-readable email header To Mailbox values. For example <code>'Example User &lt;example.user@usersdomain.com&gt;'</code>. */
    to_mailboxes?: string[],
    /** The unique identifier of the email thread. */
    uid?: string,
    /** The URLs embedded in the email. */
    urls?: OcsfUrl[],
    /** The X-Originating-IP header identifying the emails originating IP address(es). */
    x_originating_ip?: string[],
}


/**
 * The Email Authentication object describes the Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM) and Domain-based Message Authentication, Reporting and Conformance (DMARC) attributes of an email.
 */
export interface OcsfEmailAuth extends OcsfObjectBase {
    /** The DomainKeys Identified Mail (DKIM) status of the email. */
    dkim?: string,
    /** The DomainKeys Identified Mail (DKIM) signing domain of the email. */
    dkim_domain?: string,
    /** The DomainKeys Identified Mail (DKIM) signature used by the sending/receiving system. */
    dkim_signature?: string,
    /** The Domain-based Message Authentication, Reporting and Conformance (DMARC) status of the email. */
    dmarc?: string,
    /** The Domain-based Message Authentication, Reporting and Conformance (DMARC) override action. */
    dmarc_override?: string,
    /** The Domain-based Message Authentication, Reporting and Conformance (DMARC) policy status. */
    dmarc_policy?: string,
    /** The Sender Policy Framework (SPF) status of the email. */
    spf?: string,
}


/**
 * Details about the encryption methodology utilized.
 */
export interface OcsfEncryptionDetails extends OcsfObjectBase {
    /** The encryption algorithm used, normalized to the caption of 'algorithm_id */
    algorithm?: string,
    /** The encryption algorithm used. */
    algorithm_id?: number,
    /** The length of the encryption key used. */
    key_length?: number,
    /** The unique identifier of the key used for encryption. For example, AWS KMS Key ARN. */
    key_uid?: string,
    /** The type of the encryption used. */
    type?: string,
}


/**
 * The Endpoint Connection object contains information detailing a connection attempt to an endpoint.
 */
export interface OcsfEndpointConnection extends OcsfObjectBase {
    /** A numerical response status code providing details about the connection. */
    code?: number,
    /** Provides characteristics of the network endpoint. */
    network_endpoint?: OcsfNetworkEndpoint,
}


/**
 * The Enrichment object provides inline enrichment data for specific attributes of interest within an event. It serves as a mechanism to enhance or supplement the information associated with the event by adding additional relevant details or context.
 */
export interface OcsfEnrichment extends OcsfObjectBase {
    /** The time when the enrichment data was generated. */
    created_time?: number,
    /** The time when the enrichment data was generated. */
    created_time_dt?: string,
    /** The enrichment data associated with the attribute and value. The meaning of this data depends on the type the enrichment record. */
    data: string,
    /** A long description of the enrichment data. */
    desc?: string,
    /** The name of the attribute to which the enriched data pertains. */
    name: string,
    /** The enrichment data provider name. */
    provider?: string,
    /** The reputation of the enrichment data. */
    reputation?: OcsfReputation,
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
export interface OcsfEnvironmentVariable extends OcsfObjectBase {
    /** The name of the environment variable. */
    name: string,
    /** The value of the environment variable. */
    value: string,
}


/**
 * The Exploit Prediction Scoring System (EPSS) object describes the estimated probability a vulnerability will be exploited. EPSS is a community-driven effort to combine descriptive information about vulnerabilities (CVEs) with evidence of actual exploitation in-the-wild.
 */
export interface OcsfEpss extends OcsfObjectBase {
    /** The timestamp indicating when the EPSS score was calculated. */
    created_time?: number,
    /** The timestamp indicating when the EPSS score was calculated. */
    created_time_dt?: string,
    /** The EPSS score's percentile representing relative importance and ranking of the score in the larger EPSS dataset. */
    percentile?: number,
    /** The EPSS score representing the probability [0-1] of exploitation in the wild in the next 30 days (following score publication). */
    score: string,
    /** The version of the EPSS model used to calculate the score. */
    version?: string,
}


/**
 * A collection of evidence artifacts associated to the activity/activities that triggered a security detection.
 */
export interface OcsfEvidences extends OcsfEntity {
    /** Describes details about the user/role/process that was the source of the activity that triggered the detection. */
    actor?: OcsfActor,
    /** Describes details about an AI agent associated with the activity that triggered the detection, whether the agent performed the activity, was its target, or was otherwise involved. Use a separate <code>evidences</code> entry per agent when a finding involves more than one, such as an agent spawning a sub-agent in violation of usage policy. */
    ai_agent?: OcsfAiAgent,
    /** Describes details about the API call associated to the activity that triggered the detection. */
    api?: OcsfApi,
    /** Describes details about the network connection associated to the activity that triggered the detection. */
    connection_info?: OcsfNetworkConnectionInfo,
    /** Describes details about the container associated to the activity that triggered the detection. */
    container?: OcsfContainer,
    /** Additional evidence data that is not accounted for in the specific evidence attributes.<code> Use only when absolutely necessary.</code> */
    data?: string,
    /** Describes details about the database associated to the activity that triggered the detection. */
    database?: OcsfDatabase,
    /** Describes details about the databucket associated to the activity that triggered the detection. */
    databucket?: OcsfDatabucket,
    /** An addressable device, computer system or host associated to the activity that triggered the detection. */
    device?: OcsfDevice,
    /** Describes details about the destination of the network activity that triggered the detection. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** The email object associated to the activity that triggered the detection. */
    email?: OcsfEmail,
    /** Describes details about the file associated to the activity that triggered the detection. */
    file?: OcsfFile,
    /** Describes details about the http request associated to the activity that triggered the detection. */
    http_request?: OcsfHttpRequest,
    /** Describes details about the http response associated to the activity that triggered the detection. */
    http_response?: OcsfHttpResponse,
    /** Describes details about the JA4+ fingerprints that triggered the detection. */
    ja4_fingerprint_list?: OcsfJa4Fingerprint[],
    /** Describes details about the scheduled job that was associated with the activity that triggered the detection. */
    job?: OcsfJob,
    /** Describes details about the process associated to the activity that triggered the detection. */
    process?: OcsfProcess,
    /** Describes details about the DNS query associated to the activity that triggered the detection. */
    query?: OcsfDnsQuery,
    /** Describes details about the registry key that triggered the detection. */
    reg_key?: OcsfWinRegKey,
    /** Describes details about the registry value that triggered the detection. */
    reg_value?: OcsfWinRegValue,
    /** Describes details about the cloud resources directly related to activity that triggered the detection. For resources impacted by the detection, use <code>Affected Resources</code> at the top-level of the finding. */
    resources?: OcsfResourceDetails[],
    /** Describes details about the script that was associated with the activity that triggered the detection. */
    script?: OcsfScript,
    /** Describes details about the source of the network activity that triggered the detection. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** Describes details about the Transport Layer Security (TLS) activity that triggered the detection. */
    tls?: OcsfTls,
    /** The URL object that pertains to the event or object associated to the activity that triggered the detection. */
    url?: OcsfUrl,
    /** Describes details about the user that was the target or somehow else associated with the activity that triggered the detection. */
    user?: OcsfUser,
    /** The normalized verdict of the evidence associated with the security detection. */
    verdict?: string,
    /** The normalized verdict (or status) ID of the evidence associated with the security detection. For example, Microsoft Graph Security Alerts contain a <code>verdict</code> enumeration for each type of <code>evidence</code> associated with the Alert. This is typically set by an automated investigation process or an analyst/investigator assigned to the finding. */
    verdict_id?: number,
    /** Describes details about the Windows service that triggered the detection. */
    win_service?: OcsfWinService,
}


/**
 * The OCSF Schema Extension object provides detailed information about the schema extension used to construct the event. The schema extensions are registered in the <code>extensions.md</code> file.
 */
export interface OcsfExtension extends OcsfEntity {
    /** The schema extension version. For example: <code>1.0.0-alpha.2</code>. */
    version: string,
}


/**
 * The Feature object provides information about the software product feature that generated a specific event. It encompasses details related to the capabilities, components, user interface (UI) design, and performance upgrades associated with the feature.
 */
export interface OcsfFeature extends OcsfEntity {
    /** The version of the feature. */
    version?: string,
}


/**
 * The File object represents the metadata associated with a file stored in a computer system. It encompasses information about the file itself, including its attributes, properties, and organizational details.
 */
export interface OcsfFile extends OcsfEntity, OcsfDataClassificationProfile {
    /** The time when the file was last accessed. */
    accessed_time?: number,
    /** The time when the file was last accessed. */
    accessed_time_dt?: string,
    /** The name of the user who last accessed the object. */
    accessor?: OcsfUser,
    /** The bitmask value that represents the file attributes. */
    attributes?: number,
    /** The name of the company that published the file. For example: <code>Microsoft Corporation</code>. */
    company_name?: string,
    /** The file content confidentiality, normalized to the confidentiality_id value. In the case of 'Other', it is defined by the event source. */
    confidentiality?: string,
    /** The normalized identifier of the file content confidentiality indicator. */
    confidentiality_id?: number,
    /** The time when the file was created. */
    created_time?: number,
    /** The time when the file was created. */
    created_time_dt?: string,
    /** The user that created the file. */
    creator?: OcsfUser,
    /** The description of the file, as returned by file system. For example: the description as returned by the Unix file command or the Windows file type. */
    desc?: string,
    /** Information pertaining to a downloaded file. */
    download_info?: OcsfDownloadInfo,
    /** The drive type, normalized to the caption of the <code>drive_type_id</code> value. In the case of <code>Other</code>, it is defined by the source. */
    drive_type?: string,
    /** Identifies the type of a disk drive, i.e. fixed, removable, etc. */
    drive_type_id?: number,
    /** The encryption details of the file. Should be populated if the file is encrypted. */
    encryption_details?: OcsfEncryptionDetails,
    /** The extension of the file, excluding the leading dot. For example: <code>exe</code> from <code>svchost.exe</code>, or <code>gz</code> from <code>export.tar.gz</code>. */
    ext?: string,
    /** An array of hash attributes. */
    hashes?: OcsfFingerprint[],
    /** A list of symbols imported by the executable file. */
    imported_symbols?: string[],
    /** The name of the file as identified within the file itself. This contrasts with the name by which the file is known on disk. Where available, the internal name is widely used by security practitioners and detection content because the on-disk file name is not reliable. On the Windows OS, most PE files contain a <code>VERSIONINFO</code> resource from which the internal name can be obtained. On macOS, binaries can optionally embed a copy of the application's <code>Info.plist</code> file which in turn contains the name of the executable. */
    internal_name?: string,
    /** Indicates if the file was deleted from the filesystem. */
    is_deleted?: boolean,
    /** Indicates if the file is encrypted. */
    is_encrypted?: boolean,
    /** Indicates if the file is publicly accessible. For example in an object's public access in AWS S3 */
    is_public?: boolean,
    /** Indicates that the file cannot be modified. */
    is_readonly?: boolean,
    /** The indication of whether the object is part of the operating system. */
    is_system?: boolean,
    /** The Multipurpose Internet Mail Extensions (MIME) type of the file, if applicable. */
    mime_type?: string,
    /** The time when the file was last modified. */
    modified_time?: number,
    /** The time when the file was last modified. */
    modified_time_dt?: string,
    /** The user that last modified the file. */
    modifier?: OcsfUser,
    /** The user that owns the file/object. */
    owner?: OcsfUser,
    /** The parent folder in which the file resides. For example: <code>c:\windows\system32</code> */
    parent_folder?: string,
    /** The full path to the file. For example: <code>c:\windows\system32\svchost.exe</code>. */
    path?: string,
    /** The product that created or installed the file. */
    product?: OcsfProduct,
    /** The object security descriptor. */
    security_descriptor?: string,
    /** The digital signature of the file. */
    signature?: OcsfDigitalSignature,
    /** A collection of <code>Digital Signature</code> objects. */
    signatures?: OcsfDigitalSignature[],
    /** The size of data, in bytes. */
    size?: number,
    /** The storage class of the file. For example in AWS S3: <code>STANDARD, STANDARD_IA, GLACIER</code>. */
    storage_class?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the file. */
    tags?: OcsfKeyValueObject[],
    /** The file type. */
    type?: string,
    /** The file type ID. Note the distinction between a <code>Regular File</code> and an <code>Executable File</code>. If the distinction is not known, or not indicated by the log, use <code>Regular File</code>. In this case, it should not be assumed that a Regular File is not executable. */
    type_id: number,
    /** The file URI, such as those reporting by static analysis tools. E.g., <code>file:///C:/dev/sarif/sarif-tutorials/samples/Introduction/simple-example.js</code> */
    uri?: string,
    /** The URL of the file, when applicable. */
    url?: OcsfUrl,
    /** The file version. For example: <code>8.0.7601.17514</code>. */
    version?: string,
    /** The volume on the storage device where the file is located. */
    volume?: string,
    /** An unordered collection of zero or more name/value pairs where each pair represents a file or folder extended attribute.<p>For example: Windows alternate data stream attributes (ADS stream name, ADS size, etc.), user-defined or application-defined attributes, ACL, owner, primary group, etc. Examples from DCS: </p><ul><li><strong>ads_name</strong></li><li><strong>ads_size</strong></li><li><strong>dacl</strong></li><li><strong>owner</strong></li><li><strong>primary_group</strong></li><li><strong>link_name</strong> - name of the link associated to the file.</li><li><strong>hard_link_count</strong> - the number of links that are associated to the file.</li></ul> */
    xattributes?: OcsfObject,
}


/**
 * The Finding object describes metadata related to a security finding generated by a security tool or system.
 */
export interface OcsfFinding extends OcsfObjectBase {
    /** The time when the finding was created. */
    created_time?: number,
    /** The time when the finding was created. */
    created_time_dt?: string,
    /** The description of the reported finding. */
    desc?: string,
    /** The time when the finding was first observed. */
    first_seen_time?: number,
    /** The time when the finding was first observed. */
    first_seen_time_dt?: string,
    /** The time when the finding was most recently observed. */
    last_seen_time?: number,
    /** The time when the finding was most recently observed. */
    last_seen_time_dt?: string,
    /** The time when the finding was last modified. */
    modified_time?: number,
    /** The time when the finding was last modified. */
    modified_time_dt?: string,
    /** Details about the product that reported the finding. */
    product?: OcsfProduct,
    /** The unique identifier of the product that reported the finding. */
    product_uid?: string,
    /** Describes events and/or other findings related to the finding as identified by the security product. Note that these events may or may not be in OCSF. */
    related_events?: OcsfRelatedEvent[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
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
 * The Finding Information object describes metadata related to a security finding generated by a security tool or system.
 */
export interface OcsfFindingInfo extends OcsfObjectBase {
    /** The analytic technique used to analyze and derive insights from the data or information that led to the finding or conclusion. */
    analytic?: OcsfAnalytic,
    /** An Attack Graph describes possible routes an attacker could take through an environment. It describes relationships between resources and their findings, such as malware detections, vulnerabilities, misconfigurations, and other security actions. */
    attack_graph?: OcsfGraph,
    /** An array of attack objects, each describing a tactic, technique, and/or sub-technique associated with the finding. */
    attacks?: OcsfAttack[],
    /** The time when the finding was created. */
    created_time?: number,
    /** The time when the finding was created. */
    created_time_dt?: string,
    /** A list of data sources utilized in generation of the finding. */
    data_sources?: string[],
    /** The description of the reported finding. */
    desc?: string,
    /** The time when the finding was first observed. e.g. The time when a vulnerability was first observed. <p>It can differ from the <code>created_time</code> timestamp, which reflects the time this finding was created.</p> */
    first_seen_time?: number,
    /** The time when the finding was first observed. e.g. The time when a vulnerability was first observed. <p>It can differ from the <code>created_time</code> timestamp, which reflects the time this finding was created.</p> */
    first_seen_time_dt?: string,
    /** The Kill Chain provides a detailed description of each phase and its associated activities within the broader context of a cyber attack. */
    kill_chain?: OcsfKillChainPhase[],
    /** The time when the finding was most recently observed. e.g. The time when a vulnerability was most recently observed. <p>It can differ from the <code>modified_time</code> timestamp, which reflects the time this finding was last modified.</p> */
    last_seen_time?: number,
    /** The time when the finding was most recently observed. e.g. The time when a vulnerability was most recently observed. <p>It can differ from the <code>modified_time</code> timestamp, which reflects the time this finding was last modified.</p> */
    last_seen_time_dt?: string,
    /** The time when the finding was last modified. */
    modified_time?: number,
    /** The time when the finding was last modified. */
    modified_time_dt?: string,
    /** Details about the product that reported the finding. */
    product?: OcsfProduct,
    /** The unique identifier of the product that reported the finding. */
    product_uid?: string,
    /** Other analytics related to this finding. */
    related_analytics?: OcsfAnalytic[],
    /** Describes events and/or other findings related to the finding as identified by the security product. Note that these events may or may not be in OCSF. */
    related_events?: OcsfRelatedEvent[],
    /** Number of related events or findings. */
    related_events_count?: number,
    /** The URL pointing to the source of the finding. */
    src_url?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated with the finding. */
    tags?: OcsfKeyValueObject[],
    /** A title or a brief phrase summarizing the reported finding. */
    title?: string,
    /** The list of key traits or characteristics extracted from the finding. */
    traits?: OcsfTrait[],
    /** One or more types of the reported finding. */
    types?: string[],
    /** The unique identifier of the reported finding. */
    uid: string,
    /** The alternative unique identifier of the reported finding. */
    uid_alt?: string,
}


/**
 * The Fingerprint object provides detailed information about a fingerprint, which is a compact representation of data used to identify a longer piece of information, such as a public key, file content, or application implementation. It contains the algorithm or scheme and value of the fingerprint, enabling efficient and reliable identification of the associated data.
 */
export interface OcsfFingerprint extends OcsfObjectBase {
    /** The algorithm or scheme used to create the fingerprint, normalized to the caption of <code>algorithm_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    algorithm?: string,
    /** The identifier of the normalized algorithm or scheme, which was used to create the fingerprint. */
    algorithm_id: number,
    /** The encoding of the <code>value</code> attribute, normalized to the caption of <code>encoding_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    encoding?: string,
    /** The normalized identifier of the encoding used to represent the fingerprint bytes as the string in <code>value</code>. A verifier must decode <code>value</code> using this encoding to recover the raw hash bytes. */
    encoding_id?: number,
    /** The canonical serialization scheme used to produce the deterministic byte sequence that was fingerprinted, normalized to the caption of <code>serialization_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    serialization?: string,
    /** The identifier of the normalized canonical serialization scheme used to produce the deterministic byte sequence that was fingerprinted. A verifier must apply the same scheme to reproduce the fingerprinted input. Use <code>Flat</code> where the fingerprinted data is an opaque byte sequence, such as file content, to which no canonical serialization was applied. Distinct from <code>algorithm_id</code>, which identifies how the resulting bytes were hashed. */
    serialization_id?: number,
    /** The fingerprint value.<p><b>Note:</b> This uses type <code>file_hash_t</code> (&quot;Hash&quot;), which has been generalized for all fingerprints but retains the same name and caption for backwards compatibility.</p> */
    value: string,
}


/**
 * The Rule object describes characteristics of a rule associated with a policy or an event.
 */
export interface OcsfRule extends OcsfEntity {
    /** The rule category. */
    category?: string,
    /** The description of the rule that generated the event. */
    desc?: string,
    /** The rule type. */
    type?: string,
    /** The rule version. For example: <code>1.1</code>. */
    version?: string,
}


/**
 * The Firewall Rule object represents a specific rule within a firewall policy or event. It contains information about a rule's configuration, properties, and associated actions that define how network traffic is handled by the firewall.
 */
export interface OcsfFirewallRule extends OcsfRule {
    /** The rule trigger condition for the rule. For example: SQL_INJECTION. */
    condition?: string,
    /** The rule response time duration, usually used for challenge completion time. */
    duration?: number,
    /** The data in a request that rule matched. For example: '["10","and","1"]'. */
    match_details?: string[],
    /** The location of the matched data in the source which resulted in the triggered firewall rule. For example: HEADER. */
    match_location?: string,
    /** The rate limit for a rate-based rule. */
    rate_limit?: number,
    /** The sensitivity of the firewall rule in the matched event. For example: HIGH. */
    sensitivity?: string,
}


/**
 * The Function Invocation object provides details regarding the invocation of a function.
 */
export interface OcsfFunctionInvocation extends OcsfObjectBase {
    /** The error indication returned from the function. This may differ from the return value (e.g. when <code>errno</code> is used). */
    error?: string,
    /** The parameters passed into a function invocation. */
    parameters?: OcsfParameter[],
    /** The value returned from a function. */
    return_value?: string,
}


/**
 * The GPU information object contains attributes describing graphical processing hardware.
 */
export interface OcsfGpuInfo extends OcsfObjectBase {
    /** The attachment bus or interface standard, normalized to the caption of the bus_type_id value. In the case of 'Other', it is defined by the event source. */
    bus_type?: string,
    /** The normalized identifier of the attachment bus or interface standard. */
    bus_type_id?: number,
    /** The number of processing cores or compute units for the component. */
    cores?: number,
    /** The model name of the GPU. For example: <code>GeForce RTX A6000</code>, <code>Radeon PRO W7900</code>, or <code>Intel Data Center GPU Max 1550</code>. */
    model?: string,
    /** The name of the vendor of the GPU. For example: <code>NVIDIA</code>, <code>AMD</code>, or <code>Intel</code>. */
    vendor_name?: string,
    /** The video memory attachment mode, indicating how the VRAM hardware is integrated with the system (e.g., shared or dedicated), normalized to the caption of the vram_mode_id value. For 'Other', the exact attachment mode is defined by the event source. */
    vram_mode?: string,
    /** The normalized identifier of the video memory attachment mode. */
    vram_mode_id?: number,
    /** The total amount of installed video RAM. */
    vram_size?: number,
}


/**
 * A graph data structure representation with nodes and edges.
 */
export interface OcsfGraph extends OcsfEntity {
    /** The graph description - provides additional details about the graph's purpose and contents. */
    desc?: string,
    /** The edges/connections between nodes in the graph - contains the collection of <code>edge</code> objects defining relationships between nodes. */
    edges?: OcsfEdge[],
    /** Indicates if the graph is directed (<code>true</code>) or undirected (<code>false</code>). */
    is_directed?: boolean,
    /** The nodes/vertices of the graph - contains the collection of <code>node</code> objects that make up the graph. */
    nodes: OcsfNode[],
    /** The graph query language, normalized to the caption of the <code>query_language_id</code> value. */
    query_language?: string,
    /** The normalized identifier of a graph query language that can be used to interact with the graph. */
    query_language_id?: number,
    /** The graph type. Typically useful to represent the specific type of graph that is used. */
    type?: string,
}


/**
 * The Group object represents a collection or association of entities, such as users, policies, or devices. It serves as a logical grouping mechanism to organize and manage entities with similar characteristics or permissions within a system or organization, including but not limited to purposes of access control.
 */
export interface OcsfGroup extends OcsfEntity {
    /** The group description. */
    desc?: string,
    /** The domain where the group is defined. For example: the LDAP or Active Directory domain. */
    domain?: string,
    /** The group privileges. */
    privileges?: string[],
    /** The type of the group. */
    type?: string,
    /** The alternate unique identifier. */
    uid_alt?: string,
}


/**
 * The HASSH object contains SSH network fingerprinting values for specific client/server implementations. It provides a standardized way of identifying and categorizing SSH connections based on their unique characteristics and behavior.
 */
export interface OcsfHassh extends OcsfObjectBase {
    /** The concatenation of key exchange, encryption, authentication and compression algorithms (separated by ';'). NOTE: This is not the underlying algorithm for the hash implementation. */
    algorithm?: string,
    /** The hash of the key exchange, encryption, authentication and compression algorithms. */
    fingerprint: OcsfFingerprint,
}


/**
 * The HTTP Cookie object, also known as a web cookie or browser cookie, contains details and values pertaining to a small piece of data that a server sends to a user's web browser. This data is then stored by the browser and sent back to the server with subsequent requests, allowing the server to remember and track certain information about the user's browsing session or preferences.
 */
export interface OcsfHttpCookie extends OcsfObjectBase {
    /** The domain name for the server from which the http_cookie is served. */
    domain?: string,
    /** The expiration time of the HTTP cookie. */
    expiration_time?: number,
    /** The expiration time of the HTTP cookie. */
    expiration_time_dt?: string,
    /** A cookie attribute to make it inaccessible via JavaScript */
    http_only?: boolean,
    /** This attribute prevents the cookie from being accessed via JavaScript. */
    is_http_only?: boolean,
    /** The cookie attribute indicates that cookies are sent to the server only when the request is encrypted using the HTTPS protocol. */
    is_secure?: boolean,
    /** The HTTP cookie name. */
    name: string,
    /** The path of the HTTP cookie. */
    path?: string,
    /** The cookie attribute that lets servers specify whether/when cookies are sent with cross-site requests. Values are: Strict, Lax or None */
    samesite?: string,
    /** The cookie attribute to only send cookies to the server with an encrypted request over the HTTPS protocol. */
    secure?: boolean,
    /** The HTTP cookie value. */
    value: string,
}


/**
 * The HTTP Header object represents the headers sent in an HTTP request or response. HTTP headers are key-value pairs that convey additional information about the HTTP message, including details about the content, caching, authentication, encoding, and other aspects of the communication.
 */
export interface OcsfHttpHeader extends OcsfObjectBase {
    /** The name of the HTTP header. */
    name: string,
    /** The value of the HTTP header. */
    value: string,
}


/**
 * The HTTP Request object represents the attributes of a request made to a web server. It encapsulates the details and metadata associated with an HTTP request, including the request method, headers, URL, query parameters, body content, and other relevant information.
 */
export interface OcsfHttpRequest extends OcsfObjectBase {
    /** The arguments sent along with the HTTP request. */
    args?: string,
    /** The actual length of the HTTP request body, in number of bytes, independent of a potentially existing Content-Length header. */
    body_length?: number,
    /** Additional HTTP headers of an HTTP request or response. */
    http_headers?: OcsfHttpHeader[],
    /** The HTTP request method indicates the desired action to be performed for a given resource. */
    http_method?: string,
    /** The length of the entire HTTP request, in number of bytes. */
    length?: number,
    /** The request header that identifies the address of the previous web page, which is linked to the current web page or resource being requested. */
    referrer?: string,
    /** The unique identifier of the http request. */
    uid?: string,
    /** The URL object that pertains to the request. */
    url?: OcsfUrl,
    /** The request header that identifies the operating system and web browser. */
    user_agent?: string,
    /** The Hypertext Transfer Protocol (HTTP) version. */
    version?: string,
    /** The X-Forwarded-For header identifying the originating IP address(es) of a client connecting to a web server through an HTTP proxy or a load balancer. */
    x_forwarded_for?: string[],
}


/**
 * The HTTP Response object contains detailed information about the response sent from a web server to the requester. It encompasses attributes and metadata that describe the response status, headers, body content, and other relevant information.
 */
export interface OcsfHttpResponse extends OcsfObjectBase {
    /** The actual length of the HTTP response body, in number of bytes, independent of a potentially existing Content-Length header. */
    body_length?: number,
    /** The Hypertext Transfer Protocol (HTTP) status code returned from the web server to the client. For example, 200. */
    code: number,
    /** The HTTP request header that identifies the original media type of the resource (prior to any content encoding applied for sending). */
    content_type?: string,
    /** Additional HTTP headers of an HTTP request or response. */
    http_headers?: OcsfHttpHeader[],
    /** The HTTP response latency measured in milliseconds. */
    latency?: number,
    /** The length of the entire HTTP response, in number of bytes. */
    length?: number,
    /** The HTTP status code and reason phrase returned from the server. */
    message?: string,
    /** The response status. For example: A successful HTTP status of 'OK' which corresponds to a code of 200. */
    status?: string,
}


/**
 * The IAM Role object describes permission characteristics (or privileges) associated with a user or group of users as security principals against one or more resources. In some cases only the name or ID of the role is known hence other attributes are optional. In some systems a user or group of users can have multiple roles, imparting the union of privileges to the principal. In some systems the role can serve as a temporary security principal without its own credentials on behalf of the actual security principal.
 */
export interface OcsfIamRole extends OcsfEntity {
    /** The account associated with the role. For example, can be a cross-account role, different from the user or group account, granting access within this account. */
    account?: OcsfAccount,
    /** IAM policies associated with the role. */
    policies?: OcsfPolicy[],
    /** List of privileges assigned to a role. */
    privileges?: string[],
    /** Programmatic credential (API keys, access tokens, certificates, etc) associated with the role. */
    programmatic_credentials?: OcsfProgrammaticCredential[],
    /** Resources that the role applies to. */
    resources?: OcsfResourceDetails[],
    /** The session where the role is active. Some roles may be temporary and expire when the session expires. */
    session?: OcsfSession,
    /** The alternate user identifier. For example, the Active Directory role GUID or the associated LDAP group DN. */
    uid_alt?: string,
}


/**
 * The Identity Activity Metrics object captures usage patterns, authentication activity, credential usage and other metrics for identities across cloud and on-premises environments. Example identities include AWS IAM Users, Roles, Azure AD Principals, GCP Service Accounts, on-premises Active Directory accounts.
 */
export interface OcsfIdentityActivityMetrics extends OcsfObjectBase {
    /** The timestamp when this identity was first observed or created in the system. This helps establish the identity's age and lifecycle stage for risk assessment. */
    first_seen_time?: number,
    /** The timestamp when this identity was first observed or created in the system. This helps establish the identity's age and lifecycle stage for risk assessment. */
    first_seen_time_dt?: string,
    /** The timestamp when this identity last successfully authenticated to any system or service. This differs from <code>last_seen_time</code> as it specifically tracks authentication events rather than all activities. */
    last_authentication_time?: number,
    /** The timestamp when this identity last successfully authenticated to any system or service. This differs from <code>last_seen_time</code> as it specifically tracks authentication events rather than all activities. */
    last_authentication_time_dt?: string,
    /** The timestamp of the most recent activity performed by this identity, including authentication, resource access, or API calls. This is the most comprehensive indicator of identity usage recency. */
    last_seen_time?: number,
    /** The timestamp of the most recent activity performed by this identity, including authentication, resource access, or API calls. This is the most comprehensive indicator of identity usage recency. */
    last_seen_time_dt?: string,
    /** The timestamp when password-based authentication was last used by this identity. This helps distinguish between password and other authentication methods (MFA, SSO, certificates) and identify password-specific usage patterns. */
    password_last_used_time?: number,
    /** The timestamp when password-based authentication was last used by this identity. This helps distinguish between password and other authentication methods (MFA, SSO, certificates) and identify password-specific usage patterns. */
    password_last_used_time_dt?: string,
    /** Details about the programmatic credentials associated with this identity, such as API keys, service account keys, access tokens, and client certificates used for automated access. */
    programmatic_credentials?: OcsfProgrammaticCredential[],
}


/**
 * The Identity Provider object contains detailed information about a provider responsible for creating, maintaining, and managing identity information while offering authentication services to applications. An Identity Provider (IdP) serves as a trusted authority that verifies the identity of users and issues authentication tokens or assertions to enable secure access to applications or services.
 */
export interface OcsfIdp extends OcsfEntity {
    /** The Authentication Factors object describes the different types of Multi-Factor Authentication (MFA) methods and/or devices supported by the Identity Provider. */
    auth_factors?: OcsfAuthFactor[],
    /** The primary domain associated with the Identity Provider. */
    domain?: string,
    /** The fingerprint of the X.509 certificate used by the Identity Provider. */
    fingerprint?: OcsfFingerprint,
    /** The Identity Provider enforces Multi Factor Authentication (MFA). */
    has_mfa?: boolean,
    /** The unique identifier (often a URL) used by the Identity Provider as its issuer. */
    issuer?: string,
    /** The supported protocol of the Identity Provider. E.g., <code>SAML</code>, <code>OIDC</code>, or <code>OAuth2</code>. */
    protocol_name?: string,
    /** The System for Cross-domain Identity Management (SCIM) resource object as defined in RFC 7634 provides a structured set of attributes related to SCIM protocols used for identity provisioning and management across cloud-based platforms. It standardizes user and group provisioning details, enabling identity synchronization and lifecycle management with compatible Identity Providers (IdPs) and applications. */
    scim?: OcsfScim,
    /** The Single Sign-On (SSO) object provides a structure for normalizing SSO attributes, configuration, and/or settings from Identity Providers. */
    sso?: OcsfSso,
    /** The configuration state of the Identity Provider, normalized to the caption of the <code>state_id</code> value. In the case of <code>Other</code>, it is defined by the event source. */
    state?: string,
    /** The normalized state ID of the Identity Provider to reflect its configuration or activation status. */
    state_id?: number,
    /** The tenant ID associated with the Identity Provider. */
    tenant_uid?: string,
    /** The URL for accessing the configuration or metadata of the Identity Provider. */
    url_string?: string,
}


/**
 * The Image object provides a description of a specific Virtual Machine (VM) or Container image.
 */
export interface OcsfImage extends OcsfEntity {
    /** The list of labels associated to the image. */
    labels?: string[],
    /** The full path to the image file. */
    path?: string,
    /** The image tag. For example: <code>1.11-alpine</code>. */
    tag?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the image. */
    tags?: OcsfKeyValueObject[],
}


/**
 * The JA4+ fingerprint object provides detailed fingerprint information about various aspects of network traffic which is both machine and human readable.
 */
export interface OcsfJa4Fingerprint extends OcsfObjectBase {
    /** The 'a' section of the JA4 fingerprint. */
    section_a?: string,
    /** The 'b' section of the JA4 fingerprint. */
    section_b?: string,
    /** The 'c' section of the JA4 fingerprint. */
    section_c?: string,
    /** The 'd' section of the JA4 fingerprint. */
    section_d?: string,
    /** The JA4+ fingerprint type as defined by FoxIO, normalized to the caption of 'type_id'. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The identifier of the JA4+ fingerprint type. */
    type_id: number,
    /** The JA4+ fingerprint value. */
    value: string,
}


/**
 * The Job object provides information about a scheduled job or task, including its name, command line, and state. It encompasses attributes that describe the properties and status of the scheduled job.
 */
export interface OcsfJob extends OcsfObjectBase {
    /** The job command line. */
    cmd_line?: string,
    /** The time when the job was created. */
    created_time?: number,
    /** The time when the job was created. */
    created_time_dt?: string,
    /** The description of the job. */
    desc?: string,
    /** The file that pertains to the job. */
    file?: OcsfFile,
    /** An array of actions that will be performed by the job when certain conditions are met. */
    job_actions?: OcsfJobAction[],
    /** An array of conditions or events that, when met, will initiate the job to perform specified actions. */
    job_triggers?: OcsfJobTrigger[],
    /** The time when the job was last run. */
    last_run_time?: number,
    /** The time when the job was last run. */
    last_run_time_dt?: string,
    /** The name of the job. */
    name?: string,
    /** The time when the job will next be run. */
    next_run_time?: number,
    /** The time when the job will next be run. */
    next_run_time_dt?: string,
    /** The run state of the job. */
    run_state?: string,
    /** The run state ID of the job. */
    run_state_id?: number,
    /** The job type, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The job type, i.e. the mechanism that executes the job. */
    type_id?: number,
    /** The unique job identifier. */
    uid?: string,
    /** The user that created the job. */
    user?: OcsfUser,
}


/**
 * The action that will be performed by the job when certain conditions are met.
 */
export interface OcsfJobAction {
    /** When <code>type_id</code> is <code>Execute (2)</code>, this describes the command line that is executed.<br/><br/>When <code>type_id</code> is <code>COM Handler (1)</code>, this <em>may</em> describe the DLL path stored in the COM component's <code>InprocServer32</code> key or the command line stored in the COM component's <code>LocalServer32</code> key. */
    cmd_line?: string,
    /** When <code>type_id</code> is <code>COM Handler (1)</code>, this describes the COM Class Identifier (CLSID). */
    com_class_uuid?: string,
    /** When known, describes the image file that is executed when <code>type_id</code> is <code>COM Handler</code> or <code>Execute</code>. Note that this attribute is intended to supplement the <code>com_class_uid</code> or <code>cmd_line</code> attributes, and is not an alternative to them. */
    file?: OcsfFile,
    /** The list of properties associated with the performed action.<br>Can be populated with additional attributes of a program execution process, COM object attributes, fields of a message box or an email. */
    properties?: OcsfKeyValueObject[],
    /** The job action type, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The job action type. */
    type_id: number,
    /** When <code>type_id</code> is <code>Execute (2)</code>, this describes the working directory of a program that is run by the job. */
    working_directory?: string,
}


/**
 * The condition or event that, when met, will initiate the job to perform specified actions.
 */
export interface OcsfJobTrigger {
    /** Event identifiers that pertain to the job trigger. Should be populated when the <code>Event (3)</code> type is specified. */
    event_codes?: string[],
    /** The time when the job was last run. */
    last_run_time?: number,
    /** The time when the job was last run. */
    last_run_time_dt?: string,
    /** A collection of log systems or components that pertain to the job trigger. Should be populated when the <code>Event (3)</code> type is specified. */
    log_sources?: string[],
    /** The time when the job will next be run. */
    next_run_time?: number,
    /** The time when the job will next be run. */
    next_run_time_dt?: string,
    /** The list of properties associated with the trigger.<br>Can be used to describe time boundaries of the job, amount of repetitions or when the job should be activated or expired. */
    properties?: OcsfKeyValueObject[],
    /** The job trigger type, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The job trigger type, i.e. the condition that must be met for the job to perform its action. */
    type_id: number,
    /** The user that pertains to the job trigger. Can be populated when the <code>Event (3)</code> type that bounds to specific user is used. */
    user?: OcsfUser,
}


/**
 * The KB Article object contains metadata that describes the patch or update.
 */
export interface OcsfKbArticle extends OcsfObjectBase {
    /** The average time to patch. */
    avg_timespan?: OcsfTimespan,
    /** The kb article bulletin identifier. */
    bulletin?: string,
    /** The vendors classification of the kb article. */
    classification?: string,
    /** The date the kb article was released by the vendor. */
    created_time?: number,
    /** The date the kb article was released by the vendor. */
    created_time_dt?: string,
    /** The install state of the kb article. */
    install_state?: string,
    /** The normalized install state ID of the kb article. */
    install_state_id?: number,
    /** The kb article has been replaced by another. */
    is_superseded?: boolean,
    /** The operating system the kb article applies. */
    os?: OcsfOs,
    /** The product details the kb article applies. */
    product?: OcsfProduct,
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
 * The Kernel Resource object provides information about a specific kernel resource, including its name and type. It describes essential attributes associated with a resource managed by the kernel of an operating system.
 */
export interface OcsfKernel extends OcsfObjectBase {
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
    type_id: number,
}


/**
 * The Kernel Extension object describes a kernel driver that has been loaded or unloaded into the operating system (OS) kernel.
 */
export interface OcsfKernelDriver extends OcsfObjectBase {
    /** The driver/extension file object. */
    file: OcsfFile,
}


/**
 * A generic object allowing to define a <code>{key:value}</code> pair.
 */
export interface OcsfKeyValueObject extends OcsfObjectBase {
    /** The name of the key. */
    name: string,
    /** The value associated to the key. */
    value?: string,
    /** Optional, the values associated to the key. You can populate this attribute, when you have multiple values for the same key. */
    values?: string[],
}


/**
 * The Keyboard Information object contains details and attributes related to a computer or device keyboard. It encompasses information that describes the characteristics, capabilities, and configuration of the keyboard.
 */
export interface OcsfKeyboardInfo extends OcsfObjectBase {
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
 * The Kill Chain Phase object represents a single phase of a cyber attack, including the initial reconnaissance and planning stages up to the final objective of the attacker. It provides a detailed description of each phase and its associated activities within the broader context of a cyber attack.
 */
export interface OcsfKillChainPhase extends OcsfObjectBase {
    /** The cyber kill chain phase. */
    phase?: string,
    /** The cyber kill chain phase identifier. */
    phase_id: number,
}


/**
 * The additional LDAP attributes that describe a person.
 */
export interface OcsfLdapPerson extends OcsfObjectBase {
    /** The cost center associated with the user. */
    cost_center?: string,
    /** The timestamp when the user was created. */
    created_time?: number,
    /** The timestamp when the user was created. */
    created_time_dt?: string,
    /** The timestamp when the user was deleted. In Active Directory (AD), when a user is deleted they are moved to a temporary container and then removed after 30 days. So, this field can be populated even after a user is deleted for the next 30 days. */
    deleted_time?: number,
    /** The timestamp when the user was deleted. In Active Directory (AD), when a user is deleted they are moved to a temporary container and then removed after 30 days. So, this field can be populated even after a user is deleted for the next 30 days. */
    deleted_time_dt?: string,
    /** The name of the department in which the user works. */
    department?: string,
    /** The display name of the LDAP person. According to RFC 2798, this is the preferred name of a person to be used when displaying entries. */
    display_name?: string,
    /** A list of additional email addresses for the user. */
    email_addrs?: string[],
    /** The employee identifier assigned to the user by the organization. */
    employee_uid?: string,
    /** The given or first name of the user. */
    given_name?: string,
    /** The timestamp when the user was or will be hired by the organization. */
    hire_time?: number,
    /** The timestamp when the user was or will be hired by the organization. */
    hire_time_dt?: string,
    /** The user's job title. */
    job_title?: string,
    /** The labels associated with the user. For example in AD this could be the <code>userType</code>, <code>employeeType</code>. For example: <code>Member, Employee</code>. */
    labels?: string[],
    /** The last time when the user logged in. */
    last_login_time?: number,
    /** The last time when the user logged in. */
    last_login_time_dt?: string,
    /** The LDAP and X.500 <code>commonName</code> attribute, typically the full name of the person. For example, <code>John Doe</code>. */
    ldap_cn?: string,
    /** The X.500 Distinguished Name (DN) is a structured string that uniquely identifies an entry, such as a user, in an X.500 directory service For example, <code>cn=John Doe,ou=People,dc=example,dc=com</code>. */
    ldap_dn?: string,
    /** The timestamp when the user left or will be leaving the organization. */
    leave_time?: number,
    /** The timestamp when the user left or will be leaving the organization. */
    leave_time_dt?: string,
    /** The geographical location associated with a user. This is typically the user's usual work location. */
    location?: OcsfLocation,
    /** The user's manager. This helps in understanding an org hierarchy. This should only ever be populated once in an event. I.e. there should not be a manager's manager in an event. */
    manager?: OcsfUser,
    /** The timestamp when the user entry was last modified. */
    modified_time?: number,
    /** The timestamp when the user entry was last modified. */
    modified_time_dt?: string,
    /** The primary office location associated with the user. This could be any string and isn't a specific address. For example, <code>South East Virtual</code>. */
    office_location?: string,
    /** The telephone number of the user. Corresponds to the LDAP <code>Telephone-Number</code> CN. */
    phone_number?: string,
    /** The last or family name for the user. */
    surname?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the user. */
    tags?: OcsfKeyValueObject[],
}


/**
 * The load balancer object describes the load balancer entity and contains additional information regarding the distribution of traffic across a network.
 */
export interface OcsfLoadBalancer extends OcsfEntity {
    /** The request classification as defined by the load balancer. */
    classification?: string,
    /** The numeric response status code detailing the connection from the load balancer to the destination target. */
    code?: number,
    /** The destination to which the load balancer is distributing traffic. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** An object detailing the load balancer connection attempts and responses. */
    endpoint_connections?: OcsfEndpointConnection[],
    /** The load balancer error message. */
    error_message?: string,
    /** The IP address of the load balancer node that handled the client request. Note: the load balancer may have other IP addresses, and this is not an IP address of the target/distribution endpoint - see <code>dst_endpoint</code>. */
    ip?: string,
    /** The load balancer message. */
    message?: string,
    /** General purpose metrics associated with the load balancer. */
    metrics?: OcsfMetric[],
    /** The status detail contains additional status information about the load balancer distribution event. */
    status_detail?: string,
}


/**
 * The Geo Location object describes a geographical location, usually associated with an IP address.
 */
export interface OcsfLocation extends OcsfObjectBase {
    /** Expressed as either height above takeoff location or height above ground level (AGL) for a UAS current location. This value is provided in meters and must have a minimum resolution of 1 m. Special Values: <code>Invalid</code>, <code>No Value</code>, or <code>Unknown: -1000 m</code>. */
    aerial_height?: string,
    /** The name of the city. */
    city?: string,
    /** The name of the continent. */
    continent?: string,
    /** A two-element array, containing a longitude/latitude pair. The format conforms with GeoJSON. For example: <code>[-73.983, 40.719]</code>. */
    coordinates?: number[],
    /** The ISO 3166-1 Alpha-2 country code.<p><b>Note:</b> The two letter country code should be capitalized. For example: <code>US</code> or <code>CA</code>.</p> */
    country?: string,
    /** The description of the geographical location. */
    desc?: string,
    /** The aircraft distance above or below the ellipsoid as measured along a line that passes through the aircraft and is normal to the surface of the WGS-84 ellipsoid. This value is provided in meters and must have a minimum resolution of 1 m. Special Values: <code>Invalid</code>, <code>No Value</code>, or <code>Unknown: -1000 m</code>. */
    geodetic_altitude?: string,
    /** Provides quality/containment on geodetic altitude. This is based on ADS-B Geodetic Vertical Accuracy (GVA). Measured in meters. */
    geodetic_vertical_accuracy?: string,
    /** <p>Geohash of the geo-coordinates (latitude and longitude).</p>Geohashing is a geocoding system used to encode geographic coordinates in decimal degrees, to a single string. */
    geohash?: string,
    /** Provides quality/containment on horizontal position. This is based on ADS-B NACp. Measured in meters. */
    horizontal_accuracy?: string,
    /** Indicates whether the location is on-premises. */
    is_on_premises?: boolean,
    /** The name of the Internet Service Provider (ISP). */
    isp?: string,
    /** The geographical Latitude coordinate represented in Decimal Degrees (DD). For example: <code>42.361145</code>. */
    lat?: number,
    /** The geographical Longitude coordinate represented in Decimal Degrees (DD). For example: <code>-71.057083</code>. */
    long?: number,
    /** The postal code of the location. */
    postal_code?: string,
    /** The uncorrected barometric pressure altitude (based on reference standard 29.92 inHg, 1013.25 mb) provides a reference for algorithms that utilize 'altitude deltas' between aircraft. This value is provided in meters and must have a minimum resolution of 1 m.. Special Values: <code>Invalid</code>, <code>No Value</code>, or <code>Unknown: -1000 m</code>. */
    pressure_altitude?: string,
    /** The provider of the geographical location data. */
    provider?: string,
    /** The alphanumeric code that identifies the principal subdivision (e.g. province or state) of the country. For example, 'CH-VD' for the Canton of Vaud, Switzerland */
    region?: string,
}


/**
 * The Logger object represents the device and product where events are stored with times for receipt and transmission.  This may be at the source device where the event occurred, a remote scanning device, intermediate hops, or the ultimate destination.
 */
export interface OcsfLogger extends OcsfEntity {
    /** The device where the events are logged. */
    device?: OcsfDevice,
    /** The unique identifier of the event assigned by the logger. */
    event_uid?: string,
    /** Indicates whether the OCSF event data has been truncated due to size limitations. When <code>true</code>, some event data may have been omitted to fit within system constraints. */
    is_truncated?: boolean,
    /** The format of data in the log. For example JSON, syslog or CSV. */
    log_format?: string,
    /** The level at which an event was logged. This can be log provider specific. For example the audit level. */
    log_level?: string,
    /** The log name for the logging provider log, or the file name of the system log. This may be an intermediate store-and-forward log or a vendor destination log. For example /archive/server1/var/log/messages.0 or /var/log/. */
    log_name?: string,
    /** The logging provider or logging service that logged the event. This may be an intermediate application store-and-forward log or a vendor destination log. */
    log_provider?: string,
    /** The event log schema version of the original event. For example the syslog version or the Cisco Log Schema version */
    log_version?: string,
    /** The time when this logger received and logged the event. For the last logger in the pipeline, this value should match <code>metadata.logged_time</code>. */
    logged_time?: number,
    /** The time when this logger received and logged the event. For the last logger in the pipeline, this value should match <code>metadata.logged_time</code>. */
    logged_time_dt?: string,
    /** The product logging the event.  This may be the event source product, a management server product, a scanning product, a SIEM, etc. */
    product?: OcsfProduct,
    /** The time when the event was transmitted from the logging device to it's next destination. */
    transmit_time?: number,
    /** The time when the event was transmitted from the logging device to it's next destination. */
    transmit_time_dt?: string,
    /** The original size of the OCSF event data in kilobytes before any truncation occurred. This field is typically populated when <code>is_truncated</code> is <code>true</code> to indicate the full size of the original event. */
    untruncated_size?: number,
    /** The version of the logging provider. */
    version?: string,
}


/**
 * This object is a used to capture strings which may be truncated by a security product due to their length.
 */
export interface OcsfLongString extends OcsfObjectBase {
    /** Indicates that <code>value</code> has been truncated. May be omitted if truncation has not occurred. */
    is_truncated?: boolean,
    /** The size in bytes of the string represented by <code>value</code> before truncation. Should be omitted if truncation has not occurred. */
    untruncated_size?: number,
    /** The string value, truncated if <code>is_truncated</code> is <code>true</code>. */
    value: string,
}


/**
 * The Malware object describes the classification of known malicious software, which is intentionally designed to cause damage to a computer, server, client, or computer network.
 */
export interface OcsfMalware extends OcsfEntity {
    /** The list of normalized identifiers of the malware classifications. */
    classification_ids: number[],
    /** The list of malware classifications, normalized to the captions of the <code>classification_ids</code> values. In the case of 'Other', they are defined by the event source. */
    classifications?: string[],
    /** The list of Common Vulnerabilities and Exposures (CVE) identifiers associated with the malware. */
    cves?: OcsfCve[],
    /** The list of file objects representing files that were identified as infected by the malware. */
    files?: OcsfFile[],
    /** The number of files that were identified to be infected by the malware. */
    num_infected?: number,
    /** The filesystem path of the malware that was observed. */
    path?: string,
    /** The name or identifier of the security solution or service that provided the malware detection information. */
    provider?: string,
    /** The severity of the malware, normalized to the captions of the <code>severity_id</code> values. In the case of 'Other', they are defined by the event source. */
    severity?: string,
    /** The normalized identifier of the malware severity. */
    severity_id?: number,
}


/**
 * The Scan object describes characteristics of a proactive scan.
 */
export interface OcsfScan extends OcsfEntity {
    /** The type of scan. */
    type?: string,
    /** The type id of the scan. */
    type_id: number,
}


/**
 * The malware scan information object describes characteristics, metadata of a malware scanning job.
 */
export interface OcsfMalwareScanInfo extends OcsfScan {
    /** The timestamp indicating when the scan job completed execution. */
    end_time?: number,
    /** The timestamp indicating when the scan job completed execution. */
    end_time_dt?: string,
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
    /** The timestamp indicating when the scan job began execution. */
    start_time_dt?: string,
    /** The number of unique malware detected across all infected files. */
    unique_malware_count?: number,
}


/**
 * The Managed Entity object describes the type and version of an entity, such as a user, device, or policy.  For types in the <code>type_id</code> enum list, an associated attribute should be populated.  If the type of entity is not in the <code>type_id</code> list, information can be put into the <code>data</code> attribute, <code>type_id</code> should be 'Other' and the <code>type</code> attribute should label the entity type.
 */
export interface OcsfManagedEntity extends OcsfEntity {
    /** The managed entity content as a JSON object. */
    data?: string,
    /** An addressable device, computer system or host. */
    device?: OcsfDevice,
    /** The email object. */
    email?: OcsfEmail,
    /** The group object associated with an entity such as user, policy, or rule. */
    group?: OcsfGroup,
    /** The detailed geographical location usually associated with an IP address. */
    location?: OcsfLocation,
    /** The Organization object containing details about the managed organizational entity. This object includes properties such as the organization name, unique identifier, type, and other organizational metadata. This attribute should be populated when <code>type_id</code> is <code>4</code> (Organization). */
    org?: OcsfOrganization,
    /** Describes details of a managed policy. */
    policy?: OcsfPolicy,
    /** The managed entity type. For example: <code>Policy</code>, <code>User</code>, <code>Organization</code>, <code>Device</code>. */
    type?: string,
    /** The type of the Managed Entity. It is recommended to also populate the <code>type</code> attribute with the associated label, or the source specific name if <code>Other</code>. */
    type_id?: number,
    /** The user that pertains to the event or object. */
    user?: OcsfUser,
    /** The version of the managed entity. For example: <code>1.2.3</code>. */
    version?: string,
}


/**
 * Communication context for AI system interactions including protocols, roles, clients, and session information for MCP and other AI communication systems.
 */
export interface OcsfMessageContext extends OcsfEntity {
    /** The normalized caption of the <code>ai_role_id</code>. */
    ai_role?: string,
    /** Specifies the functional role of the AI within the context of this message, such as retrieving information, assisting reasoning, executing a tool, or generating content. */
    ai_role_id?: number,
    /** The initiating client application. In AI systems, this represents the client-side application or framework that initiates requests (e.g., LangChain application, web browser, mobile app, SDK implementation). */
    application?: OcsfApplication,
    /** Number of tokens in the model's response/completion for this message. */
    completion_tokens?: number,
    /** The text of the input prompt provided to the model for this message. This is the verbatim instruction, query, or context supplied to the AI system that drove the operation. */
    prompt_text?: string,
    /** Number of tokens in the input prompt for this message. */
    prompt_tokens?: number,
    /** The text of the model's response generated for this message. For agent-mediated operations, this is the content returned by the assistant, tool, or agent. */
    response_text?: string,
    /** The server or service handling the request. In AI systems, this represents the AI service, API endpoint, or agent that processes and responds to requests (e.g., OpenAI API service, Claude API service, internal AI model service). */
    service?: OcsfService,
    /** Total number of tokens used for this message (prompt + completion). */
    total_tokens?: number,
}


/**
 * The Metadata object describes the metadata associated with the event.
 */
export interface OcsfMetadata extends OcsfObjectBase, OcsfDataClassificationProfile {
    /** A unique identifier used to correlate this OCSF event with other related OCSF events, distinct from the event's <code>uid</code> value. This enables linking multiple OCSF events that are part of the same activity, transaction, or security incident across different systems or time periods. */
    correlation_uid?: string,
    /** Debug information about non-fatal issues with this OCSF event. Each issue is a line in this string array. */
    debug?: string[],
    /** The identifier of the original event. For example the numerical Windows Event Code or Cisco syslog code. */
    event_code?: string,
    /** The schema extension used to create the event. */
    extension?: OcsfExtension,
    /** The schema extensions used to create the event. */
    extensions?: OcsfExtension[],
    /** Indicates whether the OCSF event data has been truncated due to size limitations. When <code>true</code>, some event data may have been omitted to fit within system constraints. */
    is_truncated?: boolean,
    /** The list of labels attached to the event. For example: <code>["sample", "dev"]</code> */
    labels?: string[],
    /** The format of data in the log where the data originated. For example CSV, XML, Windows Multiline, JSON, syslog or Cisco Log Schema. */
    log_format?: string,
    /** The level at which an event was logged. This can be log provider specific. For example the audit level. */
    log_level?: string,
    /** The event log name, typically for the consumer of the event. For example, the storage bucket name, SIEM repository index name, etc. */
    log_name?: string,
    /** The logging provider or logging service that logged the event. For example AWS CloudWatch or Splunk. */
    log_provider?: string,
    /** The log system or component where the data originated. For example, a file path, syslog server name or a Windows hostname and logging subsystem such as Security. */
    log_source?: string,
    /** The event log schema version of the original event. For example the syslog version or the Cisco Log Schema version */
    log_version?: string,
    /** The ultimate logged time in the event pipeline - when the event reached its final destination (e.g., SIEM, data lake). If <code>loggers</code> is populated, this should match the <code>logged_time</code> of the last entry in the <code>loggers</code> array. This is distinct from <code>time</code> (when the activity occurred) and <code>processed_time</code> (when an intermediate system processed the event). */
    logged_time?: number,
    /** The ultimate logged time in the event pipeline - when the event reached its final destination (e.g., SIEM, data lake). If <code>loggers</code> is populated, this should match the <code>logged_time</code> of the last entry in the <code>loggers</code> array. This is distinct from <code>time</code> (when the activity occurred) and <code>processed_time</code> (when an intermediate system processed the event). */
    logged_time_dt?: string,
    /** An ordered array of Logger objects describing each hop in the event pipeline between the source and its final destination. Each entry captures the logging product, device, and timestamps (<code>logged_time</code>, <code>transmit_time</code>) at that stage. The last entry's <code>logged_time</code> should match <code>metadata.logged_time</code>. */
    loggers?: OcsfLogger[],
    /** The time when the event was last modified or enriched. */
    modified_time?: number,
    /** The time when the event was last modified or enriched. */
    modified_time_dt?: string,
    /** The unique identifier assigned to the event in its original logging system before transformation to OCSF format. This field preserves the source system's native event identifier, enabling traceability back to the raw log entry. For example, a Windows Event Record ID, a syslog message ID, a Splunk _cd value, or a database transaction log sequence number. */
    original_event_uid?: string,
    /** The original event time as reported by the event source, preserved as a pass-through string in its native format (e.g., Syslog timestamp, Windows event time). This is not normalized to <code>timestamp_t</code> - the normalized equivalent is the base event <code>time</code> attribute. Omit if the event is generated rather than collected via logs. */
    original_time?: string,
    /** The time when the event was processed by an intermediate system (e.g., ETL pipeline, event processor) before reaching its final destination. Can be used with <code>logged_time</code> to calculate queuing duration via <code>total_queued_duration</code>. */
    processed_time?: number,
    /** The time when the event was processed by an intermediate system (e.g., ETL pipeline, event processor) before reaching its final destination. Can be used with <code>logged_time</code> to calculate queuing duration via <code>total_queued_duration</code>. */
    processed_time_dt?: string,
    /** The product that reported the event. */
    product: OcsfProduct,
    /** The list of profiles used to create the event.  Profiles should be referenced by their <code>name</code> attribute for core profiles, or <code>extension/name</code> for profiles from extensions. */
    profiles?: string[],
    /** The entity from which the event or finding was first reported. */
    reporter?: OcsfReporter,
    /** Sequence number of the event. The sequence number is a value available in some events, to make the exact ordering of events unambiguous, regardless of the event time precision. */
    sequence?: number,
    /** The source of the event or finding. This can be any distinguishing name for the logical origin of the data — for example, 'CloudTrail Events', or a use case like 'Attack Simulations' or 'Vulnerability Scans'. */
    source?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated to the event. */
    tags?: OcsfKeyValueObject[],
    /** The unique tenant identifier. */
    tenant_uid?: string,
    /** The amount of time an event spent in a queue awaiting processing. In this case, the value is the difference between <code>processed_time</code> and <code>logged_time</code>. This duration is inclusive of all queues between the originator of the event and the intended long-term storage destination of the event. */
    total_queued_duration?: OcsfTimespan,
    /** An array of transformation info that describes the mappings or transforms applied to the data. */
    transformation_info_list?: OcsfTransformationInfo[],
    /** The time when the event was transmitted from the logging device to it's next destination. */
    transmit_time?: number,
    /** The time when the event was transmitted from the logging device to it's next destination. */
    transmit_time_dt?: string,
    /** The type of the event or finding as a subset of the <code>source</code> of the event. This can be any distinguishing characteristic of the data. For example 'Management Events' or 'Device Penetration Test'. */
    type?: string,
    /** A unique identifier assigned to the OCSF event. This ID is specific to the OCSF event itself and is distinct from the original event identifier in the source system (see <code>original_event_uid</code>). */
    uid?: string,
    /** The original size of the OCSF event data in kilobytes before any truncation occurred. This field is typically populated when <code>is_truncated</code> is <code>true</code> to indicate the full size of the original event. */
    untruncated_size?: number,
    /** The version of the OCSF schema, using Semantic Versioning Specification (SemVer). For example: <code>1.0.0</code>. Event consumers use the version to determine the available event attributes. */
    version: string,
}


/**
 * The Metric object defines a simple name/value pair entity for a metric.
 */
export interface OcsfMetric extends OcsfObjectBase {
    /** The name of the metric. */
    name: string,
    /** The value of the metric. */
    value: string,
}


/**
 * The MITRE Mitigation object describes the ATT&CK® or ATLAS™ Mitigation ID and/or name that is associated to an attack.
 */
export interface OcsfMitigation extends OcsfEntity {
    /** The D3FEND countermeasures that are associated with the attack technique. For example: ATT&CK Technique <code>T1003</code> is addressed by Mitigation <code>M1027</code>, and D3FEND Technique <code>D3-OTP</code>. */
    countermeasures?: OcsfD3fend[],
    /** The versioned permalink of the Mitigation. For example: <code>https://attack.mitre.org/versions/v14/mitigations/M1027</code>. */
    src_url?: string,
}


/**
 * The Module object describes the attributes of a module.
 */
export interface OcsfModule extends OcsfObjectBase {
    /** The memory address where the module was loaded. */
    base_address?: string,
    /** The module file object. */
    file?: OcsfFile,
    /** Details about the invocation of the function given in <code>function_name</code>. */
    function_invocation?: OcsfFunctionInvocation,
    /** The invoked function in the module. For load and unload events, this is the entry-point function of the module. The system calls the entry-point function whenever a process or thread loads or unloads the module. */
    function_name?: string,
    /** The load type, normalized to the caption of the load_type_id value. In the case of 'Other', it is defined by the event source. */
    load_type?: string,
    /** The normalized identifier for how the module was loaded in memory. */
    load_type_id?: number,
    /** The start address of the execution. */
    start_address?: string,
    /** The module type. */
    type?: string,
}


/**
 * The Network Connection Information object describes characteristics of an OSI Transport Layer communication, including TCP and UDP.
 */
export interface OcsfNetworkConnectionInfo extends OcsfObjectBase {
    /** The boundary of the connection, normalized to the caption of 'boundary_id'. In the case of 'Other', it is defined by the event source. <p> For cloud connections, this translates to the traffic-boundary(same VPC, through IGW, etc.). For traditional networks, this is described as Local, Internal, or External.</p> */
    boundary?: string,
    /** <p>The normalized identifier of the boundary of the connection. </p><p> For cloud connections, this translates to the traffic-boundary (same VPC, through IGW, etc.). For traditional networks, this is described as Local, Internal, or External.</p> */
    boundary_id?: number,
    /** The Community ID of the network connection. */
    community_uid?: string,
    /** The direction of the initiated connection, traffic, or email, normalized to the caption of the direction_id value. In the case of 'Other', it is defined by the event source. */
    direction?: string,
    /** The normalized identifier of the direction of the initiated connection, traffic, or email. */
    direction_id: number,
    /** The Connection Flag History summarizes events in a network connection. For example flags <code> ShAD </code> representing SYN, SYN/ACK, ACK and Data exchange. */
    flag_history?: string,
    /** The IP protocol name in lowercase, as defined by the Internet Assigned Numbers Authority (IANA). For example: <code>tcp</code> or <code>udp</code>. */
    protocol_name?: string,
    /** The IP protocol number, as defined by the Internet Assigned Numbers Authority (IANA). For example: <code>6</code> for TCP and <code>17</code> for UDP. */
    protocol_num?: number,
    /** The Internet Protocol version. */
    protocol_ver?: string,
    /** The Internet Protocol version identifier. */
    protocol_ver_id?: number,
    /** The authenticated user or service session. */
    session?: OcsfSession,
    /** The network connection TCP header flags (i.e., control bits). */
    tcp_flags?: number,
    /** The unique identifier of the connection. */
    uid?: string,
}


/**
 * The Network Endpoint object describes characteristics of a network endpoint. These can be a source or destination of a network connection.
 */
export interface OcsfNetworkEndpoint extends OcsfEndpoint {
    /** The Autonomous System details associated with an IP address. */
    autonomous_system?: OcsfAutonomousSystem,
    /** Fingerprints that identify the specific application implementation on this endpoint, such as Cisco NPF or HASSH. */
    fingerprints?: OcsfFingerprint[],
    /** The intermediate IP Addresses. For example, the IP addresses in the HTTP X-Forwarded-For header. */
    intermediate_ips?: string[],
    /** The name of the Internet Service Provider (ISP). */
    isp?: string,
    /** The organization name of the Internet Service Provider (ISP). This represents the parent organization or company that owns/operates the ISP. For example, Comcast Corporation would be the ISP org for Xfinity internet service. This attribute helps identify the ultimate provider when ISPs operate under different brand names. */
    isp_org?: string,
    /** Indicates whether the endpoint resides inside the customer’s network, outside on the Internet, or if its location relative to the customer’s network cannot be determined. The value is normalized to the caption of the <code>network_scope_id</code>. */
    network_scope?: string,
    /** The normalized identifier of the endpoint’s network scope. The normalized network scope identifier indicates whether the endpoint resides inside the customer’s network, outside on the Internet, or if its location relative to the customer’s network cannot be determined. */
    network_scope_id?: number,
    /** The port used for communication within the network connection. */
    port?: number,
    /** The network proxy information pertaining to a specific endpoint. This can be used to describe information pertaining to network address translation (NAT). */
    proxy_endpoint?: OcsfNetworkProxy,
    /** The service name in service-to-service connections. For example, AWS VPC logs the pkt-src-aws-service and pkt-dst-aws-service fields identify the connection is coming from or going to an AWS service. */
    svc_name?: string,
}


/**
 * The Network Interface object describes the type and associated attributes of a physical or virtual network interface.
 */
export interface OcsfNetworkInterface extends OcsfEntity {
    /** The hostname associated with the network interface. */
    hostname?: string,
    /** The IP address associated with the network interface. */
    ip?: string,
    /** The MAC address of the network interface. */
    mac?: string,
    /** The namespace is useful in merger or acquisition situations. For example, when similar entities exist that you need to keep separate. */
    namespace?: string,
    /** The list of open ports on a network interface, including port numbers and associated protocol information. */
    open_ports?: OcsfPortInfo[],
    /** The subnet prefix length determines the number of bits used to represent the network part of the IP address. The remaining bits are reserved for identifying individual hosts within that subnet. */
    subnet_prefix?: number,
    /** The type of network interface. */
    type?: string,
    /** The network interface type identifier. */
    type_id?: number,
}


/**
 * The network proxy endpoint object describes a proxy server, which acts as an intermediary between a client requesting a resource and the server providing that resource.
 */
export interface OcsfNetworkProxy extends OcsfNetworkEndpoint {
}


/**
 * The Network Traffic object describes characteristics of network traffic over a time period. The metrics represent network data transferred between source and destination during an observation window.
 */
export interface OcsfNetworkTraffic extends OcsfObjectBase {
    /** The total number of bytes transferred in both directions (sum of bytes_in and bytes_out). */
    bytes?: number,
    /** The number of bytes sent from the destination to the source (inbound direction). */
    bytes_in?: number,
    /** The number of bytes that were missed during observation, typically due to packet loss or sampling limitations. */
    bytes_missed?: number,
    /** The number of bytes sent from the source to the destination (outbound direction). */
    bytes_out?: number,
    /** The total number of chunks transferred in both directions (sum of chunks_in and chunks_out). */
    chunks?: number,
    /** The number of chunks sent from the destination to the source (inbound direction). */
    chunks_in?: number,
    /** The number of chunks sent from the source to the destination (outbound direction). */
    chunks_out?: number,
    /** The end time of the observation or reporting period. */
    end_time?: number,
    /** The end time of the observation or reporting period. */
    end_time_dt?: string,
    /** The total number of packets transferred in both directions (sum of packets_in and packets_out). */
    packets?: number,
    /** The number of packets sent from the destination to the source (inbound direction). */
    packets_in?: number,
    /** The number of packets sent from the source to the destination (outbound direction). */
    packets_out?: number,
    /** The start time of the observation or reporting period. */
    start_time?: number,
    /** The start time of the observation or reporting period. */
    start_time_dt?: string,
    /** The time span object representing the duration of the observation or reporting period. */
    timespan?: OcsfTimespan,
}


/**
 * Represents a node or a vertex in a graph structure.
 */
export interface OcsfNode extends OcsfObjectBase {
    /** Additional data about the node stored as key-value pairs. Can include custom properties specific to the node. */
    data?: string,
    /** A human-readable description of the node's purpose or meaning in the graph. */
    desc?: string,
    /** A human-readable name or label for the node. Should be descriptive and unique within the graph context. */
    name?: string,
    /** Categorizes the node into a specific class or type. Useful for grouping and filtering nodes. */
    type?: string,
    /** A unique string or numeric identifier that distinguishes this node from all others in the graph. Must be unique across all nodes. */
    uid: string,
}


/**
 * Represents a note or a comment in the system. Notes can be used to provide additional context, explanations, or observations related to an event, object, or any other entity in the system. They can be created and modified by users to capture important information that may not be directly represented in the structured data.
 */
export interface OcsfNote extends OcsfObjectBase {
    /** A user provided comment. */
    comment: string,
    /** The time when the note was created. */
    created_time?: number,
    /** The time when the note was created. */
    created_time_dt?: string,
    /** The time when the note was last modified. */
    modified_time?: number,
    /** The time when the note was last modified. */
    modified_time_dt?: string,
    /** The user who created or last modified the note. Typically the same user that created the note can modify the note. */
    owner?: OcsfUser,
    /** A short description of the comment, if applicable. */
    title?: string,
    /** The unique identifier of the note, if applicable. */
    uid?: string,
}


/**
 * The observable object is a pivot element that contains related information found in many places in the event.
 */
export interface OcsfObservable extends OcsfObjectBase {
    /** The unique identifier (<code>metadata.uid</code>) of the source OCSF event from which this observable was extracted. This field enables linking observables back to their originating event data when observables are stored in a separate location or system. */
    event_uid?: string,
    /** The full name of the observable attribute. The <code>name</code> is a pointer/reference to an attribute within the OCSF event data. For example: <code>file.name</code>. Array attributes may be represented in one of three ways. For example: <code>resources.uid</code>, <code>resources[].uid</code>, <code>resources[0].uid</code>. */
    name?: string,
    /** Contains the original and normalized reputation scores. */
    reputation?: OcsfReputation,
    /** The observable value type name. */
    type?: string,
    /** The observable value type identifier. */
    type_id: number,
    /** The OCSF event type UID (<code>type_uid</code>) of the source event that this observable was extracted from. This field enables filtering and categorizing observables by their originating event type. For example: <code>300101</code> for Network Activity (class_uid 3001) with activity_id 1. */
    type_uid?: number,
    /** The value associated with the observable attribute. The meaning of the value depends on the observable type.<br/>If the <code>name</code> refers to a scalar attribute, then the <code>value</code> is the value of the attribute.<br/>If the <code>name</code> refers to an object attribute, then the <code>value</code> is not populated. */
    value?: string,
}


/**
 * A record of an observed value or event that captures the timing and frequency of its occurrence. Used to track when values/events were first detected, last detected, and their total occurrence count.
 */
export interface OcsfObservation extends OcsfObjectBase {
    /** Integer representing the total number of times this specific value/event was observed across all occurrences. Helps establish prevalence and patterns. */
    count?: number,
    /** The time window when the value or event was first observed. It is used to analyze activity patterns, detect trends, or correlate events within a specific timeframe. */
    timespan?: OcsfTimespan,
    /** The specific value, event, indicator or data point that was observed and recorded. This is the core piece of information being tracked. */
    value: string,
}


/**
 * Details about where in the target entity, specified information was discovered. Only the attributes, relevant to the target entity type should be populated.
 */
export interface OcsfOccurrenceDetails extends OcsfObjectBase {
    /** The cell name/reference in a spreadsheet. e.g <code>A2</code> */
    cell_name?: string,
    /** The column name in a spreadsheet, where the information was discovered. */
    column_name?: string,
    /** The column number in a spreadsheet or a plain text document, where the information was discovered. */
    column_number?: number,
    /** The line number of the last line of the file, where the information was discovered. */
    end_line?: number,
    /** The JSON path of the attribute in a json record, where the information was discovered */
    json_path?: string,
    /** The page number in a document, where the information was discovered. */
    page_number?: number,
    /** The index of the record in the array of records, where the information was discovered. e.g. the index of a record in an array of JSON records in a file. */
    record_index_in_array?: number,
    /** The row number in a spreadsheet, where the information was discovered. */
    row_number?: number,
    /** The line number of the first line of the file, where the information was discovered. */
    start_line?: number,
}


/**
 * The Organization object describes characteristics of an organization or company and its division if any. Additionally, it also describes cloud and Software-as-a-Service (SaaS) logical hierarchies such as AWS Organizations, Google Cloud Organizations, Oracle Cloud Tenancies, and similar constructs.
 */
export interface OcsfOrganization extends OcsfEntity {
    /** The name of an organizational unit, Google Cloud Folder, or AWS Org Unit. For example, the <code> GCP Project Name </code>, or <code> Dev_Prod_OU </code>. */
    ou_name?: string,
    /** The unique identifier of an organizational unit, Google Cloud Folder, or AWS Org Unit. For example, an  <code> Oracle Cloud Tenancy ID </code>, <code> AWS OU ID </code>, or <code> GCP Folder ID </code>. */
    ou_uid?: string,
}


/**
 * The Operating System (OS) object describes characteristics of an OS, such as Linux or Windows.
 */
export interface OcsfOs extends OcsfObjectBase {
    /** The operating system build number. */
    build?: string,
    /** The operating system country code, as defined by the ISO 3166-1 standard (Alpha-2 code).<p><b>Note:</b> The two letter country code should be capitalized. For example: <code>US</code> or <code>CA</code>.</p> */
    country?: string,
    /** The Common Platform Enumeration (CPE) name. For example: <code>cpe:/a:apple:safari:16.2</code>. */
    cpe_name?: string,
    /** The cpu architecture, the number of bits used for addressing in memory. For example: <code>32</code> or <code>64</code>. */
    cpu_bits?: number,
    /** The operating system edition. For example: <code>Professional</code>. */
    edition?: string,
    /** The kernel release of the operating system. On Unix-based systems, this is determined from the <code>uname -r</code> command output, for example "5.15.0-122-generic". */
    kernel_release?: string,
    /** The two letter lower case language codes, as defined by ISO 639-1. For example: <code>en</code> (English), <code>de</code> (German), or <code>fr</code> (French). */
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
    type_id: number,
    /** The version of the OS running on the device that originated the event. For example: "Windows 10", "OS X 10.7", or "iOS 9". */
    version?: string,
}


/**
 * The OSINT (Open Source Intelligence) object contains details related to an indicator such as the indicator itself, related indicators, geolocation, registrar information, subdomains, analyst commentary, and other contextual information. This information can be used to further enrich a detection or finding by providing decisioning support to other analysts and engineers.
 */
export interface OcsfOsint extends OcsfObjectBase {
    /** Any pertinent DNS answers information related to an indicator or OSINT analysis. */
    answers?: OcsfDnsAnswer[],
    /** MITRE ATT&CK Tactics, Techniques, and/or Procedures (TTPs) pertinent to an indicator or OSINT analysis. */
    attacks?: OcsfAttack[],
    /** Any pertinent autonomous system information related to an indicator or OSINT analysis. */
    autonomous_system?: OcsfAutonomousSystem,
    /** The campaign object describes details about the campaign that was the source of the activity. */
    campaign?: OcsfCampaign,
    /** Categorizes the threat indicator based on its functional or operational role. */
    category?: string,
    /** Analyst commentary or source commentary about an indicator or OSINT analysis. */
    comment?: string,
    /** The confidence of an indicator or analysis, normalized to the caption of the confidence_id value. In the case of 'Other', it is defined by the event source or analyst. */
    confidence?: string,
    /** The normalized identifier of the confidence level, reflecting the accuracy or pertinence of the OSINT indicator or analysis. A low confidence indicates that the collected information lacked sufficient detail or accuracy to fully qualify the indicator as malicious. When the value is <code>99</code> (Other), the <code>confidence</code> attribute must contain the source-specific label. */
    confidence_id?: number,
    /** The timestamp when the indicator was initially created or identified. */
    created_time?: number,
    /** The timestamp when the indicator was initially created or identified. */
    created_time_dt?: string,
    /** The identifier of the user, system, or organization that contributed the indicator. */
    creator?: OcsfUser,
    /** A detailed explanation of the indicator, including its context, purpose, and relevance. */
    desc?: string,
    /** The specific detection pattern or signature associated with the indicator. */
    detection_pattern?: string,
    /** The detection pattern type, normalized to the caption of the detection_pattern_type_id value. In the case of 'Other', it is defined by the event source. */
    detection_pattern_type?: string,
    /** Specifies the type of detection pattern used to identify the associated threat indicator. */
    detection_pattern_type_id?: number,
    /** Any email information pertinent to an indicator or OSINT analysis. */
    email?: OcsfEmail,
    /** Any email authentication information pertinent to an indicator or OSINT analysis. */
    email_auth?: OcsfEmailAuth,
    /** The expiration date of the indicator, after which it is no longer considered reliable. */
    expiration_time?: number,
    /** The expiration date of the indicator, after which it is no longer considered reliable. */
    expiration_time_dt?: string,
    /** A unique identifier assigned by an external system for cross-referencing. */
    external_uid?: string,
    /** Any pertinent file information related to an indicator or OSINT analysis. */
    file?: OcsfFile,
    /** A grouping of adversarial behaviors and resources believed to be associated with specific threat actors or campaigns. Intrusion sets often encompass multiple campaigns and are used to organize related activities under a common label. */
    intrusion_sets?: string[],
    /** Lockheed Martin Kill Chain Phases pertinent to an indicator or OSINT analysis. */
    kill_chain?: OcsfKillChainPhase[],
    /** Tags or keywords associated with the indicator to enhance searchability. */
    labels?: string[],
    /** Any pertinent geolocation information related to an indicator or OSINT analysis. */
    location?: OcsfLocation,
    /** A list of Malware objects, describing details about the identified malware. */
    malware?: OcsfMalware[],
    /** The timestamp of the last modification or update to the indicator. */
    modified_time?: number,
    /** The timestamp of the last modification or update to the indicator. */
    modified_time_dt?: string,
    /** The <code>name</code> is a pointer/reference to an attribute within the OCSF event data. For example: file.name. */
    name?: string,
    /** Provides a reference to an external source of information related to the CTI being represented. This may include a URL, a document, or some other type of reference that provides additional context or information about the CTI. */
    references?: string[],
    /** Any analytics related to an indicator or OSINT analysis. */
    related_analytics?: OcsfAnalytic[],
    /** Related reputational analysis from third-party engines and analysts for a given indicator or OSINT analysis. */
    reputation?: OcsfReputation,
    /** A numerical representation of the threat indicator’s risk level. */
    risk_score?: number,
    /** Any pertinent script information related to an indicator or OSINT analysis. */
    script?: OcsfScript,
    /** Represents the severity level of the threat indicator, typically reflecting its potential impact or damage. */
    severity?: string,
    /** The normalized severity level of the threat indicator, typically reflecting its potential impact or damage. */
    severity_id?: number,
    /** Any digital signatures or hashes related to an indicator or OSINT analysis. */
    signatures?: OcsfDigitalSignature[],
    /** The source URL of an indicator or OSINT analysis, e.g., a URL back to a TIP, report, or otherwise. */
    src_url?: string,
    /** Any pertinent subdomain information - such as those generated by a Domain Generation Algorithm - related to an indicator or OSINT analysis. */
    subdomains?: string[],
    /** A CIDR or network block related to an indicator or OSINT analysis. */
    subnet?: string,
    /** A threat actor is an individual or group that conducts malicious cyber activities, often with financial, political, or ideological motives. */
    threat_actor?: OcsfThreatActor,
    /** The Traffic Light Protocol (TLP) was created to facilitate greater sharing of potentially sensitive information and more effective collaboration. TLP provides a simple and intuitive schema for indicating with whom potentially sensitive information can be shared. */
    tlp?: string,
    /** The OSINT indicator type. */
    type?: string,
    /** The OSINT indicator type ID. */
    type_id: number,
    /** The unique identifier for the OSINT object. */
    uid?: string,
    /** The timestamp indicating when the associated indicator or intelligence was added to the system or repository. */
    uploaded_time?: number,
    /** The timestamp indicating when the associated indicator or intelligence was added to the system or repository. */
    uploaded_time_dt?: string,
    /** The actual indicator value in scope, e.g., a SHA-256 hash hexdigest or a domain name. */
    value: string,
    /** The vendor name of a tool which generates intelligence or provides indicators. */
    vendor_name?: string,
    /** Any vulnerabilities related to an indicator or OSINT analysis. */
    vulnerabilities?: OcsfVulnerability[],
    /** Any pertinent WHOIS information related to an indicator or OSINT analysis. */
    whois?: OcsfWhois,
}


/**
 * The Packet object represents a single captured network packet and its associated metadata. It describes where the packet came from, how it is stored or encoded, and how it can be located within a capture file or stream. This object does not interpret protocol content; it only represents the captured packet data and its positioning information.
 */
export interface OcsfPacket extends OcsfObjectBase {
    /** The human-readable name of the encoding used to represent the packet data in the <code>value</code> field. This should match the caption associated with <code>encoding_id</code>. If <code>encoding_id</code> is 99 (Other), this field contains the original data source–specific encoding value. */
    encoding?: string,
    /** The normalized identifier of the encoding method used to represent the packet data as a string. */
    encoding_id?: number,
    /** The ending byte position of this packet within a capture file or stream. */
    end_offset?: number,
    /** The human-readable name of the packet capture file format in which the packet is stored. This should match the caption associated with <code>format_id</code>. If <code>format_id</code> is 99 (Other), this field contains the original data source–specific format value. */
    format?: string,
    /** The normalized identifier of the packet capture format. */
    format_id?: number,
    /** The relative order number of this packet within its capture context (such as a PCAP file, network session, or reconstructed stream). This represents chronological capture order, distinct from both protocol-level sequencing (such as TCP sequence numbers). */
    sequence_number?: number,
    /** The human-readable name describing how or where the packet was obtained. This should match the caption associated with <code>source_id</code>. If <code>source_id</code> is 99 (Other), this field contains the original data source–specific value. */
    source?: string,
    /** A normalized numeric identifier that specifies how the packet was obtained or generated. */
    source_id?: number,
    /** The starting byte position of this packet within a capture file or stream. */
    start_offset?: number,
    /** The actual packet data, represented as a string. The format of this string is determined by the specified <code>encoding_id</code> (e.g., Base64, Hexadecimal, or URL Encoded). */
    value: string,
}


/**
 * The Parameter object provides details regarding a parameter of a a function.
 */
export interface OcsfParameter extends OcsfObjectBase {
    /** The parameter name. */
    name?: string,
    /** The parameter value after function execution. */
    post_value?: string,
    /** The parameter value before function execution. */
    pre_value?: string,
}


/**
 * The peripheral device object describes the properties of external, connectable, and detachable hardware.
 */
export interface OcsfPeripheralDevice extends OcsfEntity {
    /** The class of the peripheral device. */
    class?: string,
    /** The peripheral device model. */
    model?: string,
    /** The peripheral device serial number. */
    serial_number?: string,
    /** The Peripheral Device type, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the source. */
    type?: string,
    /** The normalized peripheral device type ID. */
    type_id?: number,
    /** The list of vendor IDs for the peripheral device. */
    vendor_id_list?: string[],
    /** The primary vendor name for the peripheral device. */
    vendor_name?: string,
}


/**
 * The Permission Analysis object describes analysis results of permissions, policies directly associated with an identity (user, role, or service account). This evaluates what permissions an identity has been granted through attached policies, which privileges are actively used versus unused, and identifies potential over-privileged access. Use this for identity-centric security assessments such as privilege audits, dormant permission discovery, and least-privilege compliance analysis.
 */
export interface OcsfPermissionAnalysisResult extends OcsfObjectBase {
    /** The total count of privileges that were analyzed across all services. */
    analyzed_privileges_count?: number,
    /** The condition keys and their values that were evaluated during policy analysis, including contextual constraints that affect permission grants. These conditions define when and how permissions are applied. Examples: <code>aws:SourceIp:1.2.3.4</code>, <code>aws:RequestedRegion:us-east-1</code>. */
    condition_keys?: OcsfKeyValueObject[],
    /** The specific privileges, actions, or permissions that are explicitly granted by the analyzed policy. Examples: AWS actions like <code>s3:GetObject</code>, <code>ec2:RunInstances</code>, <code>iam:CreateUser</code>; Azure actions like <code>Microsoft.Storage/storageAccounts/read</code>; or GCP permissions like <code>storage.objects.get</code>. */
    granted_privileges?: string[],
    /** Detailed information about the policy document that was analyzed, including policy metadata, version, type (identity-based, resource-based, etc.), and structural details. This provides context for understanding the scope and nature of the permission analysis. */
    policy?: OcsfPolicy,
    /** The list of privilege analysis results grouped by cloud service or namespace. */
    service_privilege_analysis_list?: OcsfServicePrivilegeAnalysis[],
    /** The total count of privilege-to-attack technique mappings identified across all analyzed privileges. */
    total_potential_attacks_count?: number,
    /** The total count of privileges or actions defined in the policy that have not been utilized within the analysis timeframe. This metric helps identify over-privileged access and opportunities for privilege reduction to follow the principle of least privilege. High counts may indicate policy bloat or excessive permissions. */
    unused_privileges_count?: number,
    /** The total count of cloud services or resource types referenced in the policy that have not been accessed or utilized within the analysis timeframe. This helps identify unused service permissions that could be removed to reduce attack surface. Examples: AWS services like S3, SQS, IAM, Lambda; Azure services like Storage, Compute, KeyVault; or GCP services like Cloud Storage, Compute Engine, BigQuery. */
    unused_services_count?: number,
}


/**
 * The Policy object describes the policies that are applicable. <p>Policy attributes provide traceability to the operational state of the security product at the time that the event was captured, facilitating forensics, troubleshooting, and policy tuning/adjustments.</p>
 */
export interface OcsfPolicy extends OcsfEntity {
    /** Additional data about the policy such as the underlying JSON policy itself or other details. */
    data?: string,
    /** The description of the policy. */
    desc?: string,
    /** The policy group. */
    group?: OcsfGroup,
    /** A determination if the content of a policy was applied to a target or request, or not. */
    is_applied?: boolean,
    /** The policy type. For example: <code>Identity Policy, Resource Policy, Service Control Policy, etc.</code>. */
    type?: string,
    /** The policy version number. */
    version?: string,
}


/**
 * The Port Information object describes a port and its associated protocol details.
 */
export interface OcsfPortInfo extends OcsfObjectBase {
    /** The port number. For example: <code>80</code>, <code>443</code>, <code>22</code>. */
    port: number,
    /** The IP protocol name in lowercase, as defined by the Internet Assigned Numbers Authority (IANA). For example: <code>tcp</code> or <code>udp</code>. */
    protocol_name?: string,
    /** The IP protocol number, as defined by the Internet Assigned Numbers Authority (IANA). For example: <code>6</code> for TCP and <code>17</code> for UDP. */
    protocol_num?: number,
}


/**
 * The Previous Event object references the previous event in a chain of events. Refer to specific usage.
 */
export interface OcsfPrevEvent extends OcsfObjectBase {
    /** The fingerprint of the previous event, binding this reference to the previous event's content so that altering or substituting the previous event breaks the link. Refer to specific usage. */
    fingerprint?: OcsfFingerprint,
    /** The event type identifier of the previous event, as carried in that event's <code>type_uid</code>. It directs a consumer to the event class, and therefore the table or store, where the previous event resides. */
    type_uid?: number,
    /** The unique identifier of the previous event, as carried in that event's <code>metadata.uid</code>. */
    uid: string,
}


/**
 * The Privilege Attack Info object groups privileges by the potential attack they could enable. It maps specific privileges to MITRE ATT&CK techniques, helping identify security risks associated with granted permissions.
 */
export interface OcsfPrivilegeAttackInfo extends OcsfObjectBase {
    /** The MITRE ATT&CK technique that these privileges could enable. */
    attack: OcsfAttack,
    /** The list of privilege information objects, where each element describes a specific privilege that could enable the associated attack technique. */
    privilege_info_list: OcsfPrivilegeInfo[],
}


/**
 * The Privilege Info object describes information about a specific privilege, action, or permission. It captures the privilege name, type, usage status, and when it was last used.
 */
export interface OcsfPrivilegeInfo extends OcsfObjectBase {
    /** Indicates whether the privilege is unused within the analysis timeframe. */
    is_unused?: boolean,
    /** The most recent time this privilege was used. */
    last_used_time?: number,
    /** The most recent time this privilege was used. */
    last_used_time_dt?: string,
    /** The name of the privilege, action, or permission. Examples: <code>GetObject</code>, <code>CreateStoreImageTask</code> (AWS); <code>Microsoft.Storage/storageAccounts/read</code> (Azure); <code>storage.objects.get</code> (GCP). */
    name: string,
    /** The type or category of the privilege, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The normalized type of the privilege. */
    type_id?: number,
}


/**
 * The Process Entity object provides critical fields for referencing a process.
 */
export interface OcsfProcessEntity extends OcsfEntity {
    /** The full command line used to launch an application, service, process, or job. For example: <code>ssh user@10.0.0.10</code>. If the command line is unavailable or missing, the empty string <code>''</code> is to be used. */
    cmd_line?: string,
    /** A unique process identifier that can be assigned deterministically by multiple system data producers. */
    cpid?: string,
    /** The time when the process was created/started. */
    created_time?: number,
    /** The time when the process was created/started. */
    created_time_dt?: string,
    /** The process file path. */
    path?: string,
    /** The process identifier, as reported by the operating system. Process ID (PID) is a number used by the operating system to uniquely identify an active process. */
    pid?: number,
}


/**
 * The Process object describes a running instance of a launched program.
 */
export interface OcsfProcess extends OcsfProcessEntity, OcsfContainerProfile, OcsfLinuxUsersProfile, OcsfMacosUsersProfile {
    /** The autonomous AI agent that this process is running or hosting, if applicable. Populate when the process serves as the runtime environment for an AI agent (e.g., a Python process executing a LangChain agent or hosting an MCP server). When a process hosts multiple agents and the activity cannot be attributed to one specifically, use <code>hosted_ai_agent_list</code> instead. */
    ai_agent?: OcsfAiAgent,
    /** An array of Process Entities describing the extended parentage of this process object. Direct parent information should be expressed through the <code>parent_process</code> attribute. The first array element is the direct parent of this process object. Subsequent list elements go up the process parentage hierarchy. That is, the array is sorted from newest to oldest process. It is recommended to only populate this field for the top-level process object. */
    ancestry?: OcsfProcessEntity[],
    /** Environment variables associated with the process. */
    environment_variables?: OcsfEnvironmentVariable[],
    /** The process file object. */
    file?: OcsfFile,
    /** The list of autonomous AI agents hosted by this process. Use when a single process hosts multiple agents (e.g., an IDE running several coding agents within the same host process) and the producer cannot attribute a specific activity to a single agent. When attribution is available, populate the singular <code>ai_agent</code> attribute instead. */
    hosted_ai_agent_list?: OcsfAiAgent[],
    /** The Windows services that this process is hosting. */
    hosted_services?: OcsfWinService[],
    /** The process integrity level, normalized to the caption of the integrity_id value. In the case of 'Other', it is defined by the event source (Windows only). */
    integrity?: string,
    /** The normalized identifier of the process integrity level (Windows only). */
    integrity_id?: number,
    /** The lineage of the process, represented by a list of paths for each ancestor process. For example: <code>['/usr/sbin/sshd', '/usr/bin/bash', '/usr/bin/whoami']</code>. */
    lineage?: string[],
    /** The list of loaded module names. */
    loaded_modules?: string[],
    /** The parent process of this process object. It is recommended to only populate this field for the top-level process object, to prevent deep nesting. Additional ancestry information can be supplied in the <code>ancestry</code> attribute. */
    parent_process?: OcsfProcess,
    /** The identifier of the process thread associated with the event, as returned by the operating system. */
    ptid?: number,
    /** The name of the containment jail (i.e., sandbox). For example, hardened_ps, high_security_ps, oracle_ps, netsvcs_ps, or default_ps. */
    sandbox?: string,
    /** The user session under which this process is running. */
    session?: OcsfSession,
    /** The time when the process was terminated. */
    terminated_time?: number,
    /** The time when the process was terminated. */
    terminated_time_dt?: string,
    /** The identifier of the thread associated with the event, as returned by the operating system. */
    tid?: number,
    /** The user under which this process is running. */
    user?: OcsfUser,
    /** The working directory of a process. */
    working_directory?: string,
    /** An unordered collection of zero or more name/value pairs that represent a process extended attribute.<p>For example: process security context attributes, process resource limits, container-specific attributes, or platform-specific process metadata not covered by standard OCSF attributes.</p> */
    xattributes?: OcsfObject,
}


/**
 * The Product object describes characteristics of a software product.
 */
export interface OcsfProduct extends OcsfEntity, OcsfDataClassificationProfile {
    /** The Common Platform Enumeration (CPE) name. For example: <code>cpe:/a:apple:safari:16.2</code>. */
    cpe_name?: string,
    /** The feature that reported the event. */
    feature?: OcsfFeature,
    /** The two letter lower case language codes, as defined by ISO 639-1. For example: <code>en</code> (English), <code>de</code> (German), or <code>fr</code> (French). */
    lang?: string,
    /** The installation path of the product. */
    path?: string,
    /** The URL pointing towards the product. */
    url_string?: string,
    /** The name of the vendor of the product. */
    vendor_name?: string,
    /** The version of the product, as defined by the event source. For example: <code>2013.1.3-beta</code>. */
    version?: string,
}


/**
 * The Programmatic Credential object describes service-specific credentials used for direct API access and system integration. These credentials are typically issued by individual services or platforms for accessing their APIs and resources, focusing on credential lifecycle management and usage tracking. Examples include API keys, service account keys, client certificates, and vendor-specific access tokens.
 */
export interface OcsfProgrammaticCredential extends OcsfObjectBase {
    /** The timestamp when this programmatic credential was last used for authentication or API access. This helps track credential usage patterns, identify dormant credentials that may pose security risks, and support credential lifecycle management. The timestamp should reflect the most recent successful authentication or API call using this credential. */
    last_used_time?: number,
    /** The timestamp when this programmatic credential was last used for authentication or API access. This helps track credential usage patterns, identify dormant credentials that may pose security risks, and support credential lifecycle management. The timestamp should reflect the most recent successful authentication or API call using this credential. */
    last_used_time_dt?: string,
    /** The type or category of programmatic credential, normalized to the caption of the type_id value. In the case of 'Other', it is defined by the event source. Examples include 'API Key', 'Service Account Key', 'Access Token', 'Client Certificate', 'OAuth Token', 'Personal Access Token', etc. */
    type?: string,
    /** The unique identifier of the programmatic credential. This could be an API key ID, service account key ID, access token identifier, certificate serial number, or other unique identifier that distinguishes this credential from others. Examples: AWS Access Key ID, GCP Service Account Key ID, Azure Application ID, or OAuth2 token identifier. */
    uid: string,
}


/**
 * The specific resulting evidence information that was queried or discovered. When mapping raw telemetry data users should select the appropriate child object that best matches the evidence type as defined by query_type_id.
 */
export interface OcsfQueryEvidence {
    /** The network connection information related to a Network Connection query type. */
    connection_info?: OcsfNetworkConnectionInfo,
    /** The file that is the target of the query when query_type_id indicates a File query. */
    file?: OcsfFile,
    /** The folder that is the target of the query when query_type_id indicates a Folder query. */
    folder?: OcsfFile,
    /** The administrative group that is the target of the query when query_type_id indicates an Admin Group query. */
    group?: OcsfGroup,
    /** The job object that pertains to the event when query_type_id indicates a Job query. */
    job?: OcsfJob,
    /** The kernel object that pertains to the event when query_type_id indicates a Kernel query. */
    kernel?: OcsfKernel,
    /** The module that pertains to the event when query_type_id indicates a Module query. */
    module?: OcsfModule,
    /** The physical or virtual network interfaces that are associated with the device when query_type_id indicates a Network Interfaces query. */
    network_interfaces?: OcsfNetworkInterface[],
    /** The peripheral device that triggered the event when query_type_id indicates a Peripheral Device query. */
    peripheral_device?: OcsfPeripheralDevice,
    /** The process that pertains to the event when query_type_id indicates a Process query. */
    process?: OcsfProcess,
    /** The normalized caption of query_type_id or the source-specific query type. */
    query_type?: string,
    /** The normalized type of system query performed against a device or system component. */
    query_type_id: number,
    /** The registry key object describes a Windows registry key. */
    reg_key?: OcsfWinRegKey,
    /** The registry value object describes a Windows registry value. */
    reg_value?: OcsfWinRegValue,
    /** The service that pertains to the event when query_type_id indicates a Service query. */
    service?: OcsfService,
    /** The authenticated user or service session when query_type_id indicates a Session query. */
    session?: OcsfSession,
    /** The startup item object that pertains to the event when query_type_id indicates a Startup Item query. */
    startup_item?: OcsfStartupItem,
    /** The state of the socket, normalized to the caption of the state_id value. In the case of 'Other', it is defined by the event source. */
    state?: string,
    /** The state of the TCP socket for the network connection. */
    tcp_state_id?: number,
    /** The user that pertains to the event when query_type_id indicates a User query. */
    user?: OcsfUser,
    /** The users that belong to the administrative group when query_type_id indicates a Users query. */
    users?: OcsfUser[],
}


/**
 * The query info object holds information related to data access within a datastore. To access, manipulate, delete, or retrieve data from a datastore, a query must be written using a specific syntax.
 */
export interface OcsfQueryInfo extends OcsfEntity {
    /** The size of the data returned from the query. */
    bytes?: number,
    /** The data returned from the query execution. */
    data?: string,
    /** A string representing the query code being run. For example: <code>SELECT * FROM my_table</code> */
    query_string: string,
    /** The time when the query was run. */
    query_time?: number,
    /** The time when the query was run. */
    query_time_dt?: string,
}


/**
 * The Related Event object describes an event or another finding related to a finding. It may or may not be an OCSF event.
 */
export interface OcsfRelatedEvent extends OcsfObjectBase {
    /** An array of MITRE ATT&CK® objects describing identified tactics, techniques & sub-techniques. The objects are compatible with MITRE ATLAS™ tactics, techniques & sub-techniques. */
    attacks?: OcsfAttack[],
    /** The number of times that activity in the same logical group occurred, as reported by the related Finding. */
    count?: number,
    /** <p>The time when the related event/finding was created.</p> If the related event/finding is in OCSF and is a Finding, then this value should be equal to <code>finding_info.created_time</code> in the corresponding Finding. If the related event/finding is in OCSF and is not a Finding, then this value should be equal to <code>time</code> in the corresponding event. */
    created_time?: number,
    /** <p>The time when the related event/finding was created.</p> If the related event/finding is in OCSF and is a Finding, then this value should be equal to <code>finding_info.created_time</code> in the corresponding Finding. If the related event/finding is in OCSF and is not a Finding, then this value should be equal to <code>time</code> in the corresponding event. */
    created_time_dt?: string,
    /** A description of the related event/finding. */
    desc?: string,
    /** The time when the finding was first observed. e.g. The time when a vulnerability was first observed.<br>It can differ from the <code>created_time</code> timestamp, which reflects the time this finding was created. */
    first_seen_time?: number,
    /** The time when the finding was first observed. e.g. The time when a vulnerability was first observed.<br>It can differ from the <code>created_time</code> timestamp, which reflects the time this finding was created. */
    first_seen_time_dt?: string,
    /** The Kill Chain provides a detailed description of each phase and its associated activities within the broader context of a cyber attack. */
    kill_chain?: OcsfKillChainPhase[],
    /** The time when the finding was most recently observed. e.g. The time when a vulnerability was most recently observed.<br>It can differ from the <code>modified_time</code> timestamp, which reflects the time this finding was last modified. */
    last_seen_time?: number,
    /** The time when the finding was most recently observed. e.g. The time when a vulnerability was most recently observed.<br>It can differ from the <code>modified_time</code> timestamp, which reflects the time this finding was last modified. */
    last_seen_time_dt?: string,
    /** The time when the related event/finding was last modified. */
    modified_time?: number,
    /** The time when the related event/finding was last modified. */
    modified_time_dt?: string,
    /** The observables array surfaces key indicators and entities from the event or finding in a single, consistent location for downstream correlation and detection. Each entry references an attribute path within the event (e.g., <code>src_endpoint.ip</code>) along with its type and value, enabling consumers to extract IOCs without parsing the full event structure. */
    observables?: OcsfObservable[],
    /** Details about the product that reported the related event/finding. */
    product?: OcsfProduct,
    /** The unique identifier of the product that reported the related event. */
    product_uid?: string,
    /** The event/finding severity label, normalized to the caption of the <code>severity_id</code> value. When <code>severity_id</code> is <code>99</code> (Other), this attribute <b>must</b> contain the source-specific severity label. For all other values, this should match the caption defined for that <code>severity_id</code> enum value (e.g., <code>"High"</code> for <code>severity_id: 4</code>). */
    severity?: string,
    /** <p>The normalized identifier of the event/finding severity.</p>The normalized severity is a measurement the effort and expense required to manage and resolve an event or incident. Smaller numerical values represent lower impact events, and larger numerical values represent higher impact events. */
    severity_id?: number,
    /** The related event status. Should correspond to the label of the status_id (or 'Other' status value for status_id = 99) of the related event. */
    status?: string,
    /** The list of tags; <code>{key:value}</code> pairs associated with the related event/finding. */
    tags?: OcsfKeyValueObject[],
    /** A title or a brief phrase summarizing the related event/finding. */
    title?: string,
    /** The list of key traits or characteristics extracted from the related event/finding that influenced or contributed to the overall finding's outcome. */
    traits?: OcsfTrait[],
    /** <p>The type of the related event/finding.</p>Populate if the related event/finding is <code>NOT</code> in OCSF. If it is in OCSF, then utilize <code>type_name, type_uid</code> instead. */
    type?: string,
    /** The type of the related OCSF event, as defined by <code>type_uid</code>.<p>For example: <code>Process Activity: Launch.</code></p>Populate if the related event/finding is in OCSF. */
    type_name?: string,
    /** The unique identifier of the related OCSF event type. <p>For example: <code>100701.</code></p>Populate if the related event/finding is in OCSF. */
    type_uid?: number,
    /** <p>The unique identifier of the related event/finding.</p> If the related event/finding is in OCSF, then this value must be equal to <code>metadata.uid</code> in the corresponding event. */
    uid: string,
}


/**
 * The Remediation object describes the recommended remediation steps to address identified issue(s).
 */
export interface OcsfRemediation extends OcsfObjectBase {
    /** An array of Center for Internet Security (CIS) Controls that can be optionally mapped to provide additional remediation details. */
    cis_controls?: OcsfCisControl[],
    /** The description of the remediation strategy. */
    desc: string,
    /** A list of KB articles or patches related to an endpoint. A KB Article contains metadata that describes the patch or an update. */
    kb_article_list?: OcsfKbArticle[],
    /** The KB article/s related to the entity. A KB Article contains metadata that describes the patch or an update. */
    kb_articles?: string[],
    /** A list of supporting URL/s, references that help describe the remediation strategy. */
    references?: string[],
}


/**
 * The entity from which an event or finding was reported.
 */
export interface OcsfReporter extends OcsfEntity {
    /** The hostname of the entity from which the event or finding was reported. */
    hostname?: string,
    /** The IP address of the entity from which the event or finding was reported. */
    ip?: string,
    /** The organization properties of the entity that reported the event or finding. */
    org?: OcsfOrganization,
}


/**
 * The Reputation object describes the reputation/risk score of an entity (e.g. device, user, domain).
 */
export interface OcsfReputation extends OcsfObjectBase {
    /** The reputation score as reported by the event source. */
    base_score: number,
    /** The provider of the reputation information. */
    provider?: string,
    /** The reputation score, normalized to the caption of the score_id value. In the case of 'Other', it is defined by the event source. */
    score?: string,
    /** The normalized reputation score identifier. */
    score_id: number,
}


/**
 * The Request Elements object describes characteristics of an API request.
 */
export interface OcsfRequest extends OcsfObjectBase {
    /** When working with containerized applications, the set of containers which write to the standard the output of a particular logging driver. For example, this may be the set of containers involved in handling api requests and responses for a containerized application. */
    containers?: OcsfContainer[],
    /** The additional data that is associated with the api request. */
    data?: string,
    /** The communication flags that are associated with the api request. */
    flags?: string[],
    /** The unique request identifier. */
    uid: string,
}


/**
 * The Resource Details object describes details about a resource (including a user) affected by or related to the activity or finding. The <code>name</code> and/or <code>uid</code> should correspond to the resource for which the details pertain. Use <code>role_id</code> to characterize the role of the resource.
 */
export interface OcsfResourceDetails extends OcsfResource {
    /** A list of <code>agent</code> objects associated with a device, endpoint, or resource. */
    agent_list?: OcsfAgent[],
    /** The logical grouping or isolated segment within a cloud provider's infrastructure where the resource is located. Examples include AWS partitions (aws, aws-cn, aws-us-gov), Azure cloud environments (AzureCloud, AzureUSGovernment, AzureChinaCloud), or similar logical divisions in other cloud providers. */
    cloud_partition?: string,
    /** The time when the resource was created. */
    created_time_dt?: string,
    /** Criticality or relative importance of this resource, normalized to the caption of <code>criticality_id</code>. In the case of Other, the value is defined by the event source.<p>Note: For versions prior to 1.9, <code>criticality_id</code> was not available and this is a source specific value.<p> */
    criticality?: string,
    /** The normalized identifier for the criticality or relative importance of this resource. Select the value that best reflects the operational and security impact if the resource were compromised or made unavailable. See the <code>criticality</code> sibling attribute for the corresponding human-readable label. */
    criticality_id?: number,
    /** The device details when the resource type is a device — for example, a cloud compute instance, a laptop, or a network appliance. Provides structured device attributes (OS, type, hardware, agent) that the resource's scalar fields cannot represent — beyond what the <code>hostname</code> and <code>ip</code> attributes capture. The <code>device.name</code> and <code>device.uid</code> should match the <code>name</code> and <code>uid</code> of this objects; the <code>device.hostname</code> value should match the <code>hostname</code> attribute of this object. The top-level <code>hostname</code> and <code>ip</code> remain the primary identifiers for the device resource. */
    device?: OcsfDevice,
    /** The name of the related resource group. */
    group?: OcsfGroup,
    /** The fully qualified name of the resource. If the resource is a device, this should match <code>device.hostname</code>. */
    hostname?: string,
    /** The IP address of the resource, in either IPv4 or IPv6 format. If the resource is a device, this should match <code>device.ip</code>. */
    ip?: string,
    /** Indicates whether the device or resource has a backup enabled, such as an automated snapshot or a cloud backup. For example, this is indicated by the <code>cloudBackupEnabled</code> value within JAMF Pro mobile devices or the registration of an AWS ARN with the AWS Backup service. */
    is_backed_up?: boolean,
    /** The time when the resource was last modified. */
    modified_time_dt?: string,
    /** The namespace is useful when similar entities exist that you need to keep separate. */
    namespace?: string,
    /** The details of the entity that owns the resource. Usually not the same as <code>user</code> that may not own the resource. For example the owner of the directory server but not a user in the directory. This object includes properties such as the owner's name, unique identifier, type, domain, and other relevant attributes that help identify the resource owner within the environment. */
    owner?: OcsfUser,
    /** The cloud service provider that hosts or manages the resource. This field is typically used when the resource is managed by a different provider than the one generating the event or finding. Examples include AWS, Azure, GCP (Google Cloud Platform), Oracle Cloud, IBM Cloud, Alibaba Cloud, or other public, private, or hybrid cloud providers. */
    provider?: string,
    /** The cloud region where the resource is hosted, as defined by the cloud provider. This represents the physical or logical geographic area containing the infrastructure supporting the resource. Examples include AWS regions (us-east-1, eu-west-1), Azure regions (East US, West Europe), GCP regions (us-central1, europe-west1), or Oracle Cloud regions (us-ashburn-1, uk-london-1). */
    region?: string,
    /** A graph representation showing how this resource relates to and interacts with other entities in the environment. This can include parent/child relationships, dependencies, or other connections. */
    resource_relationship?: OcsfGraph,
    /** The role of the resource in the context of the event or finding, normalized to the caption of the role_id value. In the case of 'Other', it is defined by the event source. */
    role?: string,
    /** The normalized identifier of the resource's role in the context of the event or finding. */
    role_id?: number,
    /** The user represented by this resource — for example, a cloud IAM user, a local account, or an application identity. Provides structured user attributes (email, groups, privileges) that this object's scalar fields such as <code>name</code> cannot represent. Distinct from <code>owner</code>, which identifies the entity responsible for managing the resource. The <code>user.name</code> value should match the <code>name</code> attribute of this object, <code>user.uid</code> should match the <code>uid</code> of this object. */
    user?: OcsfUser,
    /** The version of the resource. For example <code>1.2.3</code>. */
    version?: string,
    /** The availability zone within a cloud region where the resource is located. Examples include AWS availability zones (us-east-1a, us-east-1b), Azure availability zones (1, 2, 3 within a region), GCP zones (us-central1-a, us-central1-b), or Oracle Cloud availability domains (AD-1, AD-2, AD-3). */
    zone?: string,
}


/**
 * The Response Elements object describes characteristics of an API response.
 */
export interface OcsfResponse extends OcsfObjectBase {
    /** The numeric response sent to a request. */
    code?: number,
    /** When working with containerized applications, the set of containers which write to the standard the output of a particular logging driver. For example, this may be the set of containers involved in handling api requests and responses for a containerized application. */
    containers?: OcsfContainer[],
    /** The additional data that is associated with the api response. */
    data?: string,
    /** Error Code */
    error?: string,
    /** Error Message */
    error_message?: string,
    /** The communication flags that are associated with the api response. */
    flags?: string[],
    /** The response message provided by the service or API. */
    message?: string,
}


/**
 * The RPC Interface represents the remote procedure call interface used in the DCE/RPC session.
 */
export interface OcsfRpcInterface extends OcsfObjectBase {
    /** An integer that provides a reason code or additional information about the acknowledgment result. */
    ack_reason?: number,
    /** An integer that denotes the acknowledgment result of the DCE/RPC call. */
    ack_result?: number,
    /** The unique identifier of the particular remote procedure or service. */
    uuid: string,
    /** The version of the DCE/RPC protocol being used in the session. */
    version: string,
}


/**
 * The Subject Alternative name (SAN) object describes a SAN secured by a digital certificate
 */
export interface OcsfSan extends OcsfObjectBase {
    /** Name of SAN (e.g. The actual IP Address or domain.) */
    name: string,
    /** Type descriptor of SAN (e.g. IP Address/domain/etc.) */
    type: string,
}


/**
 * The Software Bill of Materials object describes characteristics of a generated SBOM.
 */
export interface OcsfSbom extends OcsfObjectBase {
    /** The time when the SBOM was created. */
    created_time?: number,
    /** The time when the SBOM was created. */
    created_time_dt?: string,
    /** The software package or library that is being discovered or inventoried by an SBOM. */
    package: OcsfPackage,
    /** Details about the upstream product that generated the SBOM e.g. <code>cdxgen</code> or <code>Syft</code>. */
    product?: OcsfProduct,
    /** The list of software components used in the software package. */
    software_components: OcsfSoftwareComponent[],
    /** The type of SBOM, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the source. */
    type?: string,
    /** The type of SBOM. */
    type_id?: number,
    /** A unique identifier for the SBOM or the SBOM generation by a source tool, such as the SPDX <code>metadata.component.bom-ref</code>. */
    uid?: string,
    /** The specification (spec) version of the particular SBOM, e.g., <code>1.6</code>. */
    version?: string,
}


/**
 * The System for Cross-domain Identity Management (SCIM) Configuration object provides a structured set of attributes related to SCIM protocols used for identity provisioning and management across cloud-based platforms. It standardizes user and group provisioning details, enabling identity synchronization and lifecycle management with compatible Identity Providers (IdPs) and applications. SCIM is defined in RFC 7634.
 */
export interface OcsfScim extends OcsfObjectBase {
    /** The authorization protocol as defined by the caption of <code>auth_protocol_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authorization protocol used by the SCIM resource. */
    auth_protocol_id?: number,
    /** When the SCIM resource was added to the service provider. */
    created_time?: number,
    /** When the SCIM resource was added to the service provider. */
    created_time_dt?: string,
    /** Message or code associated with the last encountered error. */
    error_message?: string,
    /** Indicates whether the SCIM resource is configured to provision groups, automatically or otherwise. */
    is_group_provisioning_enabled?: boolean,
    /** Indicates whether the SCIM resource is configured to provision users, automatically or otherwise. */
    is_user_provisioning_enabled?: boolean,
    /** Timestamp of the most recent successful synchronization. */
    last_run_time?: number,
    /** Timestamp of the most recent successful synchronization. */
    last_run_time_dt?: string,
    /** The most recent time when the SCIM resource was updated at the service provider. */
    modified_time?: number,
    /** The most recent time when the SCIM resource was updated at the service provider. */
    modified_time_dt?: string,
    /** The name of the SCIM resource. */
    name?: string,
    /** The supported protocol for the SCIM resource. E.g., <code>SAML</code>, <code>OIDC</code>, or <code>OAuth2</code>. */
    protocol_name?: string,
    /** Maximum number of requests allowed by the SCIM resource within a specified time frame to avoid throttling. */
    rate_limit?: number,
    /** SCIM provides a schema for representing groups, identified using the following schema URI: <code>urn:ietf:params:scim:schemas:core:2.0:Group</code> as defined in RFC 7634. This attribute will capture key-value pairs for the scheme implemented in a SCIM resource. */
    scim_group_schema?: string,
    /** SCIM provides a resource type for user resources. The core schema for user is identified using the following schema URI: <code>urn:ietf:params:scim:schemas:core:2.0:User</code> as defined in RFC 7634. This attribute will capture key-value pairs for the scheme implemented in a SCIM resource. This object is inclusive of both the basic and Enterprise User Schema Extension. */
    scim_user_schema?: string,
    /** The provisioning state of the SCIM resource, normalized to the caption of the <code>state_id</code> value. In the case of <code>Other</code>, it is defined by the event source. */
    state?: string,
    /** The normalized state ID of the SCIM resource to reflect its activation status. */
    state_id?: number,
    /** A unique identifier for a SCIM resource as defined by the service provider. */
    uid?: string,
    /** A String that is an identifier for the resource as defined by the provisioning client. The <code>externalId</code> may simplify identification of a resource between the provisioning client and the service provider by allowing the client to use a filter to locate the resource with an identifier from the provisioning domain, obviating the need to store a local mapping between the provisioning domain's identifier of the resource and the identifier used by the service provider. */
    uid_alt?: string,
    /** The primary URL for SCIM API requests. */
    url_string?: string,
    /** Name of the vendor or service provider implementing SCIM. E.g., <code>Okta</code>, <code>Auth0</code>, <code>Microsoft</code>. */
    vendor_name?: string,
    /** SCIM protocol version supported e.g., <code>SCIM 2.0</code>. */
    version?: string,
}


/**
 * The Script object describes a script or command that can be executed by a shell, script engine, or interpreter. Examples include Bash, JavsScript, PowerShell, Python, VBScript, etc. Note that the term <em>script</em> here denotes not only a script contained within a file but also a script or command typed interactively by a user, supplied on the command line, or provided by some other file-less mechanism.
 */
export interface OcsfScript extends OcsfObjectBase {
    /** Present if this script is associated with a file. Not present in the case of a file-less script. */
    file?: OcsfFile,
    /** An array of the script's cryptographic hashes. Note that these hashes are calculated on the script in its original encoding, and not on the normalized UTF-8 encoding found in the <code>script_content</code> attribute. */
    hashes?: OcsfFingerprint[],
    /** Unique identifier for the script or macro, independent of the containing file, used for tracking, auditing, and security analysis. */
    name?: string,
    /** This attribute relates a sub-script to a parent script having the matching <code>uid</code> attribute. In the case of PowerShell, sub-script execution can be identified by matching the activity correlation ID of the raw ETW events provided by the OS. */
    parent_uid?: string,
    /** The script content, normalized to UTF-8 encoding irrespective of its original encoding. When emitting this attribute, it may be appropriate to truncate large scripts. When consuming this attribute, large scripts should be anticipated. */
    script_content: OcsfLongString,
    /** The script type, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the event source. */
    type?: string,
    /** The normalized script type ID. */
    type_id: number,
    /** Some script engines assign a unique ID to each individual execution of a given script. This attribute captures that unique ID. In the case of PowerShell, the unique ID corresponds to the <code>ScriptBlockId</code> in the raw ETW events provided by the OS. */
    uid?: string,
}


/**
 * The Security State object describes the security related state of a managed entity.
 */
export interface OcsfSecurityState extends OcsfObjectBase {
    /** The security state, normalized to the caption of the state_id value. In the case of 'Other', it is defined by the source. */
    state?: string,
    /** The security state of the managed entity. */
    state_id?: number,
}


/**
 * The Sensor Information object describes a control point sensor that emits data, or originates detections. It can be part of an endpoint or agent running on an OS, a SaaS application, a network device, a Cyber Threat Intelligence (CTI) system, or other detection and enforcement technologies.
 */
export interface OcsfSensorInfo extends OcsfEntity {
    /** The technology or sensor layer that emitted the data, normalized to the caption of <code>sensor_layer_id</code>. When <code>sensor_layer_id</code> is <code>99</code> (Other), this attribute must contain the source-specific label. */
    sensor_layer?: string,
    /** The normalized identifier of the sensor layer that emitted the data. For example, use this to classify the detection surface (e.g., IPS sensor, endpoint agent, email gateway). When the type is not listed, use <code>99</code> (Other) and populate <code>sensor_layer</code> with the source-specific label. */
    sensor_layer_id: number,
}


/**
 * The Service object describes characteristics of a service, <code> e.g. AWS EC2. </code>
 */
export interface OcsfService extends OcsfEntity {
    /** The list of labels associated with the service. */
    labels?: string[],
    /** The list of tags; <code>{key:value}</code> pairs associated to the service. */
    tags?: OcsfKeyValueObject[],
    /** The version of the service. */
    version?: string,
}


/**
 * The Service Privilege Analysis object describes privilege analysis results for a single cloud service or resource namespace. It provides metrics on privilege usage, counts by type, and mappings to potential attack techniques.
 */
export interface OcsfServicePrivilegeAnalysis extends OcsfObjectBase {
    /** Indicates whether all privileges within this service are unused. */
    all_privileges_unused?: boolean,
    /** The total count of privileges analyzed within this service. */
    analyzed_privileges_count?: number,
    /** The count of execute-type privileges within this service. */
    execute_count?: number,
    /** The most recent time any privilege in this service was used. */
    last_used_time?: number,
    /** The most recent time any privilege in this service was used. */
    last_used_time_dt?: string,
    /** The service or namespace identifier. Examples: <code>s3</code>, <code>ec2</code> (AWS); <code>Microsoft.Storage</code> (Azure); <code>storage</code> (GCP). */
    name: string,
    /** The list of privilege-to-attack mappings for this service. */
    privilege_attack_info_list?: OcsfPrivilegeAttackInfo[],
    /** The count of read-type privileges within this service. */
    read_count?: number,
    /** The count of unused privileges within this service. */
    unused_privileges_count?: number,
    /** The count of write-type privileges within this service. */
    write_count?: number,
}


/**
 * The Session object describes details about an authenticated session. e.g. Session Creation Time, Session Issuer.
 */
export interface OcsfSession extends OcsfObjectBase {
    /** The number of identical sessions spawned from the same source IP, destination IP, application, and content/threat type seen over a period of time. */
    count?: number,
    /** The time when the session was created. */
    created_time?: number,
    /** The time when the session was created. */
    created_time_dt?: string,
    /** The unique identifier of the user's credential. For example, AWS Access Key ID. */
    credential_uid?: string,
    /** The reason which triggered the session expiration. */
    expiration_reason?: string,
    /** The session expiration time. */
    expiration_time?: number,
    /** The session expiration time. */
    expiration_time_dt?: string,
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
    /** The alternate unique identifier of the session. e.g. AWS ARN - <code>arn:aws:sts::123344444444:assumed-role/Admin/example-session</code>. */
    uid_alt?: string,
    /** The universally unique identifier of the session. */
    uuid?: string,
}


/**
 * The Software Component object describes characteristics of a software component within a software package.
 */
export interface OcsfSoftwareComponent extends OcsfObjectBase {
    /** The author(s) who published the software component. */
    author?: string,
    /** Cryptographic hash to identify the binary instance of a software component. */
    hash?: OcsfFingerprint,
    /** The software license applied to this component. */
    license?: string,
    /** The software component name. */
    name: string,
    /** The Package URL (PURL) to identify the software component. This is a URL that uniquely identifies the component, including the component's name, version, and type. The URL is used to locate and retrieve the component's metadata and content. */
    purl?: string,
    /** The package URL (PURL) of the component that this software component has a relationship with. */
    related_component?: string,
    /** The relationship between two software components, normalized to the caption of the <code>relationship_id</code> value. In the case of 'Other', it is defined by the source. */
    relationship?: string,
    /** The normalized identifier of the relationship between two software components. */
    relationship_id?: number,
    /** The type of software component, normalized to the caption of the <code>type_id</code> value. In the case of 'Other', it is defined by the source. */
    type?: string,
    /** The type of software component. */
    type_id?: number,
    /** The software component version. */
    version: string,
}


/**
 * Represents a single unit of work or operation within a distributed trace. A span typically tracks the execution of a request across a service, capturing important details such as the operation, timestamps, and status. Spans help break down the overall trace into smaller, manageable parts, enabling detailed analysis of the performance and behavior of specific operations within the system. They are crucial for understanding latency, dependencies, and bottlenecks in complex distributed systems.
 */
export interface OcsfSpan extends OcsfObjectBase {
    /** The total time, in milliseconds, that the span represents, calculated as the difference between start_time and end_time. It reflects the operation's performance and latency, independent of event timestamps, and accounts for normalized times used by observability tools to ensure consistency across distributed systems. */
    duration?: number,
    /** The end timestamp of the span, essential for identifying latency and performance bottlenecks. Like the start time, this timestamp is normalized across the observability system to ensure consistency, even when events are recorded across distributed services with unsynchronized clocks. Normalized time allows for accurate duration calculations and helps observability tools track performance across services, regardless of the individual system time settings. */
    end_time: number,
    /** The end timestamp of the span, essential for identifying latency and performance bottlenecks. Like the start time, this timestamp is normalized across the observability system to ensure consistency, even when events are recorded across distributed services with unsynchronized clocks. Normalized time allows for accurate duration calculations and helps observability tools track performance across services, regardless of the individual system time settings. */
    end_time_dt?: string,
    /** The message in a span (often referred to as a span event) serves as a way to record significant moments or occurrences during the span's lifecycle. This content typically manifests as log entries, annotations, or semi-structured events as a string, providing additional granularity and context about what happens at specific points during the execution of an operation. */
    message?: string,
    /** Describes an action performed in a span, such as API requests, database queries, or computations. */
    operation?: string,
    /** The ID of the parent span for this span object, establishing its relationship in the trace hierarchy. */
    parent_uid?: string,
    /** Identifies the service or component that generates the span, helping trace its path through the distributed system. */
    service?: OcsfService,
    /** The start timestamp of the span, essential for identifying latency and performance bottlenecks. This timestamp is normalized across the observability system, ensuring consistency even when events occur across distributed services with potentially unsynchronized clocks. By using normalized time, observability tools can provide accurate, uniform measurements of operation performance and latency, regardless of where or when the events actually occur. */
    start_time: number,
    /** The start timestamp of the span, essential for identifying latency and performance bottlenecks. This timestamp is normalized across the observability system, ensuring consistency even when events occur across distributed services with potentially unsynchronized clocks. By using normalized time, observability tools can provide accurate, uniform measurements of operation performance and latency, regardless of where or when the events actually occur. */
    start_time_dt?: string,
    /** Indicates the outcome of the operation in the span, such as success, failure, or error. Issues in a span typically refer to problems such as failed operations, timeouts, service unavailability, or errors in processing that can negatively impact the performance or reliability of the system. Tracking the `status_code` helps pinpoint these issues, enabling quicker identification and resolution of system inefficiencies or faults. */
    status_code?: string,
    /** The unique identifier for the span, used in distributed systems and microservices architectures to track and correlate requests across different components of an application. It enables tracing the flow of a request through various services. */
    uid: string,
}


/**
 * The Single Sign-On (SSO) object provides a structure for normalizing SSO attributes, configuration, and/or settings from Identity Providers.
 */
export interface OcsfSso extends OcsfObjectBase {
    /** The authorization protocol as defined by the caption of <code>auth_protocol_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authentication protocol used by the SSO resource. */
    auth_protocol_id?: number,
    /** Digital Signature associated with the SSO resource, e.g., SAML X.509 certificate details. */
    certificate?: OcsfCertificate,
    /** When the SSO resource was created. */
    created_time?: number,
    /** When the SSO resource was created. */
    created_time_dt?: string,
    /** The duration (in minutes) for an SSO session, after which re-authentication is required. */
    duration_mins?: number,
    /** Duration (in minutes) of allowed inactivity before Single Sign-On (SSO) session expiration. */
    idle_timeout?: number,
    /** URL for initiating an SSO login request. */
    login_endpoint?: string,
    /** URL for initiating an SSO logout request, allowing sessions to be terminated across applications. */
    logout_endpoint?: string,
    /** URL where metadata about the SSO configuration is available (e.g., for SAML configurations). */
    metadata_endpoint?: string,
    /** The most recent time when the SSO resource was updated. */
    modified_time?: number,
    /** The most recent time when the SSO resource was updated. */
    modified_time_dt?: string,
    /** The name of the SSO resource. */
    name?: string,
    /** The supported protocol for the SSO resource. E.g., <code>SAML</code> or <code>OIDC</code>. */
    protocol_name?: string,
    /** Scopes define the specific permissions or actions that the client is allowed to perform on behalf of the user. Each scope represents a different set of permissions, and the user can selectively grant or deny access to specific scopes during the authorization process. */
    scopes?: string[],
    /** A unique identifier for a SSO resource. */
    uid?: string,
    /** Name of the vendor or service provider implementing SSO. E.g., <code>Okta</code>, <code>Auth0</code>, <code>Microsoft</code>. */
    vendor_name?: string,
}


/**
 * The startup item object describes an application component that has associated startup criteria and configurations.
 */
export interface OcsfStartupItem {
    /** The startup item kernel driver resource. */
    driver?: OcsfKernelDriver,
    /** The startup item job resource. */
    job?: OcsfJob,
    /** The unique name of the startup item. */
    name: string,
    /** The startup item process resource. */
    process?: OcsfProcess,
    /** The list of normalized identifiers that describe the startup items' properties when it is running.  Use this field to capture extended information about the process, which may depend on the type of startup item.  E.g., A Windows service that interacts with the desktop. */
    run_mode_ids?: number[],
    /** The list of run_modes, normalized to the captions of the run_mode_id values.  In the case of 'Other', they are defined by the event source. */
    run_modes?: string[],
    /** The run state of the startup item. */
    run_state?: string,
    /** The run state ID of the startup item. */
    run_state_id?: number,
    /** The start type of the startup item. */
    start_type?: string,
    /** The start type ID of the startup item. */
    start_type_id: number,
    /** The startup item type. */
    type?: string,
    /** The startup item type identifier. */
    type_id?: number,
    /** The startup item Windows service resource. */
    win_service?: OcsfWinService,
}


/**
 * The MITRE Sub-technique object describes the ATT&CK® or ATLAS™ Sub-technique ID and/or name associated to an attack.
 */
export interface OcsfSubTechnique extends OcsfEntity {
    /** The versioned permalink of the attack sub-technique. For example: <code>https://attack.mitre.org/versions/v14/techniques/T1595/001/</code>. */
    src_url?: string,
}


/**
 * The table object represents a table within a structured relational database or datastore, which contains columns and rows of data that are able to be create, updated, deleted and queried.
 */
export interface OcsfTable extends OcsfEntity {
    /** The time when the table was known to have been created. */
    created_time?: number,
    /** The time when the table was known to have been created. */
    created_time_dt?: string,
    /** The description of the table. */
    desc?: string,
    /** The group names to which the table belongs. */
    groups?: OcsfGroup[],
    /** The most recent time when any changes, updates, or modifications were made within the table. */
    modified_time?: number,
    /** The most recent time when any changes, updates, or modifications were made within the table. */
    modified_time_dt?: string,
    /** The size of the data table in bytes. */
    size?: number,
}


/**
 * The MITRE Tactic object describes the ATT&CK® or ATLAS™ Tactic ID and/or name that is associated to an attack.
 */
export interface OcsfTactic extends OcsfEntity {
    /** The versioned permalink of the Tactic. For example: <code>https://attack.mitre.org/versions/v14/tactics/TA0043/</code>. */
    src_url?: string,
}


/**
 * The MITRE Technique object describes the ATT&CK® or ATLAS™ Technique ID and/or name associated to an attack.
 */
export interface OcsfTechnique extends OcsfEntity {
    /** The versioned permalink of the attack technique. For example: <code>https://attack.mitre.org/versions/v14/techniques/T1595/</code>. */
    src_url?: string,
}


/**
 * Threat actor is responsible for the observed malicious activity.
 */
export interface OcsfThreatActor extends OcsfObjectBase {
    /** The name of the threat actor. */
    name: string,
    /** The classification of the threat actor based on their motivations, capabilities, or affiliations. Common types include nation-state actors, cybercriminal groups, hacktivists, or insider threats. */
    type?: string,
    /** The normalized datastore resource type identifier. */
    type_id?: number,
}


/**
 * The Ticket object represents ticket in the customer's IT Service Management (ITSM) systems like ServiceNow, Jira, etc.
 */
export interface OcsfTicket extends OcsfObjectBase {
    /** The url of a ticket in the ticket system. */
    src_url?: string,
    /** The status of the ticket normalized to the caption of the <code>status_id</code> value. In the case of <code>99</code>, this value should as defined by the source. */
    status?: string,
    /** A list of contextual descriptions of the <code>status, status_id</code> values. */
    status_details?: string[],
    /** The normalized identifier for the ticket status. */
    status_id?: number,
    /** The title of the ticket. */
    title?: string,
    /** The linked ticket type determines whether the ticket is internal or in an external ticketing system. */
    type?: string,
    /** The normalized identifier for the ticket type. */
    type_id?: number,
    /** Unique identifier of the ticket. */
    uid?: string,
}


/**
 * The Time Span object represents different time period durations. If a timespan is fractional, i.e. crosses one period, e.g. a week and 3 days, more than one may be populated since each member is of integral type. In that case <code>type_id</code> if present should be set to <code>Other.</code><P>A timespan may also be defined by its time interval boundaries, <code>start_time</code> and <code>end_time</code>.
 */
export interface OcsfTimespan extends OcsfObjectBase {
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
    /** The end time or conclusion of the timespan's interval. */
    end_time_dt?: string,
    /** The start time or beginning of the timespan's interval. */
    start_time?: number,
    /** The start time or beginning of the timespan's interval. */
    start_time_dt?: string,
    /** The type of time span duration the object represents. */
    type?: string,
    /** The normalized identifier for the time span duration type. */
    type_id?: number,
}


/**
 * The Transport Layer Security (TLS) object describes the negotiated TLS protocol used for secure communications over an establish network connection.
 */
export interface OcsfTls extends OcsfObjectBase {
    /** The integer value of a TLS alert per the TLS specification. */
    alert?: number,
    /** The certificate object containing information about the digital certificate. */
    certificate?: OcsfCertificate,
    /** The Chain of Certificate Serial Numbers field provides a chain of Certificate Issuer Serial Numbers leading to the Root Certificate Issuer. */
    certificate_chain?: string[],
    /** The negotiated cipher suite. */
    cipher?: string,
    /** The client cipher suites that were exchanged during the TLS handshake negotiation. */
    client_ciphers?: string[],
    /** The list of TLS extensions. */
    extension_list?: OcsfTlsExtension[],
    /** The amount of total time for the TLS handshake to complete after the TCP connection is established, including client-side delays, in milliseconds. */
    handshake_dur?: number,
    /** The MD5 hash of a JA3 string. */
    ja3_hash?: OcsfFingerprint,
    /** The MD5 hash of a JA3S string. */
    ja3s_hash?: OcsfFingerprint,
    /** The length of the encryption key. */
    key_length?: number,
    /** The list of subject alternative names that are secured by a specific certificate. */
    sans?: OcsfSan[],
    /** The server cipher suites that were exchanged during the TLS handshake negotiation. */
    server_ciphers?: string[],
    /** The Server Name Indication (SNI) extension sent by the client. */
    sni?: string,
    /** The list of TLS extensions. */
    tls_extension_list?: OcsfTlsExtension[],
    /** The TLS protocol version. */
    version: string,
}


/**
 * The TLS Extension object describes additional attributes that extend the base Transport Layer Security (TLS) object.
 */
export interface OcsfTlsExtension extends OcsfObjectBase {
    /** The data contains information specific to the particular extension type. */
    data?: string,
    /** The TLS extension type. For example: <code>Server Name</code>. */
    type?: string,
    /** The TLS extension type identifier. */
    type_id: number,
}


/**
 * The trace object contains information about a distributed trace,  which is crucial for observability. Traces are made up of one or more spans, which are individual units of work in application activity. Traces track the journey of a request as it moves through various services in a system, capturing key details like timing, status, and dependencies at each step. Traces provide insights into system performance, helping to identify latency, bottlenecks, and issues in complex, distributed environments.
 */
export interface OcsfTrace extends OcsfObjectBase {
    /** The total time, in milliseconds, that the trace covers, calculated as the difference between start_time and end_time. This duration helps assess the overall performance of a request as it travels across various services, and is essential for identifying latency and potential bottlenecks within the distributed system. The trace duration may differ from individual span durations due to the propagation and processing times of the trace as it spans multiple components. */
    duration?: number,
    /** The end timestamp of the trace, essential for identifying latency and performance bottlenecks. Like the start time, this timestamp is normalized across the trace system to ensure consistency, even when events are recorded across distributed services with unsynchronized clocks. Normalized time allows for accurate trace duration calculations and helps observability tools track overall performance across services, regardless of the individual system time settings. */
    end_time?: number,
    /** The end timestamp of the trace, essential for identifying latency and performance bottlenecks. Like the start time, this timestamp is normalized across the trace system to ensure consistency, even when events are recorded across distributed services with unsynchronized clocks. Normalized time allows for accurate trace duration calculations and helps observability tools track overall performance across services, regardless of the individual system time settings. */
    end_time_dt?: string,
    /** The flags associated with the trace, used to indicate specific properties or behaviors, such as whether the trace is sampled or if it has special handling. Flags help control how traces are processed, logged, and analyzed, providing valuable context for tracing and observability tools in identifying trace characteristics or specific tracking requirements. */
    flags?: string[],
    /** Identifies the service or component generating the trace, helping to track and correlate the flow of requests through various parts of a distributed system. This information is essential for understanding the role and performance of specific services within the broader context of system operations and for diagnosing issues across different components. */
    service?: OcsfService,
    /** Represents a single unit of work or operation within a distributed trace. A span typically tracks the execution of a request across a service, capturing important details such as the operation, timestamps, and status. Spans help break down the overall trace into smaller, manageable parts, enabling detailed analysis of the performance and behavior of specific operations within the system. They are crucial for understanding latency, dependencies, and bottlenecks in complex distributed systems. */
    span?: OcsfSpan,
    /** The start timestamp of the trace, essential for identifying latency and performance bottlenecks. Like the end time, this timestamp is normalized across the trace system to ensure consistency, even when events are recorded across distributed services with unsynchronized clocks. Normalized time enables accurate trace duration calculations and helps observability tools track performance across services, regardless of the individual system time settings. */
    start_time?: number,
    /** The start timestamp of the trace, essential for identifying latency and performance bottlenecks. Like the end time, this timestamp is normalized across the trace system to ensure consistency, even when events are recorded across distributed services with unsynchronized clocks. Normalized time enables accurate trace duration calculations and helps observability tools track performance across services, regardless of the individual system time settings. */
    start_time_dt?: string,
    /** The unique identifier of the trace used in distributed systems and microservices architecture to track and correlate requests across various components of an application. */
    uid: string,
}


/**
 * Describes a characteristic or feature of an entity that was observed. For example, this object can be used to represent specific characteristics derived from events or findings that can be surfaced as distinguishing traits of the entity in question.
 */
export interface OcsfTrait extends OcsfEntity {
    /** The high-level grouping or classification this trait belongs to. */
    category?: string,
    /** The type of the trait. For example, this can be used to indicate if the trait acts as a contributing factor (increases risk/severity) or a mitigating factor (decreases risk/severity), in the context of the related finding. */
    type?: string,
    /** The values of the trait. */
    values?: string[],
}


/**
 * The transformation_info object represents the mapping or transformation used.
 */
export interface OcsfTransformationInfo extends OcsfEntity {
    /** The transformation language used to transform the data. */
    lang?: string,
    /** The product or instance used to make the transformation */
    product?: OcsfProduct,
    /** Time of the transformation. */
    time?: number,
    /** Time of the transformation. */
    time_dt?: string,
    /** The Uniform Resource Locator String where the mapping or transformation exists. */
    url_string?: string,
}


/**
 * The TSIG (Transaction Signature) object represents a TSIG resource record as defined in RFC 2845. TSIG uses a shared secret key and one-way hash function to authenticate DNS messages. Per RFC 2845, at most one TSIG record is permitted per DNS message.
 */
export interface OcsfTsig extends OcsfObjectBase {
    /** The HMAC algorithm used to compute the MAC. For example: <code>hmac-sha256</code>. */
    algorithm?: string,
    /** The TSIG error, normalized to the caption of the <code>error_id</code> value. In the case of 'Other', it is defined by the event source. */
    error?: string,
    /** The normalized TSIG-specific error code as defined in RFC 2845 and RFC 6895. This is independent of the DNS message header RCODE. */
    error_id?: number,
    /** The name of the shared secret key used to sign the DNS message. For example: <code>my-tsig-key.example.com.</code> */
    key_name?: string,
}


/**
 * The Unmanned Aerial System object describes the characteristics, Position Location Information (PLI), and other metadata of Unmanned Aerial Systems (UAS) and other unmanned and drone systems used in Remote ID. Remote ID is defined in the Standard Specification for Remote ID and Tracking (ASTM Designation: F3411-22a).
 */
export interface OcsfUnmannedAerialSystem extends OcsfAircraft {
    /** The endpoint hardware information. */
    hw_info?: OcsfDeviceHwInfo,
    /** The type of the UAS. For example, Helicopter, Gyroplane, Rocket, etc. */
    type?: string,
    /** The UAS type identifier. */
    type_id?: number,
    /** The Unmanned Aircraft System Traffic Management (UTM) provided universal unique ID (UUID) traceable to a non-obfuscated ID where this UTM UUID acts as a 'session id' to protect exposure of operationally sensitive information. */
    uuid?: string,
}


/**
 * The Unmanned System Operating Area object describes details about a precise area of operations for a UAS flight or mission.
 */
export interface OcsfUnmannedSystemOperatingArea extends OcsfLocation {
    /** Maximum altitude (WGS-84 HAE) for a group or an Intent-Based Network Participant. Measured in meters. Special Values: <code>Invalid</code>, <code>No Value</code>, or <code>Unknown: -1000 m</code>. */
    altitude_ceiling?: string,
    /** Minimum altitude (WGS-84 HAE) for a group or an Intent-Based Network Participant. Measured in meters. Special Values: <code>Invalid</code>, <code>No Value</code>, or <code>Unknown: -1000 m</code>. */
    altitude_floor?: string,
    /** Indicates the number of UAS in the operating area. */
    count?: number,
    /** The date and time at which a group or an Intent-Based Network Participant operation ends. (This field is only applicable to Network Remote ID.) */
    end_time?: number,
    /** The date and time at which a group or an Intent-Based Network Participant operation ends. (This field is only applicable to Network Remote ID.) */
    end_time_dt?: string,
    /** A list of Position Location Information (PLI) (latitude/longitude pairs) defining the area where a group or Intent-Based Network Participant operation is taking place. (This field is only applicable to Network Remote ID.) */
    locations?: OcsfLocation[],
    /** Farthest horizontal distance from the reported location at which any UA in a group may be located (meters). Also allows defining the area where an Intent-Based Network Participant operation is taking place. Default: 0 m. */
    radius?: string,
    /** The date and time at which a group or an Intent-Based Network Participant operation starts. (This field is only applicable to Network Remote ID.) */
    start_time?: number,
    /** The date and time at which a group or an Intent-Based Network Participant operation starts. (This field is only applicable to Network Remote ID.) */
    start_time_dt?: string,
    /** The type of operating area. For example, <code>Takeoff Location</code>, <code>Fixed Location</code>, <code>Dynamic Location</code>. */
    type?: string,
    /** The operating area type identifier. */
    type_id?: number,
}


/**
 * The Uniform Resource Locator (URL) object describes the characteristics of a URL.
 */
export interface OcsfUrl extends OcsfObjectBase {
    /** The Website categorization names, as defined by <code>category_ids</code> enum values. */
    categories?: string[],
    /** The Website categorization identifiers. */
    category_ids?: number[],
    /** The domain portion of the URL. For example: <code>example.com</code> in <code>https://sub.example.com</code>. */
    domain?: string,
    /** The URL host as extracted from the URL. For example: <code>www.example.com</code> from <code>www.example.com/download/trouble</code>. */
    hostname?: string,
    /** The URL path as extracted from the URL. For example: <code>/download/trouble</code> from <code>www.example.com/download/trouble</code>. */
    path?: string,
    /** The URL port. For example: <code>80</code>. */
    port?: number,
    /** The query portion of the URL. For example: the query portion of the URL <code>http://www.example.com/search?q=bad&sort=date</code> is <code>q=bad&sort=date</code>. */
    query_string?: string,
    /** The context in which a resource was retrieved in a web request. */
    resource_type?: string,
    /** The scheme portion of the URL. For example: <code>http</code>, <code>https</code>, <code>ftp</code>, or <code>sftp</code>. */
    scheme?: string,
    /** The subdomain portion of the URL. For example: <code>sub</code> in <code>https://sub.example.com</code> or <code>sub2.sub1</code> in <code>https://sub2.sub1.example.com</code>. */
    subdomain?: string,
    /** The URL string. See RFC 1738. For example: <code>http://www.example.com/download/trouble.exe</code>. Note: The URL path should not populate the URL string. */
    url_string?: string,
}


/**
 * The User object describes the characteristics of a user/person or a security principal.
 */
export interface OcsfUser extends OcsfEntity {
    /** The user's account or the account associated with the user. */
    account?: OcsfAccount,
    /** The unique identifier of the user's credential. For example, AWS Access Key ID. */
    credential_uid?: string,
    /** The display name of the user, as reported by the product. */
    display_name?: string,
    /** The domain where the user is defined. For example: the LDAP or Active Directory domain. */
    domain?: string,
    /** The user's primary email address. */
    email_addr?: string,
    /** The user's forwarding email address. */
    forward_addr?: string,
    /** The full name of the user, as reported by the product. */
    full_name?: string,
    /** The administrative groups to which the user belongs. */
    groups?: OcsfGroup[],
    /** The user has a multi-factor or secondary-factor device assigned. */
    has_mfa?: boolean,
    /** The additional LDAP attributes that describe a person. */
    ldap_person?: OcsfLdapPerson,
    /** Organization and org unit related to the user. */
    org?: OcsfOrganization,
    /** The telephone number of the user. */
    phone_number?: string,
    /** Details about the programmatic credential (API keys, access tokens, certificates, etc) associated to the user. */
    programmatic_credentials?: OcsfProgrammaticCredential[],
    /** The risk level, normalized to the caption of the risk_level_id value. */
    risk_level?: string,
    /** The normalized risk level id. */
    risk_level_id?: number,
    /** The risk score as reported by the event source. */
    risk_score?: number,
    /** The type of the user. For example, System, AWS IAM User, etc. */
    type?: string,
    /** The account type identifier. */
    type_id?: number,
    /** The alternate user identifier. For example, the Active Directory user GUID or AWS user Principal ID. */
    uid_alt?: string,
}


/**
 * The Vendor Attributes object can be used to represent values of attributes populated by the Vendor/Finding Provider. It can help distinguish between the vendor-provided values and consumer-updated values, of key attributes like <code>severity_id</code>.<br>The original finding producer should not populate this object. It should be populated by consuming systems that support data mutability.
 */
export interface OcsfVendorAttributes extends OcsfObjectBase {
    /** The finding severity, as reported by the Vendor (Finding Provider). The value should be normalized to the caption of the <code>severity_id</code> value. In the case of 'Other', it is defined by the source. */
    severity?: string,
    /** The finding severity ID, as reported by the Vendor (Finding Provider). */
    severity_id?: number,
}


/**
 * The vulnerability is an unintended characteristic of a computing component or system configuration that multiplies the risk of an adverse event or a loss occurring either due to accidental exposure, deliberate attack, or conflict with new system components.
 */
export interface OcsfVulnerability extends OcsfObjectBase {
    /** Detail about the security advisory, that is used to publicly disclose cybersecurity vulnerabilities by a vendor. */
    advisory?: OcsfAdvisory,
    /** List of Affected Code objects that describe details about code blocks identified as vulnerable. */
    affected_code?: OcsfAffectedCode[],
    /** List of software packages identified as affected by a vulnerability/vulnerabilities. */
    affected_packages?: OcsfAffectedPackage[],
    /** The category of a vulnerability or weakness, as reported by the source tool, such as <code>Container Security</code> or <code>Open Source Security</code>. */
    category?: string,
    /** Describes the Common Vulnerabilities and Exposures (CVE) details related to the vulnerability. */
    cve?: OcsfCve,
    /** Describes the Common Weakness Enumeration (CWE) details related to the vulnerability. */
    cwe?: OcsfCwe,
    /** Information about the chain of dependencies related to the issue as reported by an Application Security or Vulnerability Management tool. E.g., <code>serverless-offline -> @serverless/utils -> memoizee -> es5-ext</code>. */
    dependency_chain?: string,
    /** The description of the vulnerability. */
    desc?: string,
    /** The time when the exploit was most recently observed. */
    exploit_last_seen_time?: number,
    /** The time when the exploit was most recently observed. */
    exploit_last_seen_time_dt?: string,
    /** The URL of the exploit code or Proof-of-Concept (PoC). */
    exploit_ref_url?: string,
    /** The requirement description related to any constraints around exploit execution. */
    exploit_requirement?: string,
    /** The categorization or type of Exploit. E.g., <code>Network</code> or <code>Physical</code>. */
    exploit_type?: string,
    /** The time when the vulnerability was first observed. */
    first_seen_time?: number,
    /** The time when the vulnerability was first observed. */
    first_seen_time_dt?: string,
    /** Indicates if a fix is available for the reported vulnerability. */
    fix_available?: boolean,
    /** The fix coverage, normalized to the caption of the <code>fix_coverage_id</code> value. */
    fix_coverage?: string,
    /** The normalized identifier for fix coverage, applicable to this vulnerability. Typically useful, when there are multiple affected packages but only a subset have available fixes. */
    fix_coverage_id?: number,
    /** Indicates if an exploit or a PoC (proof-of-concept) is available for the reported vulnerability. */
    is_exploit_available?: boolean,
    /** Indicates if a fix is available for the reported vulnerability. */
    is_fix_available?: boolean,
    /** A list of KB articles or patches related to an endpoint. A KB Article contains metadata that describes the patch or an update. */
    kb_article_list?: OcsfKbArticle[],
    /** The KB article/s related to the entity. A KB Article contains metadata that describes the patch or an update. */
    kb_articles?: string[],
    /** The time when the vulnerability was most recently observed. */
    last_seen_time?: number,
    /** The time when the vulnerability was most recently observed. */
    last_seen_time_dt?: string,
    /** List of vulnerable packages as identified by the security product */
    packages?: OcsfPackage[],
    /** A list of reference URLs with additional information about the vulnerability. */
    references?: string[],
    /** List of vulnerability IDs (e.g. CVE ID) that are related to this vulnerability. */
    related_vulnerabilities?: string[],
    /** The remediation recommendations on how to mitigate the identified vulnerability. */
    remediation?: OcsfRemediation,
    /** The vendor assigned severity of the vulnerability. */
    severity?: string,
    /** A title or a brief phrase summarizing the discovered vulnerability. */
    title?: string,
    /** The name of the vendor that identified the vulnerability. */
    vendor_name?: string,
}


/**
 * The Web Resource object describes characteristics of a web resource that was affected by the activity/event.
 */
export interface OcsfWebResource extends OcsfResource {
    /** The time when the resource was created. */
    created_time_dt?: string,
    /** Description of the web resource. */
    desc?: string,
    /** The time when the resource was last modified. */
    modified_time_dt?: string,
    /** The URL pointing towards the source of the web resource. */
    url_string?: string,
}


/**
 * The resources of a WHOIS record for a given domain. This can include domain names, IP address blocks, autonomous system information, and/or contact and registration information for a domain.
 */
export interface OcsfWhois extends OcsfObjectBase {
    /** The autonomous system information associated with a domain. */
    autonomous_system?: OcsfAutonomousSystem,
    /** When the domain was registered or WHOIS entry was created. */
    created_time?: number,
    /** When the domain was registered or WHOIS entry was created. */
    created_time_dt?: string,
    /** The normalized value of dnssec_status_id. */
    dnssec_status?: string,
    /** Describes the normalized status of DNS Security Extensions (DNSSEC) for a domain. */
    dnssec_status_id?: number,
    /** The domain name corresponding to the WHOIS record. */
    domain?: string,
    /** An array of <code>Domain Contact</code> objects. */
    domain_contacts?: OcsfDomainContact[],
    /** The email address for the registrar's abuse contact */
    email_addr?: string,
    /** The name of the Internet Service Provider (ISP). */
    isp?: string,
    /** The organization name of the Internet Service Provider (ISP). This represents the parent organization or company that owns/operates the ISP. For example, Comcast Corporation would be the ISP org for Xfinity internet service. This attribute helps identify the ultimate provider when ISPs operate under different brand names. */
    isp_org?: string,
    /** When the WHOIS record was last updated or seen at. */
    last_seen_time?: number,
    /** When the WHOIS record was last updated or seen at. */
    last_seen_time_dt?: string,
    /** A collection of name servers related to a domain registration or other record. */
    name_servers?: string[],
    /** The phone number for the registrar's abuse contact */
    phone_number?: string,
    /** The domain registrar. */
    registrar?: string,
    /** The status of a domain and its ability to be transferred, e.g., <code>clientTransferProhibited</code>. */
    status?: string,
    /** An array of subdomain strings. Can be used to collect several subdomains such as those from Domain Generation Algorithms (DGAs). */
    subdomains?: string[],
    /** The IP address block (CIDR) associated with a domain. */
    subnet?: string,
}


/**
 * The registry key object describes a Windows registry key.
 */
export interface OcsfWinRegKey extends OcsfObjectBase {
    /** The indication of whether the object is part of the operating system. */
    is_system?: boolean,
    /** The time when the registry key was last modified. */
    modified_time?: number,
    /** The time when the registry key was last modified. */
    modified_time_dt?: string,
    /** The full path to the registry key. */
    path: string,
    /** The security descriptor of the registry key. */
    security_descriptor?: string,
}


/**
 * The registry value object describes a Windows registry value.
 */
export interface OcsfWinRegValue extends OcsfObjectBase {
    /** The data of the registry value. Where the value type is known, implementers should instead use a type-specific attribute, i.e. <code>reg_binary_data</code>, <code>reg_integer_data</code>, <code>reg_string_data</code>, or <code>reg_string_list_data</code>. */
    data?: string,
    /** The indication of whether the value is from a default value name. For example, the value name could be missing. */
    is_default?: boolean,
    /** The indication of whether the object is part of the operating system. */
    is_system?: boolean,
    /** The time when the registry value was last modified. */
    modified_time?: number,
    /** The time when the registry value was last modified. */
    modified_time_dt?: string,
    /** The name of the registry value. */
    name: string,
    /** The full path to the registry key, where the value is located. */
    path: string,
    /** The data of the registry value when <code>type_id</code> is <code>REG_BINARY</code> or <code>REG_NONE</code>. */
    reg_binary_data?: string,
    /** The data of the registry value when <code>type_id</code> is <code>REG_DWORD</code>, <code>REG_DWORD_BIG_ENDIAN</code>, or <code>REG_QWORD</code>. */
    reg_integer_data?: number,
    /** The data of the registry value when <code>type_id</code> is <code>REG_SZ</code>, <code>REG_EXPAND_SZ</code>, or <code>REG_LINK</code>. */
    reg_string_data?: string,
    /** The data of the registry value when <code>type_id</code> is <code>REG_MULTI_SZ</code>. */
    reg_string_list_data?: string[],
    /** A string representation of the value type as specified in Windows Registry Value Types. */
    type?: string,
    /** The value type ID. */
    type_id?: number,
}


/**
 * The Windows resource object describes a resource object managed by Windows, such as mutant or timer.
 */
export interface OcsfWinResource extends OcsfResource {
    /** The time when the resource was created. */
    created_time_dt?: string,
    /** The string detailing the attributes of the resource object. */
    details?: string,
    /** The time when the resource was last modified. */
    modified_time_dt?: string,
    /** The Windows service acting as the object server for the resource object, such as Security or Security Account Manager. */
    svc_name?: string,
    /** The normalized type identifier of the Windows resource object accessed. */
    type_id: number,
}


/**
 * The Windows Service object describes a Windows service.
 */
export interface OcsfWinService extends OcsfService {
    /** The full command line used to launch the service. */
    cmd_line?: string,
    /** The process that is hosting this service. */
    hosting_process?: OcsfProcessEntity,
    /** The name of the load ordering group of which this service is a member. */
    load_order_group?: string,
    /** The service category, normalized to the caption of the service_category_id value. In the case of 'Other', it is defined by the event source. */
    service_category?: string,
    /** The normalized identifier of the service category. */
    service_category_id?: number,
    /** The names of other services upon which this service has a dependency. */
    service_dependencies?: string[],
    /** For a shared user mode service (<code>service_type_id</code> is 4) this is the DLL that gets loaded by the generic service host process (e.g. <code>svchost.exe</code>) to implement the service. */
    service_dll_file?: OcsfFile,
    /** The service error control, normalized to the caption of the <code>service_error_control_id</code> value. In the case of 'Other', it is defined by the event source. */
    service_error_control?: string,
    /** The normalized identifier of the service error control. */
    service_error_control_id?: number,
    /** For a user mode service (<code>service_type_id</code> 3 or 4) this is the executable program that the SCM launches as the service process.<br>For a kernel mode driver (<code>service_type_id</code> 1 or 2) this is the driver file loaded into the kernel at the request of the SCM. */
    service_file?: OcsfFile,
    /** For a user mode service, this attribute represents the name of the account under which the service is run. For a kernel mode driver, this attribute represents the object name used to load the driver. */
    service_start_name?: string,
    /** The service start type, normalized to the caption of the <code>service_start_type_id</code> value. In the case of 'Other', it is defined by the event source. */
    service_start_type?: string,
    /** The normalized identifier of the service start type. */
    service_start_type_id?: number,
    /** The service type, normalized to the caption of the service_type_id value. In the case of 'Other', it is defined by the event source. */
    service_type?: string,
    /** The normalized identifier of the service type. */
    service_type_id?: number,
}


/**
 * The base event is a generic and concrete event. It also defines a set of attributes available in most event classes. As a generic event that does not belong to any event category, it could be used to log events that are not otherwise defined by the schema.
 */
export interface OcsfBaseEvent extends OcsfCloudProfile, OcsfDatetimeProfile, OcsfHostProfile, OcsfOsintProfile, OcsfRecordIntegrityProfile, OcsfSecurityControlProfile {
    /** The normalized identifier of the activity that triggered the event. Each event class defines its own set of activity values. Use <code>0</code> (Unknown) when the activity cannot be determined. Use <code>99</code> (Other) when the activity does not match any defined value, in which case <code>activity_name</code> must be populated with the source-specific label. */
    activity_id: number,
    /** The event activity name, as defined by the <code>activity_id</code>. When <code>activity_id</code> is <code>99</code> (Other), this attribute <b>must</b> contain the source-specific activity label. For all other <code>activity_id</code> values, this must match the caption defined for that <code>activity_id</code> enum value. */
    activity_name?: string,
    /** The event category name, as defined by the <code>category_uid</code> value. The value must match the caption defined for the corresponding <code>category_uid</code> enum value (e.g., <code>"Findings"</code> for <code>category_uid: 2</code>). */
    category_name?: string,
    /** The category unique identifier of the event. Each event class belongs to exactly one category. Producers and mappers must set this to the category defined by the event class being used. */
    category_uid: number,
    /** The event class name, as defined by class_uid value: <code>Base Event</code>. */
    class_name?: string,
    /** The unique identifier of a class. A class describes the attributes available in an event. Producers and mappers must set this to the <code>uid</code> defined in the event class definition. For example, <code>Detection Finding</code> is <code>2004</code>. */
    class_uid: number,
    /** The number of events aggregated into this single record. Only populate for aggregate events. When set, <code>start_time</code> and <code>end_time</code> should also be provided to define the aggregation window. */
    count?: number,
    /** The elapsed time of the aggregation window in milliseconds, from <code>start_time</code> to <code>end_time</code>. Only populate for aggregate events (<code>count</code> &gt; 1). The value should equal <code>end_time - start_time</code>. */
    duration?: number,
    /** The time of the most recent event in an aggregate (<code>count</code> &gt; 1). Do not populate for discrete, point-in-time events - use <code>time</code> alone. Subclasses such as findings may redefine this for their own time-range semantics. */
    end_time?: number,
    /** The time of the most recent event in an aggregate (<code>count</code> &gt; 1). Do not populate for discrete, point-in-time events - use <code>time</code> alone. Subclasses such as findings may redefine this for their own time-range semantics. */
    end_time_dt?: string,
    /** The additional information from an external data source, which is associated with the event or a finding. For example add location information for the IP address in the DNS answers:</p><code>[{"name": "answers.ip", "value": "92.24.47.250", "type": "location", "data": {"city": "Socotra", "continent": "Asia", "coordinates": [-25.4153, 17.0743], "country": "YE", "desc": "Yemen"}}]</code> */
    enrichments?: OcsfEnrichment[],
    /** A human-readable description of the event, as defined by the source. This should be a concise, meaningful summary suitable for display in a UI or alert notification - not a raw log line. For example: <code>"User john_doe logged in from 10.0.0.1."</code> rather than a raw syslog string. */
    message?: string,
    /** The metadata object describes the event producer, schema version, and processing information. Producers and mappers <b>must</b> populate <code>metadata.product</code> to identify the data source, and <code>metadata.version</code> to indicate the OCSF schema version used. Consumers rely on this to interpret the event correctly. */
    metadata: OcsfMetadata,
    /** The observables array surfaces key indicators and entities from the event or finding in a single, consistent location for downstream correlation and detection. Each entry references an attribute path within the event (e.g., <code>src_endpoint.ip</code>) along with its type and value, enabling consumers to extract IOCs without parsing the full event structure. */
    observables?: OcsfObservable[],
    /** The original event/finding data as received from the source, before normalization into OCSF. Populate this with the verbatim log line, JSON payload, or other native format for forensic and debugging purposes. This field is not intended for structured querying - use the normalized OCSF attributes instead. */
    raw_data?: string,
    /** A fingerprint (hash) of the <code>raw_data</code> content. Use this to verify the integrity of the original event data or to deduplicate events. */
    raw_data_hash?: OcsfFingerprint,
    /** The size of the original event data (as captured in <code>raw_data</code>) in bytes, before OCSF normalization. Useful for metering and capacity planning. */
    raw_data_size?: number,
    /** The event/finding severity label, normalized to the caption of the <code>severity_id</code> value. When <code>severity_id</code> is <code>99</code> (Other), this attribute <b>must</b> contain the source-specific severity label. For all other values, this should match the caption defined for that <code>severity_id</code> enum value (e.g., <code>"High"</code> for <code>severity_id: 4</code>). */
    severity?: string,
    /** <p>The normalized identifier of the event/finding severity.</p>The normalized severity is a measurement the effort and expense required to manage and resolve an event or incident. Smaller numerical values represent lower impact events, and larger numerical values represent higher impact events. */
    severity_id: number,
    /** The time of the earliest event in an aggregate (<code>count</code> &gt; 1). Do not populate for discrete, point-in-time events - use <code>time</code> alone. Subclasses such as findings may redefine this for their own time-range semantics. */
    start_time?: number,
    /** The time of the earliest event in an aggregate (<code>count</code> &gt; 1). Do not populate for discrete, point-in-time events - use <code>time</code> alone. Subclasses such as findings may redefine this for their own time-range semantics. */
    start_time_dt?: string,
    /** The event status label, normalized to the caption of the <code>status_id</code> value. When <code>status_id</code> is <code>99</code> (Other), this attribute <b>must</b> contain the source-specific status label. For all other values, this must match the caption defined for that <code>status_id</code> enum value (e.g., <code>"Success"</code> for <code>status_id: 1</code>). */
    status?: string,
    /** The source-specific status or error code as reported by the event source. For example, a Windows logon failure code (<code>0x18</code>), an HTTP response code (<code>403</code>), or an AWS API error code. This preserves the original code for detailed troubleshooting beyond what <code>status_id</code> conveys. */
    status_code?: string,
    /** A human-readable description providing additional context about the event outcome. Use this to convey details that go beyond the normalized <code>status_id</code> and source-specific <code>status_code</code>, such as a failure reason or error message. For example: <code>"Account locked after 5 failed attempts."</code>. */
    status_detail?: string,
    /** The normalized status of the event outcome. Use this family of attributes to convey the outcome of the activity described by the event. Producers should map their source outcome to <code>1</code> (Success) or <code>2</code> (Failure). Use <code>0</code> (Unknown) when the outcome cannot be determined, and <code>99</code> (Other) with a populated <code>status</code> string when the source value does not map cleanly. */
    status_id?: number,
    /** The primary timestamp of the event - when the activity actually occurred at the source. This does not capture when the event record was created or serialized by the source system; for event lifecycle timestamps such as ingestion and processing, use <code>metadata.logged_time</code> and <code>metadata.processed_time</code> respectively, or the equivalent attributes in the <code>metadata.loggers</code> array when recording pipeline stages. For aggregate events (<code>count</code> &gt; 1), set this to <code>start_time</code> (the earliest OCSF <code>time</code> in the aggregate) to preserve causal ordering and consistent timeline alignment. Note: finding classes redefine <code>time</code> as the finding creation time rather than the activity occurrence time. This <b>must</b> be a UTC epoch value in milliseconds (e.g., <code>1776881335332</code>). Mappers should use the most precise and authoritative timestamp available from the source. */
    time: number,
    /** The primary timestamp of the event - when the activity actually occurred at the source. This does not capture when the event record was created or serialized by the source system; for event lifecycle timestamps such as ingestion and processing, use <code>metadata.logged_time</code> and <code>metadata.processed_time</code> respectively, or the equivalent attributes in the <code>metadata.loggers</code> array when recording pipeline stages. For aggregate events (<code>count</code> &gt; 1), set this to <code>start_time</code> (the earliest OCSF <code>time</code> in the aggregate) to preserve causal ordering and consistent timeline alignment. Note: finding classes redefine <code>time</code> as the finding creation time rather than the activity occurrence time. This <b>must</b> be a UTC epoch value in milliseconds (e.g., <code>1776881335332</code>). Mappers should use the most precise and authoritative timestamp available from the source. */
    time_dt?: string,
    /** The number of minutes that the reported event <code>time</code> is ahead or behind UTC, in the range -1,080 to +1,080. This allows consumers to reconstruct the local time at the event source. For example, US Eastern Standard Time is <code>-300</code>. Populate this when the source provides local time zone information. */
    timezone_offset?: number,
    /** The event/finding type name, combining the class and activity (e.g., <code>"Detection Finding: Create"</code>). The value must match the <code>class_name</code> and <code>activity_name</code> joined by <code>": "</code>. */
    type_name?: string,
    /** The event/finding type ID. It identifies the event's semantics and structure. Producers and mappers <b>must</b> compute this as <code>class_uid * 100 + activity_id</code>. It uniquely identifies the combination of event class and activity across the entire schema. For example, <code>Detection Finding: Create</code> is <code>200401</code>. */
    type_uid: number,
    /** A container for source-specific attributes that do not map to any defined OCSF attribute. Use this to preserve valuable source data that would otherwise be lost during normalization. The keys and values are specific to the event source. <p><b>Note: </b>Consumers should not rely on a stable structure within this field. The preferred approach to unmapped attributes is to create a custom extension with the desired structure.</p> */
    unmapped?: OcsfObject,
}


/**
 * The abstract parent of OCSF's Application Activity event classes.
 */
export interface OcsfApplicationEvent extends OcsfBaseEvent, OcsfAiOperationProfile {
}


/**
 * API events describe general CRUD (Create, Read, Update, Delete) API activities, e.g. (AWS Cloudtrail)
 */
export interface OcsfApiActivity extends OcsfApplicationEvent, OcsfTraceProfile {
    /** The network destination endpoint. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** Details about the underlying http request. */
    http_request?: OcsfHttpRequest,
    /** Details about the underlying http response. */
    http_response?: OcsfHttpResponse,
    /** Details about resources that were affected by the activity/event. */
    resources?: OcsfResourceDetails[],
    /** Details about the source of the activity. */
    src_endpoint: OcsfNetworkEndpoint,
}


/**
 * Application Error events describe issues with an applications. The error message should be put in the event's <code>message</code> attribute. The <code>metadata.product</code> attribute can be used to capture the originating application information. The <code>host</code> profile can used to include the generating device information. This class is helpful for applications that generate or handle OCSF events and can also be used for errors in upstream products and services.
 */
export interface OcsfApplicationError extends OcsfApplicationEvent {
}


/**
 * Application Lifecycle events report installation, removal, start, stop of an application or service.
 */
export interface OcsfApplicationLifecycle extends OcsfApplicationEvent {
    /** The application that was affected by the lifecycle event.  This also applies to self-updating application systems. */
    app?: OcsfProduct,
    /** The application that was affected by the lifecycle event. This also applies to self-updating application systems. Product identity, such as vendor and version, can be conveyed via the nested <code>product</code> attribute. */
    application?: OcsfApplication,
}


/**
 * Datastore events describe general activities (Read, Update, Query, Delete, etc.) which affect datastores or data within those datastores, e.g. (AWS RDS, AWS S3).
 */
export interface OcsfDatastoreActivity extends OcsfApplicationEvent {
    /** The database object is used for databases which are typically datastore services that contain an organized collection of structured and unstructured data or a types of data. */
    database?: OcsfDatabase,
    /** The data bucket object is a basic container that holds data, typically organized through the use of data partitions. */
    databucket?: OcsfDatabucket,
    /** Details about the endpoint hosting the datastore application or service. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** Details about the underlying http request. */
    http_request?: OcsfHttpRequest,
    /** Details about the underlying http response. */
    http_response?: OcsfHttpResponse,
    /** The query info object holds information related to data access within a datastore. To access, manipulate, delete, or retrieve data from a datastore, a database query must be written using a specific syntax. */
    query_info?: OcsfQueryInfo,
    /** Details about the source of the activity. */
    src_endpoint: OcsfNetworkEndpoint,
    /** The table object represents a table within a structured relational database or datastore, which contains columns and rows of data that are able to be create, updated, deleted and queried. */
    table?: OcsfTable,
    /** The datastore resource type (e.g. database, datastore, or table). */
    type?: string,
    /** The normalized datastore resource type identifier. */
    type_id?: number,
}


/**
 * File Hosting Activity events report the actions taken by file management applications, including file sharing servers like Sharepoint and services such as Box, MS OneDrive, Google Drive, or network file share services.
 */
export interface OcsfFileHosting extends OcsfApplicationEvent {
    /** The list of requested access rights. */
    access_list?: string[],
    /** The sum of hexadecimal values of requested access rights. */
    access_mask?: number,
    /** The list of access check results. */
    access_result?: string,
    /** The network connection information. */
    connection_info?: OcsfNetworkConnectionInfo,
    /** The endpoint that received the activity on the target file. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** The share expiration time. */
    expiration_time?: number,
    /** The share expiration time. */
    expiration_time_dt?: string,
    /** The file that is the target of the activity. */
    file: OcsfFile,
    /** The resulting file object when the activity was allowed and successful. */
    file_result?: OcsfFile,
    /** Details about the underlying HTTP request. */
    http_request?: OcsfHttpRequest,
    /** Details about the HTTP response, if available. */
    http_response?: OcsfHttpResponse,
    /** The share name. */
    share?: string,
    /** The share type, normalized to the caption of the share_type_id value. In the case of 'Other', it is defined by the event source. */
    share_type?: string,
    /** The normalized identifier of the share type. */
    share_type_id?: number,
    /** The endpoint that performed the activity on the target file. */
    src_endpoint: OcsfNetworkEndpoint,
}


/**
 * Scan events report the start, completion, and results of a scan job. The scan event includes the number of items that were scanned and the number of detections that were resolved.
 */
export interface OcsfScanActivity extends OcsfApplicationEvent {
    /** The command identifier that is associated with this scan event.  This ID uniquely identifies the proactive scan command, e.g., if remotely initiated. */
    command_uid?: string,
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
    /** The Scan object describes characteristics of the scan job. */
    scan: OcsfScan,
    /** The unique identifier of the schedule associated with a scan job. */
    schedule_uid?: string,
    /** The total number of items that were scanned; zero if no items were scanned. */
    total?: number,
}


/**
 * Web Resource Access Activity events describe successful/failed attempts to access a web resource over HTTP.
 */
export interface OcsfWebResourceAccessActivity extends OcsfApplicationEvent, OcsfNetworkProxyProfile {
    /** Details about the underlying HTTP request. */
    http_request: OcsfHttpRequest,
    /** Details about the HTTP response, if available. */
    http_response?: OcsfHttpResponse,
    /** Details about the proxy service, if available. */
    proxy?: OcsfNetworkProxy,
    /** Details about the source endpoint of the request. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes, if available. */
    tls?: OcsfTls,
    /** Details about the resource that is the target of the activity. */
    web_resources: OcsfWebResource[],
}


/**
 * Web Resources Activity events describe actions executed on a set of Web Resources.
 */
export interface OcsfWebResourcesActivity extends OcsfApplicationEvent, OcsfNetworkProxyProfile {
    /** Details about server providing the web resources. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** Details about the underlying HTTP request. */
    http_request?: OcsfHttpRequest,
    /** Details about the HTTP response, if available. */
    http_response?: OcsfHttpResponse,
    /** Details about the endpoint from which the request originated. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes, if available. */
    tls?: OcsfTls,
    /** The intended state of the <code>web_resources</code> after the update. On <code>Success</code>, represents the actual post-update state. */
    updated_web_resources?: OcsfWebResource[],
    /** Describes details about web resources that were affected by an activity/event. */
    web_resources: OcsfWebResource[],
    /** The results of the activity on web resources. It should contain the new values of the changed attributes of the web resources. */
    web_resources_result?: OcsfWebResource[],
}


/**
 * The Discovery event is a generic event that defines a set of attributes available in Discovery category events. As a generic event, it could be used to log events that are not otherwise defined by the Discovery specific event classes.
 */
export interface OcsfDiscoveryEvent extends OcsfBaseEvent {
}


/**
 * Discovery Result events report the results of a discovery request.
 */
export interface OcsfDiscoveryResultEvent extends OcsfBaseEvent {
    /** The search details associated with the query request. */
    query_info?: OcsfQueryInfo,
    /** The result of the query. */
    query_result?: string,
    /** The normalized identifier of the query result. */
    query_result_id: number,
}


/**
 * Admin Group Query events report information about administrative groups.
 */
export interface OcsfAdminGroupQuery extends OcsfDiscoveryResultEvent {
    /** The administrative group. */
    group: OcsfGroup,
    /** The users that belong to the administrative group. */
    users?: OcsfUser[],
}


/**
 * Cloud Resources Inventory Info events report cloud asset inventory data. This data can be either logged or proactively collected. For example, use this event class when creating an inventory of cloud resource information from a Configuration Management Database (CMDB), Cyber Asset Attack Surface Management (CAASM), direct public cloud service provider APIs, Software-as-a-Service (SaaS) APIs, or otherwise.
 */
export interface OcsfCloudResourcesInventoryInfo extends OcsfDiscoveryEvent {
    /** A cloud-based container image or running container discovered by an inventory process. */
    container?: OcsfContainer,
    /** A cloud-based database discovered by an inventory process. */
    database?: OcsfDatabase,
    /** A cloud-based data bucket or other object storage discovered by an inventory process. */
    databucket?: OcsfDatabucket,
    /** The Identity Provider that is being discovered by an inventory process, or that is related to the cloud resource(s) being discovered by an inventory process. */
    idp?: OcsfIdp,
    /** The cloud region where the resource is located, e.g., <code>us-isof-south-1</code>, <code>eastus2</code>, <code>us-central1</code>, etc. */
    region?: string,
    /** The cloud resource(s) that are being discovered by an inventory process. Use this object if there is not a direct object match in the class. */
    resources?: OcsfResourceDetails[],
    /** A cloud-based database table discovered by an inventory process. */
    table?: OcsfTable,
}


/**
 * Device Config State events report device configuration data, device assessments, and/or CIS Benchmark results.
 */
export interface OcsfConfigState extends OcsfDiscoveryEvent {
    /** A list of assessments associated with the device. */
    assessments?: OcsfAssessment[],
    /** The CIS Benchmark Result object captures results generated from benchmark evaluations as defined by the Center for Internet Security. */
    cis_benchmark_result?: OcsfCisBenchmarkResult,
}


/**
 * Device Config State Change events report state changes that impact the security of the device.
 */
export interface OcsfDeviceConfigStateChange extends OcsfDiscoveryEvent {
    /** The previous security level of the entity */
    prev_security_level?: string,
    /** The previous security level of the entity */
    prev_security_level_id?: number,
    /** The previous security states of the device. */
    prev_security_states?: OcsfSecurityState[],
    /** The current security level of the entity */
    security_level?: string,
    /** The current security level of the entity */
    security_level_id?: number,
    /** The current security states of the device. */
    security_states?: OcsfSecurityState[],
    /** The Config Change Stat, normalized to the caption of the state_id value. In the case of 'Other', it is defined by the source. */
    state?: string,
    /** The Config Change State of the managed entity. */
    state_id?: number,
}


/**
 * Data collected directly from devices that represents forensic information pulled, queried, or discovered from devices that may indicate malicious activity. It contains a number of child objects, each representing a distinct evidence domain (network connections, file artifacts, registry entries, etc.). When mapping raw telemetry data users should select Query Evidence and then the appropriate child object that best matches the evidence type.
 */
export interface OcsfEvidenceInfo extends OcsfDiscoveryResultEvent {
    /** The specific resulting evidence information that was queried or discovered based on the query type. Contains various child objects corresponding to the query_type_id values. */
    query_evidence: OcsfQueryEvidence,
}


/**
 * File Query events report information about files that are present on the system.
 */
export interface OcsfFileQuery extends OcsfDiscoveryResultEvent {
    /** The file that is the target of the query. */
    file: OcsfFile,
}


/**
 * Folder Query events report information about folders that are present on the system.
 */
export interface OcsfFolderQuery extends OcsfDiscoveryResultEvent {
    /** The folder that is the target of the query. */
    folder: OcsfFile,
}


/**
 * Device Inventory Info events report device inventory data that is either logged or proactively collected. For example, when collecting device information from a CMDB or running a network sweep of connected devices.
 */
export interface OcsfInventoryInfo extends OcsfDiscoveryEvent {
}


/**
 * Job Query events report information about scheduled jobs.
 */
export interface OcsfJobQuery extends OcsfDiscoveryResultEvent {
    /** The object provides information about a scheduled job or a task. */
    job: OcsfJob,
}


/**
 * Kernel Object Query events report information about discovered kernel resources.
 */
export interface OcsfKernelObjectQuery extends OcsfDiscoveryResultEvent {
    /** The kernel object that pertains to the event. */
    kernel: OcsfKernel,
}


/**
 * Module Query events report information about loaded modules.
 */
export interface OcsfModuleQuery extends OcsfDiscoveryResultEvent {
    /** The module that pertains to the event. */
    module: OcsfModule,
    /** The process that loaded the module. */
    process: OcsfProcess,
}


/**
 * Network Connection Query events report information about active network connections.
 */
export interface OcsfNetworkConnectionQuery extends OcsfDiscoveryResultEvent {
    /** The network connection information. */
    connection_info: OcsfNetworkConnectionInfo,
    /** The process that owns the socket. */
    process: OcsfProcess,
    /** The state of the socket, normalized to the caption of the state_id value. In the case of 'Other', it is defined by the event source. */
    state?: string,
    /** The state of the socket. */
    state_id: number,
}


/**
 * Networks Query events report information about network adapters.
 */
export interface OcsfNetworksQuery extends OcsfDiscoveryResultEvent {
    /** The physical or virtual network interfaces that are associated with the device, one for each unique MAC address/IP address/hostname/name combination.<p><b>Note:</b> The first element of the array is the network information that pertains to the event.</p> */
    network_interfaces: OcsfNetworkInterface[],
}


/**
 * OSINT Inventory Info events report open source intelligence or threat intelligence inventory data that is either logged or proactively collected. For example, when collecting OSINT information from Threat Intelligence Platforms (TIPs) or Extended Detection and Response (XDR) platforms, or collecting data from OSINT or other generic threat intelligence and enrichment feeds such as APIs and datastores.
 */
export interface OcsfOsintInventoryInfo extends OcsfDiscoveryEvent {
}


/**
 * Operating System Patch State reports the installation of an OS patch to a device and any associated knowledgebase articles.
 */
export interface OcsfPatchState extends OcsfDiscoveryEvent {
    /** A list of KB articles or patches related to an endpoint. A KB Article contains metadata that describes the patch or an update. */
    kb_article_list?: OcsfKbArticle[],
}


/**
 * Peripheral Device Query events report information about peripheral devices.
 */
export interface OcsfPeripheralDeviceQuery extends OcsfDiscoveryResultEvent {
    /** The peripheral device that triggered the event. */
    peripheral_device: OcsfPeripheralDevice,
}


/**
 * Process Query events report information about running processes.
 */
export interface OcsfProcessQuery extends OcsfDiscoveryResultEvent {
    /** The process object. */
    process: OcsfProcess,
}


/**
 * Service Query events report information about running services.
 */
export interface OcsfServiceQuery extends OcsfDiscoveryResultEvent {
    /** The service that pertains to the event. */
    service: OcsfService,
}


/**
 * User Session Query events report information about existing user sessions.
 */
export interface OcsfSessionQuery extends OcsfDiscoveryResultEvent {
    /** The authenticated user or service session. */
    session: OcsfSession,
}


/**
 * Software Inventory Info events report device software inventory data that is either logged or proactively collected. For example, when collecting device information from a CMDB or running a network sweep of connected devices.
 */
export interface OcsfSoftwareInfo extends OcsfDiscoveryEvent {
    /** The device software that is being discovered by an inventory process. */
    package?: OcsfPackage,
    /** Additional product attributes that have been discovered or enriched from a catalog or other external source. */
    product?: OcsfProduct,
    /** The Software Bill of Materials (SBOM) of the device software that is being discovered by an inventory process. */
    sbom?: OcsfSbom,
}


/**
 * Startup Item Query events report information about discovered items, e.g., application components that are generally configured to run automatically.
 */
export interface OcsfStartupItemQuery extends OcsfDiscoveryResultEvent {
    /** The startup item object describes an application component that has associated startup criteria and configurations. */
    startup_item: OcsfStartupItem,
}


/**
 * User Inventory Info events report user inventory data that is either logged or proactively collected. For example, when collecting user information from Active Directory entries.
 */
export interface OcsfUserInventory extends OcsfDiscoveryEvent {
    /** The user that is being discovered by an inventory process. */
    user: OcsfUser,
}


/**
 * User Query events report user data that have been discovered, queried, polled or searched. This event differs from User Inventory as it describes the result of a targeted search by filtering a subset of user attributes.
 */
export interface OcsfUserQuery extends OcsfDiscoveryResultEvent {
    /** The user that pertains to the event or object. */
    user: OcsfUser,
}


/**
 * The Finding event is a generic event that defines a set of attributes available in the Findings category.
 */
export interface OcsfFindingEvent extends OcsfBaseEvent, OcsfIncidentProfile {
    /** A user provided comment about the finding. */
    comment?: string,
    /** Describes the supporting information about a generated finding. */
    finding_info: OcsfFindingInfo,
    /** Additional notes related to the finding. Each note in the array can include a comment, the user who made the comment, the time when the note was created, and the time when the note was last modified (typically by the same user). Notes can be used to provide additional context, explanations, or observations by analysts related to the finding over time. */
    notes?: OcsfNote[],
    /** Describes details about resources that were the target of the activity that triggered the finding. */
    resources?: OcsfResourceDetails[],
    /** The Vendor Attributes object can be used to represent values of attributes populated by the Vendor/Finding Provider. It can help distinguish between the vendor-provided values and consumer-updated values, of key attributes like <code>severity_id</code>.<br>The original finding producer should not populate this object. It should be populated by consuming systems that support data mutability. */
    vendor_attributes?: OcsfVendorAttributes,
}


/**
 * The Application Security Posture Finding event is a notification about any bug, defect, deficiency, exploit, vulnerability, weakness or any other issue with software and related systems. Application Security Posture Findings typically involve reporting on the greater context including compliance, impacted resources, remediation guidance, specific code defects, and/or vulnerability metadata. Application Security Posture Findings can be reported by Threat & Vulnerability Management (TVM) tools, Application Security Posture Management (ASPM) tools, or other similar tools. Note: if the event producer is a security control, the <code>security_control</code> profile should be applied and its <code>attacks</code> information, if present, should be duplicated into the <code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile or aggregate this finding into an <code>Incident Finding</code>.
 */
export interface OcsfApplicationSecurityPostureFinding extends OcsfFindingEvent {
    /** An Application describes the details for an inventoried application as reported by an Application Security tool or other Developer-centric tooling. Applications can be defined as Kubernetes resources, Containerized resources, or application hosting-specific cloud sources such as AWS Elastic BeanStalk, AWS Lightsail, or Azure Logic Apps. */
    application?: OcsfApplication,
    /** Provides compliance context to vulnerabilities and other weaknesses that are reported as part of an Application Security or Vulnerability Management tool's built-in compliance framework mapping. */
    compliance?: OcsfCompliance,
    /** Describes the recommended remediation steps to address identified vulnerabilities or weaknesses. */
    remediation?: OcsfRemediation,
    /** This object describes vulnerabilities reported in a security finding. */
    vulnerabilities?: OcsfVulnerability[],
}


/**
 * Compliance Finding events describe results of evaluations performed against resources, to check compliance with various Industry Frameworks or Security Standards such as <code>NIST SP 800-53, CIS AWS Foundations Benchmark v1.4.0, ISO/IEC 27001</code> etc. Note: if the event producer is a security control, the <code>security_control</code> profile should be applied and its <code>attacks</code> information, if present, should be duplicated into the <code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile or aggregate this finding into an <code>Incident Finding</code>.
 */
export interface OcsfComplianceFinding extends OcsfFindingEvent {
    /** The compliance object provides context to compliance findings (e.g., a check against a specific regulatory or best practice framework such as CIS, NIST etc.) and contains compliance related details. */
    compliance: OcsfCompliance,
    /** Describes various evidence artifacts associated with the compliance finding. */
    evidences?: OcsfEvidences[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
    /** Describes details about the resource that is the subject of the compliance check. */
    resource?: OcsfResourceDetails,
}


/**
 * A Data Security Finding describes detections or alerts generated by various data security products such as Data Loss Prevention (DLP), Data Classification, Secrets Management, Digital Rights Management (DRM), Data Security Posture Management (DSPM), and similar tools. These detections or alerts can be created using fingerprinting, statistical analysis, machine learning or other methodologies. The finding describes the actors and endpoints who accessed or own the sensitive data, as well as the resources which store the sensitive data. Note: if the event producer is a security control, the <code>security_control</code> profile should be applied and its <code>attacks</code> information, if present, should be duplicated into the <code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile  or aggregate this finding into an <code>Incident Finding</code>.
 */
export interface OcsfDataSecurityFinding extends OcsfFindingEvent {
    /** The Data Security object describes the characteristics, techniques and content of a Data Loss Prevention (DLP), Data Loss Detection (DLD), Data Classification, or similar tools' finding, alert, or detection mechanism(s). */
    data_security?: OcsfDataSecurity,
    /** Describes the database where classified or sensitive data is stored in, or was accessed from. Databases are typically datastore services that contain an organized collection of structured and/or semi-structured data. */
    database?: OcsfDatabase,
    /** Describes the databucket where classified or sensitive data is stored in, or was accessed from. The data bucket object is a basic container that holds data, typically organized through the use of data partitions. */
    databucket?: OcsfDatabucket,
    /** Describes the endpoint where classified or sensitive data is stored in, or was accessed from. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** Describes a file that contains classified or sensitive data. */
    file?: OcsfFile,
    /** Details about the source endpoint where classified or sensitive data was accessed from. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** Describes the table where classified or sensitive data is stored in, or was accessed from. The table object represents a table within a structured relational database, warehouse, lake, or similar. */
    table?: OcsfTable,
}


/**
 * A Detection Finding describes detections or alerts generated by security products using correlation engines, detection engines or other methodologies.<br><strong>Note: </strong>If the event producer is a security control, the <code>Security Control</code> profile should be applied and its <code>attacks</code> information, if present, should be duplicated into the <code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is an incident, i.e. requires incident workflow, also apply the <code>Incident</code> profile or aggregate the finding into an <code>Incident Finding</code>.<p><strong>Note: </strong>Findings are mutable and as such have a lifecycle, via <code>Update</code> activities. When modeling atomic alerts, you are encouraged to consider using the <code>Security Control</code> profile with the activity event associated with the alert. See the referenced article below.
 */
export interface OcsfDetectionFinding extends OcsfFindingEvent {
    /** Describes baseline information about normal activity patterns, along with any detected deviations or anomalies that triggered this finding. */
    anomaly_analyses?: OcsfAnomalyAnalysis[],
    /** Describes various evidence artifacts associated to the activity/activities that triggered a security detection. */
    evidences?: OcsfEvidences[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
    /** Describes vulnerabilities reported in a Detection Finding. */
    vulnerabilities?: OcsfVulnerability[],
}


/**
 * This finding represents an IAM analysis result, which evaluates IAM policies, access patterns, and IAM configurations for potential security risks. The analysis can focus on either an identity (user, role, service account) or a resource to assess permissions, access patterns, and security posture within the IAM domain. <br><strong>Note:</strong> Use <code>permission_analysis_results</code> for identity-centric analysis (evaluating what an identity can do) and <code>access_analysis_result</code> for resource-centric analysis (evaluating who can access a resource). These complement each other for comprehensive IAM security assessment.<br><strong>Note:</strong> If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile or aggregate this finding into an <code>Incident Finding</code>.
 */
export interface OcsfIamAnalysisFinding extends OcsfFindingEvent {
    /** Describes access relationships and pathways between identities, resources, focusing on who can access what and through which mechanisms. This evaluates access levels (read/write/admin), access types (direct, cross-account, public, federated), and the conditions under which access is granted. Use this for resource-centric security assessments such as external access discovery, public exposure analysis, etc. */
    access_analysis_result?: OcsfAccessAnalysisResult,
    /** Details about applications, services, or systems that are accessible based on the IAM analysis. For identity-centric analysis, this represents applications the identity can access. For resource-centric analysis, this represents applications that can access the resource. */
    applications?: OcsfApplication[],
    /** Describes usage activity and other metrics of an Identity i.e. AWS IAM User, GCP IAM Principal, etc. */
    identity_activity_metrics?: OcsfIdentityActivityMetrics,
    /** Describes analysis results of permissions, policies directly associated with an identity (user, role, or service account). This evaluates what permissions an identity has been granted through attached policies, which privileges are actively used versus unused, and identifies potential over-privileged access. Use this for identity-centric security assessments such as privilege audits, dormant permission discovery, and least-privilege compliance analysis. */
    permission_analysis_results?: OcsfPermissionAnalysisResult[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
    /** Details about the identity (user, role, service account, or other principal) that is the subject of the IAM analysis. This provides context about the identity being evaluated for security risks and access patterns. */
    user?: OcsfUser,
}


/**
 * An Incident Finding reports the creation, update, or closure of security incidents as a result of detections and/or analytics. <br><strong>Note: </strong><code>Incident Finding</code> implicitly includes the <code>incident</code> profile and it should be added to the <code>metadata.profiles[]</code> array.
 */
export interface OcsfIncidentFinding extends OcsfBaseEvent {
    /** The details of the user assigned to an Incident. */
    assignee?: OcsfUser,
    /** The details of the group assigned to an Incident. */
    assignee_group?: OcsfGroup,
    /** Additional user supplied details for updating or closing the incident. */
    comment?: string,
    /** The short description of the Incident. */
    desc?: string,
    /** A list of <code>finding_info</code> objects. */
    finding_info_list: OcsfFindingInfo[],
    /** The impact , normalized to the caption of the impact_id value. In the case of 'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the magnitude of harm that can be expected to result from the consequences of unauthorized disclosure, modification, destruction, or loss of information or information system availability. */
    impact_id?: number,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** A determination based on analytics as to whether a potential breach was found. */
    is_suspected_breach?: boolean,
    /** Additional notes related to the finding. Each note in the array can include a comment, the user who made the comment, the time when the note was created, and the time when the note was last modified (typically by the same user). Notes can be used to provide additional context, explanations, or observations by analysts related to the incident over time. */
    notes?: OcsfNote[],
    /** The priority, normalized to the caption of the priority_id value. In the case of 'Other', it is defined by the event source. */
    priority?: string,
    /** The normalized priority. Priority identifies the relative importance of the incident or finding. It is a measurement of urgency. */
    priority_id?: number,
    /** A Url link used to access the original incident. */
    src_url?: string,
    /** The linked ticket in the ticketing system. */
    ticket?: OcsfTicket,
    /** The associated ticket(s) in the ticketing system. Each ticket contains details like ticket ID, status, etc. */
    tickets?: OcsfTicket[],
    /** The Vendor Attributes object can be used to represent values of attributes populated by the Vendor/Finding Provider. It can help distinguish between the vendor-provided values and consumer-updated values, of key attributes like <code>severity_id</code>.<br>The original finding producer should not populate this object. It should be populated by consuming systems that support data mutability. */
    vendor_attributes?: OcsfVendorAttributes,
    /** The verdict assigned to an Incident finding. */
    verdict?: string,
    /** The normalized verdict of an Incident. */
    verdict_id?: number,
}


/**
 * Security Finding events describe findings, detections, anomalies, alerts and/or actions performed by security products
 */
export interface OcsfSecurityFinding extends OcsfBaseEvent {
    /** The analytic technique used to analyze and derive insights from the data or information that led to the finding or conclusion. */
    analytic?: OcsfAnalytic,
    /** The CIS Critical Security Controls is a list of top 20 actions and practices an organization’s security team can take on such that cyber attacks or malware, are minimized and prevented. */
    cis_csc?: OcsfCisCsc[],
    /** The compliance object provides context to compliance findings (e.g., a check against a specific regulatory or best practice framework such as CIS, NIST etc.) and contains compliance related details. */
    compliance?: OcsfCompliance,
    /** A list of data sources utilized in generation of the finding. */
    data_sources?: string[],
    /** The data the finding exposes to the analyst. */
    evidence?: string,
    /** The Finding object provides details about a finding/detection generated by a security tool. */
    finding: OcsfFinding,
    /** The impact , normalized to the caption of the impact_id value. In the case of 'Other', it is defined by the event source. */
    impact?: string,
    /** The normalized impact of the incident or finding. Per NIST, this is the magnitude of harm that can be expected to result from the consequences of unauthorized disclosure, modification, destruction, or loss of information or information system availability. */
    impact_id?: number,
    /** The impact as an integer value of the finding, valid range 0-100. */
    impact_score?: number,
    /** The Kill Chain provides a detailed description of each phase and its associated activities within the broader context of a cyber attack. */
    kill_chain?: OcsfKillChainPhase[],
    /** The NIST Cybersecurity Framework recommendations for managing the cybersecurity risk. */
    nist?: string[],
    /** The process object. */
    process?: OcsfProcess,
    /** Describes details about resources that were affected by the activity/event. */
    resources?: OcsfResourceDetails[],
    /** The normalized state of a security finding. */
    state?: string,
    /** The normalized state identifier of a security finding. */
    state_id: number,
    /** This object describes vulnerabilities reported in a security finding. */
    vulnerabilities?: OcsfVulnerability[],
}


/**
 * The Vulnerability Finding event is a notification about weakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source. Note: if the event producer is a security control, the <code>security_control</code> profile should be applied and its <code>attacks</code> information, if present, should be duplicated into the <code>finding_info</code> object. <br><strong>Note: </strong>If the Finding is an incident, i.e. requires incident workflow, also apply the <code>incident</code> profile  or aggregate this finding into an <code>Incident Finding</code>.
 */
export interface OcsfVulnerabilityFinding extends OcsfFindingEvent {
    /** Describes details about the resource that is affected by the vulnerability/vulnerabilities. */
    resource?: OcsfResourceDetails,
    /** This object describes vulnerabilities reported in a security finding. */
    vulnerabilities: OcsfVulnerability[],
}


/**
 * The Identity & Access Management event is a generic event that defines a set of attributes available in the access control events. As a generic event, it could be used to log events that are not otherwise defined by the IAM category.
 */
export interface OcsfIamEvent extends OcsfBaseEvent, OcsfAiOperationProfile {
    /** Details about the underlying HTTP request. */
    http_request?: OcsfHttpRequest,
    /** Details about the underlying HTTP response. */
    http_response?: OcsfHttpResponse,
    /** Details about the source of the IAM activity. */
    src_endpoint?: OcsfNetworkEndpoint,
}


/**
 * Account Change events report when specific user account management tasks are performed, such as a user/role being created or role assigned, changed, deleted, renamed, disabled, enabled, locked out or unlocked.
 */
export interface OcsfAccountChange extends OcsfIamEvent {
    /** Details about the authentication factors associated with the MFA Factor Enable/Disable activities. */
    auth_factors?: OcsfAuthFactor[],
    /** Details about the IAM policies associated with the Attach/Detach Policy activities. */
    policies?: OcsfPolicy[],
    /** The user that was a target of an activity. */
    user: OcsfUser,
    /** The result of the user account change. It should contain the new values of the changed attributes. */
    user_result?: OcsfUser,
}


/**
 * Authentication events report authentication session activities, including user attempts to log on or log off, regardless of success, as well as other key stages within the authentication process. These events are typically generated by authentication services, such as Kerberos, OIDC, or SAML, and may include information about the user, the authentication method used, and the status of the authentication attempt.
 */
export interface OcsfAuthentication extends OcsfIamEvent {
    /** The account switch method, normalized to the caption of the account_switch_type_id value. In the case of 'Other', it is defined by the event source. */
    account_switch_type?: string,
    /** The normalized identifier of the account switch method. */
    account_switch_type_id?: number,
    /** Describes a category of methods used for identity verification in an authentication attempt. */
    auth_factors?: OcsfAuthFactor[],
    /** The authentication protocol as defined by the caption of <code>auth_protocol_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authentication protocol used to create the user session. */
    auth_protocol_id?: number,
    /** The authentication token, ticket, or assertion, e.g. <code>Kerberos</code>, <code>OIDC</code>, <code>SAML</code>. */
    authentication_token?: OcsfAuthenticationToken,
    /** The certificate associated with the authentication or pre-authentication (Kerberos). */
    certificate?: OcsfCertificate,
    /** The endpoint to which the authentication was targeted. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** Indicates whether the credentials were passed in clear text.<p><b>Note:</b> True if the credentials were passed in a clear text protocol such as FTP or TELNET, or if Windows detected that a user's logon password was passed to the authentication package in clear text.</p> */
    is_cleartext?: boolean,
    /** Indicates whether Multi Factor Authentication was used during authentication. */
    is_mfa?: boolean,
    /** Indicates logon is from a device not seen before or a first time account logon. */
    is_new_logon?: boolean,
    /** The attempted authentication is over a remote connection. */
    is_remote?: boolean,
    /** The trusted process that validated the authentication credentials. */
    logon_process?: OcsfProcess,
    /** The logon type, normalized to the caption of the logon_type_id value. In the case of 'Other', it is defined by the event source. */
    logon_type?: string,
    /** The normalized logon type identifier. */
    logon_type_id?: number,
    /** The service or gateway to which the user or process is being authenticated */
    service?: OcsfService,
    /** The authenticated user or service session. */
    session?: OcsfSession,
    /** The subject (user/role or account) to authenticate. */
    user: OcsfUser,
}


/**
 * Authorize Session events report privileges, groups or roles assigned to a new user session, usually at login time.
 */
export interface OcsfAuthorizeSession extends OcsfIamEvent {
    /** The Endpoint for which the user session was targeted. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** Group that was assigned to the new user session. */
    group?: OcsfGroup,
    /** The list of groups assigned to the new user session. */
    groups?: OcsfGroup[],
    /** The list of roles assigned to the new user session. */
    iam_roles?: OcsfIamRole[],
    /** The list of sensitive privileges, assigned to the new user session. */
    privileges?: string[],
    /** The user session with the assigned privileges. */
    session?: OcsfSession,
    /** The user to which new privileges were assigned. */
    user: OcsfUser,
}


/**
 * Entity Management events report activity by a managed client, a micro service, or a user at a management console. The activity can be a create, read, update, and delete operation on a managed entity.
 */
export interface OcsfEntityManagement extends OcsfIamEvent {
    /** The list of requested access rights. */
    access_list?: string[],
    /** The access mask in a platform-native format. */
    access_mask?: number,
    /** The user provided comment about why the entity was changed. */
    comment?: string,
    /** The managed entity that is being acted upon. */
    entity: OcsfManagedEntity,
    /** The updated managed entity. */
    entity_result?: OcsfManagedEntity,
    /** The intended state of the <code>entity</code> after the update. On <code>Success</code>, represents the actual post-update state. */
    updated_entity?: OcsfManagedEntity,
}


/**
 * Group Management events report lifecycle management of a group, as well as privileges, roles, and resources associated with the group. There are two ways updates to the state of a group may be expressed: Using the <code>Update</code> activity, for example when updating multiple items at one time, the <code>updated_group</code> reflects the changes made to <code>group</code>. Using discrete activities, such as <code>Assign Privileges</code> the state change is expressed by the <code>privileges</code> attribute. Optionally, on success, the <code>updated_group</code> reflects the new state of the group.
 */
export interface OcsfGroupManagement extends OcsfIamEvent {
    /** Group that was the target of the event. */
    group: OcsfGroup,
    /** One or more roles assigned to or removed from a group. */
    iam_roles?: OcsfIamRole[],
    /** Details about the IAM policies associated with the Attach/Detach Policy activities. */
    policies?: OcsfPolicy[],
    /** A list of privileges assigned to the group. */
    privileges?: string[],
    /** Resource that the privileges give access to. */
    resource?: OcsfResourceDetails,
    /** Resources that the privileges, policies, and roles give access to. */
    resources?: OcsfResourceDetails[],
    /** A subgroup added to or removed from <code>group</code>. */
    subgroup?: OcsfGroup,
    /** The intended state of the <code>group</code> after the update. On <code>Success</code>, represents the actual post-update state. */
    updated_group?: OcsfGroup,
    /** A user that was added to or removed from <code>group</code>. */
    user?: OcsfUser,
    /** Users that were added to or removed from <code>group</code>. */
    users?: OcsfUser[],
}


/**
 * Role Management events report lifecycle management of a role, as well as privileges, policies, credentials, and resources associated with the role. There are two ways updates to the state of a role may be expressed: Using the <code>Update</code> activity, for example when updating multiple items at one time, the <code>updated_role</code> reflects the changes made to <code>iam_role</code>. Using discrete activities, such as <code>Assign Privileges</code> the state change is expressed by the <code>privileges</code> attribute. Optionally, on success, the <code>updated_role</code> reflects the new state of the role. Roles assigned or removed from users and groups are expressed by the <code>User Management</code> and <code>Group Management</code> classes.
 */
export interface OcsfRoleManagement extends OcsfIamEvent {
    /** The target role. */
    iam_role: OcsfIamRole,
    /** Details about the IAM policies associated with the Attach/Detach Policy activities. */
    policies?: OcsfPolicy[],
    /** A list of privileges assigned to or removed from <code>iam_role</code>. */
    privileges?: string[],
    /** Details about the programmatic credential (API keys, access tokens, certificates, etc) associated with the role. */
    programmatic_credentials?: OcsfProgrammaticCredential[],
    /** Resources assigned or removed from <code>iam_role</code>. */
    resources?: OcsfResourceDetails[],
    /** The intended state of the <code>iam_role</code> after the update. On <code>Success</code>, represents the actual post-update state. */
    updated_role?: OcsfIamRole,
}


/**
 * User Access Management events report management updates to a user's privileges.
 */
export interface OcsfUserAccess extends OcsfIamEvent {
    /** The role assigned to or removed from a user. */
    iam_role?: OcsfIamRole,
    /** List of privileges assigned to a user. */
    privileges?: string[],
    /** Resource that the privileges give access to. */
    resource?: OcsfResourceDetails,
    /** Resources that the privileges give access to. */
    resources?: OcsfResourceDetails[],
    /** User to which privileges were assigned. */
    user: OcsfUser,
}


/**
 * User Management events report lifecycle management of a user and account management tasks that are performed, such as a password change or reset, a user being created, updated, deleted, disabled, enabled, locked out or unlocked. There are two ways updates to the state of a user may be expressed: Using the <code>Update</code> activity, for example when updating multiple items at one time, the <code>updated_user</code> reflects the changes made to <code>user</code>. Using discrete activities, such as <code>Assign Privileges</code> the state change is expressed by the <code>privileges</code> attribute. Optionally, on successful changes, the <code>updated_user</code> reflects the new state of the user.
 */
export interface OcsfUserManagement extends OcsfIamEvent {
    /** Details about the authentication factors associated with the MFA Factor Enable/Disable activities. */
    auth_factors?: OcsfAuthFactor[],
    /** One or more roles assigned to or removed from a user. */
    iam_roles?: OcsfIamRole[],
    /** Details about the IAM policies associated with the Attach/Detach Policy activities. */
    policies?: OcsfPolicy[],
    /** Set of privileges assigned to a user. */
    privileges?: string[],
    /** Resources that the privileges, policies, and roles give access to. */
    resources?: OcsfResourceDetails[],
    /** The intended state of the <code>user</code> after the update. On <code>Success</code>, represents the actual post-update state. */
    updated_user?: OcsfUser,
    /** The user that was a target of an activity. */
    user: OcsfUser,
}


/**
 * Network event is a generic event that defines a set of attributes available in the Network category.
 */
export interface OcsfNetworkEvent extends OcsfBaseEvent, OcsfNetworkProxyProfile, OcsfLoadBalancerProfile, OcsfAiOperationProfile {
    /** The network application name identified by tools such as NBAR or App ID (e.g., youtube, facebook, webex). This represents a specific network application that uses standard protocols (such as https or quic) to deliver its service. */
    app_name?: string,
    /** The application-layer (Layer 7) protocol name identified by deep packet inspection or packet parsing (e.g., <code>https</code>, <code>quic</code>, <code>ssh</code>, <code>dns</code>), expressed as an IANA-registered service name from the IANA Service Name and Transport Protocol Port Number Registry.

<p><b>Note:</b> Port numbers alone are not always a reliable indicator of the actual application protocol in use.</p> */
    app_protocol_name?: string,
    /** The network connection information. */
    connection_info?: OcsfNetworkConnectionInfo,
    /** The cumulative (running total) network traffic aggregated from the start of a flow or session. Use when reporting: (1) total accumulated bytes/packets since flow initiation, (2) combined aggregation models where both incremental deltas and running totals are reported together (populate both <code>traffic</code> for the delta and this attribute for the cumulative total), or (3) final summary metrics when a long-lived connection closes. This represents the sum of all activity from flow start to the current observation, not a delta or point-in-time value. */
    cumulative_traffic?: OcsfNetworkTraffic,
    /** The responder (server) in a network connection. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** A list of the JA4+ network fingerprints. */
    ja4_fingerprint_list?: OcsfJa4Fingerprint[],
    /** The network endpoint that observes or inspects network traffic as a third-party system, used when the observer is neither the source nor the destination of the communication (when <code>observation_point_id</code> = 3). Examples include network taps, span ports, inline security devices, or packet capture systems that monitor traffic between other endpoints. */
    network_observation_point?: OcsfNetworkEndpoint,
    /** Indicates whether the source network endpoint, destination network endpoint, or neither served as the observation point for the activity. The value is normalized to the caption of the <code>observation_point_id</code>. */
    observation_point?: string,
    /** The normalized identifier of the observation point. The observation point identifier indicates whether the source network endpoint, destination network endpoint, or neither served as the observation point for the activity. */
    observation_point_id?: number,
    /** The list of packet objects describing captured network packets. */
    packet_list?: OcsfPacket[],
    /** The proxy (server) in a network connection. */
    proxy?: OcsfNetworkProxy,
    /** The initiator (client) of the network connection. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes. */
    tls?: OcsfTls,
    /** The network traffic for this observation period. Use when reporting: (1) delta values (bytes/packets transferred since the last observation), (2) instantaneous measurements at a specific point in time, or (3) standalone single-event metrics. This attribute represents a point-in-time measurement or incremental change, not a running total. For accumulated totals across multiple observations or the lifetime of a flow, use <code>cumulative_traffic</code> instead. */
    traffic?: OcsfNetworkTraffic,
}


/**
 * DHCP Activity events report MAC to IP assignment via DHCP from a client or server.
 */
export interface OcsfDhcpActivity extends OcsfNetworkEvent, OcsfCloudProfile {
    /** Indicates whether this is a lease/session renewal event. */
    is_renewal?: boolean,
    /** This represents the length of the DHCP lease in seconds. This is present in DHCP Ack events. */
    lease_dur?: number,
    /** The network relay that is associated with the event. */
    relay?: OcsfNetworkInterface,
    /** The unique identifier of the transaction. This is typically a random number generated from the client to associate a dhcp request/response pair. */
    transaction_uid?: string,
}


/**
 * DNS Activity events report DNS queries and answers as seen on the network.
 */
export interface OcsfDnsActivity extends OcsfNetworkEvent {
    /** The Domain Name System (DNS) answers. */
    answers?: OcsfDnsAnswer[],
    /** The DNS Authority section resource records. Contains NS records pointing to authoritative name servers, or a SOA record for negative responses (NXDOMAIN). */
    authority?: OcsfDnsResourceRecord[],
    /** The list of DNS message header flag IDs. For Query events, populated from the query header (RD, CD). For Response and Traffic events, populated from the response header, which is the complete and authoritative source as it echoes all client-set flags and adds server-set flags. */
    flag_ids?: number[],
    /** The list of DNS message header flags, normalized to the captions of the <code>flag_ids</code> values. */
    flags?: string[],
    /** The DNS opcode specifies the type of the query message. */
    opcode?: string,
    /** The DNS opcode ID specifies the normalized query message type as defined in RFC 5395. */
    opcode_id?: number,
    /** The Domain Name System (DNS) query. */
    query?: OcsfDnsQuery,
    /** The Additional section of the DNS query message sent by the client, containing supplementary resource records and an optional TSIG record. A DNS message has at most one TSIG record; for a transaction with both query and response, the query TSIG is in <code>query_additional.tsig</code> and the response TSIG is in <code>response_additional.tsig</code>. */
    query_additional?: OcsfDnsSection,
    /** The Domain Name System (DNS) query time. */
    query_time?: number,
    /** The Domain Name System (DNS) query time. */
    query_time_dt?: string,
    /** The DNS server response code, normalized to the caption of the rcode_id value. In the case of 'Other', it is defined by the event source. */
    rcode?: string,
    /** The normalized identifier of the DNS server response code. See RFC 6895. */
    rcode_id?: number,
    /** The Additional section of the DNS response message sent by the server, containing supplementary resource records and an optional TSIG record. A DNS message has at most one TSIG record; for a transaction with both query and response, the query TSIG is in <code>query_additional.tsig</code> and the response TSIG is in <code>response_additional.tsig</code>. */
    response_additional?: OcsfDnsSection,
    /** The Domain Name System (DNS) response time. */
    response_time?: number,
    /** The Domain Name System (DNS) response time. */
    response_time_dt?: string,
    /** The 16-bit DNS transaction identifier assigned by the client and echoed unchanged in the server response. This value is the same for both the query and response messages. */
    transaction_id?: number,
}


/**
 * Email Activity events report SMTP protocol and email activities including those with embedded URLs and files. See the <code>Email</code> object for details.
 */
export interface OcsfEmailActivity extends OcsfBaseEvent, OcsfAiOperationProfile {
    /** The attempt number for attempting to deliver the email. */
    attempt?: number,
    /** The initial connection response that a messaging server receives after it connects to an email server. */
    banner?: string,
    /** The command issued by the initiator (client), such as SMTP HELO or EHLO. */
    command?: string,
    /** The direction of the email, as defined by the <code>direction_id</code> value. */
    direction?: string,
    /** <p>The direction of the email relative to the scanning host or organization.</p>Email scanned at an internet gateway might be characterized as inbound to the organization from the Internet, outbound from the organization to the Internet, or internal within the organization. Email scanned at a workstation might be characterized as inbound to, or outbound from the workstation. */
    direction_id: number,
    /** The responder (server) receiving the email. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** The email object. */
    email: OcsfEmail,
    /** The SPF, DKIM and DMARC attributes of an email. */
    email_auth?: OcsfEmailAuth,
    /** The sender address from the transmission envelope. This reflects the actual sending party and may differ from the 'From' header in the message. */
    from?: string,
    /** The identifier that tracks a message that travels through multiple points of a messaging service. */
    message_trace_uid?: string,
    /** The Protocol Name specifies the email communication protocol, such as SMTP, IMAP, or POP3. */
    protocol_name?: string,
    /** The value of the SMTP HELO or EHLO command sent by the initiator (client). */
    smtp_hello?: string,
    /** The initiator (client) sending the email. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** The recipient address from the transmission envelope. This may differ from the 'To' header and represents where the message was actually delivered. */
    to?: string[],
}


/**
 * Email File Activity events report files within emails.
 */
export interface OcsfEmailFileActivity extends OcsfBaseEvent {
    /** The unique identifier of the email, used to correlate related email alert and activity events. */
    email_uid: string,
    /** The email file attachment. */
    file: OcsfFile,
}


/**
 * Email URL Activity events report URLs within an email.
 */
export interface OcsfEmailUrlActivity extends OcsfBaseEvent {
    /** The unique identifier of the email, used to correlate related email alert and activity events. */
    email_uid: string,
    /** The URL included in the email content. */
    url: OcsfUrl,
}


/**
 * File Transfer Protocol (FTP) Activity events report file transfers between a server and a client as seen on the network.
 */
export interface OcsfFtpActivity extends OcsfNetworkEvent {
    /** The list of return codes to the FTP command. */
    codes?: number[],
    /** The FTP command. */
    command?: string,
    /** The list of responses to the FTP command. */
    command_responses?: string[],
    /** The file that is the target of the FTP activity. */
    file?: OcsfFile,
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
export interface OcsfHttpActivity extends OcsfNetworkEvent, OcsfTraceProfile {
    /** The file that is the target of the HTTP activity. */
    file?: OcsfFile,
    /** The cookies object describes details about HTTP cookies */
    http_cookies?: OcsfHttpCookie[],
    /** The HTTP Request Object documents attributes of a request made to a web server. */
    http_request?: OcsfHttpRequest,
    /** The HTTP Response from a web server to a requester. */
    http_response?: OcsfHttpResponse,
    /** The Hypertext Transfer Protocol (HTTP) status code returned to the client. */
    http_status?: number,
}


/**
 * Network Activity events report network connection and traffic activity.
 */
export interface OcsfNetworkActivity extends OcsfNetworkEvent {
    /** The endpoint that initiated the network communication, normalized to the caption of <code>initiator_id</code>. In the case of <code>Other</code>, it is defined by the event source. */
    initiator?: string,
    /** The normalized identifier of the endpoint that initiated the network communication. Use this field to disambiguate source and destination roles in bi-directional or asymmetric flow scenarios. */
    initiator_id?: number,
    /** <code>true</code> denotes that <code>src_endpoint</code> and <code>dst_endpoint</code> correctly identify the initiator and responder respectively. <code>false</code> denotes that the event source has arbitrarily assigned one peer to <code>src_endpoint</code> and the other to <code>dst_endpoint</code>, in other words that initiator and responder are not being asserted. This can occur, for example, when the event source is a network appliance that has not observed the initiation of a given connection. In the absence of this attribute, interpretation of the initiator and responder is implementation-specific. */
    is_src_dst_assignment_known?: boolean,
    /** The URL details relevant to the network traffic. */
    url?: OcsfUrl,
}


/**
 * Network File Activity events report file activities traversing the network, including file storage services such as Box, MS OneDrive, or Google Drive.
 */
export interface OcsfNetworkFileActivity extends OcsfNetworkEvent {
    /** The share expiration time. */
    expiration_time?: number,
    /** The share expiration time. */
    expiration_time_dt?: string,
    /** The file that is the target of the activity. */
    file: OcsfFile,
}


/**
 * The Network Time Protocol (NTP) Activity events report instances of remote clients synchronizing their clocks with an NTP server, as observed on the network.
 */
export interface OcsfNtpActivity extends OcsfNetworkEvent {
    /** The total round-trip delay to the reference clock in milliseconds. */
    delay?: number,
    /** The dispersion in the NTP protocol is the estimated time error or uncertainty relative to the reference clock in milliseconds. */
    dispersion?: number,
    /** The NTP precision quantifies a clock's accuracy and stability in log2 seconds, as defined in RFC-5905. */
    precision?: number,
    /** The stratum level of the NTP server's time source, normalized to the caption of the stratum_id value. */
    stratum?: string,
    /** The normalized identifier of the stratum level of an NTP server's time source, as defined in RFC 5905. Levels range from 0 to 16, with lower numbers representing higher accuracy and greater proximity to the root clock. */
    stratum_id?: number,
    /** The version number of the NTP protocol. */
    version: string,
}


/**
 * Remote Desktop Protocol (RDP) Activity events report post-authentication remote client connections between clients and servers over the network.
 */
export interface OcsfRdpActivity extends OcsfNetworkEvent {
    /** A list of RDP capabilities. */
    capabilities?: string[],
    /** The list of observed certificates in an RDP TLS connection. */
    certificate_chain?: string[],
    /** The file that is the target of the RDP activity. */
    file?: OcsfFile,
    /** The client identifier cookie during client/server exchange. */
    identifier_cookie?: string,
    /** The keyboard detailed information. */
    keyboard_info?: OcsfKeyboardInfo,
    /** The Remote Desktop Protocol version. */
    protocol_ver?: string,
    /** The remote display affiliated with the event */
    remote_display?: OcsfDisplay,
    /** The client request in an RDP network connection. */
    request?: OcsfRequest,
    /** The server response in an RDP network connection. */
    response?: OcsfResponse,
    /** The target user associated with the RDP activity. */
    user?: OcsfUser,
}


/**
 * Server Message Block (SMB) Protocol Activity events report client/server connections sharing resources within the network.
 */
export interface OcsfSmbActivity extends OcsfNetworkEvent {
    /** The list of SMB dialects that the client speaks. */
    client_dialects?: string[],
    /** The command name (e.g. SMB2_COMMAND_CREATE, SMB1_COMMAND_WRITE_ANDX). */
    command?: string,
    /** The DCE/RPC object describes the remote procedure call system for distributed computing environments. */
    dce_rpc?: OcsfDceRpc,
    /** The negotiated protocol dialect. */
    dialect?: string,
    /** The file that is the target of the SMB activity. */
    file?: OcsfFile,
    /** Indicates how the file was opened (e.g. normal, delete on close). */
    open_type?: string,
    /** The server response in an SMB network connection. */
    response?: OcsfResponse,
    /** The SMB share name. */
    share?: string,
    /** The SMB share type, normalized to the caption of the share_type_id value. In the case of 'Other', it is defined by the event source. */
    share_type?: string,
    /** The normalized identifier of the SMB share type. */
    share_type_id?: number,
    /** The tree id is a unique SMB identifier which represents an open connection to a share. */
    tree_uid?: string,
}


/**
 * SSH Activity events report remote client connections to a server using the Secure Shell (SSH) Protocol.
 */
export interface OcsfSshActivity extends OcsfNetworkEvent {
    /** The SSH authentication type, normalized to the caption of 'auth_type_id'. In the case of 'Other', it is defined by the event source. */
    auth_type?: string,
    /** The normalized identifier of the SSH authentication type. */
    auth_type_id?: number,
    /** The Client HASSH fingerprinting object. */
    client_hassh?: OcsfHassh,
    /** The file that is the target of the SSH activity. */
    file?: OcsfFile,
    /** The Secure Shell Protocol version. */
    protocol_ver?: string,
    /** The Server HASSH fingerprinting object. */
    server_hassh?: OcsfHassh,
}


/**
 * Tunnel Activity events report secure tunnel establishment (such as VPN), teardowns, renewals, and other network tunnel specific actions.
 */
export interface OcsfTunnelActivity extends OcsfNetworkEvent {
    /** The networking protocol associated with the tunnel. E.g. <code>IPSec</code>, <code>SSL</code>, <code>GRE</code>. */
    protocol_name?: string,
    /** The session associated with the tunnel. */
    session?: OcsfSession,
    /** The information about the virtual tunnel interface, e.g. <code>utun0</code>. This is usually associated with the private (rfc-1918) ip of the tunnel. */
    tunnel_interface?: OcsfNetworkInterface,
    /** The type of tunnel configuration, normalized to the caption of the <code>tunnel_type_id</code> value, indicating the scope of traffic routed through the connection. Example: <code>Split Tunnel</code> or <code>Full Tunnel</code>. */
    tunnel_type?: string,
    /** The normalized identifier for the type of tunnel configuration, indicating the scope of traffic routed through the connection. Example: <code>1 (Split Tunnel)</code> or <code>2 (Full Tunnel)</code>. */
    tunnel_type_id?: number,
    /** The user associated with the tunnel activity. */
    user?: OcsfUser,
}


/**
 * Remediation Activity events report on attempts at remediating a compromised device or computer network.
 */
export interface OcsfRemediationActivity extends OcsfBaseEvent {
    /** The unique identifier of the remediation command that pertains to this event. */
    command_uid: string,
    /** The MITRE D3FEND™ Matrix Countermeasures associated with a remediation. */
    countermeasures?: OcsfD3fend[],
    /** Describes the recommended remediation steps to address identified issue(s). */
    remediation?: OcsfRemediation,
    /** The remediation scan that pertains to this event. */
    scan?: OcsfScan,
}


/**
 * File Remediation Activity events report on attempts at remediating files. Sub-techniques of countermeasures will include File, such as File Removal or Restore File.
 */
export interface OcsfFileRemediationActivity extends OcsfRemediationActivity {
    /** The file that pertains to the remediation event. */
    file: OcsfFile,
}


/**
 * Network Remediation Activity events report on attempts at remediating computer networks. Techniques and Sub-techniques of countermeasures will include Network, such as Network Isolation or Network Traffic Filtering.
 */
export interface OcsfNetworkRemediationActivity extends OcsfRemediationActivity {
    /** The network connection that pertains to the remediation event. */
    connection_info: OcsfNetworkConnectionInfo,
}


/**
 * Process Remediation Activity events report on attempts at remediating processes. Sub-techniques of countermeasures will include Process Eviction, such as Process Termination or Kernel-based Process Isolation.
 */
export interface OcsfProcessRemediationActivity extends OcsfRemediationActivity {
    /** The process that pertains to the remediation event. */
    process: OcsfProcess,
}


/**
 * The System Activity event is a generic event that defines a set of attributes available in the system activity events. As a generic event, it could be used to log events that are not otherwise defined by the System Activity category.
 */
export interface OcsfSystemEvent extends OcsfBaseEvent, OcsfAiOperationProfile {
}


/**
 * Clipboard Activity events report when a process performs an action on a clipboard.
 */
export interface OcsfClipboardActivity extends OcsfSystemEvent {
    /** The clipboard that is the target of the activity. */
    clipboard: OcsfClipboard,
    /** For a <code>Read</code> activity, this is the process which performed the <code>Write</code>. In other words, <code>actor.process</code> is the process performing the paste and <code>source_process</code> is the process that performed the copy. */
    source_process?: OcsfProcess,
}


/**
 * Device Power State Activity events report activities related to power state changes of a system.
 */
export interface OcsfDevicePowerStateActivity extends OcsfSystemEvent {
}


/**
 * Event Log Activity events report actions pertaining to the system's event logging service(s), such as disabling logging or clearing the log data.
 */
export interface OcsfEventLogActvity extends OcsfSystemEvent {
    /** The <p style='display:inline;color:red'>targeted</p> endpoint for the event log activity. */
    dst_endpoint?: OcsfNetworkEndpoint,
    /** The file <p style='display:inline;color:red'>targeted by</p> the activity. Example: <code>/var/log/audit.log</code> */
    file?: OcsfFile,
    /** The name of the event log <p style='display:inline;color:red'>targeted by</p> the activity. Example: Windows <code>Security</code>. */
    log_name?: string,
    /** The logging provider or logging service <p style='display:inline;color:red'>targeted by</p> the activity.<br />Example: <code>Microsoft-Windows-Security-Auditing</code>, <code>Auditd</code>, or <code>Syslog</code>. */
    log_provider?: string,
    /** The log type, normalized to the caption of the <code>log_type_id</code> value. In the case of 'Other', it is defined by the event source. */
    log_type?: string,
    /** The normalized log type identifier. */
    log_type_id?: number,
    /** The source endpoint for the event log activity. */
    src_endpoint?: OcsfNetworkEndpoint,
}


/**
 * File System Activity events report when a process performs an action on a file or folder.
 */
export interface OcsfFileActivity extends OcsfSystemEvent {
    /** The access mask in a platform-native format. */
    access_mask?: number,
    /** <p>The name or relative pathname of a sub-component of the data object, if applicable. </p>For example: <code>attachment.doc</code>, <code>attachment.zip/bad.doc</code>, or <code>part.mime/part.cab/part.uue/part.doc</code>. */
    component?: string,
    /** The network connection identifier. */
    connection_uid?: string,
    /** The original Windows mask that is required to create the object. */
    create_mask?: string,
    /** The file that is the target of the activity. */
    file: OcsfFile,
    /** File content differences used for change detection. For example, a common use case is to identify itemized changes within INI or configuration/property setting values. */
    file_diff?: string,
    /** The resulting file object when the activity was allowed and successful. */
    file_result?: OcsfFile,
}


/**
 * Kernel Activity events report when an process creates, reads, or deletes a kernel resource.
 */
export interface OcsfKernelActivity extends OcsfSystemEvent {
    /** The target kernel resource. */
    kernel: OcsfKernel,
}


/**
 * Kernel Extension events report when a driver/extension is loaded or unloaded into the kernel
 */
export interface OcsfKernelExtensionActivity extends OcsfSystemEvent {
    /** The driver that was loaded/unloaded into the kernel */
    driver: OcsfKernelDriver,
}


/**
 * Memory Activity events report when a process has memory allocated, read/modified, or other manipulation activities - such as a buffer overflow or turning off data execution protection (DEP).
 */
export interface OcsfMemoryActivity extends OcsfSystemEvent {
    /** The permissions that were granted to access memory. */
    actual_permissions?: number,
    /** The memory address that was access or requested. */
    base_address?: string,
    /** The process that had memory allocated, read/written, or had other manipulation activities performed on it. */
    process: OcsfProcess,
    /** The permissions mask that was requested to access memory. */
    requested_permissions?: number,
    /** The memory size that was access or requested. */
    size?: number,
}


/**
 * Module Activity events report when an endpoint process acts on a <code>module</code>.
 */
export interface OcsfModuleActivity extends OcsfSystemEvent {
    /** The module that was loaded, unloaded, or invoked. */
    module: OcsfModule,
}


/**
 * Peripheral Activity events log a system's interactions with external, connectable, and detachable hardware. These events provide visibility into the external devices connected to and used by a system.
 */
export interface OcsfPeripheralActivity extends OcsfSystemEvent {
    /** The peripheral device that is the subject of the activity. */
    peripheral_device: OcsfPeripheralDevice,
}


/**
 * Process Activity events report when a process launches, injects, opens or terminates another process, successful or otherwise.
 */
export interface OcsfProcessActivity extends OcsfSystemEvent {
    /** The permissions that were granted to the process in a platform-native format. */
    actual_permissions?: number,
    /** The exit code reported by a process when it terminates. The convention is that zero indicates success and any non-zero exit code indicates that some error occurred. */
    exit_code?: number,
    /** The process injection method, normalized to the caption of the injection_type_id value. In the case of 'Other', it is defined by the event source. */
    injection_type?: string,
    /** The normalized identifier of the process injection method. */
    injection_type_id?: number,
    /** The specific type of <code>Launch</code> activity, normalized to the caption of the <code>launch_type_id</code> value. In the case of <code>Other</code> it is defined by the event source. */
    launch_type?: string,
    /** The normalized identifier for the specific type of <code>Launch</code> activity. */
    launch_type_id?: number,
    /** The module that was injected by the actor process. */
    module?: OcsfModule,
    /** The process that was launched, injected into, opened, or terminated. */
    process: OcsfProcess,
    /** The permissions mask that was requested by the process. */
    requested_permissions?: number,
}


/**
 * Scheduled Job Activity events report activities related to scheduled jobs or tasks.
 */
export interface OcsfScheduledJobActivity extends OcsfSystemEvent {
    /** The object provides information about a scheduled job or a task. */
    job: OcsfJob,
    /** The intended state of the <code>job</code> after the update. On <code>Success</code>, represents the actual post-update state. */
    updated_job?: OcsfJob,
}


/**
 * Script Activity events report when a process executes a script.
 */
export interface OcsfScriptActivity extends OcsfSystemEvent {
    /** The script that was the target of the activity. */
    script: OcsfScript,
}


/**
 * The Unmanned Systems event is a generic event that defines a set of attributes available in the Unmanned Systems category.
 */
export interface OcsfUnmannedSystemsEvent extends OcsfBaseEvent {
    /** The network connection information. */
    connection_info?: OcsfNetworkConnectionInfo,
    /** The destination network endpoint of the Unmanned Aerial System (UAS), Counter Unmanned Aerial System (CUAS) platform, or other unmanned systems monitoring and/or sensing infrastructure. */
    dst_endpoint: OcsfNetworkEndpoint,
    /** The proxy (server) in a network connection. */
    proxy_endpoint?: OcsfNetworkProxy,
    /** The source network endpoint of the Unmanned Aerial System (UAS), Counter Unmanned Aerial System (CUAS) platform, or other unmanned systems monitoring and/or sensing infrastructure. */
    src_endpoint?: OcsfNetworkEndpoint,
    /** The Transport Layer Security (TLS) attributes. */
    tls?: OcsfTls,
    /** The network traffic refers to the amount of data moving across a network at a given point of time. Intended to be used alongside Network Connection. */
    traffic?: OcsfNetworkTraffic,
}


/**
 * Airborne Broadcast Activity events report the activity of any aircraft or unmanned system as reported and tracked by Automatic Dependent Surveillance - Broadcast (ADS-B) receivers. Based on the ADS-B standards described in Code of Federal Regulations (CFR) Title 14 Chapter I Subchapter F Part 91 and in other general Federal Aviation Administration (FAA) supplemental orders and guidance.
 */
export interface OcsfAirborneBroadcastActivity extends OcsfUnmannedSystemsEvent {
    /** The Aircraft object represents any aircraft or otherwise airborne asset such as an unmanned system, airplane, balloon, spacecraft, or otherwise. The Aircraft object is intended to normalized data captured or otherwise logged from active radar, passive radar, multi-spectral systems, or the Automatic Dependant Broadcast - Surveillance (ADS-B), and/or Mode S systems. */
    aircraft?: OcsfAircraft,
    /** The specific protocol associated with the ADS-B system. E.g. <code>ADS-B UAT</code> or <code>ADS-B ES</code>. */
    protocol_name?: string,
    /** Recent average RSSI (signal power) measured in dbFS. This value will always be negative, e.g., <code>-87.13</code>. */
    rssi?: number,
    /** The Unmanned Aerial System object describes the characteristics, Position Location Information (PLI), and other metadata of Unmanned Aerial Systems (UAS) and other unmanned and drone systems used in Remote ID. Remote ID is defined in the Standard Specification for Remote ID and Tracking (ASTM Designation: F3411-22a). */
    unmanned_aerial_system: OcsfUnmannedAerialSystem,
    /** The UAS Operating Area object describes details about a precise area of operations for a UAS flight or mission. */
    unmanned_system_operating_area?: OcsfUnmannedSystemOperatingArea,
    /** The human or machine operator of an Unmanned System. */
    unmanned_system_operator: OcsfUser,
}


/**
 * Drone Flights Activity events report the activity of Unmanned Aerial Systems (UAS), their Operators, and mission-planning and authorization metadata as reported by the UAS platforms themselves, by Counter-UAS (CUAS) systems, or other remote monitoring or sensing infrastructure. Based on the Remote ID defined in Standard Specification for Remote ID and Tracking (ASTM Designation: F3411-22a).
 */
export interface OcsfDroneFlightsActivity extends OcsfUnmannedSystemsEvent {
    /** The authentication type as defined by the caption of <code>auth_protocol_id</code>. In the case of 'Other', it is defined by the event source. */
    auth_protocol?: string,
    /** The normalized identifier of the authentication type used to authorize a flight plan or mission. */
    auth_protocol_id?: number,
    /** UA Classification - Allows a region to classify UAS in a regional specific manner. The format may differ from region to region. */
    classification?: string,
    /** This optional, free-text field enables the operator to describe the purpose of a flight, if so desired. */
    comment?: string,
    /** The networking protocol associated with the Remote ID device or beacon. E.g. <code>BLE</code>, <code>LTE</code>, <code>802.11</code>. */
    protocol_name?: string,
    /** The Unmanned Aerial System object describes the characteristics, Position Location Information (PLI), and other metadata of Unmanned Aerial Systems (UAS) and other unmanned and drone systems used in Remote ID. Remote ID is defined in the Standard Specification for Remote ID and Tracking (ASTM Designation: F3411-22a). */
    unmanned_aerial_system: OcsfUnmannedAerialSystem,
    /** The UAS Operating Area object describes details about a precise area of operations for a UAS flight or mission. */
    unmanned_system_operating_area?: OcsfUnmannedSystemOperatingArea,
    /** The human or machine operator of an Unmanned System. */
    unmanned_system_operator: OcsfUser,
}


/**
 * Prefetch Query events report information about Windows prefetch files.
 */
export interface OcsfWinPrefetchQuery extends OcsfDiscoveryResultEvent {
    /** The prefetch file last run time. */
    last_run_time?: number,
    /** The prefetch file last run time. */
    last_run_time_dt?: string,
    /** The name of the prefetch file that is the target of the query. */
    name: string,
    /** The prefetch file run count. */
    run_count?: number,
}


/**
 * Registry Key Activity events report when a process performs an action on a Windows registry key.
 */
export interface OcsfWinRegistryKeyActivity extends OcsfSystemEvent {
    /** The access mask in a platform-native format. */
    access_mask?: number,
    /** The original Windows mask that is required to create the object. */
    create_mask?: string,
    /** The Windows options needed to open a registry key. */
    open_mask?: number,
    /** The registry key before the mutation */
    prev_reg_key?: OcsfWinRegKey,
    /** The registry key. */
    reg_key: OcsfWinRegKey,
}


/**
 * Registry Key Query events report information about discovered Windows registry keys.
 */
export interface OcsfWinRegistryKeyQuery extends OcsfDiscoveryResultEvent {
    /** The registry key that pertains to the event. */
    reg_key: OcsfWinRegKey,
}


/**
 * Registry Value Activity events reports when a process performs an action on a Windows registry value.
 */
export interface OcsfWinRegistryValueActivity extends OcsfSystemEvent {
    /** The registry value before the mutation */
    prev_reg_value?: OcsfWinRegValue,
    /** The registry value. */
    reg_value: OcsfWinRegValue,
}


/**
 * Registry Value Query events report information about discovered Windows registry values.
 */
export interface OcsfWinRegistryValueQuery extends OcsfDiscoveryResultEvent {
    /** The registry value that pertains to the event. */
    reg_value: OcsfWinRegValue,
}


/**
 * Windows Resource Activity events report when a process accesses a Windows managed resource object, successful or otherwise.
 */
export interface OcsfWinResourceActivity extends OcsfSystemEvent {
    /** The Windows resource object that was accessed, such as a mutant or timer. */
    win_resource: OcsfWinResource,
}


/**
 * Windows Service Activity events report when a process interacts with the Service Control Manager.
 */
export interface OcsfWinServiceActivity extends OcsfSystemEvent {
    /** The Windows service before the mutation. */
    prev_win_service?: OcsfWinService,
    /** The current Windows service. On failed or unknown status of <code>Reconfigure</code> action may be populated with the intended state. */
    win_service: OcsfWinService,
}



