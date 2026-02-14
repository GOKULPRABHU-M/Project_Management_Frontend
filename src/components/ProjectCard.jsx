import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProjectCard = ({ project }) => (
  <Card sx={{ mb: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6">{project.name}</Typography>
      <Typography variant="body2">{project.description}</Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;
