# `dns_cname_record`

Refer to the Terraform Registory for docs: [`dns_cname_record`](https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record).

# `cnameRecord` Submodule <a name="`cnameRecord` Submodule" id="@cdktf/provider-dns.cnameRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CnameRecord <a name="CnameRecord" id="@cdktf/provider-dns.cnameRecord.CnameRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record dns_cname_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer"></a>

```typescript
import { cnameRecord } from '@cdktf/provider-dns'

new cnameRecord.CnameRecord(scope: Construct, id: string, config: CnameRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig">CnameRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig">CnameRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dns.cnameRecord.CnameRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dns.cnameRecord.CnameRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dns.cnameRecord.CnameRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dns.cnameRecord.CnameRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-dns.cnameRecord.CnameRecord.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isConstruct"></a>

```typescript
import { cnameRecord } from '@cdktf/provider-dns'

cnameRecord.CnameRecord.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformElement"></a>

```typescript
import { cnameRecord } from '@cdktf/provider-dns'

cnameRecord.CnameRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformResource"></a>

```typescript
import { cnameRecord } from '@cdktf/provider-dns'

cnameRecord.CnameRecord.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.cnameRecord.CnameRecord.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.cnameInput">cnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `cnameInput`<sup>Optional</sup> <a name="cnameInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.cnameInput"></a>

```typescript
public readonly cnameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dns.cnameRecord.CnameRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CnameRecordConfig <a name="CnameRecordConfig" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.Initializer"></a>

```typescript
import { cnameRecord } from '@cdktf/provider-dns'

const cnameRecordConfig: cnameRecord.CnameRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.cname">cname</a></code> | <code>string</code> | The canonical name this record will point to. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.name">name</a></code> | <code>string</code> | The name of the record. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.zone">zone</a></code> | <code>string</code> | DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.ttl">ttl</a></code> | <code>number</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

The canonical name this record will point to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#cname CnameRecord#cname}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the record.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#name CnameRecord#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#zone CnameRecord#zone}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-dns.cnameRecord.CnameRecordConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/cname_record#ttl CnameRecord#ttl}

---



