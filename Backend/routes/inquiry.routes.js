// routes/inquiry.routes.js
import express from "express";
import { addInquiry, getInquiries, updateStatus } from "../controllers/inquiry.controller.js";

const router = express.Router();

router.post("/", addInquiry);
router.get("/", getInquiries);
router.patch("/:id", updateStatus);

export default router;
