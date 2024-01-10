// https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtrRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the record. The `zone` argument will be appended to this value to create the full record path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record#name PtrRecord#name}
  */
  readonly name?: string;
  /**
  * The canonical name this record will point to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record#ptr PtrRecord#ptr}
  */
  readonly ptr: string;
  /**
  * The TTL of the record. Defaults to `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record#ttl PtrRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record#zone PtrRecord#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record dns_ptr_record}
*/
export class PtrRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dns_ptr_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtrRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtrRecord to import
  * @param importFromId The id of the existing PtrRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtrRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dns_ptr_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.0/docs/resources/ptr_record dns_ptr_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtrRecordConfig
  */
  public constructor(scope: Construct, id: string, config: PtrRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'dns_ptr_record',
      terraformGeneratorMetadata: {
        providerName: 'dns',
        providerVersion: '3.4.0',
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
    this._ptr = config.ptr;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ptr - computed: false, optional: false, required: true
  private _ptr?: string; 
  public get ptr() {
    return this.getStringAttribute('ptr');
  }
  public set ptr(value: string) {
    this._ptr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
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
      ptr: cdktf.stringToTerraform(this._ptr),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptr: {
        value: cdktf.stringToHclTerraform(this._ptr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
