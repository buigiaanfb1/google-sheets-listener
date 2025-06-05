import { GoogleSpreadsheet } from "google-spreadsheet";
import serviceAccountAuth from "../auth/serviceAccountAuth";
import { SPREADSHEET_ID } from "../utils/constants";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);


const permissions = await doc.listPermissions();
console.log(permissions);

await doc.share("anbui.dev@gmail.com", { role: "writer" });
