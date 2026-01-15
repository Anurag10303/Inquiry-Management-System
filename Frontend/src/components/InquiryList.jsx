export default function InquiryList({ inquiries, refresh }) {
  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    refresh();
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Inquiries</h3>

      {inquiries.map((inq) => (
        <div key={inq._id} style={row}>
          <div>
            <div style={name}>{inq.name}</div>
            <div style={text}>{inq.contact}</div>
            <div style={text}>Source: {inq.source}</div>
          </div>

          <select
            value={inq.status}
            onChange={(e) => updateStatus(inq._id, e.target.value)}
            style={statusSelect}
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Closed</option>
          </select>
        </div>
      ))}
    </div>
  );
}

/* ---------- styles ---------- */

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  padding: "12px",
  borderRadius: "6px",
  marginBottom: "10px",
  background: "#fafafa",
};

const name = {
  fontWeight: "600",
  fontSize: "15px",
  color: "#111",
};

const text = {
  fontSize: "14px",
  color: "#222",
};

const statusSelect = {
  padding: "6px",
  borderRadius: "4px",
  border: "1px solid #bbb",
};
