// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import { MongoClient, ServerApiVersion } from "mongodb";
// import path from "path";
// import { fileURLToPath } from "url";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// let db;

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");
//     db = client.db("yoga-fitness"); // Replace with your database name
//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error);
//   }
// }

// connectToDatabase();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // API Route Example
// app.post("/api/data", async (req, res) => {
//   const data = req.body;
//   if (db) {
//     try {
//       const result = await db.collection("data").insertOne(data);
//       res.status(201).send(result);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Failed to store data in MongoDB.");
//     }
//   } else {
//     res.status(500).send("Database not connected.");
//   }
// });

// // Serve React Frontend
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "client", "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// // Start the Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./db.js";
import { saveToFile } from "./fallback.js";
import path from "path";
import { fileURLToPath } from "url";


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

// Serve React Frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
