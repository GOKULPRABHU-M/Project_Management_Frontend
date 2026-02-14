import { tasks } from "../data/mockData";

export const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasks), 500); // simulate delay
  });
};

export const addTask = (task) => {
  tasks.push(task);
  return Promise.resolve(task);
};

export const updateTask = (updatedTask) => {
  const index = tasks.findIndex((t) => t.id === updatedTask.id);
  if (index !== -1) tasks[index] = updatedTask;
  return Promise.resolve(updatedTask);
};

export const deleteTask = (taskId) => {
  const index = tasks.findIndex((t) => t.id === taskId);
  if (index !== -1) tasks.splice(index, 1);
  return Promise.resolve(taskId);
};
