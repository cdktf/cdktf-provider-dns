/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#alias DnsProvider#alias}
  */
  readonly alias?: string;
  /**
  * update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#update DnsProvider#update}
  */
  readonly update?: DnsProviderUpdate[] | cdktf.IResolvable;
}
export interface DnsProviderUpdateGssapi {
  /**
  * This or `password` is required if `username` is set, not supported on Windows. The path to a keytab file containing a key for `username`. Value can also be sourced from the DNS_UPDATE_KEYTAB environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#keytab DnsProvider#keytab}
  */
  readonly keytab?: string;
  /**
  * This or `keytab` is required if `username` is set. The matching password for `username`. Value can also be sourced from the DNS_UPDATE_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#password DnsProvider#password}
  */
  readonly password?: string;
  /**
  * The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#realm DnsProvider#realm}
  */
  readonly realm?: string;
  /**
  * The name of the user to authenticate as. If not set the current user session will be used. Value can also be sourced from the DNS_UPDATE_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#username DnsProvider#username}
  */
  readonly username?: string;
}

export function dnsProviderUpdateGssapiToTerraform(struct?: DnsProviderUpdateGssapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keytab: cdktf.stringToTerraform(struct!.keytab),
    password: cdktf.stringToTerraform(struct!.password),
    realm: cdktf.stringToTerraform(struct!.realm),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface DnsProviderUpdate {
  /**
  * Required if `key_name` is set. When using TSIG authentication, the algorithm to use for HMAC. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha256` or `hmac-sha512`. Value can also be sourced from the DNS_UPDATE_KEYALGORITHM environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#key_algorithm DnsProvider#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * The name of the TSIG key used to sign the DNS update messages. Value can also be sourced from the DNS_UPDATE_KEYNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#key_name DnsProvider#key_name}
  */
  readonly keyName?: string;
  /**
  * Required if `key_name` is set
  * A Base64-encoded string containing the shared secret to be used for TSIG. Value can also be sourced from the DNS_UPDATE_KEYSECRET environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#key_secret DnsProvider#key_secret}
  */
  readonly keySecret?: string;
  /**
  * The target UDP port on the server where updates are sent to. Defaults to `53`. Value can also be sourced from the DNS_UPDATE_PORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#port DnsProvider#port}
  */
  readonly port?: number;
  /**
  * How many times to retry on connection timeout. Defaults to `3`. Value can also be sourced from the DNS_UPDATE_RETRIES environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#retries DnsProvider#retries}
  */
  readonly retries?: number;
  /**
  * The hostname or IP address of the DNS server to send updates to. Value can also be sourced from the DNS_UPDATE_SERVER environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#server DnsProvider#server}
  */
  readonly server?: string;
  /**
  * Timeout for DNS queries. Valid values are durations expressed as `500ms`, etc. or a plain number which is treated as whole seconds. Value can also be sourced from the DNS_UPDATE_TIMEOUT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#timeout DnsProvider#timeout}
  */
  readonly timeout?: string;
  /**
  * Transport to use for DNS queries. Valid values are `udp`, `udp4`, `udp6`, `tcp`, `tcp4`, or `tcp6`. Any UDP transport will retry automatically with the equivalent TCP transport in the event of a truncated response. Defaults to `udp`. Value can also be sourced from the DNS_UPDATE_TRANSPORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#transport DnsProvider#transport}
  */
  readonly transport?: string;
  /**
  * gssapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs#gssapi DnsProvider#gssapi}
  */
  readonly gssapi?: DnsProviderUpdateGssapi[] | cdktf.IResolvable;
}

export function dnsProviderUpdateToTerraform(struct?: DnsProviderUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_secret: cdktf.stringToTerraform(struct!.keySecret),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    server: cdktf.stringToTerraform(struct!.server),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    transport: cdktf.stringToTerraform(struct!.transport),
    gssapi: cdktf.listMapper(dnsProviderUpdateGssapiToTerraform, true)(struct!.gssapi),
  }
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs dns}
*/
export class DnsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dns";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dns',
      terraformGeneratorMetadata: {
        providerName: 'dns',
        providerVersion: '3.3.2',
        providerVersionConstraint: '~> 3.2'
      },
      terraformProviderSource: 'dns'
    });
    this._alias = config.alias;
    this._update = config.update;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // update - computed: false, optional: true, required: false
  private _update?: DnsProviderUpdate[] | cdktf.IResolvable; 
  public get update() {
    return this._update;
  }
  public set update(value: DnsProviderUpdate[] | cdktf.IResolvable | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      update: cdktf.listMapper(dnsProviderUpdateToTerraform, true)(this._update),
    };
  }
}
