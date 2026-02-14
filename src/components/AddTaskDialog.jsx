import React from "react";
import TaskForm from "./TaskForm";

const AddTaskDialog = ({ open, handleClose, projectId }) => {
  return <TaskForm open={open} handleClose={handleClose} projectId={projectId} />;
};

export default AddTaskDialog;
