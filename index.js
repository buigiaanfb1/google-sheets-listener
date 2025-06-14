// server.js
import "dotenv/config";
import express from "express";

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
