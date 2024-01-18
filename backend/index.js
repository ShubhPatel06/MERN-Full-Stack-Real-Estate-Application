import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
