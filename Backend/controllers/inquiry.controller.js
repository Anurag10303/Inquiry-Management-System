// controllers/inquiry.controller.js
import Inquiry from "../models/inquiry.model.js";

export const addInquiry = async (req, res) => {
  const { name, contact, source } = req.body;

  if (!name || !contact) {
    return res.status(400).json({ message: "Name and contact required" });
  }

  const inquiry = await Inquiry.create({ name, contact, source });
  res.status(201).json(inquiry);
};

export const getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  res.json(inquiries);
};

export const updateStatus = async (req, res) => {
  const { status } = req.body;

  const updated = await Inquiry.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(updated);
};
