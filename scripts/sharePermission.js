import { GoogleSpreadsheet } from "google-spreadsheet";
import serviceAccountAuth from "../auth/serviceAccountAuth";

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID, serviceAccountAuth);


const permissions = await doc.listPermissions();
console.log(permissions);

await doc.share("anbui.dev@gmail.com", { role: "writer" });
