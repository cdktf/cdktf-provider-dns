# `provider`

Refer to the Terraform Registory for docs: [`dns`](https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-dns.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsProvider <a name="DnsProvider" id="@cdktf/provider-dns.provider.DnsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs dns}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dns.provider.DnsProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_dns import provider

provider.DnsProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  update: DnsProviderUpdate = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.update">update</a></code> | <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a></code> | update block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#alias DnsProvider#alias}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-dns.provider.DnsProvider.Initializer.parameter.update"></a>

- *Type:* <a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>

update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#update DnsProvider#update}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-dns.provider.DnsProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-dns.provider.DnsProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dns.provider.DnsProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dns.provider.DnsProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-dns.provider.DnsProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-dns.provider.DnsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-dns.provider.DnsProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-dns.provider.DnsProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-dns.provider.DnsProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-dns.provider.DnsProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-dns.provider.DnsProvider.resetUpdate"></a>

```python
def reset_update() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-dns.provider.DnsProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_dns import provider

provider.DnsProvider.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.provider.DnsProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-dns.provider.DnsProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_dns import provider

provider.DnsProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.provider.DnsProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-dns.provider.DnsProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_dns import provider

provider.DnsProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dns.provider.DnsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.updateInput">update_input</a></code> | <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.update">update</a></code> | <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dns.provider.DnsProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-dns.provider.DnsProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dns.provider.DnsProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-dns.provider.DnsProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-dns.provider.DnsProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-dns.provider.DnsProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-dns.provider.DnsProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dns.provider.DnsProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-dns.provider.DnsProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-dns.provider.DnsProvider.property.updateInput"></a>

```python
update_input: DnsProviderUpdate
```

- *Type:* <a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-dns.provider.DnsProvider.property.update"></a>

```python
update: DnsProviderUpdate
```

- *Type:* <a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dns.provider.DnsProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsProviderConfig <a name="DnsProviderConfig" id="@cdktf/provider-dns.provider.DnsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.provider.DnsProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_dns import provider

provider.DnsProviderConfig(
  alias: str = None,
  update: DnsProviderUpdate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderConfig.property.update">update</a></code> | <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a></code> | update block. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-dns.provider.DnsProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#alias DnsProvider#alias}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-dns.provider.DnsProviderConfig.property.update"></a>

```python
update: DnsProviderUpdate
```

- *Type:* <a href="#@cdktf/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>

update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#update DnsProvider#update}

---

### DnsProviderUpdate <a name="DnsProviderUpdate" id="@cdktf/provider-dns.provider.DnsProviderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.provider.DnsProviderUpdate.Initializer"></a>

```python
from cdktf_cdktf_provider_dns import provider

provider.DnsProviderUpdate(
  server: str,
  gssapi: DnsProviderUpdateGssapi = None,
  key_algorithm: str = None,
  key_name: str = None,
  key_secret: str = None,
  port: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None,
  timeout: str = None,
  transport: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.server">server</a></code> | <code>str</code> | The hostname or IP address of the DNS server to send updates to. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.gssapi">gssapi</a></code> | <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdateGssapi">DnsProviderUpdateGssapi</a></code> | gssapi block. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Required if `key_name` is set. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.keyName">key_name</a></code> | <code>str</code> | The name of the TSIG key used to sign the DNS update messages. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.keySecret">key_secret</a></code> | <code>str</code> | Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The target UDP port on the server where updates are sent to. Defaults to `53`. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | How many times to retry on connection timeout. Defaults to `3`. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.timeout">timeout</a></code> | <code>str</code> | Timeout for DNS queries. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdate.property.transport">transport</a></code> | <code>str</code> | Transport to use for DNS queries. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.server"></a>

```python
server: str
```

- *Type:* str

The hostname or IP address of the DNS server to send updates to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#server DnsProvider#server}

---

##### `gssapi`<sup>Optional</sup> <a name="gssapi" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.gssapi"></a>

```python
gssapi: DnsProviderUpdateGssapi
```

- *Type:* <a href="#@cdktf/provider-dns.provider.DnsProviderUpdateGssapi">DnsProviderUpdateGssapi</a>

gssapi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#gssapi DnsProvider#gssapi}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Required if `key_name` is set.

When using TSIG authentication, the algorithm to use for HMAC. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha256` or `hmac-sha512`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#key_algorithm DnsProvider#key_algorithm}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The name of the TSIG key used to sign the DNS update messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#key_name DnsProvider#key_name}

---

##### `key_secret`<sup>Optional</sup> <a name="key_secret" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.keySecret"></a>

```python
key_secret: str
```

- *Type:* str

Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#key_secret DnsProvider#key_secret}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target UDP port on the server where updates are sent to. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#port DnsProvider#port}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times to retry on connection timeout. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#retries DnsProvider#retries}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Timeout for DNS queries.

Valid values are durations expressed as `500ms`, etc. or a plain number which is treated as whole seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#timeout DnsProvider#timeout}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-dns.provider.DnsProviderUpdate.property.transport"></a>

```python
transport: str
```

- *Type:* str

Transport to use for DNS queries.

Valid values are `udp`, `udp4`, `udp6`, `tcp`, `tcp4`, or `tcp6`. Any UDP transport will retry automatically with the equivalent TCP transport in the event of a truncated response. Defaults to `udp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#transport DnsProvider#transport}

---

### DnsProviderUpdateGssapi <a name="DnsProviderUpdateGssapi" id="@cdktf/provider-dns.provider.DnsProviderUpdateGssapi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.Initializer"></a>

```python
from cdktf_cdktf_provider_dns import provider

provider.DnsProviderUpdateGssapi(
  realm: str,
  keytab: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.realm">realm</a></code> | <code>str</code> | The Kerberos realm or Active Directory domain. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab">keytab</a></code> | <code>str</code> | This or `password` is required if `username` is set, not supported on Windows. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.password">password</a></code> | <code>str</code> | This or `keytab` is required if `username` is set. The matching password for `username`. |
| <code><a href="#@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.username">username</a></code> | <code>str</code> | The name of the user to authenticate as. If not set the current user session will be used. |

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.realm"></a>

```python
realm: str
```

- *Type:* str

The Kerberos realm or Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#realm DnsProvider#realm}

---

##### `keytab`<sup>Optional</sup> <a name="keytab" id="@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab"></a>

```python
keytab: str
```

- *Type:* str

This or `password` is required if `username` is set, not supported on Windows.

The path to a keytab file containing a key for `username`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#keytab DnsProvider#keytab}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.password"></a>

```python
password: str
```

- *Type:* str

This or `keytab` is required if `username` is set. The matching password for `username`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#password DnsProvider#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-dns.provider.DnsProviderUpdateGssapi.property.username"></a>

```python
username: str
```

- *Type:* str

The name of the user to authenticate as. If not set the current user session will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.1/docs#username DnsProvider#username}

---



