import React, { useContext } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { AppContext } from "../context/AppContext";

const ChartDashboard = ({ activeProjectId }) => {
  const { tasks } = useContext(AppContext);

  const projectTasks = tasks.filter(t => t.projectId === activeProjectId);

  const total = projectTasks.length;
  const completed = projectTasks.filter(t => t.status === "completed").length;
  const pending = projectTasks.filter(t => t.status === "pending").length;

  const cards = [
    { label: "Total Tasks", value: total, icon: <ChecklistIcon color="primary" /> },
    { label: "Completed", value: completed, icon: <TaskAltIcon color="success" /> },
    { label: "Pending", value: pending, icon: <PendingActionsIcon color="warning" /> },
  ];

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {cards.map((card) => (
        <Grid item xs={12} md={4} key={card.label}>
          <Card
            sx={{
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 10px 28px rgba(16, 24, 40, 0.08)",
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <Typography variant="body2" color="text.secondary">
                  {card.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {card.value}
                </Typography>
              </div>
              {card.icon}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChartDashboard;
