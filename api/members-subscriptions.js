import { GoogleSpreadsheet } from "google-spreadsheet";
import serviceAccountAuth from "../auth/serviceAccountAuth.js"; // adjust path

async function fetchGoogleSheetData() {
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID, serviceAccountAuth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  return rows.map(row => ({
    name: row._rawData[0],
    startSubscriptionDate: row._rawData[1],
    endSubscriptionDate: row._rawData[2],
    images: row._rawData.slice(3).filter(url => !!url),
  }));
}

export default async function handler(req, res) {
  try {
    const data = await fetchGoogleSheetData();
    console.log(`[✓] Google Sheets data fetched at ${new Date().toLocaleTimeString()}`);
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching Google Sheets data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
