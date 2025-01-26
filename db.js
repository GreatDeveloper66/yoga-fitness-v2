import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const port = process.env.PORT || 5000;

const client =  new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
});

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
        return client.db(dbName); // Change to your desired database name
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}