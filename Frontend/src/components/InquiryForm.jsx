import { useState } from "react";

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

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setForm({ name: "", contact: "", source: "Website" });
      refresh();
    } catch (err) {
      setError("Failed to submit inquiry. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={card}>
      <h3>Add New Inquiry</h3>

      <div style={field}>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          style={input}
        />
      </div>

      <div style={field}>
        <label>Email / Phone</label>
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          style={input}
        />
      </div>

      <div style={field}>
        <label>Source</label>
        <select
          name="source"
          value={form.source}
          onChange={handleChange}
          style={input}
        >
          <option>Website</option>
          <option>WhatsApp</option>
          <option>Email</option>
          <option>Referral</option>
        </select>
      </div>

      {error && <p style={errorText}>{error}</p>}

      <button
        onClick={submitInquiry}
        disabled={loading}
        style={{
          ...button,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Submitting..." : "Add Inquiry"}
      </button>
    </div>
  );
}

/* ---------- styles ---------- */

const card = {
  border: "1px solid #ddd",
  padding: "16px",
  borderRadius: "6px",
  marginBottom: "20px",
};

const field = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
};

const input = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const button = {
  marginTop: "10px",
  padding: "8px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "4px",
};

const errorText = {
  color: "red",
  fontSize: "13px",
  marginBottom: "8px",
};
