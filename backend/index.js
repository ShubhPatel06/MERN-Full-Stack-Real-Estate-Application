import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
