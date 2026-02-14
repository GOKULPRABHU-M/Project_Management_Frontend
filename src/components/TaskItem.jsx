import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import TaskForm from "./TaskForm";

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useContext(AppContext);
  const [editOpen, setEditOpen] = useState(false);

  const toggleStatus = () => {
    updateTask({ ...task, status: task.status === "pending" ? "completed" : "pending" });
  };

  return (
    <>
      <Card style={{ marginBottom: "10px" }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="h6">{task.title}</Typography>
              <Typography color="textSecondary">Due: {task.dueDate}</Typography>
              <Typography>Status: {task.status}</Typography>
              <Typography>Priority: {task.priority}</Typography>
            </div>
            <Stack direction="column" spacing={1}>
              <Button size="small" variant="outlined" onClick={toggleStatus}>
                {task.status === "pending" ? "Complete" : "Undo"}
              </Button>
              <Button size="small" variant="outlined" color="primary" onClick={() => setEditOpen(true)}>
                Edit
              </Button>
              <Button size="small" variant="outlined" color="secondary" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      {editOpen && <TaskForm open={editOpen} handleClose={() => setEditOpen(false)} editTask={task} />}
    </>
  );
};

export default TaskItem;
