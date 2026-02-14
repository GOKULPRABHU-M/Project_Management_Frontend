import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const priorities = ["low", "medium", "high"];

const TaskForm = ({ open, handleClose, editTask, projectId }) => {
  const { addTask, updateTask } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if(editTask){
      setTitle(editTask.title);
      setPriority(editTask.priority);
      setAssignedTo(editTask.assignedTo);
      setDueDate(editTask.dueDate);
    } else {
      setTitle(""); setPriority("medium"); setAssignedTo(""); setDueDate("");
    }
  }, [editTask]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    const taskData = {
      id: editTask ? editTask.id : uuidv4(),
      projectId: editTask ? editTask.projectId : projectId,
      title: title.trim(),
      priority,
      status: editTask ? editTask.status : "pending",
      assignedTo: assignedTo.trim(),
      dueDate,
    };
    if(editTask) updateTask(taskData);
    else addTask(taskData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{editTask ? "Edit Task" : "Add Task"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <TextField fullWidth label="Priority" margin="normal" select value={priority} onChange={e => setPriority(e.target.value)}>
          {priorities.map(p => <MenuItem key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</MenuItem>)}
        </TextField>
        <TextField fullWidth label="Assign To" margin="normal" value={assignedTo} onChange={e => setAssignedTo(e.target.value)} />
        <TextField fullWidth label="Due Date" margin="normal" type="date" InputLabelProps={{ shrink: true }} value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={!title.trim()}>
          {editTask ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
