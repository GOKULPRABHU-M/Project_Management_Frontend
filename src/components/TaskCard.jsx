import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskCard = ({ task, toggleStatus, deleteTask }) => {
  const isCompleted = task.status === "completed" || task.completed === true;

  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: isCompleted ? "success.light" : "divider",
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(16, 24, 40, 0.08)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 14px 34px rgba(16, 24, 40, 0.14)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1.5 }}>
          <Typography
            variant="h6"
            sx={{
              textDecoration: isCompleted ? "line-through" : "none",
              color: isCompleted ? "text.secondary" : "text.primary",
              wordBreak: "break-word",
            }}
          >
            {task.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox checked={isCompleted} onChange={toggleStatus} />
            <IconButton onClick={deleteTask} color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ mt: 1, color: "text.secondary", fontSize: 13 }}>
          <Typography component="span" sx={{ mr: 1.5, fontSize: "inherit" }}>
            Priority: {task.priority || "medium"}
          </Typography>
          <Typography component="span" sx={{ mr: 1.5, fontSize: "inherit" }}>
            Assignee: {task.assignedTo || "Unassigned"}
          </Typography>
          <Typography component="span" sx={{ fontSize: "inherit" }}>
            Due: {task.dueDate || "Not set"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
