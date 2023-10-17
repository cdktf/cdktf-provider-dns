// https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/data-sources/cname_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnsCnameRecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host to look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/data-sources/cname_record_set#host DataDnsCnameRecordSet#host}
  */
  readonly host: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/data-sources/cname_record_set dns_cname_record_set}
*/
export class DataDnsCnameRecordSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dns_cname_record_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnsCnameRecordSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnsCnameRecordSet to import
  * @param importFromId The id of the existing DataDnsCnameRecordSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/data-sources/cname_record_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnsCnameRecordSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dns_cname_record_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/dns/3.3.2/docs/data-sources/cname_record_set dns_cname_record_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnsCnameRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnsCnameRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'dns_cname_record_set',
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
    this._host = config.host;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
    };
  }
}
