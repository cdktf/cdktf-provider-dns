// https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/ns_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsRecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the record set. The `zone` argument will be appended to this value to create the full record path.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/ns_record_set#name NsRecordSet#name}
  */
  readonly name: string;
  /**
  * The nameservers this record set will point to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/ns_record_set#nameservers NsRecordSet#nameservers}
  */
  readonly nameservers: string[];
  /**
  * The TTL of the record set. Defaults to `3600`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/ns_record_set#ttl NsRecordSet#ttl}
  */
  readonly ttl?: number;
  /**
  * DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/ns_record_set#zone NsRecordSet#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/ns_record_set dns_ns_record_set}
*/
export class NsRecordSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dns_ns_record_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/resources/ns_record_set dns_ns_record_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: NsRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'dns_ns_record_set',
      terraformGeneratorMetadata: {
        providerName: 'dns',
        providerVersion: '3.3.2',
        providerVersionConstraint: '~> 3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._nameservers = config.nameservers;
    this._ttl = config.ttl;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nameservers - computed: false, optional: false, required: true
  private _nameservers?: string[]; 
  public get nameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('nameservers'));
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
