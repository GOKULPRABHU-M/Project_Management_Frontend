import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import { Box, Typography } from "@mui/material";

function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#eef2ff",
        background:
          "radial-gradient(circle at 15% 20%, rgba(125, 211, 252, 0.22), transparent 35%), radial-gradient(circle at 85% 12%, rgba(165, 180, 252, 0.25), transparent 34%), #eef2ff",
      }}
    >
      <Sidebar
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
      />

      <Box sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
        {activeProjectId ? (
          <DashboardPage activeProjectId={activeProjectId} />
        ) : (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#334155",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
              Welcome to Project Manager
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Please select or add a project to get started.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
