export class ParameterModel
{
    id?: String;
    name: boolean;
    code: String;
    createddate?: Date;
    updateddate?: Date;
  
    constructor(id: String, name: boolean, code: String, createddate: Date, updateddate: Date) {
      this.id = id;
      this.name = name;
      this.code = code;
      this.createddate = createddate;
      this.updateddate = updateddate;
    }

}