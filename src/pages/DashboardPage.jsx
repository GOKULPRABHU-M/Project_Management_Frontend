import React, { useContext, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TaskCard from "../components/TaskCard";
import { AppContext } from "../context/AppContext";
import TaskForm from "../components/TaskForm";
import ChartDashboard from "../components/ChartDashboard";

const DashboardPage = ({ activeProjectId }) => {
  const { tasks, updateTask, deleteTask, projects } = useContext(AppContext);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const activeProject = projects.find((project) => project.id === activeProjectId);

  const projectTasks = tasks.filter((t) => t.projectId === activeProjectId);

  const handleToggleStatus = (task) => {
    updateTask({
      ...task,
      status: task.status === "completed" ? "pending" : "completed",
    });
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2.5 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {activeProject?.name || "Project Dashboard"}
          </Typography>
          <Typography color="text.secondary">
            Track progress, manage priorities, and keep delivery on schedule.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddTaskIcon />}
          onClick={() => setIsTaskDialogOpen(true)}
          sx={{
            borderRadius: 999,
            px: 2.25,
            boxShadow: "none",
            textTransform: "none",
          }}
        >
          Add Task
        </Button>
      </Stack>

      <ChartDashboard activeProjectId={activeProjectId} />

      <Grid container spacing={2}>
        {projectTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskCard
              task={task}
              toggleStatus={() => handleToggleStatus(task)}
              deleteTask={() => deleteTask(task.id)}
            />
          </Grid>
        ))}
      </Grid>

      {!projectTasks.length && (
        <Box
          sx={{
            mt: 2,
            p: 4,
            border: "1px dashed",
            borderColor: "divider",
            borderRadius: 3,
            textAlign: "center",
            color: "text.secondary",
            bgcolor: "rgba(255, 255, 255, 0.65)",
          }}
        >
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            No tasks yet
          </Typography>
          <Typography variant="body2">Add your first task to start tracking project progress.</Typography>
        </Box>
      )}

      <TaskForm
        open={isTaskDialogOpen}
        handleClose={() => setIsTaskDialogOpen(false)}
        projectId={activeProjectId}
      />
    </Box>
  );
};

export default DashboardPage;
