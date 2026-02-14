import React, { createContext, useMemo, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([{ id: 1, name: "Demo Project" }]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      projectId: 1,
      title: "Set up sprint board",
      status: "pending",
      priority: "high",
      assignedTo: "Product Team",
      dueDate: "2026-02-20",
    },
    {
      id: 2,
      projectId: 1,
      title: "Prepare release notes",
      status: "completed",
      priority: "medium",
      assignedTo: "Engineering",
      dueDate: "2026-02-18",
    },
  ]);

  const addProject = (project) => setProjects((prev) => [...prev, project]);
  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? { ...task, ...updatedTask } : task))
    );
  };
  const deleteTask = (taskId) => setTasks((prev) => prev.filter((task) => task.id !== taskId));

  const value = useMemo(
    () => ({
      projects,
      addProject,
      tasks,
      setTasks,
      addTask,
      updateTask,
      deleteTask,
    }),
    [projects, tasks]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
