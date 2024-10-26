const db = require('../database/db');
import moment from 'moment';
import { ParameterModel } from '../models/ParameterModel';
     
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

export async function getAllParameters() {
     try {
       const result = await db.query('SELECT * FROM parameters');
       return (result.rows);
     } catch (err) {
       return ('Internal Server Error');
     }
}

export async function insertParameter(name: String, code: String) {
    const guid = uuidv4();
    const date = moment().format('YYYY-MM-DD');
     try {
       const result = await db.query(`INSERT INTO parameters (id, name, code, createddate, updateddate) VALUES ('${guid}', '${name}', '${code}', '${date}', '${date}');`);
       console.log(result);
     } catch (err) {
       return ('Internal Server Error');
     }
}

export async function updateParameter(item: ParameterModel) {
    const date = moment().format('YYYY-MM-DD');
     try {
       const result = await db.query(`UPDATE parameters SET  name='${item.name}', code='${item.code}', updateddate='${date}' WHERE id = '${item.id}';`);
       return(result.status);
     } catch (err) {
       return ('Internal Server Error');
     }
}

export async function deleteParameter(id: String) {
     try {
       const result = await db.query(`DELETE FROM parameters WHERE id='${id}'`);
       return(result.status);
     } catch (err) {
       return ('Internal Server Error');
     }
}
   