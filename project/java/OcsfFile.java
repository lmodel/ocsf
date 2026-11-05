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
  The File object represents the metadata associated with a file stored in a computer system. It encompasses information about the file itself, including its attributes, properties, and organizational details.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class OcsfFile extends OcsfEntity {

  private Integer accessedTime;
  private String accessedTimeDt;
  private OcsfUser accessor;
  private Integer attributes;
  private String companyName;
  private String confidentiality;
  private Integer confidentialityId;
  private Integer createdTime;
  private String createdTimeDt;
  private OcsfUser creator;
  private String desc;
  private OcsfDownloadInfo downloadInfo;
  private String driveType;
  private Integer driveTypeId;
  private OcsfEncryptionDetails encryptionDetails;
  private String ext;
  private List<OcsfFingerprint> hashes;
  private List<String> importedSymbols;
  private String internalName;
  private Boolean isDeleted;
  private Boolean isEncrypted;
  private Boolean isPublic;
  private Boolean isReadonly;
  private Boolean isSystem;
  private String mimeType;
  private Integer modifiedTime;
  private String modifiedTimeDt;
  private OcsfUser modifier;
  private OcsfUser owner;
  private String parentFolder;
  private String path;
  private OcsfProduct product;
  private String securityDescriptor;
  private OcsfDigitalSignature signature;
  private List<OcsfDigitalSignature> signatures;
  private Integer size;
  private String storageClass;
  private List<OcsfKeyValueObject> tags;
  private String type;
  private int typeId;
  private String uri;
  private OcsfUrl url;
  private String version;
  private String volume;
  private Object xattributes;
  private OcsfDataClassification dataClassification;
  private List<OcsfDataClassification> dataClassifications;


}