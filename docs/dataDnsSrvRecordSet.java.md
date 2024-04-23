# `dataDnsSrvRecordSet` Submodule <a name="`dataDnsSrvRecordSet` Submodule" id="@cdktf/provider-dns.dataDnsSrvRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsSrvRecordSet <a name="DataDnsSrvRecordSet" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.1/docs/data-sources/srv_record_set dns_srv_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSet;

DataDnsSrvRecordSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .service(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Service to look up. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Service to look up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.1/docs/data-sources/srv_record_set#service DataDnsSrvRecordSet#service}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDnsSrvRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSet;

DataDnsSrvRecordSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSet;

DataDnsSrvRecordSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSet;

DataDnsSrvRecordSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSet;

DataDnsSrvRecordSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDnsSrvRecordSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDnsSrvRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDnsSrvRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDnsSrvRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.1/docs/data-sources/srv_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDnsSrvRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.srv">srv</a></code> | <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList">DataDnsSrvRecordSetSrvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `srv`<sup>Required</sup> <a name="srv" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.srv"></a>

```java
public DataDnsSrvRecordSetSrvList getSrv();
```

- *Type:* <a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList">DataDnsSrvRecordSetSrvList</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsSrvRecordSetConfig <a name="DataDnsSrvRecordSetConfig" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSetConfig;

DataDnsSrvRecordSetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.service">service</a></code> | <code>java.lang.String</code> | Service to look up. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Service to look up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.1/docs/data-sources/srv_record_set#service DataDnsSrvRecordSet#service}

---

### DataDnsSrvRecordSetSrv <a name="DataDnsSrvRecordSetSrv" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSetSrv;

DataDnsSrvRecordSetSrv.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDnsSrvRecordSetSrvList <a name="DataDnsSrvRecordSetSrvList" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSetSrvList;

new DataDnsSrvRecordSetSrvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get"></a>

```java
public DataDnsSrvRecordSetSrvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDnsSrvRecordSetSrvOutputReference <a name="DataDnsSrvRecordSetSrvOutputReference" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.dns.data_dns_srv_record_set.DataDnsSrvRecordSetSrvOutputReference;

new DataDnsSrvRecordSetSrvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv">DataDnsSrvRecordSetSrv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.internalValue"></a>

```java
public DataDnsSrvRecordSetSrv getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv">DataDnsSrvRecordSetSrv</a>

---



