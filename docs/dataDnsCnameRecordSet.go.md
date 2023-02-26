# `dataDnsCnameRecordSet` Submodule <a name="`dataDnsCnameRecordSet` Submodule" id="@cdktf/provider-dns.dataDnsCnameRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsCnameRecordSet <a name="DataDnsCnameRecordSet" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/dns/d/cname_record_set dns_cname_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/datadnscnamerecordset"

datadnscnamerecordset.NewDataDnsCnameRecordSet(scope Construct, id *string, config DataDnsCnameRecordSetConfig) DataDnsCnameRecordSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig">DataDnsCnameRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig">DataDnsCnameRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/datadnscnamerecordset"

datadnscnamerecordset.DataDnsCnameRecordSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/datadnscnamerecordset"

datadnscnamerecordset.DataDnsCnameRecordSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/datadnscnamerecordset"

datadnscnamerecordset.DataDnsCnameRecordSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsCnameRecordSetConfig <a name="DataDnsCnameRecordSetConfig" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/datadnscnamerecordset"

&datadnscnamerecordset.DataDnsCnameRecordSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Host: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/cname_record_set#host DataDnsCnameRecordSet#host}. |
| <code><a href="#@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/cname_record_set#id DataDnsCnameRecordSet#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/cname_record_set#host DataDnsCnameRecordSet#host}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-dns.dataDnsCnameRecordSet.DataDnsCnameRecordSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/cname_record_set#id DataDnsCnameRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


