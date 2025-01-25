import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./db.js";
import { saveToFile } from "./fallback.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let db;
connectToDatabase()
  .then((database) => (db = database))
  .catch(() => console.log("Using fallback storage"));

app.post("/api/data", async (req, res) => {
  const data = req.body;
  if (db) {
    try {
      const collection = db.collection("data");
      const result = await collection.insertOne(data);
      res.status(201).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to store data in MongoDB.");
    }
  } else {
    saveToFile(data);
    res.status(201).send("Data saved to fallback file.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
