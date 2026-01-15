import { useEffect, useState } from "react";
import InquiryForm from "./components/InquiryForm";
import InquiryList from "./components/InquiryList";

/* ---------- Updated Styles ---------- */

const pageStyle = {
  minHeight: "100vh",
  width: "100%",
  background: "#f4f6f8",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // This centers the content horizontally
};

const headerStyle = {
  width: "100%",
  padding: "30px 0",
  textAlign: "center", // Centers the title text
  background: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  marginBottom: "40px",
};

const contentContainer = {
  width: "90%",
  maxWidth: "900px", // Limits width for readability, but keeps it centered and prominent
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const sectionWrapper = {
  background: "#ffffff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

function App() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/inquiries");
      const data = await res.json();
      setInquiries(data);
    } catch (err) {
      console.error("Failed to fetch inquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: "32px", color: "#111" }}>
          Inquiry Management System
        </h1>
        <p style={{ marginTop: "8px", color: "#666" }}>
          Internal tool to manage inquiries from multiple sources
        </p>
      </header>

      <div style={contentContainer}>
        {/* Form Section */}
        <div style={sectionWrapper}>
          <InquiryForm refresh={fetchInquiries} />
        </div>

        {/* List Section */}
        <div>
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading inquiries...</p>
          ) : inquiries.length === 0 ? (
            <p style={{ textAlign: "center" }}>No inquiries yet.</p>
          ) : (
            <InquiryList inquiries={inquiries} refresh={fetchInquiries} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
