import { useEffect, useState } from "react";
import InquiryForm from "./components/InquiryForm";
import InquiryList from "./components/InquiryList";

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
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Inquiry Management System</h2>

      <InquiryForm refresh={fetchInquiries} />

      <hr />

      {loading ? (
        <p>Loading inquiries...</p>
      ) : inquiries.length === 0 ? (
        <p>No inquiries yet.</p>
      ) : (
        <InquiryList inquiries={inquiries} refresh={fetchInquiries} />
      )}
    </div>
  );
}

export default App;
