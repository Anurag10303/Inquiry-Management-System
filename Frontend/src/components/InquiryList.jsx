import {
  Box,
  Typography,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";

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
    <Box>
      <Typography variant="h6" gutterBottom>
        Inquiries
      </Typography>

      {inquiries.map((inq) => (
        <Paper
          key={inq._id}
          sx={{
            p: 2,
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography fontWeight={600}>{inq.name}</Typography>
            <Typography variant="body2">{inq.contact}</Typography>
            <Typography variant="body2">
              Source: {inq.source}
            </Typography>
          </Box>

          <Select
            size="small"
            value={inq.status}
            onChange={(e) =>
              updateStatus(inq._id, e.target.value)
            }
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Contacted">Contacted</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
          </Select>
        </Paper>
      ))}
    </Box>
  );
}
