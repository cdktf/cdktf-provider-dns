# `dataDnsTxtRecordSet` Submodule <a name="`dataDnsTxtRecordSet` Submodule" id="@cdktf/provider-dns.dataDnsTxtRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsTxtRecordSet <a name="DataDnsTxtRecordSet" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/data-sources/txt_record_set dns_txt_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/v9/datadnstxtrecordset"

datadnstxtrecordset.NewDataDnsTxtRecordSet(scope Construct, id *string, config DataDnsTxtRecordSetConfig) DataDnsTxtRecordSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig">DataDnsTxtRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig">DataDnsTxtRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDnsTxtRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/v9/datadnstxtrecordset"

datadnstxtrecordset.DataDnsTxtRecordSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/v9/datadnstxtrecordset"

datadnstxtrecordset.DataDnsTxtRecordSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/v9/datadnstxtrecordset"

datadnstxtrecordset.DataDnsTxtRecordSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/v9/datadnstxtrecordset"

datadnstxtrecordset.DataDnsTxtRecordSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDnsTxtRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDnsTxtRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDnsTxtRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/data-sources/txt_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDnsTxtRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.record">Record</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.records">Records</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.host">Host</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Record`<sup>Required</sup> <a name="Record" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.record"></a>

```go
func Record() *string
```

- *Type:* *string

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.records"></a>

```go
func Records() *[]*string
```

- *Type:* *[]*string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsTxtRecordSetConfig <a name="DataDnsTxtRecordSetConfig" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-dns-go/dns/v9/datadnstxtrecordset"

&datadnstxtrecordset.DataDnsTxtRecordSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Host: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.host">Host</a></code> | <code>*string</code> | Host to look up. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-dns.dataDnsTxtRecordSet.DataDnsTxtRecordSetConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host to look up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/data-sources/txt_record_set#host DataDnsTxtRecordSet#host}

---



