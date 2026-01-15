import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import inquiryRoutes from "./routes/inquiry.routes.js";

dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

/* ---------- DATABASE ---------- */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB connection error", err));

/* ---------- ROUTES ---------- */
app.use("/api/inquiries", inquiryRoutes);

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
