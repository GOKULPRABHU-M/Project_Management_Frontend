import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ activeProjectId, setActiveProjectId }) => {
  const { projects, addProject } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  const handleAddProject = () => {
    if (newProjectName.trim() === "") return;
    const id = projects.length ? projects[projects.length - 1].id + 1 : 1;
    addProject({ id, name: newProjectName });
    setNewProjectName("");
    setOpen(false);
    setActiveProjectId(id);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: 280 },
        bgcolor: "#0f172a",
        color: "#e2e8f0",
        minHeight: "100vh",
        p: 2.5,
        borderRight: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <MenuIcon sx={{ mr: 1, color: "#7dd3fc" }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Projects
        </Typography>
      </Box>

      <List>
        {projects.map((project) => (
          <ListItemButton
            key={project.id}
            selected={activeProjectId === project.id}
            onClick={() => setActiveProjectId(project.id)}
            sx={{
              bgcolor: activeProjectId === project.id ? "rgba(125, 211, 252, 0.18)" : "transparent",
              mb: 0.5,
              borderRadius: 2,
              "&:hover": { bgcolor: "rgba(125, 211, 252, 0.1)" },
            }}
          >
            <ListItemText primary={project.name} />
          </ListItemButton>
        ))}
      </List>

      <Button
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#e2e8f0",
          color: "#0f172a",
          boxShadow: "none",
          borderRadius: 999,
          textTransform: "none",
          "&:hover": { bgcolor: "#cbd5e1", boxShadow: "none" },
        }}
        onClick={() => setOpen(true)}
      >
        + Add Project
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <TextField
            label="Project Name"
            fullWidth
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddProject}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Sidebar;
