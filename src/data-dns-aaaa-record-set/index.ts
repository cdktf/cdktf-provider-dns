// https://www.terraform.io/docs/providers/dns/d/aaaa_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnsAaaaRecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/aaaa_record_set#host DataDnsAaaaRecordSet#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dns/d/aaaa_record_set#id DataDnsAaaaRecordSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/dns/d/aaaa_record_set dns_aaaa_record_set}
*/
export class DataDnsAaaaRecordSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dns_aaaa_record_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/dns/d/aaaa_record_set dns_aaaa_record_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnsAaaaRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnsAaaaRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'dns_aaaa_record_set',
      terraformGeneratorMetadata: {
        providerName: 'dns',
        providerVersion: '3.2.4',
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
    this._host = config.host;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addrs - computed: true, optional: false, required: false
  public get addrs() {
    return this.getListAttribute('addrs');
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
