// models/inquiry.model.js
import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  source: {
    type: String,
    enum: ["Website", "WhatsApp", "Email", "Referral"],
    required: true,
  },
  status: {
    type: String,
    enum: ["New", "Contacted", "Closed"],
    default: "New",
  },
}, { timestamps: true });

export default mongoose.model("Inquiry", inquirySchema);
