# `dns_cname_record`

Refer to the Terraform Registory for docs: [`dns_cname_record`](https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record).

# `cnameRecord` Submodule <a name="`cnameRecord` Submodule" id="@cdktf/provider-dns.cnameRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CnameRecord <a name="CnameRecord" id="@cdktf/provider-dns.cnameRecord.CnameRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record dns_cname_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/cnamerecord"

cnamerecord.NewCnameRecord(scope Construct, id *string, config CnameRecordConfig) CnameRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig">CnameRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig">CnameRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dns.cnameRecord.CnameRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dns.cnameRecord.CnameRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dns.cnameRecord.CnameRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-dns.cnameRecord.CnameRecord.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/cnamerecord"

cnamerecord.CnameRecord_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/cnamerecord"

cnamerecord.CnameRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/cnamerecord"

cnamerecord.CnameRecord_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.cnameInput">CnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CnameInput`<sup>Optional</sup> <a name="CnameInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.cnameInput"></a>

```go
func CnameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CnameRecordConfig <a name="CnameRecordConfig" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/cnamerecord"

&cnamerecord.CnameRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cname: *string,
	Name: *string,
	Zone: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.cname">Cname</a></code> | <code>*string</code> | The canonical name this record will point to. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.name">Name</a></code> | <code>*string</code> | The name of the record. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.zone">Zone</a></code> | <code>*string</code> | DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.cname"></a>

```go
Cname *string
```

- *Type:* *string

The canonical name this record will point to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#cname CnameRecord#cname}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the record.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#name CnameRecord#name}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#zone CnameRecord#zone}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#ttl CnameRecord#ttl}

---



