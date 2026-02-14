import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TaskItem from "./TaskItem";
import { Typography } from "@mui/material";

const TaskList = () => {
  const { tasks } = useContext(AppContext);

  if (!tasks.length) return <Typography>No tasks yet!</Typography>;

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
