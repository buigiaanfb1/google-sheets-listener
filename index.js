import "dotenv/config";
import { GoogleSpreadsheet } from "google-spreadsheet";
import serviceAccountAuth from "./auth/serviceAccountAuth.js";
import { SPREADSHEET_ID } from "./utils/constants.js";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
await doc.loadInfo();

const sheet = doc.sheetsByIndex[0];

const rows = await sheet.getRows();
console.log(rows.length); 
console.log(rows[1].get('Ảnh 3'));