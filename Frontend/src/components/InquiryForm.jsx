import { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Alert,
  Typography,
} from "@mui/material";

export default function InquiryForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    source: "Website",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitInquiry = async () => {
    if (!form.name.trim() || !form.contact.trim()) {
      setError("Name and contact are required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setForm({ name: "", contact: "", source: "Website" });
      refresh();
    } catch {
      setError("Failed to submit inquiry. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add New Inquiry
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Email / Phone"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel>Source</InputLabel>
          <Select
            name="source"
            value={form.source}
            label="Source"
            onChange={handleChange}
          >
            <MenuItem value="Website">Website</MenuItem>
            <MenuItem value="WhatsApp">WhatsApp</MenuItem>
            <MenuItem value="Email">Email</MenuItem>
            <MenuItem value="Referral">Referral</MenuItem>
          </Select>
        </FormControl>

        {error && <Alert severity="error">{error}</Alert>}

        <Button
          variant="contained"
          onClick={submitInquiry}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Inquiry"}
        </Button>
      </Box>
    </Box>
  );
}
