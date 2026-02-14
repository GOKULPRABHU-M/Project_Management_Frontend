import { v4 as uuidv4 } from "uuid";

export const mockUsers = [
  { id: uuidv4(), email: "user@example.com", password: "123456", name: "John Doe" },
];

export const mockProjects = [
  { id: uuidv4(), name: "Website Redesign", description: "Redesign company website" },
  { id: uuidv4(), name: "Mobile App", description: "Build mobile app for client" },
];

export const mockTasks = [
  {
    id: uuidv4(),
    projectId: null, // will assign dynamically
    title: "Design homepage",
    status: "pending",
    priority: "high",
    dueDate: "2026-02-20",
    assignedTo: "John Doe",
  },
  {
    id: uuidv4(),
    projectId: null,
    title: "Setup DB schema",
    status: "completed",
    priority: "medium",
    dueDate: "2026-02-15",
    assignedTo: "John Doe",
  },
];
