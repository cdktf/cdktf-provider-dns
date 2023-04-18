# `data_dns_srv_record_set`

Refer to the Terraform Registory for docs: [`data_dns_srv_record_set`](https://www.terraform.io/docs/providers/dns/d/srv_record_set).

# `dataDnsSrvRecordSet` Submodule <a name="`dataDnsSrvRecordSet` Submodule" id="@cdktf/provider-dns.dataDnsSrvRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsSrvRecordSet <a name="DataDnsSrvRecordSet" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/dns/d/srv_record_set dns_srv_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

new dataDnsSrvRecordSet.DataDnsSrvRecordSet(scope: Construct, id: string, config: DataDnsSrvRecordSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig">DataDnsSrvRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig">DataDnsSrvRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.srv">srv</a></code> | <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList">DataDnsSrvRecordSetSrvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `srv`<sup>Required</sup> <a name="srv" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.srv"></a>

```typescript
public readonly srv: DataDnsSrvRecordSetSrvList;
```

- *Type:* <a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList">DataDnsSrvRecordSetSrvList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsSrvRecordSetConfig <a name="DataDnsSrvRecordSetConfig" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.Initializer"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

const dataDnsSrvRecordSetConfig: dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/srv_record_set#service DataDnsSrvRecordSet#service}. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/srv_record_set#id DataDnsSrvRecordSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/srv_record_set#service DataDnsSrvRecordSet#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/srv_record_set#id DataDnsSrvRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDnsSrvRecordSetSrv <a name="DataDnsSrvRecordSetSrv" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv.Initializer"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

const dataDnsSrvRecordSetSrv: dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDnsSrvRecordSetSrvList <a name="DataDnsSrvRecordSetSrvList" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

new dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get"></a>

```typescript
public get(index: number): DataDnsSrvRecordSetSrvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDnsSrvRecordSetSrvOutputReference <a name="DataDnsSrvRecordSetSrvOutputReference" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer"></a>

```typescript
import { dataDnsSrvRecordSet } from '@cdktf/provider-dns'

new dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv">DataDnsSrvRecordSetSrv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDnsSrvRecordSetSrv;
```

- *Type:* <a href="#@cdktf/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv">DataDnsSrvRecordSetSrv</a>

---



